const ADMIN_PASSWORD = "chimtodan";
const MODE = "pick"; // can be "rand" or "pick"
const AFK_DEADLINE = 6.5;
const PICK_DEADLINE = 25;
const AFTER_GAME_REST = 2.5;
const MAX_DUPE_MESSAGES = 2;
const RED = 0xFF0000;
const GREEN = 0x00FF00;
const YELLOW = 0xFFEA00;
const TEAM_NAMES = {
  1: "RED",
  2: "BLUE",
};
const COLOR_CODES = [
  [[60, 0xFFCC00], [0xFF4A4A], [0x5ECFFF]],
  [[60, 0xFFCC00], [0xD60419], [0x0099FF]],
  [[0, 0xF7FFF2], [0xE00202, 0xB00101, 0x800000], [0x00F7FF, 0x00D1D1, 0x00A7AD]],
  [[90, 0xF7FFF2], [0xFF2121, 0xFF5757, 0xFC9595], [0x00C3FF, 0x45E0FF, 0xB5F5FC]],
  [[45, 0xFFFFFF], [0xD60000, 0x000000, 0xD60000], [0x0058A3, 0x00000, 0x0058A3]],
  [[-45, 0xFFFFFF], [0xD10000, 0x8C0000, 0xD10000], [0x00DDFF, 0x87E3FF, 0x00DDFF]],
];
const goalComments = {
  "-3": "một bàn thắng danh dự",
  "-2": "liệu sẽ có một cuộc lội ngược dòng xảy ra?",
  "-1": "cách biệt chỉ còn là 1 bàn mong manh",
  "0": "một bàn thắng gỡ hòa vô cùng quan trọng",
  "1": "một cách biệt đã được tạo ra",
  "2": "cách biệt đã được nâng lên 2 bàn",
  "3": "cách biệt đã trở nên quá lớn để hy vọng cho một cuộc lội ngược dòng",
  "4": "một cơn ác mộng",
  "5": "hết cứu thật rồi",
};
const winningGoalComments = [
  "VÀ ĐÓ LÀ BÀN THẮNG QUYẾT ĐỊNH",
  "DẤU CHẤM HẾT CHO NHỮNG NỖ LỰC PHÍA BÊN KIA",
  "ĐỘI BÓNG MẠNH HƠN ĐÃ LÊN TIẾNG",
  "MỘT CHIẾN THẮNG KHUẤT PHỤC",
];
const scorerComments = {
  "1": "Pha lập công do công của",
  "2": "Cú đúp dành cho",
  "3": "Hattrick của",
  "4": "Thật không thể tin được, một cú poker đến từ",
  "5": "Vâng, không ai khác, một cú repoker cho",
};
const playerStats = {
  goals: 0,
  assists: 0,
  ownGoals: 0,
  forTeam: 0,
};
const teamStats = {
  kicks: 0,
  passes: 0,
  possessedKicks: 0,
};
const gameDefault = {
  players: {}, // Store players' stats
  teams: { // Store teams' stats
    1: { ...teamStats }, // RED team's stats
    2: { ...teamStats }, // BLUE team's stats
  },
};

var commands = { // Format: "alias: [function, requiresAdmin, availableModes]"
  help: [helpFunc, false, ["rand", "pick"]],
  discord: [discordFunc, false, ["rand", "pick"]],
  bb: [byeFunc, false, ["rand", "pick"]],
  var: [varFunc, false, ["rand", "pick"]],
  penalty: [penaltyFunc, false, ["rand", "pick"]],
  kickafk: [kickAfkFunc, false, ["rand", "pick"]],
  spec: [specFunc, false, ["rand", "pick"]],
  login: [loginFunc, false, ["rand", "pick"]],
  captains: [listCaptainsFunc, false, ["pick"]],
  pick: [pickFunc, false, ["pick"]],
  sub: [subFunc, false, ["pick"]],
  yellow: [yellowCardFunc, true, ["rand", "pick"]],
  clearbans: [clearBansFunc, true, ["rand", "pick"]],
  assigncap: [assignCaptainFunc, true, ["pick"]],
};
var duplicateMessagesCount = 0;
var isPlaying = false;
var isPicking = false;
var winningStreak = 0;
var prevLoser = 1;
var pickTurn = 0;
var captains = {1: 0, 2: 0};
var lastKicked = [null, null, null]; // Last players who kicked the ball
var lastMessage = [null, null]; // Last message and the player ID of the sender
var lastBallProperties = null;
var yellowCards = [];
var game = JSON.parse(JSON.stringify(gameDefault));
var timeouts = {
  toPick: null,
  toAct: {},
};

