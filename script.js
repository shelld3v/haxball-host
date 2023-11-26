const ADMIN_PASSWORD = "messiu2";
const MODE = "pick"; // can be "rand" or "pick"
const AFK_DEADLINE = 10;
const PICK_DEADLINE = 20;
const PAUSE_TIMEOUT = 15;
const PENALTY_TIMEOUT = 10;
const AFTER_GAME_REST = 2.5;
const PREDICTION_PERIOD = 20;
const MAX_ADDED_TIME = 90;
const NOTIFICATION_INTERVAL = 300;
const MAX_DUPE_MESSAGES = 2;
const RED = 0xFF0000;
const GREEN = 0x00FF00;
const BLUE = 0x00BFFF;
const YELLOW = 0xFFEA00;
const TEAM_NAMES = {
  1: "RED",
  2: "BLUE",
};
const TEAM_COLORS = [
  [[60, 0xFFCC00, [0xE83030]], [60, 0xFFCC00, [0x004170]]],
  [[60, 0xFFFFFF, [0xFF4A4A]], [60, 0xFFFFFF, [0x5ECFFF]]],
  [[60, 0xFFFFFF, [0xD60419]], [60, 0xFFFFFF, [0x0099FF]]],
  [[0, 0xF7FFF2, [0xE00202, 0xB00101, 0x800000]], [0, 0xF7FFF2, [0x00F7FF, 0x00D1D1, 0x00A7AD]]],
  [[90, 0xF7FFF2, [0xFF2121, 0xFF5757, 0xFC9595]], [90, 0xF7FFF2, [0x00C3FF, 0x45E0FF, 0xB5F5FC]]],
  [[45, 0xFFFFFF, [0x000000, 0xFF0000, 0x000000]], [45, 0x808080, [0xFFFFFF, 0x0096FF, 0xFFFFFF]]],
  [[45, 0xFFFFFF, [0xD60000, 0x000000, 0xD60000]], [45, 0xFFFFFF, [0x0058A3, 0x000000, 0x0058A3]]],
  [[-45, 0xFFCC00, [0xD10000, 0x8C0000, 0xD10000]], [-45, 0xFFCC00, [0x00DDFF, 0x87E3FF, 0x00DDFF]]],
];
const GOALKEEPER_COLORS = {
  red: [0, 0xFFFFFF, [0x363636, 0x262626, 0x363636]],
  blue: [0, 0xFFFFFF, [0x13A720, 0x2FD835, 0x13A720]],
};
const GOAL_COMMENTARIES = {
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
const WINNING_GOAL_COMMENTARIES = [
  "VÀ ĐÓ LÀ BÀN THẮNG QUYẾT ĐỊNH",
  "DẤU CHẤM HẾT CHO NHỮNG NỖ LỰC PHÍA BÊN KIA",
  "ĐỘI BÓNG MẠNH HƠN ĐÃ LÊN TIẾNG",
  "MỘT CHIẾN THẮNG KHUẤT PHỤC",
  "CUỘC CHƠI KẾT THÚC",
];
const SCORER_COMMENTARIES = {
  "1": "Pha lập công do công của",
  "2": "Cú đúp dành cho",
  "3": "Hattrick của",
  "4": "Thật không thể tin được, một cú poker đến từ",
  "5": "Vâng, không ai khác, một cú repoker cho",
};
const PENALTY_GOAL_COMMENTARIES = [
  "Rất lạnh lùng và vô cùng bản lĩnh",
  "Rất quyết đoán, một cú sút với lực căng",
  "Vàoooo, tỉ số luân lưu đã được nâng lên",
  "Quá đơn giản và nhẹ nhàng",
];
const PENALTY_MISS_COMMENTARIES = [
  "Áp lực quá lớn đã khiến cho cầu thủ thực hiện quả luân lưu không thành công",
  "Không vàooooo, rất đáng tiếc",
];
const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1147919509915717772/9dkrZtMuJn_xMi2FKpntUhZ_x5dFevoeuvO4nMmQJUn5l2yBLhYsgkTPNgJxr4AnJAyn";
const STADIUM = '{"name":"De Paul Stadium","width":900,"height":404,"spawnDistance":310,"bg":{"type":"grass","width":793,"height":346,"kickOffRadius":95,"cornerRadius":0,"color":"718B5B"},"vertexes":[{"x":-793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":404,"trait":"kickOffBarrier"},{"x":0,"y":95,"trait":"kickOffBarrier"},{"x":0,"y":-95,"trait":"line"},{"x":0,"y":-404,"trait":"kickOffBarrier"},{"x":-840,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":840,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-840,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":840,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-793,"y":-271,"trait":"line"},{"x":-572,"y":-50,"trait":"line"},{"x":793,"y":-271,"trait":"line"},{"x":572,"y":-50,"trait":"line"},{"x":-793,"y":271,"trait":"line"},{"x":-572,"y":50,"trait":"line"},{"x":793,"y":271,"trait":"line"},{"x":572,"y":50,"trait":"line"},{"x":793,"y":346,"bCoef":1,"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"trait":"ballArea"},{"x":0,"y":346,"bCoef":0,"trait":"line"},{"x":0,"y":-346,"bCoef":0,"trait":"line"},{"x":0,"y":95,"trait":"kickOffBarrier","_selected":"segment","_data":{"mirror":{}}},{"x":0,"y":-95,"trait":"kickOffBarrier","_selected":"segment","_data":{"mirror":{}}},{"x":802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":331,"trait":"cornerDecoration"},{"x":-778,"y":346,"trait":"cornerDecoration"},{"x":-778,"y":-346,"trait":"cornerDecoration"},{"x":-793,"y":-331,"trait":"cornerDecoration"},{"x":778,"y":346,"trait":"cornerDecoration"},{"x":793,"y":331,"trait":"cornerDecoration"},{"x":793,"y":-331,"trait":"cornerDecoration"},{"x":778,"y":-346,"trait":"cornerDecoration"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"goalNet","y":-95},{"v0":6,"v1":13,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"goalNet","y":-95},{"v0":1,"v1":14,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"goalNet","y":95},{"v0":5,"v1":15,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"goalNet","y":95},{"v0":12,"v1":14,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"goalNet","x":-840},{"v0":13,"v1":15,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"goalNet","x":585},{"v0":16,"v1":17,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":18,"v1":19,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":20,"v1":21,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":22,"v1":23,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":17,"v1":21,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-600},{"v0":19,"v1":23,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":572},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":9,"x":-665},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-9,"x":665},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-9,"x":-665},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":9,"x":665},{"v0":0,"v1":24,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":290},{"v0":3,"v1":25,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-290},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":29,"v1":28,"curve":180.43079330521417,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","_data":{"mirror":{},"arc":{"a":[0,-95],"b":[0,95],"curve":180.43079330521417,"radius":95.00067131878964,"center":[0.3571428571409862,0],"from":-1.574555707580645,"to":1.574555707580645}}},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":32,"v1":33,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":34,"v1":35,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":36,"v1":37,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":38,"v1":39,"vis":true,"trait":"cornerDecoration"},{"v0":40,"v1":41,"vis":true,"trait":"cornerDecoration"},{"v0":42,"v1":43,"vis":true,"trait":"cornerDecoration"},{"v0":44,"v1":45,"vis":true,"trait":"cornerDecoration"}],"goals":[{"p0":[-802,-95],"p1":[-802,95],"team":"red"},{"p0":[802,95],"p1":[802,-95],"team":"blue"}],"discs":[{"pos":[-793,95],"trait":"goalPost"},{"pos":[-793,-95],"trait":"goalPost"},{"pos":[793,95],"trait":"goalPost"},{"pos":[793,-95],"trait":"goalPost"},{"pos":[-793,-346],"trait":"cornerFlag"},{"pos":[-793,346],"trait":"cornerFlag"},{"pos":[793,-346],"trait":"cornerFlag"},{"pos":[793,346],"trait":"cornerFlag"}],"planes":[{"normal":[0,1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,-346],"b":[900,-346]}}},{"normal":[0,-1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,346],"b":[900,346]}}},{"normal":[0,1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[900,-404]}}},{"normal":[0,-1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,404],"b":[900,404]}}},{"normal":[1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[-900,404]}}},{"normal":[-1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[900,-404],"b":[900,404]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":4.5,"invMass":0,"color":"C6D881","bCoef":1.5},"goalNet":{"vis":true,"bCoef":0.15,"cMask":["all"]},"cornerFlag":{"radius":4,"invMass":0,"color":"FFBF00","bCoef":1.5,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"cornerDecoration":{"vis":true,"color":"FFFFFF","bCoef":0,"cMask":[""],"curve":90},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.645,"bCoef":0.35},"ballPhysics":{"radius":6.54,"color":"CCFF99","bCoef":0.465,"invMass":1.4},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}';
const PENALTY_STADIUM = '{"name":"De Paul Stadium [PENALTY]","width":420,"height":200,"spawnDistance":310,"bg":{"type":"grass","width":400,"height":260,"kickOffRadius":0,"cornerRadius":0,"color":"718B5B"},"vertexes":[{"x":323,"y":260,"bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-30},{"x":323,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-30},{"x":323,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":30},{"x":323,"y":-260,"bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":30},{"x":370,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0},{"x":370,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0},{"x":332,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":323,"y":260,"bCoef":0,"trait":"line"},{"x":323,"y":-260,"bCoef":0,"trait":"line"},{"x":0,"y":-260,"bCoef":0,"trait":"line"},{"x":0,"y":260,"bCoef":0,"trait":"line"},{"x":323,"y":200,"bCoef":0,"trait":"line"},{"x":110,"y":200,"bCoef":0,"trait":"line"},{"x":110,"y":-200,"bCoef":0,"trait":"line"},{"x":323,"y":-200,"bCoef":0,"trait":"line"},{"x":0,"y":95,"bCoef":0,"trait":"line"},{"x":0,"y":-95,"bCoef":0,"trait":"line"},{"x":110,"y":5,"bCoef":0,"trait":"line"},{"x":110,"y":-5,"bCoef":0,"trait":"line"},{"x":55,"y":-260,"bCoef":0,"cMask":["red"],"trait":"penArea"},{"x":65,"y":260,"bCoef":0,"cMask":["red"],"trait":"penArea"},{"x":300,"y":-90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":365,"y":-90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":365,"y":90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":300,"y":90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":2,"v1":4,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"goalNet","y":-95},{"v0":1,"v1":5,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"goalNet","y":95},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-30,"x":665},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":30,"x":665},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":7,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":9,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":9,"v1":8,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":11,"v1":12,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":12,"v1":13,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":13,"v1":14,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":15,"v1":16,"curve":150,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":18,"v1":17,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":17,"v1":18,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"goalNet"},{"v0":19,"v1":20,"curve":45,"vis":false,"bCoef":0,"cMask":["red"],"trait":"penArea"},{"v0":21,"v1":22,"vis":false,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":22,"v1":23,"vis":false,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":23,"v1":24,"vis":false,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":24,"v1":21,"vis":false,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"}],"goals":[{"p0":[332,95],"p1":[332,-95],"team":"blue"},{"p0":[325,-100],"p1":[100,0],"team":"red"},{"p0":[100,0],"p1":[320,100],"team":"red"}],"discs":[{"radius":6.56,"color":"FFFDD0","bCoef":0.465,"invMass":1.4,"pos":[110,0],"cGroup":["ball","kick","score"]},{"pos":[323,95],"trait":"goalPost"},{"pos":[323,-95],"trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-260,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-260,"canvas_rect":[-710,-260,710,260],"a":[-710,-260],"b":[710,-260]}}},{"normal":[0,-1],"dist":-260,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-260,"canvas_rect":[-710,-260,710,260],"a":[-710,260],"b":[710,260]}}},{"normal":[1,0],"dist":-499,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-499,"canvas_rect":[-710,-260,710,260],"a":[-499,-260],"b":[-499,260]}}},{"normal":[-1,0],"dist":-376,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-376,"canvas_rect":[-710,-260,710,260],"a":[376,-260],"b":[376,260]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":4.5,"invMass":0,"color":"C6D881","bCoef":1},"goalNet":{"vis":true,"bCoef":0.2,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n/d"],"color":"cccccc"},"penArea":{"vis":false,"bCoef":0,"cMask":["red"]}},"playerPhysics":{"acceleration":0.1096,"kickingAcceleration":0.083,"kickStrength":4.65,"bCoef":0.35},"ballPhysics":"disc0","joints":[],"canBeStored":false,"redSpawnPoints":[[-100,0]],"blueSpawnPoints":[[323,0]],"kickOffReset":"full"}';
const DISCORD_LINK = "https://discord.gg/DYWZFFsSYu";
const ALLOWED_COMMANDS = ["!bye", "!pick", "!help", "!login"];
const NEW_UPDATE_MESSAGE = 'MỚI: Đội trưởng có thể lựa chọn người chơi bằng cách chỉ nhắn số trong khung chat (vẫn hỗ trợ lệnh "!pick")';

// Analyze the stadium
let parsedStadium = JSON.parse(STADIUM);
const GOAL_LINE = parsedStadium.goals[0].p0.map((coordinate) => Math.abs(coordinate)); // Both x and y values are positive numbers
const BALL_RADIUS = parsedStadium.ballPhysics.radius || 10;
delete parsedStadium; // Free the memory

const playerStats = {
  name: null,
  goals: 0,
  assists: 0,
  ownGoals: 0,
};
const playerReport = {
  name: null,
  goals: 0,
  assists: 0,
  ownGoals: 0,
  forTeam: 0,
};
const teamStats = {
  kicks: 0,
  passes: 0,
  possessedKicks: 0,
  shotsOnTarget: 0,
};
const gameDefault = {
  players: {}, // Store players' stats
  teams: { // Store teams' stats
    1: { ...teamStats }, // RED team's stats
    2: { ...teamStats }, // BLUE team's stats
  },
};
const penaltyDefault = {
  red: [[], null], // RED penalty takers and goalkeeper against them
  blue: [[], null], // BLUE penalty takers and goalkeeper against them
  turn: 0, // Which team to take penalty (starts from RED)
  index: -1, // Index of the current penalty taker
  results: [[], []], // Results of taken penalties (first array for RED, second for BLUE)
};
var commands = { // Format: "alias: [function, minimumRole, availableModes]"
  help: [helpFunc, 0, ["rand", "pick"]],
  discord: [discordFunc, 0, ["rand", "pick"]],
  bye: [byeFunc, 0, ["rand", "pick"]],
  stats: [showStatsFunc, 0, ["rand", "pick"]],
  kickafk: [kickAfkFunc, 0, ["rand", "pick"]],
  spec: [specFunc, 0, ["rand", "pick"]],
  login: [loginFunc, 0, ["rand", "pick"]],
  afk: [afkFunc, 0, ["rand", "pick"]],
  captains: [listCaptainsFunc, 0, ["pick"]],
  predict: [predictFunc, 0, ["rand"]],
  pick: [pickFunc, 1, ["pick"]],
  sub: [subFunc, 1, ["pick"]],
  pause: [pauseFunc, 1, ["pick"]],
  resume: [resumeFunc, 1, ["pick"]],
  yellow: [yellowCardFunc, 2, ["rand", "pick"]],
  mute: [muteFunc, 2, ["rand", "pick"]],
  unmute: [unmuteFunc, 2, ["rand", "pick"]],
  clearmutes: [clearMutesFunc, 2, ["rand", "pick"]],
  clearbans: [clearBansFunc, 2, ["rand", "pick"]],
  assigncap: [assignCaptainFunc, 2, ["pick"]],
};
var identities = {}; // Store connection string/public IDs of players
var afkList = new Set([0]); // Host player is always in AFK mode
var muteList = new Set();
var duplicateMessagesCount = 0;
var isPlaying = false;
var isPicking = false;
var isTakingPenalty = false;
var canPause = false;
var winningStreak = 0;
var prevLoser = 1;
var pickTurn = 0;
var pausedBy = 0;
var captains = {1: 0, 2: 0};
var kits = {red: null, blue: null};
var prevScore = null;
var predictions = {};
var lastKicked = [null, null, null]; // Last players who kicked the ball
var lastMessage = [null, null]; // Last message and the player ID of the sender
var prevShootedTeam = 0;
var ballProperties = [null, null]; // Ball properties in the last 2 kicks
var yellowCards = [];
var game = null;
var penalty = null;
var timeouts = {
  toPick: null,
  toResume: null,
  toTakePenalty: null,
  toAct: {},
};

var room = HBInit({
  roomName: `💥 [De Paul's auto room] 5v5 (${MODE})`,
  maxPlayers: 30,
  playerName: "BLV Trông Anh Ngược",
  public: false,
});
room.setScoreLimit(5);
room.setTimeLimit(5);
room.setCustomStadium(STADIUM);
room.setTeamsLock(1);
room.setKickRateLimit(7, 15, 3);
room.startGame();
setInterval(room.sendAnnouncement.bind(null, `🔔 Đừng quên vào server Discord của De Paul: ${DISCORD_LINK}`, null, YELLOW, "small-italic", 0), NOTIFICATION_INTERVAL * 1000);

if ( new Date().getDate() == 1 ) resetStorage();

// Reset data saved in the localStorage
function resetStorage() {
  let month = new Date().getMonth();
  let playerList = [];
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if ( key.length != 43 ) continue;
    playerList.push(JSON.parse(localStorage.getItem(key)));
  }

  let topScorers = playerList.sort(function (player1, player2) {
    if ( player1.goals == player2.goals ) {
      return player2.assists - player1.assists;
    };
    return player2.goals - player1.goals;
  }).slice(0, 5);
  let topAssisters = playerList.sort(function (player1, player2) {
    if ( player1.assists == player2.assists ) {
      return player2.goals - player1.goals;
    };
    return player2.assists - player1.assists;
  }).slice(0, 5);
  let topOwnGoalScorers = playerList.sort((player1, player2) => player2.ownGoals - player1.ownGoals).slice(0, 5);

  let msg = `Danh sách vua phá lưới tháng ${month}:

${topScorers.map((player, index) => `${index + 1}. ${player.name} - ${player.goals} bàn thắng (${player.assists} kiến tạo)`).join("\n")}`;
  setInterval(room.sendAnnouncement.bind(null, msg, null, BLUE, "small-bold", 0), 3.5 * 60 * 1000);

  let discordFields = [
    {
      name: "Vua phá lưới",
      value: `============================\n\n**${topScorers.map((player, index) => `${index + 1}. ${player.name}`).join("\n")}**`,
      inline: true,
    },
    {
      name: "Số bàn thắng",
      value: `================\n\n${topScorers.map((player, index) => player.goals).join("\n")}`,
      inline: true,
    },
    {
      name: '\u200B',
      value: '\u200B',
      inline: true
    },
    {
      name: "Vua kiến tạo",
      value: `============================\n\n**${topAssisters.map((player, index) => `${index + 1}. ${player.name}`).join("\n")}**`,
      inline: true,
    },
    {
      name: "Số kiến tạo",
      value: `================\n\n${topAssisters.map((player, index) => player.assists).join("\n")}`,
      inline: true,
    },
    {
      name: '\u200B',
      value: '\u200B',
      inline: true
    },
    {
      name: "Vua báo",
      value: `============================\n\n**${topOwnGoalScorers.map((player, index) => `${index + 1}. ${player.name}`).join("\n")}**`,
      inline: true,
    },
    {
      name: "Số bàn phản lưới",
      value: `================\n\n${topOwnGoalScorers.map((player, index) => player.ownGoals).join("\n")}`,
      inline: true,
    },
    {
      name: '\u200B',
      value: '\u200B',
      inline: true
    },
  ];
  sendWebhook(`✨ Số liệu thống kê trong tháng ${month}`, null, discordFields);

  localStorage.clear();
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

// Get the distance knowing the coordinates of 2 points
function getDistance(x, y) {
  // Use Pythagoras
  return Math.sqrt(x ** 2 + y ** 2);
}

// Send a message to Discord Webhook
function sendWebhook(title, content, fields) {
  if ( !DISCORD_WEBHOOK ) return;
  fetch(DISCORD_WEBHOOK, {
    method: "POST",
    body: JSON.stringify({
      embeds: [{
        color: 1752220,
        title: title,
        description: content,
        fields: fields,
      }],
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res);
}

// Move AFK player to bottom of the Spectators list
function reorderPlayers() {
  room.reorderPlayers(Array.from(afkList), false);
}

// Get a player by name or tag
function getPlayerByName(value) {
  // Find player by tag
  if ( value.startsWith("@") ) {
    return room.getPlayerList().find((player) => getTag(player.name) == value);
  };
  // Find player by part of the name
  value = value.toLowerCase();
  return room.getPlayerList().find((player) => player.name.toLowerCase().includes(value));
}

// Get a player by position in Spectators list
function getPlayerByPos(number) {
  return getNonAfkPlayers().filter((player) => player.team == 0)[number - 1];
}

// Exclude AFK players from player list
function getNonAfkPlayers() {
  return room.getPlayerList().filter((player) => !afkList.has(player.id));
}

function isCaptain(id) {
  return Object.values(captains).includes(id);
}

// Set random colors for 2 teams
function setRandomColors() {
  let colors = randomChoice(TEAM_COLORS);
  room.setTeamColors(1, ...colors[0]);
  room.setTeamColors(2, ...colors[1]);
  [kits.red, kits.blue] = colors;
}

// Set avatars for players of a specific team
async function teamAvatarEffect(teamId, avatar) {
  let flickerDelay = 200;
  let players = room.getPlayerList().filter((player) => player.team == teamId);
  for (let i = 0; i < 4; i++) {
    for (player of players) {
      await room.setPlayerAvatar(player.id, avatar);
    };
    await new Promise(r => setTimeout(r, flickerDelay));
    for (player of players) {
      await room.setPlayerAvatar(player.id, null);
    };
    await new Promise(r => setTimeout(r, flickerDelay));
  };
}

function showSpecTable() {
  let playerList = room.getPlayerList()
    .filter((player) => (player.team == 0) && !afkList.has(player.id))
    .map((player, index) => `${player.name} (#${index + 1})`);
  let table = " ".repeat(85) + "DANH SÁCH DỰ BỊ\n" + "_".repeat(150) + "\n" + playerList.join("  •  ") + "\n" + "_".repeat(150);
  room.sendAnnouncement(table, captains[pickTurn], BLUE, "small-bold");
  room.sendAnnouncement("Hướng dẫn: dùng !pick <số> hoặc !pick <tên> hoặc !pick <tag> để chọn người chơi (VD: !pick 2 / !pick paul / !pick @De_Paul)", captains[pickTurn], YELLOW, "small", 0);
}

// Kick player if violates any rule
function validatePlayer(player) {
  // 2 players have the same connection ID
  if ( Object.values(identities).map((identity) => identity[1]).includes(player.conn) ) {
    room.kickPlayer(player.id, "Người chơi có cùng địa chỉ IP với một người chơi khác trong phòng");
    return;
  };
  // Duplicate tag
  let tag = getTag(player.name.trim());
  if ( room.getPlayerList().some((_player) => (_player.id != player.id) && (getTag(_player.name.trim()) == tag)) ) {
    room.kickPlayer(player.id, "Vui lòng đổi tên");
  };
}

function saveIdentities(player) {
  identities[player.id] = [player.auth, player.conn];
}

function canUseCommand(command, player) {
  if ( !command[2].includes(MODE) ) return false; // Command is not available in this mode
  if ( (command[1] == 2) && !player.admin ) return false; // Admin required
  if ( (command[1] == 1) && !isCaptain(player.id) ) return false; // Captain required
  return true;
}

function afkCallback(id) {
  // Kick player if player doesn't act in time
  room.kickPlayer(id, "AFK");
  delete timeouts.toAct[id];
}

function unmuteCallback(conn) {
  muteList.delete(conn);
}

function penaltyTimeoutCallback() {
  if ( !isTakingPenalty ) return;
  room.sendChat("Cầu thủ đã không thực hiện penalty trong thời gian quy định");
  // Count as a miss if player doesn't perform the penalty in time
  penalty.results[penalty.turn - 1].push(false);
  // Stop and start the game again to reset the ball position
  room.stopGame();
  room.startGame();
  takePenalty();
}

// Returns the team that lost the penalty shootout (if there is one)
function getPenaltyLoser() {
  if ( penalty.index >= 5 ) { // "Sudden Death" round
    if ( penalty.results[0].length != penalty.results[1].length ) return null;
    if ( penalty.results[0].at(-1) == penalty.results[1].at(-1) ) return null;
    return penalty.results[0].at(-1) ? 2 : 1;
  };

  // One team has more penalties scored than the other team even if the other team scores all the remaining penalties
  if ( penalty.results[0].filter((result) => result).length > 5 - penalty.results[1].filter((result) => !result).length ) {
    return 2;
  } else if ( penalty.results[1].filter((result) => result).length > 5 - penalty.results[0].filter((result) => !result).length ) {
    return 1;
  };
  return null;
}

// Move a player to a team (if needed)
async function updateTeamPlayers(specPlayer) {
  if ( (room.getScores() === null) || isTakingPenalty ) return;

  await navigator.locks.request("update_team_players", async lock => {
    let players = getNonAfkPlayers();
    // Find team that needs new player the most
    let redPlayersCount = players.filter((player) => player.team == 1).length;
    let bluePlayersCount = players.filter((player) => player.team == 2).length;
    if ( (redPlayersCount >= 5) && (bluePlayersCount >= 5) ) return; // Enough players for 2 teams
    let missingTeam = ( redPlayersCount > bluePlayersCount ) ? 2 : 1;

    if ( !specPlayer ) {
      // Get a bench player (like Penaldo)
      specPlayer = players.find((player) => player.team == 0);
      if ( !specPlayer ) return; // No players left in the Spectators
    }

    await room.setPlayerTeam(specPlayer.id, missingTeam);
    if ( MODE == "pick" ) {
      room.sendAnnouncement(`${specPlayer.name} đã được tự động thay vào đội, dùng !sub để thay người`, captains[missingTeam], YELLOW);
    };
  });
}

// Update information to monitor last kickers, possession and passing accuracy
function updateBallKick(player) {
  if ( !isPlaying ) return;
  // Update information about last players who kicked the ball
  lastKicked.unshift(player);
  lastKicked.pop();
  ballProperties.unshift(room.getDiscProperties(0));
  ballProperties.pop();
  // Get the previous kicker
  let prevKicker = lastKicked[1];
  // If the previous kick was a shot on goal, check whether it's blocked by this kick and exclude that shot from "shots on target" if it is
  if ( (prevShootedTeam != 0) && (prevShootedTeam != player.team) ) {
    if ( getDistance(ballProperties[0].x - ballProperties[1].x, ballProperties[0].y - ballProperties[1].y) < BALL_RADIUS * 2 ) {
      game.teams[prevShootedTeam].shotsOnTarget--;
    };
    prevShootedTeam = 0;
  };

  // The x position value of the opponent's goal
  let xOpponentGoal = ( player.team == 1 ) ? GOAL_LINE[0] : -GOAL_LINE[0];
  if ( xOpponentGoal * ballProperties[0].xspeed > 0 ) { // It's a kick toward the opponent goal
    // Check if it's shot on target
    if (
      (Math.abs(ballProperties[0].x + ballProperties[0].xspeed * 99.762) > GOAL_LINE[0]) && // At this speed, the ball would cross the goal line
      (Math.abs(ballProperties[0].y + ballProperties[0].yspeed / ballProperties[0].xspeed * (xOpponentGoal - ballProperties[0].x)) < GOAL_LINE[1]) // It's on target (not really accurate because it might hit the post)
    ) {
      game.teams[player.team].shotsOnTarget++;
      prevShootedTeam = player.team;
    };
  } else {
    // Switch to penalty shootout when it hits maximum added time
    let scores = room.getScores();
    if ( scores.time - scores.timeLimit > MAX_ADDED_TIME ) { // Maximum extra time exceeded
      startPenaltyShootout();
      return;
    };
  };

  // Update total kicks
  game.teams[player.team].kicks++;
  // Update accurate kicks
  if ( prevKicker === null ) { // Kick-off pass
    // Disallow pausing after kick-off
    canPause = false;
    return;
  };
  if ( player.team != prevKicker.team ) return; // Received the ball from an opponent player

  // Received the ball from a teammate, so the previous kick was a pass
  if ( player.id != prevKicker.id ) game.teams[player.team].passes++;
  // Received the ball from a teammate or from yourself, so the previous kick kept the possession
  game.teams[player.team].possessedKicks++;
}

// Change captain of a specific team
async function updateCaptain(teamId, newCaptain) {
  await navigator.locks.request("update_captain", async lock => {
    // Choose a random captain from the current team
    if ( !newCaptain ) {
      // Exclude former captain and AFK players
      let players = getNonAfkPlayers().filter((player) => player.id != captains[teamId]);
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
    } else {
      // Move old captain to the bottom of the team list to prevent being re-selected as the captain next time
      room.reorderPlayers([oldCaptainId], false);
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

// Under certain conditions, automatically pick, start the game and return true
function autoPick() {
  let specPlayers = [];
  let redPlayersCount = 0;
  let bluePlayersCount = 0;
  room.getPlayerList().forEach(function(player) {
    if ( afkList.has(player.id) ) return;
    switch ( player.team ) {
      case 0:
        specPlayers.push(player);
        break;
      case 1:
        redPlayersCount++;
        break;
      case 2:
        bluePlayersCount++;
    };
  });
  if ( (specPlayers.length > 1) && (Math.abs(redPlayersCount - bluePlayersCount) < specPlayers.length) ) return false;

  // Move all players to the missing team
  for (player of specPlayers) {
    room.setPlayerTeam(player.id, pickTurn);
  };
  room.startGame();
  return true;
}

// Request a pick from the most needed team
function requestPick() {
  if ( room.getScores() !== null ) return; // Game started
  let players = room.getPlayerList();
  let redPlayersCount = players.filter((player) => player.team == 1).length;
  let bluePlayersCount = players.filter((player) => player.team == 2).length;
  // Enough players for 2 teams
  if ( (redPlayersCount >= 5) && (bluePlayersCount >= 5) ) {
    room.startGame();
    return;
  };
  pickTurn = ( redPlayersCount > bluePlayersCount ) ? 2 : 1;
  if ( autoPick() ) return;

  room.sendAnnouncement(`${TEAM_NAMES[pickTurn]} đang chọn người chơi...`, null, YELLOW);
  showSpecTable();
  room.sendAnnouncement("Đã đến lượt bạn chọn người chơi", captains[pickTurn], YELLOW, "bold", 2);
  // If captain doesn't pick in time, change captain
  timeouts.toPick = setTimeout(updateCaptain.bind(null, pickTurn), PICK_DEADLINE * 1000);
}

function helpFunc(value, player) {
  let allAlias = Object.keys(commands).filter((alias) => canUseCommand(commands[alias], player));
  allAlias = allAlias.map((alias) => "!" + alias)
  room.sendAnnouncement(`Các câu lệnh có sẵn: ${allAlias.join(", ")}`, player.id, GREEN);
  return false;
}

function discordFunc(value, player) {
  room.sendAnnouncement(`Vào server Discord của De Paul 🥰: ${DISCORD_LINK}`, null, GREEN, "normal", 0);
  return true;
}

function byeFunc(value, player) {
  room.kickPlayer(player.id, "Bye, sớm quay lại room nha 👋🏻🥺");
  return false;
}

function showStatsFunc(value, player) {
  let item = ( JSON.parse(localStorage.getItem(identities[player.id][0])) || { ...playerStats } );
  room.sendAnnouncement(`Thống kê trong tháng của ${player.name}:`, player.id, BLUE, "bold");
  room.sendAnnouncement(`★ Bàn thắng: ${item.goals}
 ↑ Kiến tạo: ${item.assists}
 ⁈ Bàn thắng phản lưới nhà: ${item.ownGoals}`, player.id, BLUE, "small-bold");
  return false;
}

function kickAfkFunc(value, player) {
  if ( !isPlaying ) {
    room.sendAnnouncement("Chỉ có thể báo cáo AFK khi trận đấu đang diễn ra", player.id, RED);
    return false;
  };

  trackAfk();
  room.sendAnnouncement("Đang theo dõi AFK, AFK sẽ sớm bị kick", null, GREEN);
  return true;
}

function specFunc(value, player) {
  if ( player.team == 0 ) {
    room.sendAnnouncement("Bạn đã ở Spectators", player.id, RED);
    return false;
  };

  room.sendAnnouncement("Bạn đã được di chuyển ra Spectators", player.id, GREEN);
  navigator.locks.request("update_captain", async lock => {
    if ( isPicking && !isCaptain(player.id) ) {
      showSpecTable();
    } else { // Replace with another player
      let newPlayer = getNonAfkPlayers().find((_player) => _player.team == 0);
      if ( newPlayer ) {
        await room.setPlayerTeam(newPlayer.id, player.team);
      };
    };
    await room.setPlayerTeam(player.id, 0);
  });
  return true;
}

function listCaptainsFunc(value, player) {
  (captains[1] != 0) && room.sendAnnouncement(`Đội trưởng của RED: ${room.getPlayer(captains[1]).name}`, null, GREEN, "normal", 0);
  (captains[2] != 0) && room.sendAnnouncement(`Đội trưởng của BLUE: ${room.getPlayer(captains[2]).name}`, null, GREEN, "normal", 0);
}

function pickFunc(value, player) {
  if ( !value ) {
    room.sendAnnouncement("Vui lòng cung cấp một mã số, tên hoặc tag hợp lệ (VD: !pick 2 hoặc !pick paul hoặc pick @De_Paul)", player.id, RED);
    return false;
  } else if ( !isPicking ) {
    room.sendAnnouncement("Lệnh không khả dụng ngay lúc này", player.id, RED);
    return false;
  } else if ( player.team != pickTurn ) {
    room.sendAnnouncement("Chưa đến lượt bạn chọn", player.id, RED);
    return false;
  };

  if ( isNaN(value) ) {
    var pickedPlayer = getPlayerByName(value);
  } else {
    var pickedPlayer = getPlayerByPos(value);
  };
  if ( pickedPlayer === undefined ) {
    room.sendAnnouncement("Người chơi không tồn tại hoặc đã rời đi", player.id, RED);
    return false;
  };
  if ( afkList.has(pickedPlayer.id) ) {
    room.sendAnnouncement("Người chơi đang ở trạng thái AFK", player.id, RED);
    return false;
  };
  if ( pickedPlayer.team != 0 ) {
    room.sendAnnouncement("Người chơi không ở Spectators", player.id, RED);
    return false;
  };
  clearTimeout(timeouts.toPick);
  pick(pickedPlayer, player.team);
  return false;
}

function predictFunc(prediction, player) {
  if ( player.team != 0 ) {
    room.sendAnnouncement("Cầu thủ không được tham gia dự đoán để tránh hiện tượng bán độ", player.id, RED);
    return false;
  };
  if ( !prediction ) {
    room.sendAnnouncement("Vui lòng cung cấp một tỉ số hợp lệ, có dạng RED-BLUE (VD: 3-1)", player.id, RED);
    return false;
  };
  let scores = room.getScores();
  if ( (scores === null) || (scores.time > PREDICTION_PERIOD) ) {
    room.sendAnnouncement("Đã hết thời hạn dự đoán tỉ số", player.id, RED);
    return false;
  };

  let score = prediction.split("-").map((goals) => parseInt(goals));
  if ( (score.length != 2) || score.includes(NaN) ) {
    room.sendAnnouncement("Tỉ số không hợp lệ, vui lòng đảm bảo tỉ số có dạng RED-BLUE (VD: 2-1)", player.id, RED);
    return false;
  };
  let scoreLimit = room.getScores().scoreLimit;
  if ( (scoreLimit != 0) && score.some((goals) => goals > scoreLimit) ) {
    room.sendAnnouncement(`Mỗi đội không thế ghi được nhiều hơn ${scoreLimit} bàn`, player.id, RED);
    return false;
  };
  if ( Object.values(predictions).filter((_prediction) => _prediction == prediction).length == 5 ) { // 5 people have already predicted this
    room.sendAnnouncement("Đã có 5 người dự đoán tỉ số này, vui lòng dự đoán tỉ số khác", player.id, RED);
    return false;
  };
  predictions[player.id] = prediction;
  room.sendAnnouncement(`${player.name} đã dự đoán tỉ số RED ${prediction} BLUE`, null, GREEN);
  return false;
}

function subFunc(value, player) {
  if ( room.getScores() === null ) {
    room.sendAnnouncement("Bạn chỉ có thể thay người khi trận đấu đang diễn ra", player.id, RED);
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
  };
  if ( inPlayer.team != 0 ) {
    room.sendAnnouncement("Chỉ có thể thay vào người chơi từ Spectators", player.id, RED);
    return false;
  };
  if ( afkList.has(inPlayer.id) ) {
    room.sendAnnouncement("Người chơi bạn muốn thay vào đang ở trạng thái AFK", player.id, RED);
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

function pauseFunc(value, player) {
  if ( !canPause ) {
    room.sendAnnouncement("Bạn không thể dừng game vào lúc này", player.id, RED);
    return false;
  };

  pausedBy = player.team;
  room.pauseGame(true);
  room.sendChat(`Trận đấu đã được tạm dừng bởi đội trưởng của ${TEAM_NAMES[player.team]} để thay người`);
  room.sendAnnouncement(`Bạn có ${PAUSE_TIMEOUT} giây để thay người, dùng !resume khi đã xong việc`, player.id, YELLOW);
  timeouts.toResume = setTimeout(room.pauseGame.bind(null, false), PAUSE_TIMEOUT * 1000);
  return false;
}

function resumeFunc(value, player) {
  if ( player.team != pausedBy ) {
    room.sendAnnouncement("Vui lòng đợi đội bạn thay người", player.id, RED);
    return false;
  };

  room.pauseGame(false);
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
  if ( afkList.has(assignedPlayer.id) ) {
    room.sendAnnouncement("Người chơi đang ở trạng thái AFK", player.id, RED);
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
  };

  let targetPlayer = getPlayerByName(value);
  if ( !targetPlayer ) {
    room.sendAnnouncement(`Không thể tìm thấy người chơi "${value}"`, player.id, RED);
    return false;
  };

  let index = yellowCards.indexOf(identities[targetPlayer.id][1]);
  if ( index != -1 ) { // Player has already received a yellow card
    yellowCards.splice(index, 1); // Clear the card
    room.kickPlayer(targetPlayer.id, "Bạn đã nhận 2 thẻ vàng", true);
    room.sendAnnouncement(`🟨🟨 ${targetPlayer.name} đã nhận thẻ vàng thứ 2 từ ${player.name} (BAN)`, null, YELLOW);
  } else {
    yellowCards.push(identities[targetPlayer.id][1]);
    room.sendAnnouncement(`🟨 ${targetPlayer.name} đã nhận một thẻ vàng từ ${player.name}, nhận 2 thẻ vàng người chơi sẽ bị ban`, null, YELLOW);
  };
  return false;
}

function muteFunc(value, player) {
  if ( !value ) {
    room.sendAnnouncement("Vui lòng cung cấp người chơi và thời hạn cấm chat (phút), bỏ trống hạn cấm nếu bạn muốn cấm vĩnh viễn (VD: !mute @ân 1 hoặc !mute paul)", player.id, RED);
    return false;
  };

  let [name, period] = value.split(" ", 2);
  let targetPlayer = getPlayerByName(name);
  if ( !targetPlayer ) {
    room.sendAnnouncement(`Không thể tìm thấy người chơi "${name}"`, player.id, RED);
    return false;
  };

  if ( period !== undefined ) {
    if ( isNaN(period) || period <= 0 ) {
      room.sendAnnouncement("Vui lòng cung cấp một thời hạn cấm chat hợp lệ (VD: !mute @De_Paul 3)", player.id, RED);
      return false;
    };
    room.sendAnnouncement(`Bạn đã bị cấm chat trong ${period} phút bởi ${player.name}`, targetPlayer.id, RED, "bold", 2);
    setTimeout(unmuteCallback.bind(null, identities[targetPlayer.id][1]), period * 60000);
  } else {
    room.sendAnnouncement(`Bạn đã bị cấm chat bởi ${player.id}`, targetPlayer.id, RED, "bold", 2);
  };
  room.sendAnnouncement(`${targetPlayer.name} đã bị cấm chat`, null, RED);
  muteList.add(identities[targetPlayer.id][1]);
  return false;
}

function unmuteFunc(value, player) {
  if ( !value ) {
    room.sendAnnouncement("Vui lòng cung cấp một người chơi hợp lệ (VD: !unmute @De_Paul hoặc !unmute paul)", player.id, RED);
    return false;
  };

  let targetPlayer = getPlayerByName(value);
  if ( !targetPlayer ) {
    room.sendAnnouncement(`Không thể tìm thấy người chơi "${value}"`, player.id, RED);
    return false;
  };

  muteList.delete(identities[targetPlayer.id][1]);
  room.sendAnnouncement(`${targetPlayer.name} đã có thể chat trở lại`, null, GREEN);
}

function clearMutesFunc(value, player) {
  muteList.clear();
  room.sendAnnouncement("Đã xóa các lệnh cấm chat", null, GREEN);
  return false;
}

function clearBansFunc(value, player) {
  room.clearBans();
  room.sendAnnouncement("Đã xóa các lượt ban", null, GREEN);
  return false;
}

function afkFunc(value, player) {
  if ( afkList.has(player.id) ) { // Escape AFK mode
    afkList.delete(player.id);
    room.sendAnnouncement(`${player.name} đã thoát chế độ AFK`, null, GREEN);
  } else {
    // Only allows 3 AFK players including the host
    if ( afkList.size == 3 ) {
      room.sendAnnouncement("Đã có quá nhiều người chơi AFK, bạn không thể AFK", player.id, RED);
      return false;
    }
    afkList.add(player.id);
    room.sendAnnouncement(`${player.name} đã chuyển sang chế độ AFK, dùng !afk lần nữa để thoát`, null, GREEN);
    // Move the AFK player to Spectators
    if ( player.team != 0 ) {
      room.setPlayerTeam(player.id, 0);
    } else if ( isPicking ) {
      showSpecTable();
    };
  };

  updateTeamPlayers();
  reorderPlayers();
  return false;
};

function processCommand(player, input) {
  // Get alias and value from command
  let splitIndex = input.indexOf(" ");
  splitIndex = ( splitIndex != -1 ) ? splitIndex : input.length;
  let [alias, value] = [input.slice(0, splitIndex), input.slice(splitIndex + 1).trimRight()];
  let command = commands[alias];
  if ( !command || !canUseCommand(command, player) ) {
    room.sendAnnouncement(`Không thể xác định lệnh !${alias}, dùng !help để xem các lệnh`, player.id, RED);
    return false;
  };

  return command[0](value, player);
}

function updatePlayerStats(player, type) {
  if ( identities[player.id] === undefined ) return; 
  // If player hasn't had stats yet, initialize an object
  let auth = identities[player.id][0];
  game.players[auth] = ( game.players[auth] || { ...playerReport } );
  game.players[auth].name = player.name;
  game.players[auth].forTeam = player.team;

  switch ( type ) {
    case 1: // Goal
      game.players[auth].goals++;
      break;
    case 2: // Assist
      game.players[auth].assists++;
      break;
    default: // Own goal
      game.players[auth].ownGoals++;
  };
}

// Update stats about goals, assists and own goals
function updateStats(team) {
  var [scorer, assister, preAssister] = lastKicked;
  if ( scorer === null ) return;

  let ball = ballProperties[0];
  // Not an own goal but probably a clearing/goalkeeping effort
  if (
    (scorer.team != team) && // It was an own goal
    (assister !== null) && // Someone's kick resulted in this goal
    (assister.team == team) && // The previous kick came from an opponent player
    (Math.abs(ball.x) > GOAL_LINE[0] - BALL_RADIUS * 4) // The gap between the ball and the goal-line was too small that it probably was an effort to clear the ball
  ) {
    // Correct the credits
    [scorer, assister] = [assister, preAssister];
    ball = ballProperties[1];
  };

  if ( scorer.team != team ) { // Own goal
    updatePlayerStats(scorer, 0);
    room.sendChat(`Một bàn phản lưới nhà do sai lầm của ${getTag(scorer.name)}`);
    return;
  };

  updatePlayerStats(scorer, 1);
  // Counting this shot as a "possessed kick"
  game.teams[scorer.team].possessedKicks++;
  // Design celebrating comment
  let hasScored = game.players[identities[scorer.id][0]].goals;
  let comment = SCORER_COMMENTARIES[hasScored] || `Thật điên rồ, bàn thắng thứ ${hasScored} trong trận đấu này của`;
  comment = comment.concat(" ", getTag(scorer.name));

  if (
    (assister !== null) &&
    (assister.id != scorer.id) && // Not a solo goal
    (assister.team == team) // Assisted by teammate
  ) {
    updatePlayerStats(assister, 2);
    let hasAssisted = game.players[identities[assister.id][0]].assists;
    if ( hasAssisted != 1 ) { // Multiple assists O_O
      comment = comment.concat(", ", `${getTag(assister.name)} đã có cho mình kiến tạo thứ ${hasAssisted} trong trận đấu`);
    } else {
      comment = comment.concat(", ", `đường kiến tạo từ ${getTag(assister.name)}`);
    };
  };

  room.sendChat(comment);
  // Calculate goal stats
  let speed = convertToMeters(getDistance(ball.xspeed, ball.yspeed) * 60); // There are 60 frames per second
  if ( Math.abs(ball.y) <= GOAL_LINE[1] ) {
    var distance = GOAL_LINE[0] - Math.abs(ball.x);
  } else {
    // Get the distance between the ball and the nearest post
    var distance = getDistance(GOAL_LINE[0] - Math.abs(ball.x), Math.abs(ball.y) - GOAL_LINE[1]);
  };
  distance = convertToMeters(distance);
  room.sendAnnouncement(`Khoảng cách: ${distance || "dưới 1"}m | Lực sút: ${speed} (m/s)`, null, GREEN, "small");
}

function saveStats() {
  for (const [auth, info] of Object.entries(game.players)) {
    let item = ( JSON.parse(localStorage.getItem(auth)) || { ...playerStats } );
    item.name = info.name;
    item.goals += info.goals;
    item.assists += info.assists;
    item.ownGoals += info.ownGoals;
    localStorage.setItem(auth, JSON.stringify(item));
  };
}

function reportStats() {
  let scoreline = ` RED ${prevScore} BLUE`;
  if ( penalty.index > 0 ) {
    scoreline += ` (Luân lưu: ${penalty.results[0].filter((result) => result).length}-${penalty.results[1].filter((result) => result).length})`;
  }
  room.sendAnnouncement(scoreline, null, YELLOW, "bold");

  // Possession stats
  let totalPossessedKicks = game.teams[1].possessedKicks + game.teams[2].possessedKicks;
  let redPossession = ~~(game.teams[1].possessedKicks / totalPossessedKicks * 100);
  let bluePossession = 100 - redPossession;
  let redSuccessRate = ~~(game.teams[1].possessedKicks / game.teams[1].kicks * 100);
  let blueSuccessRate = ~~(game.teams[2].possessedKicks / game.teams[2].kicks * 100);

  // Player stats information
  let redPlayerStats = [];
  let bluePlayerStats = [];
  for (const [_, info] of Object.entries(game.players)) {
    let msg = info.name + " (";
    if ( info.goals == 1 ) {
      msg += "⚽";
    } else if ( info.goals != 0 ) { // More than 1 goal
      msg += `${info.goals}⚽`;
    };
    if ( info.assists == 1 ) {
      msg += "👟";
    } else if ( info.assists != 0 ) { // More than 1 assist
      msg += `${info.assists}👟`;
    };
    if ( info.ownGoals == 1 ) {
      msg += "🥅";
    } else if ( info.ownGoals != 0 ) { // More than 1 own goal
      msg += `${info.ownGoals}🥅`;
    };
    msg += ")";

    switch ( info.forTeam ) {
      case 1:
        redPlayerStats.push(msg);
        break;
      case 2:
        bluePlayerStats.push(msg);
    };
  };

  // Generate a room message about game statistics
  let statsMsg = `Kiểm soát bóng: 🔴 ${redPossession}% - ${bluePossession}% 🔵
Sút trúng đích: 🔴 ${game.teams[1].shotsOnTarget} - ${game.teams[2].shotsOnTarget} 🔵
Lượt chuyền bóng: 🔴 ${game.teams[1].passes} - ${game.teams[2].passes} 🔵
Tỉ lệ xử lý bóng thành công: 🔴 ${redSuccessRate}% - ${blueSuccessRate}% 🔵`;
  if ( redPlayerStats.length != 0 ) {
    statsMsg += `\nRED: ${redPlayerStats.join("  •  ")}`;
  };
  if ( bluePlayerStats.length != 0 ) {
    statsMsg += `\nBLUE: ${bluePlayerStats.join("  •  ")}`;
  };
  statsMsg += `\nChuỗi bất bại: ${winningStreak} trận`;
  room.sendAnnouncement(statsMsg, null, YELLOW, "small-bold", 0);

  // Generate a Discord embed about game statistics
  let discordMsg = `\`\`\`ansi\n[2;31m${redPlayerStats.join("\n")}\`\`\`\n\`\`\`ansi\n[2;34m${bluePlayerStats.join("\n")}\`\`\``;
  let discordFields = [
    {
      name: "Thống kê",
      value: "=======================\n\n**Kiểm soát bóng**\n**Sút trúng đích**\n**Lượt chuyền bóng**\n**Tỉ lệ xử lý bóng thành công**",
      inline: true,
    },
    {
      name: "🔴 **RED**",
      value: `==============\n\n${redPossession}%\n${game.teams[1].shotsOnTarget}\n${game.teams[1].passes}\n${redSuccessRate}%`,
      inline: true,
    },
    {
      name: "🔵 **BLUE**",
      value: `==============\n\n${bluePossession}%\n${game.teams[2].shotsOnTarget}\n${game.teams[2].passes}\n${blueSuccessRate}%`,
      inline: true,
    },
    {
      name: "",
      value: `Chuỗi bất bại: ${winningStreak} trận`,
      inline: false,
    },
  ];
  sendWebhook(`🌟 ${scoreline}`, discordMsg, discordFields);
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
  var avatar = "⚽";
  var comment = "bàn thắng mang lại không nhiều giá trị";
  // Design a good comment :P
  if ( (scores.timeLimit != 0) && (scores.time > scores.timeLimit) ) { // Overtime goal
    scream = "VÀOOOOOOOO";
    // Pick a random comment
    comment = randomChoice(WINNING_GOAL_COMMENTARIES);
    avatar = "🏆";
  } else {
    comment = GOAL_COMMENTARIES[goalDiff] || comment;
  };

  room.sendChat(`${scream} ${scoreline}, ${comment}`);
  teamAvatarEffect(team, avatar);
}

function celebratePenalty(team) {
  if ( team == 1 ) {
    room.sendChat(randomChoice(PENALTY_GOAL_COMMENTARIES));
  } else {
    room.sendChat(randomChoice(PENALTY_MISS_COMMENTARIES));
  };
}

async function checkSpam(player, message) {
  if ( (message != lastMessage[0]) || (player.id != lastMessage[1]) ) { // The message is not spammy
    lastMessage = [message, player.id];
    duplicateMessagesCount = 0;
    return;
  };

  duplicateMessagesCount++;
  if ( duplicateMessagesCount >= MAX_DUPE_MESSAGES ) {
    muteFunc(`${player.name} 1`, room.getPlayer(0));
  };
}

// Track all players on the pitch to find and kick AFK players
function trackAfk() {
  // Track every player on the pitch
  room.getPlayerList().forEach(function(player) {
    if ( player.team == 0 ) return;
    let id = player.id;
    if ( timeouts.toAct[id] !== undefined ) return; // Player has already been monitored
    timeouts.toAct[id] = setTimeout(afkCallback.bind(null, id), AFK_DEADLINE * 1000);
  });
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
Discord: ${DISCORD_LINK}`;
  room.sendAnnouncement(msg, player.id, GREEN, "normal", 0);
  room.sendAnnouncement(`Số người chơi đang AFK: ${afkList.size - 1}`, player.id, YELLOW, "normal", 0);
  room.sendAnnouncement(NEW_UPDATE_MESSAGE, player.id, YELLOW, "small-italic", 0);
}

async function startPenaltyShootout() {
  isTakingPenalty = true;
  prevScore = Array(2).fill(room.getScores().red).join("-");
  // Store players' team and role (GK or not) for the penalty shootout
  let deepestPositions = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
  room.getPlayerList().forEach(function(player) {
    switch ( player.team ) {
      case 1:
        penalty.red[0].push(player.id);
        if ( player.position.x < deepestPositions[0] ) {
          penalty.blue[1] = player.id;
          deepestPositions[0] = player.position.x;
        };
        break;
      case 2:
        penalty.blue[0].push(player.id);
        if ( player.position.x > deepestPositions[1] ) {
          penalty.red[1] = player.id;
          deepestPositions[1] = player.position.x;
        };
    };
  });
  room.stopGame();
  room.sendChat("Vậy là những phút thi đấu chính thức của trận đấu đã hết, 2 đội sẽ bước đến loạt sút luân lưu");
  await new Promise(r => setTimeout(r, AFTER_GAME_REST * 1000));
  room.setTimeLimit(0);
  room.setScoreLimit(0);
  room.setCustomStadium(PENALTY_STADIUM);
  room.startGame();
  takePenalty();
}

async function endPenaltyShootout(loser) {
  isTakingPenalty = false;
  handlePostGame(loser);
  room.stopGame();
  room.setTimeLimit(5);
  room.setScoreLimit(5);
  room.setCustomStadium(STADIUM);
  // Put players back to where they were before the penalty shootout
  for (id of penalty.red[0]) {
    room.setPlayerTeam(id, 1);
  };
  for (id of penalty.blue[0]) {
    room.setPlayerTeam(id, 2);
  };
}

async function takePenalty() {
  let loser = getPenaltyLoser();
  // Found the winner in this penalty shootout
  if ( loser !== null ) {
    let winner = ( loser == 1 ) ? 2 : 1;
    room.sendChat(`Và đó cũng là dấu chấm hết, ${TEAM_NAMES[winner]} là những người chiến thắng, sau màn trình diễn đáng kinh ngạc của họ`);
    endPenaltyShootout(loser);
    return;
  };

  // Put previous penalty taker and goalkeeper back to the Spectators
  for (player of room.getPlayerList()) {
    if (player.team == 0) continue;
    await room.setPlayerTeam(player.id, 0);
  };
  // Switch to the next team to take the penalty
  if ( penalty.turn == 1 ) {
    penalty.turn = 2;
    var group = penalty.blue;
    room.setTeamColors(1, ...kits.blue);
    room.setTeamColors(2, ...GOALKEEPER_COLORS.red);
  } else {
    penalty.index++;
    penalty.turn = 1;
    var group = penalty.red;
    room.setTeamColors(1, ...kits.red);
    room.setTeamColors(2, ...GOALKEEPER_COLORS.blue);
  };

  let penaltyTaker = room.getPlayer(group[0][penalty.index % group[0].length]);
  if ( !penaltyTaker ) {
    return;
  };
  await room.setPlayerTeam(penaltyTaker.id, 1);
  await room.setPlayerTeam(group[1], 2);
  let penResults = [[], []];
  for (let i = 0; i < 2; i++) {
    penalty.results[i].forEach(function(result) {
      switch ( result ) {
        case ( true ):
          penResults[i].push("🟢");
          break;
        case ( false ):
          penResults[i].push("🔴");
      };
    });
    if ( penResults[i].length < 5 ) {
      penResults[i].push("⚪".repeat(5 - penResults[i].length));
    } else if ( penResults[i].length < Math.max(...penResults.map((results) => results.length)) ) {
      penResults[i].push("⚪");
    };
  };
  room.sendAnnouncement(` RED ${penResults[0].reverse().join("")} - ${penResults[1].join("")} BLUE`, null, BLUE, "bold");
  if ( (penalty.index == 5) && (penalty.turn == 1) ) {
    room.sendChat('Giờ ta sẽ đến loạt sút "Sudden Death", một đội thực hiện thành công và đội còn lại đá trượt thì kết quả sẽ được định đoạt');
  };
  room.sendChat(`Bây giờ ${getTag(penaltyTaker.name)} sẽ bước lên để thức hiện quả penalty`);
  room.sendAnnouncement(`Bạn có ${PENALTY_TIMEOUT} giây để thực hiện quả penalty`, penaltyTaker.id, YELLOW);
  timeouts.toTakePenalty = setTimeout(penaltyTimeoutCallback, PENALTY_TIMEOUT * 1000);
}

async function randPlayers() {
  // Prediction winners
  let predictionWinners = Object.keys(predictions).reduce(function(winners, id) {
    if ( predictions[id] == prevScore ) {
      winners.push(parseInt(id));
      room.sendAnnouncement("Chúc mừng bạn đã dự đoán đúng tỉ số, bạn đã nhận được 1 suất đá chính", id, GREEN, "bold", 2);
    };
    return winners;
  }, []);
  let prevWinner = ( prevLoser == 1 ) ? 2 : 1;
  // Get player list and suffle it
  let idList = getNonAfkPlayers().sort(function(player1, player2) {
    // Sort players of the winning team to be on top of the list so they will be picked up in the same team  
    if ( player1.team == prevWinner ) return -1;
    if ( player2.team == prevWinner ) return 1;
    // Prediction winners get advantages over others
    if ( predictionWinners.includes(player1.id) && !predictionWinners.includes(player2.id) ) return -1;
    if ( predictionWinners.includes(player2.id) && !predictionWinners.includes(player1.id) ) return 1;
    // Random order
    return Math.random() - 0.5;
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
  isPicking = true;
  pickTurn = 0; // Prevent `updateCaptain` calling `requestPick` when players haven't been moved to the Spectators yet
  // Move players to Spectators
  let players = room.getPlayerList();
  for (const player of players) {
    if ( (player.team != prevLoser) || isCaptain(player.id) ) continue;
    await room.setPlayerTeam(player.id, 0);
  };
  // Change captain of the losing team
  await updateCaptain(prevLoser);
  requestPick();
}

function reset() {
  game = JSON.parse(JSON.stringify(gameDefault));
  penalty = JSON.parse(JSON.stringify(penaltyDefault));
  predictions = {};
}

function handlePostGame(loser) {
  if ( loser == prevLoser ) {
    winningStreak++;
  } else {
    winningStreak = 1;
    prevLoser = loser;
  };
  reportStats();
}

room.onPlayerJoin = async function(player) {
  validatePlayer(player);
  saveIdentities(player);
  initiateChat(player);
  await updateTeamPlayers(player);
  reorderPlayers();
  if ( MODE == "pick" ) {
    // Assign captains if missing
    switch ( 0 ) {
      case captains[1]:
        updateCaptain(1, player);
        break;
      case captains[2]:
        updateCaptain(2, player);
    };
    isPicking && showSpecTable();
  };
}

room.onPlayerLeave = async function(player) {
  delete identities[player.id]; // Delete unused record
  if ( player.team != 0 ) {
    await updateTeamPlayers();
  } else if ( afkList.has(player.id) ) { // Player was in AFK list
    // Remove from AFK list
    afkList.delete(player.id);
  };

  if ( MODE == "pick" ) {
    // A captain left, assign another one
    if ( isCaptain(player.id) ) {
      await updateCaptain(player.team);
    };
    isPicking && !autoPick() && showSpecTable();
  };

  if ( !isTakingPenalty ) return;
  // A penalty taker left the room
  let index = penalty.red[0].indexOf(player.id);
  if ( index != -1 ) {
    if ( penalty.red[0].length == 1 ) {
      room.sendChat(`Toàn bộ cầu thủ sút luân lưu của RED đã rời phòng, RED đã bị xử thua`);
      endPenaltyShootout(1);
      return;
    };
    penalty.red[0].splice(index, 1);
    if ( penalty.blue[1] == player.id ) { // Player was RED's penalty goalkeeper
      penalty.blue[1] = penalty.red[0][0];
    };
  } else {
    index = penalty.blue[0].indexOf(player.id);
    if ( index == -1 ) return;
    if ( penalty.blue[0].length == 1 ) {
      room.sendChat(`Toàn bộ cầu thủ sút luân lưu của BLUE đã rời phòng, BLUE đã bị xử thua`);
      endPenaltyShootout(2);
      return;
    };
    penalty.blue[0].splice(index, 1);
    if ( penalty.red[1] == player.id ) { // Player was BLUE's penalty goalkeeper
      penalty.red[1] = penalty.blue[0][0];
    };
  };
}

room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
  if ( isTakingPenalty ) {
    // The current penalty taker was moved to the Spectators, consider it a failed penalty
    if ( (changedPlayer.team == 0) && (byPlayer.id != 0) && penalty.red[0].concat(penalty.blue[0]).includes(changedPlayer.id) ) {
      clearTimeout(timeouts.toTakePenalty);
      penaltyTimeoutCallback();
    };
    return;
  };

  if ( changedPlayer.team == 0 ) {
    // Remove player from AFK tracklist
    clearAfkRecord(changedPlayer.id);
    reorderPlayers();
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
  } else if ( afkList.has(changedPlayer.id) ) { // Move AFK players back to Spectators
    room.setPlayerTeam(changedPlayer.id, 0);
    room.sendAnnouncement("Người chơi đang ở trạng thái AFK", byPlayer.id, RED);
  } else if ( room.getScores() !== null) {
    room.sendAnnouncement("Bạn đã được thay vào sân", changedPlayer.id, BLUE, "small", 2);
    timeouts.toAct[changedPlayer.id] = setTimeout(afkCallback.bind(null, changedPlayer.id), AFK_DEADLINE * 1000);
  };
}

room.onPlayerBallKick = function(player) {
  if ( isTakingPenalty ) return;
  updateBallKick(player);
}

room.onTeamGoal = function(team) {
  if ( isTakingPenalty ) {
    clearTimeout(timeouts.toTakePenalty);
    penalty.results[penalty.turn - 1].push(team == 1);
    celebratePenalty(team);
    return;
  };

  isPlaying = false; // The game is basically "off" until a position reset
  celebrateGoal(team);
  updateStats(team);
}

room.onPositionsReset = function() {
  if ( isTakingPenalty ) {
    takePenalty();
    return;
  };

  isPlaying = true;
  ballProperties = [null, null];
  prevShootedTeam = 0;
  lastKicked = [null, null, null];
  // Allows captains to pause the game before kick-off
  if ( (MODE == "pick") && (room.getScores().time != 0) ) {
    canPause = true;
    for (captain of Object.values(captains)) {
      room.sendAnnouncement('Bạn có thể dừng game bằng lệnh !pause để thay người (dùng "!sub @thay_vào @thay_ra") trước khi kick-off', captain, YELLOW);
    };
  };
}

room.onPlayerChat = function(player, message) {
  clearAfkRecord(player.id);
  // Perform some validations on the message
  if ( !player.admin && ALLOWED_COMMANDS.every((command) => !message.startsWith(command)) ) {
    // Disallow Spectators from messaging when 2 teams are picking or taking penalty
    if ( (isPicking || isTakingPenalty) && (player.team == 0) ) {
      room.sendAnnouncement("Bạn chưa thể chat vào lúc này", player.id, RED);
      return false;
    };
    checkSpam(player, message);
  };

  if ( isPicking && isCaptain(player.id) && Number.isInteger(Number(message)) ) {
    return pickFunc(message, player);
  };
  if ( message.startsWith("!") ) { // Indicating a command
    return processCommand(player, message.slice(1));
  };
  if ( muteList.has(identities[player.id][1]) ) {
    room.sendAnnouncement("Không thể chat, bạn đã bị cấm", player.id, RED);
    return false;
  };
  return true;
}

room.onPlayerActivity = function(player) {
  clearAfkRecord(player.id);
}

room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {
  // Log this for admin to monitor kicking activity
  let action = ban ? "banned" : "kicked";
  console.log(`${kickedPlayer.name} was ${action} by ${byPlayer.name} (reason: ${reason})`);
}

room.onTeamVictory = function(scores) {
  isPlaying = false;
  let loser = (scores.red > scores.blue) ? 2 : 1;
  prevScore = `${scores.red}-${scores.blue}`;
  handlePostGame(loser);
}

room.onGameStart = function(byPlayer) {
  isPlaying = true;
  isPicking = false;
  if ( isTakingPenalty ) {
    return;
  };
  reset();
  // Stop forcing captain to pick
  clearTimeout(timeouts.toPick);
  setRandomColors();
  trackAfk();
  room.sendChat("Vậy là trận đấu đã chính thức được bắt đầu");
  if ( MODE == "rand" ) {
    room.sendChat(`Các quý vị khán giả có ${PREDICTION_PERIOD} giây đầu trận để dự đoán tỉ số và được đá trận sau nếu đoán đúng, cú pháp "!predict RED-BLUE" (VD: !predict 1-2)`);
  };
}

room.onGameStop = async function(byPlayer) {
  clearAfkRecords(); // Stop monitoring AFK when the game is stopped
  if ( getNonAfkPlayers().length >= 8 ) saveStats(); // Save stats of the previous game
  if ( (byPlayer !== null) && (byPlayer.id != 0) ) { // It wasn't a game over or stopped by host player
    isPlaying = false;
    room.sendChat("Trận đấu đã bị hủy bỏ vì thời tiết xấu");
    return;
  };
  await new Promise(r => setTimeout(r, AFTER_GAME_REST * 1000)); // Have a little rest
  if ( room.getScores() !== null ) return;
  if ( MODE == "rand" ) {
    randPlayers();
  } else {
    pickPlayers();
  };
}

room.onGamePause = function(byPlayer) {
  isPlaying = false;
  clearAfkRecords(); // Stop monitoring AFK when the game is paused
}

room.onGameUnpause = function(byPlayer) {
  isPlaying = true;
  canPause = false;
}
