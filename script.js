const ADMIN_PASSWORD = "paul0dz";
const MODE = "pick"; // can be "rand" or "pick"
const AFK_DEADLINE = 7;
const PICK_DEADLINE = 22;
const PAUSE_TIMEOUT = 15;
const PENALTY_TIMEOUT = 10;
const AFTER_GAME_REST = 2.5;
const PREDICTION_PERIOD = 20;
const MAX_ADDED_TIME = 210;
const MAX_DUPE_MESSAGES = 3;
const RED = 0xFF0000;
const GREEN = 0x00FF00;
const BLUE = 0x00BFFF;
const YELLOW = 0xFFEA00;
const TEAM_NAMES = {
  1: "RED",
  2: "BLUE",
};
const COLOR_CODES = [
  [[60, 0xFFCC00, [0xE83030]], [60, 0xFFCC00, [0x004170]]],
  [[60, 0xFFFFFF, [0xFF4A4A]], [60, 0xFFFFFF, [0x5ECFFF]]],
  [[60, 0xFFFFFF, [0xD60419]], [60, 0xFFFFFF, [0x0099FF]]],
  [[0, 0xF7FFF2, [0xE00202, 0xB00101, 0x800000]], [0, 0xF7FFF2, [0x00F7FF, 0x00D1D1, 0x00A7AD]]],
  [[90, 0xF7FFF2, [0xFF2121, 0xFF5757, 0xFC9595]], [90, 0xF7FFF2, [0x00C3FF, 0x45E0FF, 0xB5F5FC]]],
  [[45, 0xFFFFFF, [0x000000, 0xFF0000, 0x000000]], [45, 0x808080, [0xFFFFFF, 0x0000FF, 0xFFFFFF]]],
  [[45, 0xFFFFFF, [0xD60000, 0x000000, 0xD60000]], [45, 0xFFFFFF, [0x0058A3, 0x000000, 0x0058A3]]],
  [[-45, 0xFFCC00, [0xD10000, 0x8C0000, 0xD10000]], [-45, 0xFFCC00, [0x00DDFF, 0x87E3FF, 0x00DDFF]]],
];
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
const STADIUM = '{"name":"De Paul Stadium","width":900,"height":404,"spawnDistance":310,"bg":{"type":"grass","width":793,"height":346,"kickOffRadius":95,"cornerRadius":0,"color":"718B5B"},"vertexes":[{"x":-793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":404,"trait":"kickOffBarrier"},{"x":0,"y":95,"trait":"kickOffBarrier"},{"x":0,"y":-95,"trait":"line"},{"x":0,"y":-404,"trait":"kickOffBarrier"},{"x":-840,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":840,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-840,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":840,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-793,"y":-271,"trait":"line"},{"x":-572,"y":-50,"trait":"line"},{"x":793,"y":-271,"trait":"line"},{"x":572,"y":-50,"trait":"line"},{"x":-793,"y":271,"trait":"line"},{"x":-572,"y":50,"trait":"line"},{"x":793,"y":271,"trait":"line"},{"x":572,"y":50,"trait":"line"},{"x":793,"y":346,"bCoef":1,"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"trait":"ballArea"},{"x":0,"y":346,"bCoef":0,"trait":"line"},{"x":0,"y":-346,"bCoef":0,"trait":"line"},{"x":0,"y":95,"trait":"kickOffBarrier","_selected":"segment","_data":{"mirror":{}}},{"x":0,"y":-95,"trait":"kickOffBarrier","_selected":"segment","_data":{"mirror":{}}},{"x":802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":6,"v1":13,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":1,"v1":14,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":5,"v1":15,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":12,"v1":14,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-840},{"v0":13,"v1":15,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":585},{"v0":16,"v1":17,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":18,"v1":19,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":20,"v1":21,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":22,"v1":23,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":17,"v1":21,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-600},{"v0":19,"v1":23,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":572},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":0,"v1":24,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":290},{"v0":3,"v1":25,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-290},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":29,"v1":28,"curve":180.43079330521417,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[0,-95],"b":[0,95],"curve":180.43079330521417,"radius":95.00067131878964,"center":[0.3571428571409862,0],"from":-1.574555707580645,"to":1.574555707580645}}},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":32,"v1":33,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":34,"v1":35,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":36,"v1":37,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614}],"goals":[{"p0":[-802,-95],"p1":[-802,95],"team":"red"},{"p0":[802,95],"p1":[802,-95],"team":"blue"}],"discs":[{"radius":4.5,"pos":[-793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":4.5,"pos":[-793,-95],"color":"FFFFFF","trait":"goalPost"},{"radius":4.5,"pos":[793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":4.5,"pos":[793,-95],"color":"FFFFFF","trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,-346],"b":[900,-346]}}},{"normal":[0,-1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,346],"b":[900,346]}}},{"normal":[0,1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[900,-404]}}},{"normal":[0,-1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,404],"b":[900,404]}}},{"normal":[1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[-900,404]}}},{"normal":[-1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[900,-404],"b":[900,404]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"invMass":0,"bCoef":1.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.65,"bCoef":0.35},"ballPhysics":{"radius":6.55,"color":"FFDEAD","bCoef":0.465,"invMass":1.4},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}';
const PENALTY_STADIUM = '{"name":"Penalty Shootout 2 0 from HaxMaps (updated by De Paul)","width":400,"height":250,"spawnDistance":300,"bg":{"type":"grass","width":500,"height":500,"kickOffRadius":10,"cornerRadius":0},"vertexes":[{"x":0,"y":-255,"trait":"green"},{"x":0,"y":-190,"trait":"green"},{"x":0,"y":-129,"trait":"green"},{"x":0,"y":-64,"trait":"green"},{"x":0,"y":0,"trait":"green"},{"x":0,"y":65,"trait":"green"},{"x":0,"y":129,"trait":"green"},{"x":0,"y":192,"trait":"green"},{"x":0,"y":255,"trait":"green"},{"x":-335,"y":-10,"trait":"white"},{"x":-335,"y":10,"trait":"white"},{"x":-347,"y":-10,"trait":"white"},{"x":-347,"y":10,"trait":"white"},{"x":-360,"y":-10,"trait":"white"},{"x":-347,"y":0,"trait":"white"},{"x":-360,"y":10,"trait":"white"},{"x":-323,"y":-10,"trait":"white"},{"x":-323,"y":10,"trait":"white"},{"x":-310,"y":-10,"trait":"white"},{"x":-323,"y":0,"trait":"white"},{"x":-310,"y":10,"trait":"white"},{"x":-335,"y":-35,"trait":"red"},{"x":-335,"y":35,"trait":"red"},{"x":-335,"y":-40,"trait":"white"},{"x":-335,"y":40,"trait":"white"},{"x":-335,"y":-45,"trait":"blue"},{"x":-335,"y":45,"trait":"blue"},{"x":0,"y":-15,"trait":"powerboost"},{"x":0,"y":15,"trait":"powerboost"},{"x":0,"y":-10,"trait":"white"},{"x":0,"y":10,"trait":"white"},{"x":0,"y":-7,"trait":"white"},{"x":0,"y":7,"trait":"white"},{"x":0,"y":-4,"trait":"white"},{"x":0,"y":4,"trait":"white"},{"x":0,"y":-2,"trait":"white"},{"x":0,"y":2,"trait":"white"},{"x":300,"y":-500,"trait":"white"},{"x":300,"y":500,"trait":"white"},{"x":150,"y":-200,"trait":"white"},{"x":300,"y":-200,"trait":"white"},{"x":150,"y":200,"trait":"white"},{"x":300,"y":200,"trait":"white"},{"x":-150,"y":-500,"trait":"white"},{"x":-150,"y":500,"trait":"white"},{"x":-150,"y":-190,"trait":"white"},{"x":-150,"y":190,"trait":"white"},{"x":300,"y":-100,"trait":"goalnet"},{"x":358,"y":-98,"trait":"goalnet"},{"x":364,"y":0,"trait":"goalnet"},{"x":358,"y":98,"trait":"goalnet"},{"x":300,"y":100,"trait":"goalnet"},{"x":400,"y":-150,"trait":"white"},{"x":410,"y":0,"trait":"white"},{"x":400,"y":150,"trait":"white"},{"x":-250,"y":-190,"trait":"penArea"},{"x":-50,"y":-190,"trait":"penArea"},{"x":-50,"y":190,"trait":"penArea"},{"x":-250,"y":190,"trait":"penArea"},{"x":285,"y":-100,"trait":"gkArea"},{"x":285,"y":100,"trait":"gkArea"},{"x":315,"y":-100,"trait":"gkArea"},{"x":315,"y":-15,"trait":"gkArea"},{"x":500,"y":-15,"trait":"gkArea"},{"x":500,"y":15,"trait":"gkArea"},{"x":315,"y":15,"trait":"gkArea"},{"x":315,"y":100,"trait":"gkArea"},{"x":-341,"y":65,"trait":"white"},{"x":-347,"y":65,"trait":"white"},{"x":-347,"y":57,"trait":"white"},{"x":-341,"y":57,"trait":"white"},{"x":-337,"y":65,"trait":"white"},{"x":-336,"y":65,"trait":"white"},{"x":-328,"y":54,"trait":"white"},{"x":-328,"y":65,"trait":"white"}],"segments":[{"v0":0,"v1":1,"trait":"darkgreen"},{"v0":1,"v1":2,"trait":"lightgreen"},{"v0":2,"v1":3,"trait":"darkgreen"},{"v0":3,"v1":4,"trait":"lightgreen"},{"v0":4,"v1":5,"trait":"darkgreen"},{"v0":5,"v1":6,"trait":"lightgreen"},{"v0":6,"v1":7,"trait":"darkgreen"},{"v0":7,"v1":8,"trait":"lightgreen"},{"v0":9,"v1":10,"trait":"white","curve":180},{"v0":9,"v1":10,"trait":"white","curve":-180},{"v0":11,"v1":12,"trait":"white"},{"v0":13,"v1":14,"trait":"white"},{"v0":14,"v1":15,"trait":"white"},{"v0":16,"v1":17,"trait":"white"},{"v0":18,"v1":19,"trait":"white"},{"v0":19,"v1":20,"trait":"white"},{"v0":21,"v1":22,"trait":"red","curve":-180},{"v0":21,"v1":22,"trait":"red","curve":180},{"v0":23,"v1":24,"trait":"white","curve":-180},{"v0":23,"v1":24,"trait":"white","curve":180},{"v0":25,"v1":26,"trait":"blue","curve":-180},{"v0":25,"v1":26,"trait":"blue","curve":180},{"v0":27,"v1":28,"trait":"powerboost","curve":180},{"v0":29,"v1":30,"trait":"white","curve":-180},{"v0":29,"v1":30,"trait":"white","curve":180},{"v0":31,"v1":32,"trait":"white","curve":-180},{"v0":31,"v1":32,"trait":"white","curve":180},{"v0":33,"v1":34,"trait":"white","curve":-180},{"v0":33,"v1":34,"trait":"white","curve":180},{"v0":35,"v1":36,"trait":"white","curve":-180},{"v0":35,"v1":36,"trait":"white","curve":180},{"v0":35,"v1":36,"trait":"white"},{"v0":37,"v1":38,"trait":"white"},{"v0":39,"v1":41,"trait":"white"},{"v0":39,"v1":40,"trait":"white"},{"v0":41,"v1":42,"trait":"white"},{"v0":43,"v1":44,"trait":"white"},{"v0":45,"v1":46,"trait":"white","curve":-111},{"v0":47,"v1":48,"trait":"goalnet","curve":-10},{"v0":48,"v1":49,"trait":"goalnet","curve":-10},{"v0":49,"v1":50,"trait":"goalnet","curve":-10},{"v0":50,"v1":51,"trait":"goalnet","curve":-10},{"v0":48,"v1":52,"trait":"white"},{"v0":49,"v1":53,"trait":"white"},{"v0":50,"v1":54,"trait":"white"},{"v0":55,"v1":56,"trait":"penArea"},{"v0":56,"v1":57,"trait":"penArea","curve":110},{"v0":57,"v1":58,"trait":"penArea"},{"v0":59,"v1":60,"trait":"gkArea"},{"v0":61,"v1":62,"trait":"gkArea"},{"v0":62,"v1":63,"trait":"gkArea"},{"v0":64,"v1":65,"trait":"gkArea"},{"v0":65,"v1":66,"trait":"gkArea"},{"v0":67,"v1":68,"trait":"white"},{"v0":68,"v1":70,"trait":"white"},{"v0":69,"v1":70,"trait":"white","curve":180},{"v0":71,"v1":72,"trait":"white"},{"v0":73,"v1":74,"trait":"white","curve":150},{"v0":73,"v1":74,"trait":"white","curve":-150}],"goals":[{"p0":[300,100],"p1":[300,-100],"team":"blue"},{"p0":[300,-100],"p1":[-10,0],"team":"red"},{"p0":[300,100],"p1":[-10,0],"team":"red"}],"discs":[{"pos":[300,100],"trait":"goalPost"},{"pos":[300,-100],"trait":"goalPost"},{"pos":[400,-150],"trait":"stanchion"},{"pos":[410,0],"trait":"stanchion"},{"pos":[400,150],"trait":"stanchion"}],"planes":[{"normal":[0,1],"dist":-500,"bCoef":0.1},{"normal":[0,-1],"dist":-500,"bCoef":0.1},{"normal":[1,0],"dist":-266,"bCoef":0.1},{"normal":[-1,0],"dist":-500,"bCoef":0.1}],"traits":{"green":{"vis":false,"cMask":[]},"darkgreen":{"vis":true,"color":"6B915A","cMask":[]},"lightgreen":{"vis":true,"color":"7B9E6D","cMask":[]},"white":{"vis":true,"color":"FFFFFF","cMask":[]},"red":{"vis":true,"color":"DF0024","cMask":[]},"blue":{"vis":true,"color":"0085C7","cMask":[]},"powerboost":{"vis":false,"bCoef":-2.835,"cMask":["ball"],"color":"FFFF00"},"goalnet":{"vis":true,"bCoef":0.1,"color":"FFFFFF","cMask":["ball","red"]},"penArea":{"vis":false,"bCoef":0,"cMask":["red"],"color":"DF0024"},"gkArea":{"vis":false,"bCoef":1,"cMask":["blue"],"color":"0085C7"},"goalPost":{"radius":5,"invMass":0,"bCoef":1.3,"color":"FFFFFF"},"stanchion":{"radius":3,"invMass":0,"bCoef":1,"cMask":["ball"],"color":"FFFFFF"}},"playerPhysics":{"acceleration":0.11}}';