var room = HBInit({
  roomName: `[De Paul's auto room] Futsal 5v5 (${MODE})`,
  maxPlayers: 21,
  playerName: "BLV Trông Anh Ngược",
  public: false,
});
room.setScoreLimit(5);
room.setTimeLimit(5);
room.setCustomStadium('{"name":"De Paul Stadium","width":900,"height":404,"spawnDistance":310,"bg":{"type":"grass","width":793,"height":346,"kickOffRadius":95,"cornerRadius":0,"color":"718B5B"},"vertexes":[{"x":-793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":404,"trait":"kickOffBarrier"},{"x":0,"y":95,"trait":"kickOffBarrier"},{"x":0,"y":-95,"trait":"line"},{"x":0,"y":-404,"trait":"kickOffBarrier"},{"x":-821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-793,"y":-271,"trait":"line"},{"x":-572,"y":-50,"trait":"line"},{"x":793,"y":-271,"trait":"line"},{"x":572,"y":-50,"trait":"line"},{"x":-793,"y":271,"trait":"line"},{"x":-572,"y":50,"trait":"line"},{"x":793,"y":271,"trait":"line"},{"x":572,"y":50,"trait":"line"},{"x":793,"y":346,"bCoef":1,"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"trait":"ballArea"},{"x":0,"y":346,"bCoef":0,"trait":"line"},{"x":0,"y":-346,"bCoef":0,"trait":"line"},{"x":0,"y":95,"trait":"kickOffBarrier","_selected":"segment","_data":{"mirror":{}}},{"x":0,"y":-95,"trait":"kickOffBarrier","_selected":"segment","_data":{"mirror":{}}},{"x":802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":6,"v1":13,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":1,"v1":14,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":5,"v1":15,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":12,"v1":14,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-821},{"v0":13,"v1":15,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":585},{"v0":16,"v1":17,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":18,"v1":19,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":20,"v1":21,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":22,"v1":23,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":17,"v1":21,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-600},{"v0":19,"v1":23,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":572},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":0,"v1":24,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":290},{"v0":3,"v1":25,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-290},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":29,"v1":28,"curve":180.43079330521417,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[0,-95],"b":[0,95],"curve":180.43079330521417,"radius":95.00067131878964,"center":[0.3571428571409862,0],"from":-1.574555707580645,"to":1.574555707580645}}},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":32,"v1":33,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":34,"v1":35,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":36,"v1":37,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614}],"goals":[{"p0":[-802,-95],"p1":[-802,95],"team":"red"},{"p0":[802,95],"p1":[802,-95],"team":"blue"}],"discs":[{"radius":5,"pos":[-793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[-793,-95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,-95],"color":"FFFFFF","trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,-346],"b":[900,-346]}}},{"normal":[0,-1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,346],"b":[900,346]}}},{"normal":[0,1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[900,-404]}}},{"normal":[0,-1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,404],"b":[900,404]}}},{"normal":[1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[-900,404]}}},{"normal":[-1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[900,-404],"b":[900,404]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":6.8695,"bCoef":0.21},"ballPhysics":{"radius":7,"color":"FFFF00","bCoef":0.465},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}');
room.setTeamsLock(1);
room.setKickRateLimit(7, 0, 0);
room.startGame();

// Kick player if player has a duplicate tag
function validateTag(player) {
  let tag = getTag(player.name.trim());
  if ( room.getPlayerList().some((_player) => (_player.id != player.id) && (getTag(_player.name) == tag)) ) {
    room.kickPlayer(player.id, "Vui lòng đổi tên");
  };
}

// Get a chat-pingable tag from player's name
function getTag(name) {
  return "@" + name.replace(/ /g, "_");
}

// Get a random element from an array
function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Get value in meters from haxball length unit
function convertToMeters(value) {
  // 37 is the ratio I got by comparing a haxball pitch with a real-life futsal pitch
  return ~~(value / 37);
}

// Get a non-host player by name or tag
function getPlayerByName(value) {
  if ( value.startsWith("@") ) { // Find player by tag
    var player = room.getPlayerList().find((player) => getTag(player.name) == value);
  } else { // Find player by name pattern
    value = value.toLowerCase();
    var player = room.getPlayerList().find((player) => player.name.toLowerCase().includes(value));
  }
  // Exclude host player
  if ( (player !== undefined) && (player.id == 0) ) return undefined;
  return player;
}

// Exclude host player from player list
function getNonHostPlayers() {
  let players = room.getPlayerList();
  players.splice(players.findIndex((player) => player.id == 0), 1);
  return players;
}

function isCaptain(id) {
  return Object.values(captains).includes(id);
}

// Set random colors for 2 teams
function setRandomColors() {
  let colors = randomChoice(COLOR_CODES);
  room.setTeamColors(1, ...colors[0], colors[1]);
  room.setTeamColors(2, ...colors[0], colors[2]);
}

// Set avatars for players of a specific team
function setTeamAvatar(teamId, avatar) {
  room.getPlayerList().forEach((player) => (player.team == teamId) && room.setPlayerAvatar(player.id, avatar));
}

