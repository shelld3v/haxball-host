const ADMIN_PASSWORD = "nyc";
const STADIUM = "De Paul";
const START_GAME_COMMENT = `Chào mừng đến với SVĐ ${STADIUM}, tôi là Trông Anh Ngược, BLV của các bạn ngày hôm nay`;
const STATS_COLOR = 0x990099;
const GREEN = 0x00FF00;
const RED = 0xFF0000;
const RED_TEAM_COLORS = [0xD60419];
const BLUE_TEAM_COLORS = [0x0099FF];
const RED_TEAM_ANGLE = 60;
const BLUE_TEAM_ANGLE = 60;

const replies = {
  "tin chuẩn chưa a": "Chuẩn em nhé",
  "ai hỏi": "Tao hỏi",
  "óc": "Toxic nên anh sẽ block em nhé",
  "memaybeo": "Mẹ tao béo, nhưng ít nhất tao có mẹ",
  "rùa": "Một fan MU cho hay...",
  "gánh ": "Gánh thì cũng ghê đó, nhưng mày có người yêu không? 😏",
};
const comments = {
  "-4": "liệu còn hy vọng nào không",
  "-3": "tỉ số đã được rút ngắn",
  "-2": "liệu sẽ có một cuộc lội ngược dòng xảy ra?",
  "-1": "cách biệt chỉ còn là 1 bàn mong manh",
  "0": "một bàn thắng gỡ hòa vô cùng quan trọng",
  "1": "một cách biệt đã được tạo ra",
  "2": "cách biệt đã được nâng lên 2 bàn",
  "3": "chuyện quái gì đang xảy ra vậy?",
  "4": `ác mộng tại SVĐ ${STADIUM}`,
  "5": "hết cứu rồi, hết cứu thật rồi",
};
const teamStats = {
  accuratePasses: 0,
  wallKicks: 0,
  kicks: 0,
  scorers: [],
};
const gameDefault = {
  lastKicked: null,
  preLastKicked: null,
  red: JSON.parse(JSON.stringify(teamStats)),
  blue: JSON.parse(JSON.stringify(teamStats)),
};

var game = JSON.parse(JSON.stringify(gameDefault));
var config = {
  wait: false,
  autoPickDisabled: false,
}
var room = HBInit({
  roomName: "Phòng tự động của De Paul",
  maxPlayers: 30,
  playerName: "BLV Trông Anh Ngược",
  public: false,
});
room.setScoreLimit(0);
room.setTimeLimit(5);
room.setTeamColors(1, RED_TEAM_ANGLE, 0xFFFFFF, RED_TEAM_COLORS);
room.setTeamColors(2, BLUE_TEAM_ANGLE, 0xFFFFFF, BLUE_TEAM_COLORS);
room.setCustomStadium('{"name":"HaxViet Premier League from HaxMaps","width":900,"height":404,"spawnDistance":310,"bg":{"type":"grass","width":793,"height":346,"kickOffRadius":95,"cornerRadius":0,"color":"718B5B"},"vertexes":[{"x":-793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":404,"trait":"kickOffBarrier"},{"x":0,"y":95,"trait":"kickOffBarrier"},{"x":0,"y":-95,"trait":"line"},{"x":0,"y":-404,"trait":"kickOffBarrier"},{"x":-821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-793,"y":-271,"trait":"line"},{"x":-572,"y":-50,"trait":"line"},{"x":793,"y":-271,"trait":"line"},{"x":572,"y":-50,"trait":"line"},{"x":-793,"y":271,"trait":"line"},{"x":-572,"y":50,"trait":"line"},{"x":793,"y":271,"trait":"line"},{"x":572,"y":50,"trait":"line"},{"x":793,"y":346,"bCoef":1,"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"trait":"ballArea"},{"x":0,"y":346,"bCoef":0,"trait":"line"},{"x":0,"y":-346,"bCoef":0,"trait":"line"},{"x":0,"y":95,"trait":"kickOffBarrier","_selected":"segment","_data":{"mirror":{}}},{"x":0,"y":-95,"trait":"kickOffBarrier","_selected":"segment","_data":{"mirror":{}}},{"x":802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":6,"v1":13,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":1,"v1":14,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":5,"v1":15,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":12,"v1":14,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-821},{"v0":13,"v1":15,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":585},{"v0":16,"v1":17,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":18,"v1":19,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":20,"v1":21,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":22,"v1":23,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":17,"v1":21,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-600},{"v0":19,"v1":23,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":572},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":0,"v1":24,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":290},{"v0":3,"v1":25,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-290},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":29,"v1":28,"curve":180.43079330521417,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[0,-95],"b":[0,95],"curve":180.43079330521417,"radius":95.00067131878964,"center":[0.3571428571409862,0],"from":-1.574555707580645,"to":1.574555707580645}}},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":32,"v1":33,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":34,"v1":35,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":36,"v1":37,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614}],"goals":[{"p0":[-802,-95],"p1":[-802,95],"team":"red"},{"p0":[802,95],"p1":[802,-95],"team":"blue"}],"discs":[{"radius":5,"pos":[-793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[-793,-95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,-95],"color":"FFFFFF","trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,-346],"b":[900,-346]}}},{"normal":[0,-1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,346],"b":[900,346]}}},{"normal":[0,1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[900,-404]}}},{"normal":[0,-1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,404],"b":[900,404]}}},{"normal":[1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[-900,404]}}},{"normal":[-1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[900,-404],"b":[900,404]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":7},"ballPhysics":{"radius":7,"color":"EAFF00"},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}');

