const ADMIN_PASSWORD = "vapcohoipen";
const MODE = "pick"; // can be "rand" or "pick"
const AFK_DEADLINE = 6.5;
const PICK_DEADLINE = 12;
const AFTER_GAME_REST = 2;
const MAX_DUPE_MESSAGES = 2;
const YELLOW = 0xFFEA00;
const RED = 0xFF0000;
const GREEN = 0x00FF00;

const teamNames = {
  1: "RED",
  2: "BLUE",
};
const goalComments = {
  "-4": "liệu còn chút hy vọng nào không",
  "-3": "tỉ số đã được rút ngắn",
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
  lastKicked: [null, null], // 2 last players who kicked the ball
  players: {}, // Store players' stats
  teams: { // Store teams' stats
    1: { ...teamStats }, // RED team's stats
    2: { ...teamStats }, // BLUE team's stats
  },
};

var commands = { // Format: "alias: [function, requiresAdmin]"
  help: [helpFunc, false],
  discord: [discordFunc, false],
  bb: [byeFunc, false],
  var: [varFunc, false],
  penalty: [penaltyFunc, false],
  kickafk: [kickAfkFunc, false],
  spec: [specFunc, false],
  login: [loginFunc, false],
  yellow: [yellowCardFunc, true],
  clearbans: [clearBansFunc, true],
};
var pickCommands = {
  captains: [listCaptains, false],
  pick: [pickFunc, false],
  sub: [subFunc, false],
  autopick: [autoPickFunc, false],
};
var duplicateMessagesCount = 0;
var isPlaying = false;
var pickTurn = 0;
var captains = {1: 0, 2: 0};
var autoPickConfig = {1: false, 2: false};
var lastMessage = [null, null]; // Last message and the player ID of the sender
var yellowCards = [];
var game = JSON.parse(JSON.stringify(gameDefault));
var timeouts = {
  toPick: null,
  toAct: [],
};
var room = HBInit({
  roomName: `[Auto room của De Paul] Futsal 5v5 (${MODE}) 💥`,
  maxPlayers: 18,
  playerName: "BLV Giàng A Phò",
  public: false,
});
room.setScoreLimit(6);
room.setTimeLimit(5);
room.setTeamColors(1, 60, 0xFFFFFF, [0xD60419]);
room.setTeamColors(2, 60, 0xFFFFFF, [0x0099FF]);
room.setCustomStadium('{"name":"HaxViet Premier League from HaxMaps","width":900,"height":404,"spawnDistance":310,"bg":{"type":"grass","width":793,"height":346,"kickOffRadius":95,"cornerRadius":0,"color":"718B5B"},"vertexes":[{"x":-793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":404,"trait":"kickOffBarrier"},{"x":0,"y":95,"trait":"kickOffBarrier"},{"x":0,"y":-95,"trait":"line"},{"x":0,"y":-404,"trait":"kickOffBarrier"},{"x":-821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-793,"y":-271,"trait":"line"},{"x":-572,"y":-50,"trait":"line"},{"x":793,"y":-271,"trait":"line"},{"x":572,"y":-50,"trait":"line"},{"x":-793,"y":271,"trait":"line"},{"x":-572,"y":50,"trait":"line"},{"x":793,"y":271,"trait":"line"},{"x":572,"y":50,"trait":"line"},{"x":793,"y":346,"bCoef":1,"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"trait":"ballArea"},{"x":0,"y":346,"bCoef":0,"trait":"line"},{"x":0,"y":-346,"bCoef":0,"trait":"line"},{"x":0,"y":95,"trait":"kickOffBarrier","_picked":"segment","_data":{"mirror":{}}},{"x":0,"y":-95,"trait":"kickOffBarrier","_picked":"segment","_data":{"mirror":{}}},{"x":802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":6,"v1":13,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":1,"v1":14,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":5,"v1":15,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":12,"v1":14,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-821},{"v0":13,"v1":15,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":585},{"v0":16,"v1":17,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":18,"v1":19,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":20,"v1":21,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":22,"v1":23,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":17,"v1":21,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-600},{"v0":19,"v1":23,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":572},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":0,"v1":24,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":290},{"v0":3,"v1":25,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-290},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":29,"v1":28,"curve":180.43079330521417,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","_picked":true,"_data":{"mirror":{},"arc":{"a":[0,-95],"b":[0,95],"curve":180.43079330521417,"radius":95.00067131878964,"center":[0.3571428571409862,0],"from":-1.574555707580645,"to":1.574555707580645}}},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":32,"v1":33,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":34,"v1":35,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":36,"v1":37,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614}],"goals":[{"p0":[-802,-95],"p1":[-802,95],"team":"red"},{"p0":[802,95],"p1":[802,-95],"team":"blue"}],"discs":[{"radius":5,"pos":[-793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[-793,-95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,-95],"color":"FFFFFF","trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,-346],"b":[900,-346]}}},{"normal":[0,-1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,346],"b":[900,346]}}},{"normal":[0,1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[900,-404]}}},{"normal":[0,-1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,404],"b":[900,404]}}},{"normal":[1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[-900,404]}}},{"normal":[-1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[900,-404],"b":[900,404]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":7},"ballPhysics":{"radius":7,"color":"EAFF00"},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}',);
room.startGame();