// Clear avatar of all players on the pitch
function clearPlayersAvatar() {
  room.getPlayerList().forEach((player) => (player.team != 0) && room.setPlayerAvatar(player.id, null));
}

function afkCallback(id) {
  // Kick player if player doesn't act in time
  room.kickPlayer(id, "AFK");
  delete timeouts.toAct[id];
}

// Move a player to a team (if needed)
async function updateTeamPlayers(specPlayer) {
  // 2 teams are picking
  if ( isPicking ) return;

  await navigator.locks.request("update_team_players", async lock => {
    let players = room.getPlayerList();
    // Find team that needs new player the most
    let redPlayersCount = players.filter((player) => player.team == 1).length;
    let bluePlayersCount = players.filter((player) => player.team == 2).length;
    if ( (redPlayersCount >= 5) && (bluePlayersCount >= 5) ) return; // Enough players for 2 teams
    let missingTeam = ( redPlayersCount > bluePlayersCount ) ? 2 : 1;

    if ( !specPlayer ) {
      // Get a bench player (like Penaldo)
      specPlayer = players.find((player) => (player.team == 0) && (player.id != 0));
      if ( !specPlayer ) return; // No players left in the Spectators
    }

    await room.setPlayerTeam(specPlayer.id, missingTeam);
    timeouts.toAct[specPlayer.id] = setTimeout(afkCallback.bind(null, specPlayer.id), AFK_DEADLINE * 1000);
    if ( MODE == "pick" ) {
      room.sendAnnouncement(`${specPlayer.name} đã được tự động thay vào đội, dùng !sub để thay người`, captains[missingTeam], YELLOW);
    };
  });
}

// Update information to monitor last kickers, possession and passing accuracy
function updateBallKick(player) {
  // Get properties of the ball
  lastBallProperties = room.getDiscProperties(0);
  // Update information about last players who kicked the ball
  lastKicked.push(player);
  lastKicked.shift();
  // Get the previous kicker
  let prevKicker = lastKicked[1];

  // Update total kicks
  game.teams[player.team].kicks++;
  // Update accurate kicks
  if ( 
    (prevKicker === null) || // Kick-off pass
    (player.team != prevKicker.team) // Received the ball from an opponent player
  ) return;

  // Received the ball from a teammate, so the previous kick was a pass
  if (player.id != prevKicker.id) game.teams[player.team].passes++; 
  // Received the ball from a teammate or from yourself, so the previous kick kept the possession
  game.teams[player.team].possessedKicks++;
}

// Change captain of a specific team
async function updateCaptain(teamId, newCaptain) {
  await navigator.locks.request("update_captain", async lock => {
    // Choose a random captain from the current team
    if ( !newCaptain ) {
      // Exclude former captain and host player
      let players = room.getPlayerList().filter((player) => (player.id != captains[teamId]) && (player.id != 0));
      newCaptain = (
        players.find((player) => player.team == teamId) || // Find someone who is in the team
        players.find((player) => player.team == 0) // If there is no one else, pick someone from the Spectators
      );
      // No player left to assign
      if ( !newCaptain ) {
        // Clear captain slot
        captains[teamId] = 0;
        return;
      };
    }
    let oldCaptainId = captains[teamId];
    captains[teamId] = newCaptain.id;
    if ( newCaptain.team != teamId ) {
      // Move new captain to team
      await room.setPlayerTeam(newCaptain.id, teamId);
      // Move old captain to Spectators
      await room.setPlayerTeam(oldCaptainId, 0);
    };
    room.sendAnnouncement(`${newCaptain.name} đã được chọn làm đội trưởng của ${TEAM_NAMES[teamId]}`, null, GREEN, "bold");
  });
  // Reset pick timeout for the new captain
  if ( isPicking && (pickTurn == teamId) ) {
    clearTimeout(timeouts.toPick);
    requestPick();
  };
}

async function pick(pickedPlayer, teamId) {
  // Pick the player
  await room.setPlayerTeam(pickedPlayer.id, teamId);
  room.sendAnnouncement(`${pickedPlayer.name} đã được chọn vào ${TEAM_NAMES[teamId]}`, null, GREEN);
  requestPick();
}