// Get a chat-pingable tag from player's name
function getTag(name) {
  return "@" + name.replace(/ /g, "_");
}

function formatTime(time) {
  let minutes = ~~(time / 60);
  let seconds = ~~(time - minutes * 60);
  return ( minutes != 0 ) ? `${minutes}'${seconds}''` : `${seconds}''`;
}

// Return a random boolean, with an optional probability of getting true
function randomBoolean(probability = 50) {
  return Math.random() < (probability / 100);
}

// Exclude host player from players list
function getPlayers() {
  return room.getPlayerList().filter((player) => player.id != 0);
}

// If player's name has already existed, kick them
async function validatePlayer(player) {
  let players = room.getPlayerList();
  let sameNamePlayer = players.find((_player) => (_player.name == player.name) && (_player.id != player.id));
  if ( sameNamePlayer == undefined ) return;
  room.kickPlayer(player.id, "Tên người chơi đã tồn tại, vui lòng thay tên");
}

// If there are no admins left in the room give admin to one of the remaining players.
function updateAdmins() {
  // Get all players
  let players = getPlayers();
  if (
    players.length == 0 || // No players left
    players.find((player) => player.admin) != undefined // There's an admin left
  ) return;
  room.setPlayerAdmin(players[0].id, true); // Give admin to the first non-admin player in the list
}

// Move players to teams until it's enough
async function updateTeamPlayers() {
  if ( config.autoPickDisabled ) return;
  while ( true ) {
    // Get all players except admins because they can do it themself
    let players = getPlayers();

    // Get a bench player (like Penaldo) that aren't admins cause admins can do it themself
    let specPlayer = players.find(player => (player.team == 0) && !player.admin);
    if ( specPlayer == undefined ) return; // No players left in the Spectators

    // Get players from 2 teams
    let redPlayers = players.filter(player => player.team == 1);
    let bluePlayers = players.filter(player => player.team == 2);
    if ( (redPlayers.length >= 5) && (bluePlayers.length >= 5) ) return; // There are enough players

    // Find the team that needs new players the most
    let missingTeam = redPlayers.length > bluePlayers.length ? 2 : 1;

    // API functions that modify the game's state execute asynchronously, so we have to wait before rechecking everything
    await room.setPlayerTeam(specPlayer.id, missingTeam);
  };
}