// Analyze the stadium
let parsedStadium = JSON.parse(STADIUM);
const GOAL_LINE = parsedStadium.goals[0].p0.map((coordinate) => Math.abs(coordinate)); // Both x and y values are positive numbers
const BALL_RADIUS = parsedStadium.ballPhysics.radius || 10;
delete parsedStadium; // Free the memory

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
  bb: [byeFunc, 0, ["rand", "pick"]],
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
  clearbans: [clearBansFunc, 2, ["rand", "pick"]],
  assigncap: [assignCaptainFunc, 2, ["pick"]],
};
var afkList = new Set([0]); // Host player is always in AFK mode
var duplicateMessagesCount = 0;
var isPlaying = false;
var isPicking = false;
var isTakingPenalty = false;
var canPause = false;
var winningStreak = 0;
var prevLoser = 1;
var pickTurn = 0;
var captains = {1: 0, 2: 0};
var prevScore = null;
var predictions = {};
var lastKicked = [null, null, null]; // Last players who kicked the ball
var lastMessage = [null, null]; // Last message and the player ID of the sender
var prevShootedTeam = 0;
var ballProperties = null;
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

// Kick player if player has a duplicate tag
function validateTag(player) {
  let tag = getTag(player.name.trim());
  if ( room.getPlayerList().some((_player) => (_player.id != player.id) && (getTag(_player.name.trim()) == tag)) ) {
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

// Get the distance knowing the coordinates of 2 points
function getDistance(x, y) {
  // Use Pythagoras
  return Math.sqrt(x ** 2 + y ** 2);
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
  number--;
  return getNonAfkPlayers().filter((player) => player.team == 0)[number];
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
  let colors = randomChoice(COLOR_CODES);
  room.setTeamColors(1, ...colors[0]);
  room.setTeamColors(2, ...colors[1]);
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

function penaltyTimeoutCallback() {
  if ( !isTakingPenalty ) return;
  room.sendChat("Cầu thủ đã không thực hiện penalty trong thời gian quy định");
  // Count as a miss if player doesn't perform the penalty in time
  penalty.results[penalty.turn - 1].push(false);
  takePenalty();
}

// Returns the team that lost the penalty shootout (if there is one)
function getPenaltyLoser() {
  let redPenalties = penalty.results[0];
  let bluePenalties = penalty.results[1];

  if ( penalty.index >= 5 ) { // "Sudden Death" round
    if (redPenalties.length != bluePenalties.length) return null;
    if (redPenalties.at(-1) == bluePenalties.at(-1)) return null;
    return redPenalties.at(-1) ? 2 : 1;
  }

  // One team has more penalties scored than the other team even if the other team scores all the remaining penalties
  if ( redPenalties.filter((result) => result).length > 5 - bluePenalties.filter((result) => !result).length ) {
    return 2;
  } else if ( bluePenalties.filter((result) => result).length > 5 - redPenalties.filter((result) => !result).length ) {
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
    timeouts.toAct[specPlayer.id] = setTimeout(afkCallback.bind(null, specPlayer.id), AFK_DEADLINE * 1000);
    if ( MODE == "pick" ) {
      room.sendAnnouncement(`${specPlayer.name} đã được tự động thay vào đội, dùng !sub để thay người`, captains[missingTeam], YELLOW);
    };
  });
}

// Update information to monitor last kickers, possession and passing accuracy
function updateBallKick(player) {
  if ( !isPlaying ) return;
  // Get properties of the ball
  let newBallProperties = room.getDiscProperties(0);
  // If the previous kick was a shot on goal, check whether it's blocked by this kick and exclude that shot from "shots on target" if it is
  if ( prevShootedTeam != 0 ) {
    if ( getDistance(newBallProperties.x - ballProperties.x, newBallProperties.y - ballProperties.y) < BALL_RADIUS * 2 ) {
      game.teams[prevShootedTeam].shotsOnTarget--;
    };
    prevShootedTeam = 0;
  };
  ballProperties = newBallProperties;

  // The x position value of the opponent's goal
  let xOpponentGoal = ( player.team == 1 ) ? GOAL_LINE[0] : -GOAL_LINE[0];
  if ( xOpponentGoal * ballProperties.xspeed > 0 ) { // It's a kick toward the opponent goal
    // Check if it's shot on target
    if (
      (Math.abs(ballProperties.x + ballProperties.xspeed * 99.762) > GOAL_LINE[0]) && // At this speed, the ball would cross the goal line
      (Math.abs(ballProperties.y + ballProperties.yspeed / ballProperties.xspeed * (xOpponentGoal - ballProperties.x)) < GOAL_LINE[1]) // It's on target (not really accurate because it might hit the post)
    ) {
      game.teams[player.team].shotsOnTarget++;
      prevShootedTeam = player.team;
    };
  } else {
    // Switch to penalty shootout when it hits maximum added time
    let scores = room.getScores();
    if (
      (scores.time - scores.timeLimit > MAX_ADDED_TIME) && // Maximum extra time exceeded
      (room.getPlayerList().filter((player) => player.team != 0).length == 10) // Enough players for a penalty shootout
    ) {
      startPenaltyShootout();
      return;
    };
  };

  // Update information about last players who kicked the ball
  lastKicked.unshift(player);
  lastKicked.pop();
  // Get the previous kicker
  let prevKicker = lastKicked[1];

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
  if (player.id != prevKicker.id) game.teams[player.team].passes++;
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
  let players = getNonAfkPlayers();
  let specPlayers = players.filter((player) => player.team == 0);
  let redPlayersCount = players.filter((player) => player.team == 1).length;
  let bluePlayersCount = players.filter((player) => player.team == 2).length;
  // Enough players for 2 teams
  if ( (redPlayersCount >= 5) && (bluePlayersCount >= 5) ) {
    room.startGame();
    return;
  };

  pickTurn = ( redPlayersCount > bluePlayersCount ) ? 2 : 1;
  // Players in Spectators are enough to fit in the missing team
  if ( (Math.abs(redPlayersCount - bluePlayersCount) >= specPlayers.length) || (specPlayers.length == 1) ) {
    // Move all players to the missing team
    for (player of specPlayers) {
      room.setPlayerTeam(player.id, pickTurn);
    };
    room.startGame();
    return;
  };

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
  room.sendAnnouncement("Vào server Discord của De Paul 🥰: https://discord.gg/DYWZFFsSYu", null, GREEN, "normal", 0);
  return true;
}

function byeFunc(value, player) {
  room.kickPlayer(player.id, "Bye, sớm quay lại room nha 👋🏻🥺");
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
    if ( timeouts.toAct[id] !== undefined ) return; // Player has already been monitored
    timeouts.toAct[id] = setTimeout(afkCallback.bind(null, id), AFK_DEADLINE * 1000);
  });
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
    // Replace with another player
    let newPlayer = getNonAfkPlayers().find((_player) => _player.team == 0);
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
  if ( !value ) {
    room.sendAnnouncement("Vui lòng cung cấp một mã số, tên hoặc tag hợp lệ (VD: !pick 2 hoặc !pick paul hoặc pick @De_Paul)", player.id, RED);
    return false;
  } else if ( room.getScores() !== null ) {
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

  room.pauseGame(true);
  room.sendChat(`Trận đấu đã được tạm dừng bởi đội trưởng của ${TEAM_NAMES[player.team]} để thay người`);
  room.sendAnnouncement(`Bạn có ${PAUSE_TIMEOUT} giây để thay người, dùng !resume khi bạn đã xong việc`, player.id, YELLOW);
  timeouts.toResume = setTimeout(room.pauseGame.bind(null, false), PAUSE_TIMEOUT * 1000);
  return false;
}

function resumeFunc(value, player) {
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
  var [scorer, assister, preAssister] = lastKicked;
  // Not an own goal but probably a clearing/goalkeeping effort
  if ( (scorer.team != team) && (Math.abs(ballProperties.x) > GOAL_LINE - BALL_RADIUS * 4) && (assister !== null) ) {
    // Correct the credits
    [scorer, assister] = [assister, preAssister];
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
  let comment = SCORER_COMMENTARIES[hasScored] || `Thật điên rồ, bàn thắng thứ ${hasScored} trong trận đấu này của`;
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
  let speed = convertToMeters(getDistance(ballProperties.xspeed, ballProperties.yspeed) * 60); // There are 60 frames per second
  if ( Math.abs(ballProperties.y) <= GOAL_LINE[1] ) {
    var distance = GOAL_LINE[0] - Math.abs(ballProperties.x);
  } else {
    // Get the distance between the ball and the nearest post
    var distance = getDistance(GOAL_LINE[0] - Math.abs(ballProperties.x), Math.abs(ballProperties.y) - GOAL_LINE[1]);
  };
  distance = convertToMeters(distance);
  room.sendAnnouncement(`Khoảng cách: ${distance || "dưới 1"}m | Lực sút: ${speed} (m/s)`, null, GREEN, "small");
}

function reportStats() {
  let scoreline = ` RED ${prevScore} BLUE`;
  if ( penalty.index > 0 ) {
    scoreline += ` (Luân lưu: ${penalty.results[0].filter((result) => result).length}-${penalty.results[1].filter((result) => result).length})`;
  }
  room.sendAnnouncement(scoreline, null, YELLOW, "bold");

  let stats = "";
  // Possession stats
  let totalPossessedKicks = game.teams[1].possessedKicks + game.teams[2].possessedKicks;
  let redPossession = ~~(game.teams[1].possessedKicks / totalPossessedKicks * 100);
  let bluePossession = 100 - redPossession;
  stats = stats.concat(`Kiểm soát bóng: 🔴 ${redPossession}% - ${bluePossession}% 🔵`);
  // Shooting stats
  stats = stats.concat("\n", `Sút trúng đích: 🔴 ${game.teams[1].shotsOnTarget} - ${game.teams[2].shotsOnTarget} 🔵`);
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
      msg += "⚽";
    } else if ( stats.goals != 0 ) { // More than 1 goal
      msg += `${stats.goals}⚽`;
    };
    if ( stats.assists == 1 ) {
      msg += "👟";
    } else if ( stats.assists != 0 ) { // More than 1 assist
      msg += `${stats.assists}👟`;
    };
    if ( stats.ownGoals == 1 ) {
      msg += "🥅";
    } else if ( stats.ownGoals != 0 ) { // More than 1 own goal
      msg += `${stats.ownGoals}🥅`;
    };
    msg += ")";

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
  room.sendAnnouncement(`Số người chơi đang AFK: ${afkList.size - 1}`, player.id, YELLOW, "normal", 0);
}

async function startPenaltyShootout() {
  isTakingPenalty = true;
  room.getPlayerList().forEach(function(player) {
    switch ( player.team ) {
      case 1:
        penalty.red[0].push(player.id);
        penalty.blue[1] = player.id;
        break;
      case 2:
        penalty.blue[0].push(player.id);
        penalty.red[1] = player.id;
    };
  });
  let scores = room.getScores();
  prevScore = `${scores.red}-${scores.blue}`;
  room.stopGame();
  room.sendChat("Vậy là những phút thi đấu chính thức của trận đấu đã hết, 2 đội sẽ bước đến loạt sút luân lưu");
  room.sendChat("Lưu ý: bất kì cầu thủ nào trong 2 đội rời đi loạt luân lưu sẽ kết thúc và phấn thắng tính cho đội kia");
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
  } else {
    penalty.index++;
    penalty.turn = 1;
    var group = penalty.red;
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
  if ( (penalty.index == 6) && (penalty.turn == 1) ) {
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
  pickTurn = 0;
  // Move players to Spectators
  let players = room.getPlayerList();
  for (let player of players) {
    if ( (player.team != prevLoser) || isCaptain(player.id) ) continue;
    await room.setPlayerTeam(player.id, 0);
  };
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
  validateTag(player);
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
    if ( isPicking ) showSpecTable();
  };
}

room.onPlayerLeave = async function(player) {
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
    // There are no players left in Spectators
    if ( !room.getPlayerList().some((player) => (player.team == 0) && !afkList.has(player.id)) ) {
      room.startGame();
    };
    if ( isPicking ) showSpecTable();
  };

  // A penalty taker left, end the penalty shootout and give the win the other team
  if ( isTakingPenalty && penalty.red[0].concat(penalty.blue[0]).includes(player.id) ) {
    room.sendChat(`Một cầu thủ bên phía ${TEAM_NAMES[player.team]} đã rời phòng, ${TEAM_NAMES[player.team]} đã bị xử thua`);
    endPenaltyShootout(player.team);
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
  ballProperties = null;
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
  // Disallow Spectators from messaging when 2 teams are picking or taking penalty
  if ( (isPicking || isTakingPenalty) && (player.team == 0) && !player.admin && !message.startsWith("!login") ) {
    room.sendAnnouncement("Bạn chưa thể chat vào lúc này", player.id, RED);
    return false;
  }
  if ( !player.admin ) {
    checkSpam(player, message);
  };
  if ( message.startsWith("!") ) { // Indicating a command
    return processCommand(player, message.slice(1));
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
  room.sendChat("Vậy là trận đấu đã chính thức được bắt đầu");
  if ( MODE == "rand" ) {
    room.sendChat(`Các quý vị khán giả có ${PREDICTION_PERIOD} giây đầu trận để dự đoán tỉ số và được đá trận sau nếu đoán đúng, cú pháp "!predict RED-BLUE" (VD: !predict 1-2)`);
  };
}

room.onGameStop = async function(byPlayer) {
  clearAfkRecords(); // Stop monitoring AFK when the game is stopped
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