// Request a pick from the needed team
function requestPick() {
  if ( room.getScores() ) return; // Game started, no pick
  // Find team that needs new player the most
  let players = getNonHostPlayers();
  let specPlayers = players.filter((player) => player.team == 0);
  let redPlayersCount = players.filter((player) => player.team == 1).length;
  let bluePlayersCount = players.filter((player) => player.team == 2).length;
  // Enough players for 2 teams
  if ( (redPlayersCount >= 5) && (bluePlayersCount >= 5) ) {
    room.startGame();
    return;
  };

  pickTurn = ( redPlayersCount > bluePlayersCount ) ? 2 : 1;
  room.sendAnnouncement(`${TEAM_NAMES[pickTurn]} đang chọn người chơi...`, null, YELLOW);
  // Players in Spectators are enough to fit in the missing team
  if ( Math.abs(redPlayersCount - bluePlayersCount) <= specPlayers.length ) {
    // Move all players to the missing team
    for (player of specPlayers) {
      pick(player.id, pickTurn);
    };
    room.startGame();
    return;
  };

  room.sendAnnouncement(`Đã đến lượt bạn, hãy chọn bằng lệnh !pick <tên hoặc tag> trong ${PICK_DEADLINE} giây (VD: !pick @De_Paul hoặc !pick paul)
Mẹo: nếu pick bằng tên, không cần nhập toàn bộ tên, ko cần viết hoa, nếu pick bằng tag, nhập "@" và phím TAB để chọn`, captains[pickTurn], YELLOW, "bold", 2);
  // If captain doesn't pick in time, change captain
  timeouts.toPick = setTimeout(updateCaptain.bind(null, pickTurn), PICK_DEADLINE * 1000);
}

function helpFunc(value, player) {
  let allAlias = Object.keys(commands).filter((command) => (!commands[command][1] || player.admin) && commands[command][2].includes(MODE));
  allAlias = allAlias.map((alias) => "!" + alias)
  room.sendAnnouncement(`Các câu lệnh có sẵn: ${allAlias.join(", ")}`, player.id, GREEN);
  return false;
}

function discordFunc(value, player) {
  room.sendAnnouncement("Vào server Discord của De Paul 🥰: https://discord.gg/DYWZFFsSYu", null, GREEN, "normal", 0);
  return true;
}

function byeFunc(value, player) {
  room.kickPlayer(player.id, "Bye, sớm quay lại room nha 👋🏻🥺");
  return true;
}

function varFunc(value, player) {
  room.sendAnnouncement("Tổ VAR đang bận xem sex, vui lòng gọi lại sau", null, RED, "normal", 0);
  return true;
}

function penaltyFunc(penalty, player) {
  room.sendAnnouncement("Ngã không đẹp, trọng tài quyết định không có penalty", null, RED, "normal", 0);
  return true;
}

function kickAfkFunc(value, player) {
  if ( !isPlaying ) {
    room.sendAnnouncement("Chỉ có thể báo cáo AFK khi trận đấu đang diễn ra", player.id, RED);
    return false;
  };

  // Track every player on the pitch
  room.getPlayerList().forEach(function(_player) {
    if ( _player.team == 0 ) return;
    let id = _player.id;
    if ( timeouts.toAct[id] !== undefined ) return; // Player is already monitored
    timeouts.toAct[id] = setTimeout(afkCallback.bind(null, id), AFK_DEADLINE * 1000);
  });
  room.sendAnnouncement("Đang theo dõi AFK, AFK sẽ sớm bị kick", null, GREEN);
  return true;
}

function specFunc(value, player) {
  if ( player.team == 0 ) {
    room.sendAnnouncement("Bạn đã ở Spectators", player.id, RED);
    return true;
  };

  room.sendAnnouncement("Bạn đã được di chuyển ra Spectators", player.id, GREEN);
  navigator.locks.request("update_captain", async lock => {
    // Replace with another player
    let newPlayer = room.getPlayerList().find((_player) => (_player.team == 0) && (_player.id != 0));
    if ( newPlayer ) {
      await room.setPlayerTeam(newPlayer.id, player.team);
    };
    room.setPlayerTeam(player.id, 0);
  });
  return true;
}

function listCaptainsFunc(value, player) {
  (captains[1] != 0) && room.sendAnnouncement(`Đội trưởng của RED: ${room.getPlayer(captains[1]).name}`, null, GREEN, "normal", 0);
  (captains[2] != 0) && room.sendAnnouncement(`Đội trưởng của BLUE: ${room.getPlayer(captains[2]).name}`, null, GREEN, "normal", 0);
}

function pickFunc(value, player) {
  if ( !isCaptain(player.id) ) {
    room.sendAnnouncement("Bạn không phải đội trưởng", player.id, RED);
    return false;
  } else if ( !value ) {
    room.sendAnnouncement("Vui lòng cung cấp một người chơi hợp lệ (VD: !pick @De_Paul hoặc !pick paul)", player.id, RED);
    return false;
  } else if ( room.getScores() !== null ) {
    room.sendAnnouncement("Lệnh không khả dụng ngay lúc này", player.id, RED);
    return false;
  } else if ( player.team != pickTurn ) {
    room.sendAnnouncement("Chưa đến lượt bạn chọn", player.id, RED);
    return false;
  };

  let pickedPlayer = getPlayerByName(value);
  if ( !pickedPlayer ) {
    room.sendAnnouncement(`Người chơi "${value}" không tồn tại hoặc đã rời đi`, player.id, RED);
    return false;
  } else if ( pickedPlayer.team != 0 ) {
    room.sendAnnouncement("Người chơi không ở Spectators", player.id, RED);
    return false
  };
  clearTimeout(timeouts.toPick);
  pick(pickedPlayer, player.team);
  return false;
}

