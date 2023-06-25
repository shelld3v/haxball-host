const stadium = "HV De Paul";
const admins = [
  ".dep try nhat sever:3",
  "vit",
  "Linhh:3",
];
const replies = {
  "tin chuẩn chưa a": "Chuẩn em nhé",
  "chất": "Anh chất hay máy sấy chất? Hồi còn ở nhà 5 tầng anh cx chưa dùng máy sấy đâu",
  "anh biết tiếng pháp": "Anh có thể nghe hiểu tiếng TBN (nếu nói chậm), đọc đc báo BĐN, tiếng Pháp thì em hỏi con gái anh, nói như ng Paris",
};
const teamStats = {
  accurateKicks: 0,
  kicks: 0,
  scorers: [],
};
const gameDefault = {
  lastKicked: nil,
  preLastKick: nil,
  red: ...teamStats,
  blue: ...teamStats,
};

var game = {
  ...gameDefault
};

var room = HBInit({
  roomName: "Phòng tự động của De Paul",
  maxPlayers: 20,
  playerName: "BLV Trông Anh Ngược",
  public: true,
});
room.setScoreLimit(0);
room.setTimeLimit(5);
room.setCustomStadium('{"name":"HaxViet Premier League from HaxMaps","width":900,"height":404,"spawnDistance":310,"bg":{"type":"grass","width":793,"height":346,"kickOffRadius":95,"cornerRadius":0,"color":"718B5B"},"vertexes":[{"x":-793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":404,"trait":"kickOffBarrier"},{"x":0,"y":95,"trait":"kickOffBarrier"},{"x":0,"y":-95,"trait":"line"},{"x":0,"y":-404,"trait":"kickOffBarrier"},{"x":-821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-793,"y":-271,"trait":"line"},{"x":-572,"y":-50,"trait":"line"},{"x":793,"y":-271,"trait":"line"},{"x":572,"y":-50,"trait":"line"},{"x":-793,"y":271,"trait":"line"},{"x":-572,"y":50,"trait":"line"},{"x":793,"y":271,"trait":"line"},{"x":572,"y":50,"trait":"line"},{"x":793,"y":346,"bCoef":1,"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"trait":"ballArea"},{"x":0,"y":346,"bCoef":0,"trait":"line"},{"x":0,"y":-346,"bCoef":0,"trait":"line"},{"x":0,"y":95,"trait":"kickOffBarrier","_selected":"segment","_data":{"mirror":{}}},{"x":0,"y":-95,"trait":"kickOffBarrier","_selected":"segment","_data":{"mirror":{}}},{"x":802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":6,"v1":13,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":1,"v1":14,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":5,"v1":15,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":12,"v1":14,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-821},{"v0":13,"v1":15,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":585},{"v0":16,"v1":17,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":18,"v1":19,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":20,"v1":21,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":22,"v1":23,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":17,"v1":21,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-600},{"v0":19,"v1":23,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":572},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":0,"v1":24,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":290},{"v0":3,"v1":25,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-290},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":29,"v1":28,"curve":180.43079330521417,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[0,-95],"b":[0,95],"curve":180.43079330521417,"radius":95.00067131878964,"center":[0.3571428571409862,0],"from":-1.574555707580645,"to":1.574555707580645}}},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":32,"v1":33,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":34,"v1":35,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":36,"v1":37,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614}],"goals":[{"p0":[-802,-95],"p1":[-802,95],"team":"red"},{"p0":[802,95],"p1":[802,-95],"team":"blue"}],"discs":[{"radius":5,"pos":[-793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[-793,-95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,-95],"color":"FFFFFF","trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,-346],"b":[900,-346]}}},{"normal":[0,-1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,346],"b":[900,346]}}},{"normal":[0,1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[900,-404]}}},{"normal":[0,-1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,404],"b":[900,404]}}},{"normal":[1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[-900,404]}}},{"normal":[-1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[900,-404],"b":[900,404]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":7},"ballPhysics":{"radius":7,"color":"EAFF00"},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}');

// If player is known, set to admin
function checkAdmin(player) {
  if ( admins.includes(player.playerName) ) {
    room.setPlayerAdmin(player.id, true);
  };
}

// If there are no admins left in the room give admin to one of the remaining players.
function updateAdmins() {
  // Get all players
  let players = room.getPlayerList();
  if ( players.length == 0 ) return; // No players left, do nothing.
  if ( players.find((player) => player.admin) != null ) return; // There's an admin left so do nothing.
  room.setPlayerAdmin(players[0].id, true); // Give admin to the first non admin player in the list
}

// If there are no admins left in the room give admin to one of the remaining players.
function updateTeamPlayers() {
  // Get all players
  let players = room.getPlayerList();
  if ( players.length == 0 ) return; // No players left, do nothing.
  // Move players to teams until it's enough
  while ( true ) {
    let specPlayers = players.filter(player => player.team == 0); // Get bench players (like Penaldo)
    let redPlayers = players.filter(player => player.team == 1); // Get RED players
    let bluePlayers = players.filter(player => player.team == 2); // Get RED players

    if ( (redPlayers.length == bluePlayers.length == 5) || specPlayers.length == 0 ) return; // If there are enough players or no players left in the Spectators

    // Find the team that needs new players the most
    let missingTeam = redPlayers.length > bluePlayers.length ? 2 : 1;

    room.setPlayerTeam(specPlayers[0].id, missingTeam);
    room.sendChat(`@${specPlayers[0].name} đã được tung vào sân`);
  };
}