if ( MODE == "pick" ) {
  commands = {...commands, ...pickCommands};
};

// Get a chat-pingable tag from player's name
function getTag(name) {
  return "@" + name.replace(/ /g, "_");
}

// Get a random index from the array length
function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Get a non-host player by ID or name
function getPlayer(value) {
  let player = undefined;
  if ( id.startsWith("#") ) { // Find player by player ID
    player = room.getPlayer(value.slice(1));
  } else { // Find player by name
    player = room.getPlayerList().find((player) => player.name == value);
  };

  // Exclude host player
  if (player.id == 0 ) return undefined;
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

// Find the team that needs new players the most
function getMissingTeam() {
  // Count players from 2 teams
  let redPlayersCount = 0;
  let bluePlayersCount = 0;
  room.getPlayerList().forEach(function(player) {
    switch ( player.team ) {
      case 1:
        redPlayersCount++;
        break;
      case 2:
        bluePlayersCount++;
    };
  });

  // There are enough players
  if ( (redPlayersCount >= 5) && (bluePlayersCount >= 5) ) return 0;
  return ( redPlayersCount > bluePlayersCount ) ? 2 : 1;
}

// Move a player to a team (if needed)
async function updateTeamPlayers(specPlayer) {
  // 2 teams are picking
  if ( (MODE == "pick") && (room.getScores() === null) ) return;

  await navigator.locks.request("update_team_players", async lock => {
    if ( !specPlayer ) {
      // Get a bench player (like Penaldo)
      specPlayer = room.getPlayerList().find((player) => (player.team == 0) && (player.id != 0));
      if ( !specPlayer ) return; // No players left in the Spectators
    }
    // Find team that needs new player the most
    let missingTeam = getMissingTeam();
    if ( missingTeam == 0 ) return;

    await room.setPlayerTeam(specPlayer.id, missingTeam);
  });
  if ( MODE == "pick" ) {
    room.sendAnnouncement(`${specPlayer.name} đã được tự động thay vào đội, dùng !sub để thay người`, captains[missingTeam], YELLOW);
  };
}

// Update information to monitor last kickers, possession and passing accuracy
function updateBallKick(player) {
  // Update information about 2 last players who kicked the ball
  game.lastKicked.push(player);
  game.lastKicked.shift();
  // Get the previous kicker
  let previousKicker = game.lastKicked[0];

  // Update total kicks
  game.teams[player.team].kicks++;
  // Update accurate kicks
  if ( 
    (previousKicker === null) || // Kick-off pass
    (player.team != previousKicker.team) // Received the ball from an opponent player
  ) return;

  // Received the ball from a teammate, so the previous kick was a pass
  if (player.id != previousKicker.id) game.teams[player.team].passes++; 
  // Received the ball from a teammate or from yourself, so the previous kick kept the possession
  game.teams[player.team].possessedKicks++;
}

// Change captain of a specific team
async function updateCaptain(teamId) {
  await navigator.locks.request("update_captain", async lock => {
    if ( captains[teamId] ) {
      // Move old captain back to Spectators (if still in the room)
      room.setPlayerTeam(captains[teamId], 0);
      // Clear captain slot
      captains[teamId] = 0;
    };
    let players = getNonHostPlayers();
    // Prefer someone who has already been picked to avoid newbie
    let newCaptain = players.find((player) => player.team == teamId);
    // Choose a captain from Spectators, as plan B
    if ( !newCaptain ) {
      newCaptain = players.find((player) => player.team == 0);
      if ( !newCaptain ) return;
      // Move new captain to team
      await room.setPlayerTeam(newCaptain.id, teamId);
    };
    captains[teamId] = newCaptain.id;
  };
  // Reset auto-pick setting
  autoPickConfig[teamId] = false;
  room.sendChat(`${getTag(newCaptain.name)} đã được chọn làm đội trưởng của ${teamNames[teamId]}`);
}

async function pick(pickedPlayer, teamId) {
  // Pick the player
  await room.setPlayerTeam(pickedPlayer.id, teamId);
  room.sendAnnouncement(`${pickedPlayer.name} đã được chọn vào ${teamNames[teamId]}`, null, GREEN);
  requestPick();
}

// Request a pick from the needed team
function requestPick() {
  pickTurn = getMissingTeam();
  // Enough players
  if ( pickTurn == 0 ) {
    room.startGame();
    return;
  };
  let players = getNonHostPlayers();
  // Pick player from Spectators
  let randomPlayer = players.find((player) => player.team == 0);
  // There is no player left to pick
  if ( !randomPlayer ) {
    room.startGame();
    return;
  };

  if (
    autoPickConfig[pickTurn] || // Auto-pick mode enabled
    !players.some((player) => (player.team == 0) && (player.id != randomPlayer.id)) // Last player in the Spectators
  ) {
    pick(randomPlayer, pickTurn);
    return;
  };

  room.sendAnnouncement(`Vui lòng pick bằng lệnh !pick trong vòng ${PICK_DEADLINE} giây, hoặc dùng !autopick`, captains[pickTurn], YELLOW, "bold", 2);
  // If captain doesn't pick in time, change captain
  timeouts.toPick = setTimeout(function() {
    updateCaptain(pickTurn);
    requestPick();
  }, PICK_DEADLINE * 1000);
}

function helpFunc(value, player) {
  let allAlias = Object.keys(commands).filter((command) => !commands[command][1] || player.admin);
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

  room.getPlayerList().filter((_player) => _player.team != 0).forEach(function(_player) {
    if ( timeouts.toAct[_player.id] !== undefined ) return; // Player is already monitored
    // Kick player if player doesn't act in time
    timeouts.toAct[_player.id] = setTimeout(function() {
      room.kickPlayer(_player.id, "AFK");
    }, AFK_DEADLINE * 1000);
  });
  room.sendAnnouncement("Đang theo dõi AFK, AFK sẽ sớm bị kick", null, GREEN);
  return true;
}

function specFunc(value, player) {
  if ( player.team == 0 ) {
    room.sendAnnouncement("Bạn đã ở Spectators", player.id, RED);
    return true;
  };

  room.setPlayerTeam(player.id, 0);
  room.sendAnnouncement("Bạn đã được di chuyển ra Spectators", player.id, GREEN);
  // Replace with another player
  let newPlayer = room.getPlayerList().find((_player) => (_player.team == 0) && !_player.admin);
  if ( !newPlayer ) return;
  room.setPlayerTeam(newPlayer.id, player.team);
  return true;
}

function listCaptains(value, player) {
  (captains[1] != 0) && room.sendAnnouncement(`Đội trưởng của RED: ${room.getPlayer(captains[1]).name}`, null, GREEN, "normal", 0);
  (captains[2] != 0) && room.sendAnnouncement(`Đội trưởng của BLUE: ${room.getPlayer(captains[2]).name}`, null, GREEN, "normal", 0);
}

function pickFunc(value, player) {
  if ( !isCaptain(player.id) ) {
    room.sendAnnouncement("Bạn không phải đội trưởng", player.id, RED);
    return false;
  } else if ( !value ) {
    room.sendAnnouncement("Vui lòng cung cấp một người chơi hợp lệ (VD: !pick #9 hoặc !pick depaul)", player.id, RED);
    return false;
  } else if ( room.getScores() !== null ) {
    room.sendAnnouncement("Lệnh không khả dụng ngay lúc này", player.id, RED);
    return false;
  } else if ( pickTurn != player.team ) {
    room.sendAnnouncement("Chưa đến lượt bạn chọn", player.id, RED);
    return false;
  };

  let pickedPlayer = getPlayer(value);
  if ( !pickedPlayer ) {
    room.sendAnnouncement("Người chơi không tồn tại hoặc đã rời đi", player.id, RED);
    return false;
  } else if ( pickedPlayer.team != 0 ) {
    room.sendAnnouncement("Người chơi không ở Spectators", player.id, RED);
    return false
  };
  // Stop changing captain if current captain is responsive
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
  if ( sub.includes(undefined) || sub.some((id) => !id.startsWith("#")) ) {
    room.sendAnnouncement("Đầu vào hợp lệ, hãy đặt ID cầu thủ muốn thay vào TRƯỚC cầu thủ muốn thay ra (VD: !sub #9 #8)", player.id, RED);
    return false;
  };

  let [inPlayer, outPlayer] = sub.map((id) => room.getPlayer(id.slice(1)));
  if ( inPlayer.team != 0 ) {
    room.sendAnnouncement("Chỉ có thể thay vào người chơi từ Spectators", player.id, RED);
    return false;
  };
  if ( outPlayer.team != player.team ) {
    room.sendAnnouncement("Không thể thay ra cầu thủ không nằm trong đội bạn", player.id, RED);
    return false;
  };
  room.setPlayerTeam(sub[1], 0);
  room.setPlayerTeam(sub[0], player.team);
  room.sendAnnouncement(`🔻 ${outPlayer.name} đã được thay ra ngoài`, null, RED);
  room.sendAnnouncement(`🔺 ${inPlayer.name} đã được thay vào sân`, null, GREEN, "normal", 0);
  return false;
}

function autoPickFunc(value, player) {
  if ( !isCaptain(player.id) ) {
    room.sendAnnouncement("Bạn không phải đội trưởng", player.id, RED);
    return false;
  };

  autoPickConfig[player.team] = !autoPickConfig[player.team];
  if ( autoPickConfig[player.team] ) {
    room.sendAnnouncement(`Đã bật chọn người chơi tự động cho ${teamNames[player.team]}, dùng !autopick lần nữa để tắt`, player.id, GREEN);
  } else {
    room.sendAnnouncement(`Đã tắt chế độ chọn người chơi tự động cho ${teamNames[player.team]}`, player.id, GREEN);
  };
  // It's captain turn to pick
  if ( (room.getScores() === null) && (pickTurn == player.team) ) {
    let playerToPick = room.getPlayerList().find((_player) => (_player.team == 0) && (_player.id != 0));
    pick(playerToPick, player.team);
  };

  return false;
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
    room.sendAnnouncement("Vui lòng cung cấp một người chơi hợp lệ (VD: !yellow #9 hoặc !yellow depaul)", player.id, RED);
    return false;
  }

  let targetPlayer = getPlayer(value);
  if ( !targetPlayer ) {
    room.sendAnnouncement("Không thể tìm thấy người chơi", player.id, RED);
    return false;
  };

  let index = yellowCards.indexOf(targetPlayer.conn);
  if ( index != -1 ) { // Player has already received a yellow card
    yellowCards.splice(index, 1); // Clear the card
    room.kickPlayer(targetPlayer.id, "Bạn đã nhận 2 thẻ vàng", true);
    room.sendAnnouncement(`🟨🟨 ${targetPlayer.name} đã nhận thẻ vàng thứ 2 từ ${player.name} (BAN)`, null, YELLOW);
  } else {
    yellowCards.push(targetPlayer.conn);
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
  let [alias, value] = [command.slice(0, splitIndex), command.slice(splitIndex + 1)];
  let found = commands[alias];
  if ( !found ) {
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

function processMessage(player, message) {
  if ( message.startsWith("!") ) { // Indicating a command
    return processCommand(player, message.slice(1));
  }
  return true;
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
  let [assister, scorer] = game.lastKicked;
  if ( scorer.team != team ) { // Own goal
    updatePlayerStats(scorer, 0);
    room.sendChat(`Một bàn phản lưới nhà do sai lầm của ${getTag(scorer.name)}`);
    if ( assister === null ) {
      yellowCardFunc("#" + scorer.id, room.getPlayer(0));
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
}

function reportStats(scores) {
  room.sendAnnouncement(` RED ${scores.red} - ${scores.blue} BLUE`, null, YELLOW, "bold");
  // Possession stats
  let totalPossessedKicks = game.teams[1].possessedKicks + game.teams[2].possessedKicks;
  let redPossession = ~~(game.teams[1].possessedKicks / totalPossessedKicks * 100);
  let bluePossession = 100 - redPossession;
  room.sendAnnouncement(`Kiểm soát bóng: 🔴 ${redPossession}% - ${bluePossession}% 🔵`, null, YELLOW, "small-bold", 0);
  // Passing stats
  room.sendAnnouncement(`Lượt chuyền bóng: 🔴 ${game.teams[1].passes} - ${game.teams[2].passes} 🔵`, null, YELLOW, "small-bold", 0);
  let redSuccessRate = ~~(game.teams[1].possessedKicks / game.teams[1].kicks * 100);
  let blueSuccessRate = ~~(game.teams[2].possessedKicks / game.teams[2].kicks * 100);
  room.sendAnnouncement(`Tỉ lệ xử lý bóng thành công: 🔴 ${redSuccessRate}% - ${blueSuccessRate}% 🔵`, null, YELLOW, "small-bold", 0);
  // Player stats information
  let redPlayerStats = [];
  let bluePlayerStats = [];
  for (const [player, stats] of Object.entries(game.players)) {
    let msg = ( stats.forTeam == 1 ) ? redPlayerStats : bluePlayerStats;
    (msg.length != 0) && msg.push(" • ");
    msg.push(player);

    if ( stats.goals == 1 ) {
      msg.push("(⚽)");
    } else if ( stats.goals != 0 ) { // More than 1 goal
      msg.push(`(${stats.goals}⚽)`);
    };
    if ( stats.assists == 1 ) {
      msg.push("(👟)");
    } else if ( stats.assists != 0 ) { // More than 1 assist
      msg.push(`(${stats.assists}👟)`);
    };
    if ( stats.ownGoals == 1 ) {
      msg.push("(🥅)");
    } else if ( stats.ownGoals != 0 ) { // More than 1 own goal
      msg.push(`(${stats.ownGoals}🥅)`);
    };
  };

  if ( redPlayerStats.length != 0 ) {
    room.sendAnnouncement(`RED: ${redPlayerStats.join(" ")}`, null, YELLOW, "small-bold", 0);
  };
  if ( bluePlayerStats.length != 0 ) {
    room.sendAnnouncement(`BLUE: ${bluePlayerStats.join(" ")}`, null, YELLOW, "small-bold", 0);
  };
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

function clearAfkRecord(player) {
  if ( !timeouts.toAct[player.id] ) return;
  clearTimeout(timeouts.toAct[player.id]);
  delete timeouts.toAct[player.id];
}

function welcomePlayer(player) {
  room.sendAnnouncement("Nhập !help để xem các câu lệnh", player.id, GREEN, "normal", 0);
  room.sendAnnouncement("Discord: https://discord.gg/DYWZFFsSYu", player.id, GREEN, "normal", 0);
  room.sendChat(`Chào mừng ${getTag(player.name)} đến với băng ghế dự bị cùng Cristiano Ronaldo`, player.id);
}

async function randPlayers() {
  if ( room.getScores() !== null ) return;
  // Get player list and suffle it
  let idList = getNonHostPlayers().map((player) => player.id).sort(() => 0.5 - Math.random());
  // Max number of players for each team
  let blueMaxIndex = Math.min(idList.length, 10);
  let redMaxIndex = ~~(blueMaxIndex / 2);
  // Move players to teams and Spectators correctly
  idList.forEach(function(id, index) {
    if ( index < redMaxIndex ) {
      room.setPlayerTeam(id, 1);
    } else if ( index < blueMaxIndex ) {
      room.setPlayerTeam(id, 2);
    } else {
      room.setPlayerTeam(id, 0);
    };
  });
  room.startGame();
}

async function pickPlayers() {
  // Move players who aren't captains to Spectators
  let players = room.getPlayerList()
  for (let player of players) {
    if ((player.team == 0) || isCaptain(player.id) ) continue;
    await room.setPlayerTeam(player.id, 0);
  };

  room.sendAnnouncement("Đội trưởng 2 đội đang bắt đầu pick...", null, YELLOW);
  requestPick();
}

function reset() {
  game = JSON.parse(JSON.stringify(gameDefault));
}

room.onPlayerJoin = async function(player) {
  welcomePlayer(player);
  await updateTeamPlayers(player);
  if (MODE == "pick") {
    // Assign captains if missing
    switch ( 0 ) {
      case captains[1]:
        updateCaptain(1);
        break;
      case captains[2]:
        updateCaptain(2);
    }
  }
}

room.onPlayerLeave = async function(player) {
  if ( player.team != 0 ) {
    await updateTeamPlayers();
  };

  if ( (MODE == "pick") ) {
    // There are no players left in Spectators
    !room.getPlayerList().some((player) => (player.team == 0) && (player.id != 0)) && room.startGame();
    // Captain left, assign another one
    isCaptain(player.id) && updateCaptain(player.team);
  };
}

room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
  if ( (changedPlayer.id == byPlayer.id) && !byPlayer.admin ) { // Disallow players from moving themself
    room.setPlayerTeam(changedPlayer.id, 0);
  } else if ( changedPlayer.id == 0 ) { // Move host player back to Spectators
    room.setPlayerTeam(0, 0);
  } else if ( changedPlayer.team == 0 ) {
    // Remove player from AFK tracklist
    clearAfkRecord(changedPlayer.id);
    // Captain moved to Spectators, let's update captain
    if ( (MODE == "pick") && isCaptain(changedPlayer.id) ) {
      let team = (captains[1] == changedPlayer.id) ? 1 : 2;
      updateCaptain(team);
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
  game.lastKicked = [null, null];
}

room.onPlayerChat = function(player, message) {
  if ( player.id != 0 ) {
     checkSpam(player, message);
  };
  return processMessage(player, message);
}

room.onPlayerActivity = function(player) {
  clearAfkRecord(player);
}

room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {
  // Log this for admin to monitor kicking activity
  action = ban ? "banned" : "kicked";
  console.log(`${kickedPlayer.name} was ${action} by ${byPlayer.name} (reason: ${reason})`);
}

room.onTeamVictory = function(scores) {
  reportStats(scores);
}

room.onGameStart = function(byPlayer) {
  isPlaying = true;
  reset();
  // Stop forcing captain to pick
  clearTimeout(timeouts.toPick);
  room.sendChat("Vậy là trận đấu đã chính thức được bắt đầu");
}

room.onGameStop = async function(byPlayer) {
  isPlaying = false;
  timeouts.toAct = {}; // Stop monitoring AFK when the game is stopped
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
  timeouts.toAct = {}; // Stop monitoring AFK when the game is paused
  room.sendChat("Trận đấu đang được tạm dừng để check VAR");
}

room.onGameUnpause = function(byPlayer) {
  isPlaying = true;
  room.sendChat("Trọng tài đã check VAR và trận đấu được TIẾP TỤC");
}