function subFunc(value, player) {
  if ( !isCaptain(player.id) ) {
    room.sendAnnouncement("Bạn không phải đội trưởng", player.id, RED);
    return false;
  };

  let sub = value.split(" ", 2);
  if ( sub.length != 2 ) {
    room.sendAnnouncement("Đầu vào không hợp lệ, hãy đặt cầu thủ muốn thay vào ở TRƯỚC cầu thủ muốn thay ra (VD: !sub @b @a hoặc !sub b a)", player.id, RED);
    return false;
  };

  let [inPlayer, outPlayer] = sub.map((value) => getPlayerByName(value));
  if ( !inPlayer || !outPlayer ) {
    room.sendAnnouncement("Một trong hai hoặc cả hai cầu thủ không tồn tại hoặc đã rời đi", player.id, RED);
    return false;
  }
  if ( inPlayer.team != 0 ) {
    room.sendAnnouncement("Chỉ có thể thay vào người chơi từ Spectators", player.id, RED);
    return false;
  };
  if ( outPlayer.team != player.team ) {
    room.sendAnnouncement("Không thể thay ra cầu thủ không nằm trong đội bạn", player.id, RED);
    return false;
  };
  room.sendAnnouncement(`🔻 ${outPlayer.name} đã được thay ra ngoài`, null, RED);
  room.sendAnnouncement(`🔺 ${inPlayer.name} đã được thay vào sân`, null, GREEN, "normal", 0);
  room.setPlayerTeam(inPlayer.id, player.team);
  room.setPlayerTeam(outPlayer.id, 0);
  return false;
}

function assignCaptainFunc(value, player) {
  if ( !value ) {
    room.sendAnnouncement("Vui lòng cung cấp tên đội và một người chơi hợp lệ (VD: !assigncap red @De_Paul hoặc !assigncap blue paul)", player.id, RED);
    return false;
  };

  let teamIds = {"red": 1, "blue": 2};
  let [team, name] = value.split(" ", 2);
  if ( teamIds[team] === undefined ) {
    room.sendAnnouncement("Tên đội phải là \"red\" hoặc \"blue\" (VD: !assigncap red paul)", player.id, RED);
    return false;
  };
  let assignedPlayer = getPlayerByName(name);
  if ( !assignedPlayer ) {
    room.sendAnnouncement(`Người chơi "${value}" không tồn tại hoặc đã rời đi`, player.id, RED);
    return false;
  };
  updateCaptain(teamIds[team], assignedPlayer);
  return true;
}

function loginFunc(password, player) {
  switch ( password ) {
    case "":
      room.sendAnnouncement("Vui lòng đính kèm mật khẩu (VD: !login mk)", player.id, RED);
      break;
    case ADMIN_PASSWORD:
      room.setPlayerAdmin(player.id, true);
      room.sendAnnouncement("Đăng nhập thành công", player.id, GREEN);
      break;
    default:
      room.kickPlayer(player.id, "Bạn đã nhập sai mật khẩu, vui lòng thử lại");
  };
  return false;
}

function yellowCardFunc(value, player) {
  if ( !value ) {
    room.sendAnnouncement("Vui lòng cung cấp một người chơi hợp lệ (VD: !yellow @De_Paul hoặc !yellow paul)", player.id, RED);
    return false;
  }

  let targetPlayer = getPlayerByName(value);
  if ( !targetPlayer ) {
    room.sendAnnouncement(`Không thể tìm thấy người chơi "${value}"`, player.id, RED);
    return false;
  };

  let index = yellowCards.indexOf(targetPlayer.auth);
  if ( index != -1 ) { // Player has already received a yellow card
    yellowCards.splice(index, 1); // Clear the card
    room.kickPlayer(targetPlayer.id, "Bạn đã nhận 2 thẻ vàng", true);
    room.sendAnnouncement(`🟨🟨 ${targetPlayer.name} đã nhận thẻ vàng thứ 2 từ ${player.name} (BAN)`, null, YELLOW);
  } else {
    yellowCards.push(targetPlayer.auth);
    room.sendAnnouncement(`🟨 ${targetPlayer.name} đã nhận một thẻ vàng từ ${player.name}, nhận 2 thẻ vàng người chơi sẽ bị ban`, null, YELLOW);
  };
  return false;
}

function clearBansFunc(value, player) {
  room.clearBans();
  room.sendAnnouncement("Đã xóa các lượt ban", null, GREEN);
  return false;
}