// Update information to monitor scorers, assisters, possession and passing accuracy
function updateBallKick(player) {
  // Update information to count assister later
  if ( game.lastKicked != nil ) {
    game.preLastKicked = Object.assign({}, game.lastKicked);
  };
  // Update information about scorer
  game.lastKicked = player;

  team = player.team == 1 ? game.red : game.blue;
  // Update total kicks
  team.kicks++;
  // Update accurate kicks
  if ( player.team == game.preLastKicked ) { // && player.id != game.preLastKicked.id
    team.accurate.accurateKicks++
  };
}

function celebrateGoal(team) {
  // Get ScoresObject
  let scores = room.getScores();
  // Get scores of scored team and opponent
  let teamScores = ( team == 1 ) ? scores.red : scores.blue;
  let opponentScores = ( team == 1 ) ? scores.blue : scores.red;
  // Get score line in string
  let scoreLine = `${teamScores}-${opponentScores}`;

  var comment = undefined;
  // Design a good comment :P
  if ( teamScores == opponentScores ) { // If it's a draw
    comment = "bàn thắng gỡ hòa vô cùng quan trọng";
  } else if ( teamScores - opponentScores >= 4 ) { // Humilication
    comment = "một cơn ác mộng thực thụ";
  } else if ( teamScores - opponentScores >= 2 ) { // Scored team has 2 or more goals
    if ( scores.timeLimit - scores.time < 20 ) { // Not enough time to score
      comment = "vậy là dấu chấm hết cho một cuộc chơi";
    } else {
      comment = "cách biệt đã được nâng cao";
    };
  } else if ( teamScores - opponentScores == 1 ) { // 1 goal difference was made
    comment = "một cách biệt đã được tạo ra";
  } else if ( opponentScores - teamScores >= 2 ) { // Hard losing team scored
    if ( scores.timeLimit - scores.time < 5 * (opponentScores - teamScores) ) { // It takes at least 5 seconds to score, there isn't enough time
      comment = "một bàn thắng danh dự";
    } else {
      comment = "liệu sẽ có một cuộc lội ngược dòng xảy ra?";
    };
  } else { // opponentScores - teamScores == 1, 1 goal left to go
    comment = "cách biệt chỉ còn là 1 bàn mong manh";
  };

  room.sendChat(`VÀOOOOOO, ${scoreline}, ${comment}`);
}

function countScorer(team) {
  // Update stat about scorers
  scorers = game.red.scorers ? team == 1 : game.blue.scorers;
  if ( lastKicked.team != team ) { // Own goal
    scorers.push("@${lastKicked.name} ${team.time}' (OG)")
    room.sendChat(`Một bàn phản lưới nhà từ @${lastKicked.name}`);
    return;
  };
  scorers.push(`@${lastKicked.name} ${team.time}'`);
  room.sendChat(`@${lastKicked.name} là người đã ghi bàn`);
}

function countAssister(team) {
  if ( preLastKicked == nil ) return;
  if ( preLastKicked.team != team ) return; // Not an assist
  if ( preLastKicked.id == lastKicked.id ) return; // Solo goal
  room.sendChat(`Kiến tạo thuộc về @${preLastKicked.name}`);
}

function reportStats(scores) {
  room.sendChat(` RED ${scores.red}-${scores.blue} BLUE`);
  room.sendChat("Thống kê trận đấu:");
  // Possession stats
  let totalKicks = game.red.kicks + game.blue.kicks;
  let redPossession = Math.round((game.red.kicks / totalKicks) * 100)
  let bluePossession = 100 - redPossession;
  room.sendChat(`Kiểm soát bóng: RED ${redPossession}% | BLUE ${bluePossession}%`);
  // Pass accuracy stats
  let redAccuracy = Math.round((team.red.accurateKicks / team.red.kicks) * 100);
  let blueAccuracy = Math.round((team.blue.accurateKicks / team.blue.kicks) * 100);
  room.sendChat(`Tỉ lệ chuyền bóng chính xác: RED ${redAccuracy}% | BLUE ${blueAccuracy}%`);
  // Scorers information
  room.sendChat(`Ghi bàn cho RED: ${game.red.scorers.join(", ")}`);
  room.sendChat(`Ghi bàn cho BLUE: ${game.blue.scorers.join(", ")}`);
}

function checkFlex(player, message) {
  if ( message.length < 4 ) return true;

  message = message.toLowerCase();
  for ( const [keyword, response] of Object.entries(replies) ) { // Check if the message needs a flex
    if ( message.includes(keyword) ) {
      room.sendChat(`@${player.name} ${repsonse}`);
    };
  };

  return true;
}

function sayHello(player) {
  if ( player.admin ) {
    room.sendChat(`Chào mừng @${player.name} đến với ban huấn luyện`);
  } else {
    room.sendChat(`Chào mừng @${player.name} đến với băng ghế dự bị cùng Cristiano Ronaldo`);
  };
}

function gameStartComment(player) {
  room.sendChat(`Chào mừng mọi người đến với SVĐ ${stadium}, hi vọng mọi người đã và đang có một ngày không tốt lành`)
}

function reset() {
  game = {...gameDefault};
}

room.onPlayerJoin = function(player) {
  checkAdmin(player);
  sayHello(player);
  updateTeamPlayers();
}

room.onPlayerLeave = function(player) {
  updateAdmins();
  if ( player.team == 0 ) {
    updateTeamPlayers();
  };
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
  checkFlex(player, message);
}

room.onTeamVictory = function(scores) {
  reportStats(scores);
}

room.onGameStart = function(byPlayer) {
  reset();
  gameStartComment();
}

room.onGamePause = function(byPlayer) {
  room.sendChat("Trận đấu đang được tạm dừng để check VAR");
}

room.onGameUnpause = function(byPlayer) {
  room.sendChat("Trọng tài đã check VAR và trận đấu được TIẾP TỤC");
}