// Update information to monitor scorers, assisters, possession and passing accuracy
function updateBallKick(player) {
  // Update information to count assister later
  if ( game.lastKicked != null ) {
    game.preLastKicked = { ...game.lastKicked };
  };
  // Update information about scorer
  game.lastKicked = player;

  team = player.team == 1 ? game.red : game.blue;
  // Update total kicks
  team.kicks++;
  // Update accurate kicks
  if ( game.preLastKicked == null ) return; // Kick-off pass
  if ( player.id == game.preLastKicked.id) { // Wall kick
    team.wallKicks++;
    return;
  }
  if (player.team == game.preLastKicked.team) {
    team.accuratePasses++;
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
  var comment = "một pha dứt điểm lạnh lùng";
  // Design a good comment :P
  if ( scores.time > scores.timeLimit ) { // Overtime goal
    comment = "VÀ ĐÓ... LÀ BÀN THẮNG QUYẾT ĐỊNH";
  } else if ( scores.timeLimit - scores.time < 10 ) { // Last minute goal
    switch ( goalDiff ) {
      case 0: // Last minute equaliser
        scream = "VÀOOOOOOOOO";
        comment = "thật ko thể tin được, những giây cuối cùng, trận đấu chưa kết thúc cho đến khi ta nói kết thúc";
        break;
      case 1: // Last minute winner
        scream = "VÀOOOOOOO";
        comment = "một trận đấu điên rồ, bàn thắng quyết định, dấu chấm hết cho những nỗ lực của phía bên kia";
        break;
      case -1:
        scream = "VÀOOOOOO";
        comment = "chúng ta cách 1 cuộc lội ngược dòng 1 bàn nx thôi, nhưng thời gian không ủng hộ họ";
        break;
      default:
        if ( goalDiff > 1 ) {
          comment = "hết thật rồi";
        } else {
          scream = "VÀO";
          comment = "một bàn thắng danh dự";
        };
    };
  } else if (goalDiff in comments) {
    comment = comments[goalDiff];
  };

  room.sendChat(`${scream} ${scoreline}, ${comment}`);
}

function countScorer(team) {
  // Update stat about scorers
  scorers = team == 1 ? game.red.scorers : game.blue.scorers;
  time = formatTime(room.getScores().time);
  if ( game.lastKicked.team != team ) { // Own goal
    scorers.push(`${game.lastKicked.name} ${time} (OG)`);
    room.sendChat(`Một pha phản lưới nhà do sai lầm của ${getTag(game.lastKicked.name)}`);
    return;
  };
  scorers.push(`${game.lastKicked.name} ${time}`);
  room.sendChat(`${getTag(game.lastKicked.name)} là người đã ghi bàn`);
}

function countAssister(team) {
  if (
    (game.preLastKicked == null) ||
    (game.lastKicked.team != team) || // Own goal
    (game.preLastKicked.id) == game.lastKicked.id // Solo goal
  ) return;
  // Assisted by the opponent team, sometimes comment about it
  if ( game.preLastKicked.team != team && randomBoolean(30) ) {
    room.sendChat(`${getTag(game.preLastKicked.name)} đã làm không tốt nhiệm vụ của mình`);
    return;
  };
  if ( game.preLastKicked.team == team ) {
    room.sendChat(`Kiến tạo thuộc về ${getTag(game.preLastKicked.name)}`);
  };
}

function reportStats(scores) {
  room.sendAnnouncement(` RED ${scores.red}-${scores.blue} BLUE`, null, STATS_COLOR, "bold", 0);
  // Possession stats
  let totalKicks = game.red.kicks + game.blue.kicks;
  let redPossession = ~~(game.red.kicks / totalKicks * 100)
  let bluePossession = 100 - redPossession;
  room.sendAnnouncement(`Kiểm soát bóng: RED ${redPossession}% | BLUE ${bluePossession}%`, null, STATS_COLOR, 0);
  // Pass accuracy stats
  let redPasses = game.red.kicks - game.red.wallKicks
  let bluePasses = game.blue.kicks - game.blue.wallKicks
  let redAccuracy = redPasses != 0 ? ~~(game.red.accuratePasses / redPasses * 100): 0;
  let blueAccuracy = bluePasses != 0 ? ~~(game.blue.accuratePasses / bluePasses * 100): 0;
  room.sendAnnouncement(`Tỉ lệ chuyền bóng chính xác: RED ${redAccuracy}% | BLUE ${blueAccuracy}%`, null, STATS_COLOR, 0);
  // Wall kicks stats
  room.sendAnnouncement(`Đập tường thành công: RED ${game.red.wallKicks} | BLUE ${game.blue.wallKicks}`, null, STATS_COLOR, 0);
  // Scorers information
  if ( game.red.scorers.length != 0 ) {
    room.sendAnnouncement(`Ghi bàn cho RED: ${game.red.scorers.join(", ")}`, null, STATS_COLOR, 0);
  };
  if ( game.blue.scorers.length != 0 ) {
    room.sendAnnouncement(`Ghi bàn cho BLUE: ${game.blue.scorers.join(", ")}`, null, STATS_COLOR, 0);
  };
}

function processCommand(player, command) {
  // Get alias and value from command
  let splitIndex = command.indexOf(" ");
  splitIndex = ( splitIndex != -1 ) ? splitIndex : command.length;
  let [alias, value] = [command.slice(0, splitIndex), command.slice(splitIndex + 1)];

  switch ( alias ) {
    case "login":
      if ( value != ADMIN_PASSWORD ) return false;
      room.setPlayerAdmin(player.id, true);
      room.sendAnnouncement("Đăng nhập thành công", player.id, GREEN, 0);
      return false;
    case "var":
      room.sendAnnouncement("Phòng VAR thông báo không có dấu hiệu của phạm lỗi", null, GREEN, 0);
      return true;
    case "penalty":
      room.sendAnnouncement("Team bên kìa đã mua tài nên không có penalty", null, RED, 0);
      return true;
  };

  if ( !player.admin ) return true; // No permission to run commands below
  switch ( alias ) {
    case "wait":
      config.wait = true;
      room.sendAnnouncement("Đã dừng tự động cấp Admin", player.id, GREEN, 0);
      break;
    case "noautopick":
      config.autoPickDisabled = true;
      room.sendAnnouncement("Đã tắt tự động thay người", player.id, GREEN, 0);
      break;
    case "autopick":
      config.autoPickDisabled = false;
      room.sendAnnouncement("Đã bật tự động thay người", player.id, GREEN, 0);
      break;
  };
  return true;
}

async function processResponse(player, message) {
  message = message.toLowerCase();
  for ( const [keyword, response] of Object.entries(replies) ) { // Check if the message needs a reply
    message.startsWith(keyword) && room.sendChat(`${getTag(player.name)} ${response}`);
  };
}

function processMessage(player, message) {
  if ( message.startsWith("!") ) { // Indicating a command
    return processCommand(player, message.slice(1));
  }

  processResponse(player, message);
  return true;
}

function sayHello(player) {
  room.sendChat(`Chào mừng ${getTag(player.name)} đến với băng ghế dự bị cùng Cristiano Ronaldo`);
}

function gameStartComment() {
  room.sendChat(START_GAME_COMMENT);
}

// Give another player admin if current admins seem to be unresponsive
async function monitorInactivity() {
  await new Promise(r => setTimeout(r, 10000));// Wait 5 seconds
  if ( room.getScores() != null ) return; // Game has started

  // Room is inactive, are admins AFK?
  let players = getPlayers()
  let admins = players.filter((player) => player.admin);
  if (
    (admins.length == 0) || // No one else in the room:((
    (admins.length >= 4) // I don't think all 4 admins are AFK :P
  ) return;
  // Notify admins about inactivity, give random admin if no action is made from current admins
  let mentionAdmins = admins.map((admin) => getTag(admin.name)).join(" "); // Tag all admins
  room.sendChat(`${mentionAdmins} vui lòng khởi động trận đấu hoặc chat !wait trong 15 giây trước khi room cấp Admin ngẫu nhiên`)
  await new Promise(r => setTimeout(r, 15000));
  if ( config.wait || room.getScores() != null ) return; // Admins are up :D

  let nonAdminPlayer = players.find((player) => !player.admin)
  if ( nonAdminPlayer == undefined ) {
    room.sendAnnouncement("Không có người chơi để cấp Admin!", null, RED);
    return;
  }
  room.setPlayerAdmin(nonAdminPlayer.id, true);
}

function reset() {
  game = JSON.parse(JSON.stringify(gameDefault));
  config.wait = false;
}

room.onPlayerJoin = function(player) {
  validatePlayer(player);
  updateAdmins();
  sayHello(player);
  updateTeamPlayers();
}

room.onPlayerLeave = function(player) {
  updateAdmins();
  (player.team != 0) && updateTeamPlayers();
}

room.onPlayerBallKick = function(player) {
  updateBallKick(player);
}

room.onTeamGoal = function(team) {
  celebrateGoal(team);
  countScorer(team);
  countAssister(team);
}

room.onPlayerChat = function(player, message) {
  return processMessage(player, message);
}

room.onTeamVictory = function(scores) {
  reportStats(scores);
}

room.onGameStart = function(byPlayer) {
  reset();
  gameStartComment();
}

room.onGameStop = function(byPlayer) {
  (byPlayer != null) && room.sendChat("Trận đấu đã bị hủy bỏ vì thời tiết xấu");
  monitorInactivity();
}

room.onGamePause = function(byPlayer) {
  room.sendChat("Trận đấu đang được tạm dừng để check VAR");
}

room.onGameUnpause = function(byPlayer) {
  room.sendChat("Trọng tài đã check VAR và trận đấu được TIẾP TỤC");
}