function processCommand(player, command) {
  // Get alias and value from command
  let splitIndex = command.indexOf(" ");
  splitIndex = ( splitIndex != -1 ) ? splitIndex : command.length;
  let [alias, value] = [command.slice(0, splitIndex), command.slice(splitIndex + 1).trimRight()];
  let found = commands[alias];
  if ( !found || !found[2].includes(MODE) ) {
    room.sendAnnouncement(`Không thể xác định lệnh !${alias}, dùng !help để xem các lệnh`, player.id, RED);
    return false;
  };

  let [func, requiresAdmin] = found;
  if ( requiresAdmin && !player.admin ) {
    room.sendAnnouncement("Bạn cần phải là Admin để thực hiện lệnh này", player.id, RED);
    return false;
  }
  return func(value, player);
}

function updatePlayerStats(player, type) {
  // If player hasn't had stats yet, initialize an object
  game.players[player.name] || (game.players[player.name] = { ...playerStats });
  game.players[player.name].forTeam = player.team;

  switch ( type ) {
    case 1: // Goal
      game.players[player.name].goals++;
      break;
    case 2: // Assist
      game.players[player.name].assists++;
      break;
    default: // Own goal
      game.players[player.name].ownGoals++;
  };
}

// Update stats about goals, assists and own goals
function updateStats(team) {
  var [preAssister, assister, scorer] = lastKicked;
  // Not an own goal but probably a clearing/goalkeeping effort
  if ( (scorer.team != team) && (Math.abs(lastBallProperties.x) >= 790) && (assister !== null) ) {
    // Correct the credits
    [assister, scorer] = [preAssister, assister];
  };

  if ( scorer.team != team ) { // Own goal
    updatePlayerStats(scorer, 0);
    room.sendChat(`Một bàn phản lưới nhà do sai lầm của ${getTag(scorer.name)}`);
    if ( assister === null ) {
      yellowCardFunc(getTag(scorer.name), room.getPlayer(0));
    };
    return;
  };

  updatePlayerStats(scorer, 1);
  // Counting this shot as a "possessed kick"
  game.teams[scorer.team].possessedKicks++;
  // Design celebrating comment
  let hasScored = game.players[scorer.name].goals;
  let comment = scorerComments[hasScored] || `Thật điên rồ, bàn thắng thứ ${hasScored} trong trận đấu này của`;
  comment = comment.concat(" ", getTag(scorer.name));

  if (
    (assister !== null) &&
    (assister.id != scorer.id) && // Not a solo goal
    (assister.team == team) // Assisted by teammate
  ) {
    updatePlayerStats(assister, 2);
    let hasAssisted = game.players[assister.name].assists;
    if ( hasAssisted != 1 ) { // Multiple assists O_O
      comment = comment.concat(", ", `${getTag(assister.name)} đã có cho mình kiến tạo thứ ${hasAssisted} trong trận đấu`);
    } else {
      comment = comment.concat(", ", `đường kiến tạo từ ${getTag(assister.name)}`);
    };
  };

  room.sendChat(comment);
  // Calculate goal stats
  let speed = convertToMeters(Math.sqrt(lastBallProperties.xspeed ** 2 + lastBallProperties.yspeed ** 2) * 60);
  if ( Math.abs(lastBallProperties.y) <= 95 ) {
    var distance = 793 - Math.abs(lastBallProperties.x);
  } else {
    var distance = Math.sqrt((793 - Math.abs(lastBallProperties.x)) ** 2 + (Math.abs(lastBallProperties.y) - 95) ** 2);
  };
  distance = convertToMeters(distance);
  room.sendAnnouncement(`Khoảng cách: ${distance || "dưới 1"}m | Lực sút: ${speed} (m/s)`, null, GREEN);
}

function reportStats(scores) {
  room.sendAnnouncement(` RED ${scores.red} - ${scores.blue} BLUE`, null, YELLOW, "bold");
  let stats = "";
  // Possession stats
  let totalPossessedKicks = game.teams[1].possessedKicks + game.teams[2].possessedKicks;
  let redPossession = ~~(game.teams[1].possessedKicks / totalPossessedKicks * 100);
  let bluePossession = 100 - redPossession;
  stats = stats.concat(`Kiểm soát bóng: 🔴 ${redPossession}% - ${bluePossession}% 🔵`);
  // Passing stats
  stats = stats.concat("\n", `Lượt chuyền bóng: 🔴 ${game.teams[1].passes} - ${game.teams[2].passes} 🔵`);
  let redSuccessRate = ~~(game.teams[1].possessedKicks / game.teams[1].kicks * 100);
  let blueSuccessRate = ~~(game.teams[2].possessedKicks / game.teams[2].kicks * 100);
  stats = stats.concat("\n", `Tỉ lệ xử lý bóng thành công: 🔴 ${redSuccessRate}% - ${blueSuccessRate}% 🔵`);

  // Player stats information
  let redPlayerStats = [];
  let bluePlayerStats = [];
  for (const [player, stats] of Object.entries(game.players)) {
    let msg = player + " (";
    if ( stats.goals == 1 ) {
      msg = msg.concat("⚽");
    } else if ( stats.goals != 0 ) { // More than 1 goal
      msg = msg.concat(`${stats.goals}⚽`);
    };
    if ( stats.assists == 1 ) {
      msg = msg.concat("👟");
    } else if ( stats.assists != 0 ) { // More than 1 assist
      msg = msg.concat(`${stats.assists}👟`);
    };
    if ( stats.ownGoals == 1 ) {
      msg = msg.concat("🥅");
    } else if ( stats.ownGoals != 0 ) { // More than 1 own goal
      msg = msg.concat(`${stats.ownGoals}🥅`);
    };
    msg = msg.concat(")");

    switch ( stats.forTeam ) {
      case 1:
        redPlayerStats.push(msg);
        break;
      case 2:
        bluePlayerStats.push(msg);
    };
  };
  if ( redPlayerStats.length != 0 ) {
    stats = stats.concat("\n", `RED: ${redPlayerStats.join("  •  ")}`);
  };
  if ( bluePlayerStats.length != 0 ) {
    stats = stats.concat("\n", `BLUE: ${bluePlayerStats.join("  •  ")}`);
  };

  stats = stats.concat("\n", `Chuỗi bất bại: ${winningStreak} trận`);

  room.sendAnnouncement(stats, null, YELLOW, "small-bold", 0);
}

function celebrateGoal(team) {
  // Get ScoresObject
  let scores = room.getScores();
  // Get scores of scored team and opponent
  let teamScores = ( team == 1 ) ? scores.red : scores.blue;
  let opponentScores = ( team == 1 ) ? scores.blue : scores.red;
  let goalDiff = teamScores - opponentScores;
  // Get score line in string
  let scoreline = `${teamScores}-${opponentScores}`;

  var scream = "VÀOOO"; // Goal screamer
  var comment = "một pha dứt điểm xuất sắc";
  // Design a good comment :P
  if ( (scores.timeLimit != 0) && (scores.time > scores.timeLimit) ) { // Overtime goal
    scream = "VÀOOOOOOOO";
    // Pick a random comment
    comment = randomChoice(winningGoalComments);
  } else {
    comment = goalComments[goalDiff] || comment;
  };

  room.sendChat(`${scream} ${scoreline}, ${comment}`);
  setTeamAvatar(team, "⚽");
}

async function checkSpam(player, message) {
  if ( (message != lastMessage[0]) || (player.id != lastMessage[1]) ) { // The message is not spammy
    lastMessage = [message, player.id];
    duplicateMessagesCount = 0;
    return;
  };

  duplicateMessagesCount++;
  if ( duplicateMessagesCount >= MAX_DUPE_MESSAGES ) {
    room.kickPlayer(player.id, "Spam");
  };
}

// Stop all AFK trackers
function clearAfkRecords() {
  for (id of Object.keys(timeouts.toAct)) {
    clearTimeout(timeouts.toAct[id]);
    delete timeouts.toAct[id];
  };
}

function clearAfkRecord(id) {
  if ( !timeouts.toAct[id] ) return;
  clearTimeout(timeouts.toAct[id]);
  delete timeouts.toAct[id];
}

function initiateChat(player) {
  let msg = `Nhập !help để xem các câu lệnh
Discord: https://discord.gg/DYWZFFsSYu`;
  room.sendAnnouncement(msg, player.id, GREEN, "normal", 0);
  room.sendAnnouncement("Thông báo: Clan DPC đang tuyển thành viên, vào Discord của De Paul để xin gia nhập", player.id, YELLOW, "normal", 0);
}

async function randPlayers() {
  if ( room.getScores() !== null ) return;
  let prevWinner = ( prevLoser == 1 ) ? 2 : 1;
  // Get player list and suffle it
  let idList = getNonHostPlayers().sort(function(player1, player2) {
    // Sort players of the winning team to be on top of the list so they will be picked up in the same team  
    if ( player1.team == prevWinner ) return -1;
    if ( player2.team == prevWinner ) return 1;
    // Give priority to players from the Spectators
    return (player2.team == 0) ? 1 : -1;
  }).map((player) => player.id);
  // Max number of players for each team
  let maxIndex = Math.min(idList.length, 10);
  let winnerMaxIndex = ~~(maxIndex / 2);
  // Move players to teams and Spectators correctly
  idList.forEach(function(id, index) {
    if ( index < winnerMaxIndex ) {
      room.setPlayerTeam(id, prevWinner);
    } else if ( index < maxIndex ) {
      room.setPlayerTeam(id, prevLoser);
    } else {
      room.setPlayerTeam(id, 0);
    };
  });
  room.startGame();
}

async function pickPlayers() {
  if ( room.getScores() !== null ) return;
  isPicking = true;
  pickTurn = 0;
  // Move players to Spectators
  let players = room.getPlayerList();
  for (let player of players) {
    if ( (player.team != prevLoser) || isCaptain(player.id) ) continue;
    await room.setPlayerTeam(player.id, 0);
  };

  room.sendAnnouncement("Đội trưởng 2 đội đang bắt đầu pick...", null, YELLOW);
  requestPick();
}

function reset() {
  game = JSON.parse(JSON.stringify(gameDefault));
}

room.onPlayerJoin = async function(player) {
  validateTag(player);
  initiateChat(player);
  await updateTeamPlayers(player);
  if (MODE == "pick") {
    // Assign captains if missing
    switch ( 0 ) {
      case captains[1]:
        updateCaptain(1, player);
        break;
      case captains[2]:
        updateCaptain(2, player);
    }
  }
}

room.onPlayerLeave = async function(player) {
  if ( player.team != 0 ) {
    await updateTeamPlayers();
    // A captain left, assign another one
    if ( MODE == "pick" && isCaptain(player.id) ) {
      await updateCaptain(player.team);
    };
  };

  // There are no players left in Spectators
  if ( (MODE == "pick") && !room.getPlayerList().some((player) => (player.team == 0) && (player.id != 0)) ) {
    room.startGame();
  };
}

room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
  if ( changedPlayer.id == 0 ) { // Move host player back to Spectators
    room.setPlayerTeam(0, 0);
  } else if ( changedPlayer.team == 0 ) {
    // Remove player from AFK tracklist
    clearAfkRecord(changedPlayer.id);
    if ( MODE == "pick" ) {
      // Captain was moved to Spectators, assign captain
      switch ( changedPlayer.id ) {
        case captains[1]:
          updateCaptain(1);
          break;
        case captains[2]:
          updateCaptain(2);
      };
    };
  };
}

room.onPlayerBallKick = function(player) {
  updateBallKick(player);
}

room.onTeamGoal = function(team) {
  celebrateGoal(team);
  updateStats(team);
}

room.onPositionsReset = function() {
  lastBallProperties = null;
  lastKicked = [null, null, null];
  clearPlayersAvatar();
}

room.onPlayerChat = function(player, message) {
  // Disallow unpicked player from messaging when 2 teams are picking
  if ( isPicking && (player.team == 0) && !player.admin && !message.startsWith("!login ") ) {
    room.sendAnnouncement("Bạn chưa thể chat vào lúc này", player.id, RED);
    return false;
  }
  if ( player.id != 0 ) {
     checkSpam(player, message);
  };
  if ( message.startsWith("!") ) { // Indicating a command
    return processCommand(player, message.slice(1));
  }
  return true;
}

room.onPlayerActivity = function(player) {
  clearAfkRecord(player.id);
}

room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {
  // Log this for admin to monitor kicking activity
  action = ban ? "banned" : "kicked";
  console.log(`${kickedPlayer.name} was ${action} by ${byPlayer.name} (reason: ${reason})`);
}

room.onTeamVictory = function(scores) {
  let loser = (scores.red > scores.blue) ? 2 : 1;
  if ( loser == prevLoser ) {
    winningStreak++;
  } else {
    winningStreak = 1;
    prevLoser = loser;
  }

  reportStats(scores);
}

room.onGameStart = function(byPlayer) {
  isPlaying = true;
  isPicking = false;
  reset();
  // Stop forcing captain to pick
  clearTimeout(timeouts.toPick);
  clearPlayersAvatar();
  setRandomColors();
  room.sendChat("Vậy là trận đấu đã chính thức được bắt đầu");
}

room.onGameStop = async function(byPlayer) {
  isPlaying = false;
  clearAfkRecords(); // Stop monitoring AFK when the game is stopped
  (byPlayer !== null) && room.sendChat("Trận đấu đã bị hủy bỏ vì thời tiết xấu");
  await new Promise(r => setTimeout(r, AFTER_GAME_REST * 1000)); // Have a little rest
  if ( MODE == "rand" ) {
    randPlayers();
  } else {
    pickPlayers();
  };
}

room.onGamePause = function(byPlayer) {
  isPlaying = false;
  clearAfkRecords(); // Stop monitoring AFK when the game is paused
  room.sendChat("Trận đấu đang được tạm dừng để check VAR");
}

room.onGameUnpause = function(byPlayer) {
  isPlaying = true;
  room.sendChat("Trọng tài đã check VAR và trận đấu được TIẾP TỤC");
}
