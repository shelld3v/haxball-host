const ADMIN_PASSWORD = "pulapula";
const MODE = "pick"; // can be "rand" or "pick"
const AFK_DEADLINE = 10;
const PICK_DEADLINE = 25;
const FIRST_PICK_DEADLINE = 15;
const PAUSE_TIMEOUT = 15;
const PENALTY_TIMEOUT = 10;
const AFTER_GAME_REST = 2.5;
const PREDICTION_PERIOD = 60;
const MAX_ADDED_TIME = 90;
const NOTIFICATION_INTERVAL = 2 * 60;
const MIN_TIME_FOR_SURRENDER = 2 * 60;
const MAX_DUPE_MESSAGES = 2;
const MAX_PLAYER_RADIUS_REDUCTION = 2;
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
const TRAINING_COLOR = [60, 0x050505, [0xEDFFC2]];
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
const STADIUM = '{"name":"De Paul Stadium","width":900,"height":404,"spawnDistance":310,"bg":{"type":"grass","width":793,"height":346,"kickOffRadius":95,"cornerRadius":0,"color":"718B5B"},"vertexes":[{"x":-793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":404,"trait":"kickOffBarrier"},{"x":0,"y":95,"trait":"kickOffBarrier"},{"x":0,"y":-95,"trait":"line"},{"x":0,"y":-404,"trait":"kickOffBarrier"},{"x":-840,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":840,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-840,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":840,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-793,"y":-271,"trait":"line"},{"x":-572,"y":-50,"trait":"line"},{"x":793,"y":-271,"trait":"line"},{"x":572,"y":-50,"trait":"line"},{"x":-793,"y":271,"trait":"line"},{"x":-572,"y":50,"trait":"line"},{"x":793,"y":271,"trait":"line"},{"x":572,"y":50,"trait":"line"},{"x":793,"y":346,"bCoef":1,"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"trait":"ballArea"},{"x":0,"y":346,"bCoef":0,"trait":"line"},{"x":0,"y":-346,"bCoef":0,"trait":"line"},{"x":0,"y":95,"trait":"kickOffBarrier","_selected":"segment","_data":{"mirror":{}}},{"x":0,"y":-95,"trait":"kickOffBarrier","_selected":"segment","_data":{"mirror":{}}},{"x":802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":331,"trait":"cornerDecoration"},{"x":-778,"y":346,"trait":"cornerDecoration"},{"x":-778,"y":-346,"trait":"cornerDecoration"},{"x":-793,"y":-331,"trait":"cornerDecoration"},{"x":778,"y":346,"trait":"cornerDecoration"},{"x":793,"y":331,"trait":"cornerDecoration"},{"x":793,"y":-331,"trait":"cornerDecoration"},{"x":778,"y":-346,"trait":"cornerDecoration"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"goalNet","y":-95},{"v0":6,"v1":13,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"goalNet","y":-95},{"v0":1,"v1":14,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"goalNet","y":95},{"v0":5,"v1":15,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"goalNet","y":95},{"v0":12,"v1":14,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"goalNet","x":-840},{"v0":13,"v1":15,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"goalNet","x":585},{"v0":16,"v1":17,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":18,"v1":19,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":20,"v1":21,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":22,"v1":23,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":17,"v1":21,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-600},{"v0":19,"v1":23,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":572},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":9,"x":-665},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-9,"x":665},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-9,"x":-665},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":9,"x":665},{"v0":0,"v1":24,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":290},{"v0":3,"v1":25,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-290},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":29,"v1":28,"curve":180.43079330521417,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","_data":{"mirror":{},"arc":{"a":[0,-95],"b":[0,95],"curve":180.43079330521417,"radius":95.00067131878964,"center":[0.3571428571409862,0],"from":-1.574555707580645,"to":1.574555707580645}}},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":32,"v1":33,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":34,"v1":35,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":36,"v1":37,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":38,"v1":39,"vis":true,"trait":"cornerDecoration"},{"v0":40,"v1":41,"vis":true,"trait":"cornerDecoration"},{"v0":42,"v1":43,"vis":true,"trait":"cornerDecoration"},{"v0":44,"v1":45,"vis":true,"trait":"cornerDecoration"}],"goals":[{"p0":[-802,-95],"p1":[-802,95],"team":"red"},{"p0":[802,95],"p1":[802,-95],"team":"blue"}],"discs":[{"pos":[-793,95],"trait":"goalPost"},{"pos":[-793,-95],"trait":"goalPost"},{"pos":[793,95],"trait":"goalPost"},{"pos":[793,-95],"trait":"goalPost"},{"pos":[-793,-346],"trait":"cornerFlag"},{"pos":[-793,346],"trait":"cornerFlag"},{"pos":[793,-346],"trait":"cornerFlag"},{"pos":[793,346],"trait":"cornerFlag"}],"planes":[{"normal":[0,1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,-346],"b":[900,-346]}}},{"normal":[0,-1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,346],"b":[900,346]}}},{"normal":[0,1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[900,-404]}}},{"normal":[0,-1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,404],"b":[900,404]}}},{"normal":[1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[-900,404]}}},{"normal":[-1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[900,-404],"b":[900,404]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":4.5,"invMass":0,"color":"C6D881","bCoef":1.5},"goalNet":{"vis":true,"bCoef":0.15,"cMask":["all"]},"cornerFlag":{"radius":3,"invMass":0,"color":"FFBF00","bCoef":2,"cMask":[""]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"cornerDecoration":{"vis":true,"color":"FFFFFF","bCoef":0,"cMask":[""],"curve":90},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.645,"bCoef":0.256},"ballPhysics":{"radius":6.5,"color":"CCFF99","bCoef":0.465,"invMass":1.4},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}';
const PENALTY_STADIUM = '{"name":"De Paul Stadium [PENALTY]","width":420,"height":200,"spawnDistance":310,"bg":{"type":"grass","width":400,"height":260,"kickOffRadius":0,"cornerRadius":0,"color":"718B5B"},"vertexes":[{"x":323,"y":260,"bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-30},{"x":323,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-30},{"x":323,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":30},{"x":323,"y":-260,"bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":30},{"x":370,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0},{"x":370,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0},{"x":332,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":323,"y":260,"bCoef":0,"trait":"line"},{"x":323,"y":-260,"bCoef":0,"trait":"line"},{"x":0,"y":-260,"bCoef":0,"trait":"line"},{"x":0,"y":260,"bCoef":0,"trait":"line"},{"x":323,"y":200,"bCoef":0,"trait":"line"},{"x":110,"y":200,"bCoef":0,"trait":"line"},{"x":110,"y":-200,"bCoef":0,"trait":"line"},{"x":323,"y":-200,"bCoef":0,"trait":"line"},{"x":0,"y":95,"bCoef":0,"trait":"line"},{"x":0,"y":-95,"bCoef":0,"trait":"line"},{"x":110,"y":5,"bCoef":0,"trait":"line"},{"x":110,"y":-5,"bCoef":0,"trait":"line"},{"x":55,"y":-260,"bCoef":0,"cMask":["red"],"trait":"penArea"},{"x":65,"y":260,"bCoef":0,"cMask":["red"],"trait":"penArea"},{"x":300,"y":-90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":365,"y":-90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":365,"y":90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":300,"y":90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":2,"v1":4,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"goalNet","y":-95},{"v0":1,"v1":5,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"goalNet","y":95},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-30,"x":665},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":30,"x":665},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":7,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":9,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":9,"v1":8,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":11,"v1":12,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":12,"v1":13,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":13,"v1":14,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":15,"v1":16,"curve":150,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":18,"v1":17,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":17,"v1":18,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"goalNet"},{"v0":19,"v1":20,"curve":45,"vis":false,"bCoef":0,"cMask":["red"],"trait":"penArea"},{"v0":21,"v1":22,"vis":false,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":22,"v1":23,"vis":false,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":23,"v1":24,"vis":false,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":24,"v1":21,"vis":false,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"}],"goals":[{"p0":[332,95],"p1":[332,-95],"team":"blue"},{"p0":[325,-100],"p1":[100,0],"team":"red"},{"p0":[100,0],"p1":[320,100],"team":"red"}],"discs":[{"radius":6.56,"color":"FFFDD0","bCoef":0.465,"invMass":1.4,"pos":[110,0],"cGroup":["ball","kick","score"]},{"pos":[323,95],"trait":"goalPost"},{"pos":[323,-95],"trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-260,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-260,"canvas_rect":[-710,-260,710,260],"a":[-710,-260],"b":[710,-260]}}},{"normal":[0,-1],"dist":-260,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-260,"canvas_rect":[-710,-260,710,260],"a":[-710,260],"b":[710,260]}}},{"normal":[1,0],"dist":-499,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-499,"canvas_rect":[-710,-260,710,260],"a":[-499,-260],"b":[-499,260]}}},{"normal":[-1,0],"dist":-376,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-376,"canvas_rect":[-710,-260,710,260],"a":[376,-260],"b":[376,260]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":4.5,"invMass":0,"color":"C6D881","bCoef":1},"goalNet":{"vis":true,"bCoef":0.2,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n/d"],"color":"cccccc"},"penArea":{"vis":false,"bCoef":0,"cMask":["red"]}},"playerPhysics":{"acceleration":0.1096,"kickingAcceleration":0.083,"kickStrength":4.65,"bCoef":0.35},"ballPhysics":"disc0","joints":[],"canBeStored":false,"redSpawnPoints":[[-100,0]],"blueSpawnPoints":[[323,0]],"kickOffReset":"full"}';
const TRAINING_STADIUM = '{"name":"SEH futsal training","width":2000,"height":2000,"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"player","spawnDistance":170,"redSpawnPoints":[[-525,-50],[-475,-50],[-425,-50],[-375,-50],[-325,-50],[-275,-50],[-225,-50],[-175,-50],[-125,-50]],"blueSpawnPoints":[[-525,0],[-475,0],[-425,0],[-375,0],[-325,0],[-275,0],[-225,0],[-175,0],[-125,0]],"canBeStored":true,"kickOffReset":"partial","bg":{"color":"35605a"},"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"vertexes":[{"x":-600,"y":-300,"cMask":["ball","red","blue"],"color":"5faca1"},{"x":-600,"y":300,"cMask":["ball","red","blue"],"color":"5faca1"},{"x":600,"y":-300,"cMask":["red","blue","ball"],"cGroup":["wall"],"color":"5faca1"},{"x":600,"y":300,"cMask":["ball","red","blue"],"cGroup":["wall"],"color":"5faca1"},{"x":-550,"y":-250,"cMask":["ball"],"color":"5faca1","bias":-25},{"x":-175,"y":-250,"cMask":["ball"],"color":"5faca1","bias":-25},{"x":-550,"y":-215,"cMask":["ball"],"color":"5faca1","bias":-20},{"x":-175,"y":-215,"cMask":["ball"],"color":"5faca1","bias":-20},{"x":-550,"y":-175,"cMask":["ball"],"color":"5faca1","bias":25},{"x":-175,"y":-175,"cMask":["ball"],"color":"5faca1","bias":25},{"x":-550,"y":-100,"cMask":["ball"],"color":"5faca1","bias":25},{"x":-175,"y":-100,"cMask":["ball"],"color":"5faca1","bias":25},{"x":-550,"y":50,"cMask":["ball"],"color":"5faca1"},{"x":-175,"y":50,"cMask":["ball"],"color":"5faca1"},{"x":-550,"y":125,"cMask":["ball"],"color":"5faca1"},{"x":-175,"y":125,"cMask":["ball"],"color":"5faca1"},{"x":-550,"y":175,"cMask":["ball"],"color":"5faca1"},{"x":-175,"y":175,"cMask":["ball"],"color":"5faca1"},{"x":-550,"y":250,"cMask":["ball"],"color":"5faca1"},{"x":-175,"y":250,"cMask":["ball"],"color":"5faca1"},{"x":82.5,"y":-120,"cMask":["ball"],"bias":-10,"curve":180},{"x":135,"y":-197.5,"cMask":["ball"],"bias":10,"curve":125},{"x":165,"y":-197.5,"cMask":["ball"],"curve":125,"bias":10},{"x":217.5,"y":-120,"cMask":["ball"],"curve":-180,"bias":10},{"x":72.5,"y":-130,"cMask":["ball"],"bias":-10,"curve":180},{"x":122.5,"y":-208,"cMask":["ball"],"bias":-10,"curve":135},{"x":227.5,"y":-130,"cMask":["ball"],"curve":-180,"bias":-10},{"x":177.5,"y":-208,"cMask":["ball"],"curve":135,"bias":-10},{"x":50,"y":-100,"cMask":["ball"],"bias":25},{"x":500,"y":-100,"cMask":["ball"],"bias":25},{"x":50,"y":-240,"cMask":["ball"],"bias":25},{"x":500,"y":-240,"cMask":["ball"],"bias":25},{"x":275,"y":-100,"cMask":["ball"],"bias":-25},{"x":275,"y":-240,"cMask":["ball"],"bias":-25},{"x":-75,"y":0,"cMask":["ball"],"bias":25},{"x":500,"y":0,"cMask":["ball"],"bias":25},{"x":-75,"y":250,"cMask":["ball"],"bias":25},{"x":500,"y":250,"cMask":["ball"],"bias":25},{"x":-25,"y":200,"cMask":["c2"],"cGroup":["c3"],"curve":-180},{"x":200,"y":200,"cMask":["c2"],"cGroup":["c3"],"curve":-180},{"x":-25,"y":170,"cMask":["c2"],"cGroup":["c3"],"curve":-180},{"x":200,"y":170,"cMask":["c2"],"cGroup":["c3"],"curve":-180},{"x":-25,"y":35,"cMask":["c2"],"cGroup":["c3"],"curve":-180},{"x":-25,"y":65,"cMask":["c2"],"cGroup":["c3"],"curve":-180},{"x":450,"y":65,"cMask":["c2"],"cGroup":["c3"],"curve":180},{"x":450,"y":35,"cMask":["c2"],"cGroup":["c3"],"curve":180,"vis":false},{"x":600,"y":50,"cMask":["ball"],"cGroup":["wall"],"color":"182c2a","bias":0},{"x":600,"y":-50,"cMask":["ball"],"cGroup":["wall"],"color":"ffffff","vis":false,"bias":0},{"x":600,"y":-200,"cMask":["ball"],"cGroup":["wall"],"color":"ffffff","bias":25,"vis":false},{"x":600,"y":200,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","bias":-25},{"x":1175,"y":-200,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","bias":-15},{"x":1175,"y":200,"cMask":["ball"],"color":"5faca1","bias":25},{"x":1175,"y":65,"cMask":["wall"],"cGroup":["wall"],"color":"e56e56","bias":-25},{"x":1175,"y":-65,"cMask":["wall"],"cGroup":["wall"],"color":"e56e56","bias":-25},{"x":1200,"y":65,"cMask":["ball"],"color":"5faca1","curve":-25},{"x":1200,"y":-65,"cMask":["ball"],"color":"5faca1","curve":-25},{"x":600,"y":-225,"cMask":["red","blue"],"color":"5faca1"},{"x":600,"y":225,"cMask":["ball","red","blue"],"color":"5faca1"},{"x":1200,"y":-225,"cMask":["red","blue"],"color":"5faca1","curve":-35},{"x":1200,"y":225,"cMask":["ball","red","blue"],"color":"5faca1","curve":-35},{"x":1225,"y":65,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","curve":0,"vis":false,"bias":35},{"x":1225,"y":-65,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","curve":0,"vis":false,"bias":35},{"x":1215,"y":-425,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","curve":-35,"bias":500,"vis":false},{"x":1250,"y":-425,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","curve":-35,"bias":500,"vis":false},{"x":996.2735616000006,"y":-441.9824,"cMask":["ball"],"cGroup":["wall"],"bias":-265,"vis":false},{"x":996.2735616000006,"y":-410.3021952000002,"cMask":["ball"],"cGroup":["wall"],"bias":-265,"vis":false},{"x":961.9936000000002,"y":-401.48,"cMask":["ball","red","blue"],"cGroup":["wall"],"bias":0,"vis":false},{"x":994.9936000000002,"y":-391.48,"cMask":["ball","red","blue"],"cGroup":["wall"],"bias":-100,"vis":false},{"x":910,"y":-200,"cMask":["wall"],"cGroup":["wall"],"color":"ba3131","bias":-25,"vis":true},{"x":950,"y":-200,"cMask":["wall"],"cGroup":["wall"],"color":"ba3131","bias":-15,"vis":true},{"x":959.8797844841375,"y":-394.3199245274723,"bCoef":-2.4,"cMask":["ball"],"cGroup":["wall"],"bias":0,"vis":false},{"x":992.8797844841375,"y":-384.3199245274723,"bCoef":-2.4,"cMask":["ball"],"cGroup":["wall"],"bias":0,"vis":false},{"x":916,"y":-225,"cMask":["red","blue"],"cGroup":["wall"]},{"x":956,"y":-225,"cMask":["red","blue"],"cGroup":["wall"]},{"x":955.001804779746,"y":-371.703836807112,"bCoef":0,"cMask":["red","blue"],"cGroup":["wall"],"bias":0,"vis":false},{"x":988.001804779746,"y":-361.703836807112,"bCoef":0,"cMask":["red","blue"],"cGroup":["wall"],"bias":0,"vis":false},{"x":1175,"y":-150,"cMask":["wall"],"cGroup":["wall"],"color":"5faca1","bias":-15,"curve":-180,"vis":true},{"x":1175,"y":150,"cMask":["wall"],"cGroup":["wall"],"color":"5faca1","bias":-15,"curve":-180,"vis":true},{"x":-575,"y":-325,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","bias":12.5},{"x":575,"y":-325,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","bias":12.5},{"x":12.5,"y":-325,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","bias":12.5},{"x":-12.5,"y":-325,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","bias":12.5},{"x":-300,"y":-300,"cMask":["ball","red","blue"],"color":"5faca1"},{"x":-312.5,"y":-325,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","bias":12.5},{"x":-287.5,"y":-325,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","bias":12.5},{"x":312.5,"y":-325,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","bias":12.5},{"x":287.5,"y":-325,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","bias":12.5},{"x":-575,"y":-537.5,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","bias":-12.5},{"x":575,"y":-537.5,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","bias":-12.5},{"x":12.5,"y":-537.5,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","bias":-12.5},{"x":-12.5,"y":-537.5,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","bias":-12.5},{"x":-312.5,"y":-537.5,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","bias":-12.5},{"x":-287.5,"y":-537.5,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","bias":-12.5},{"x":287.5,"y":-537.5,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","bias":-12.5},{"x":312.5,"y":-537.5,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","bias":-12.5},{"x":50,"y":-300,"cMask":["ball","red","blue"],"color":"5faca1","bias":0},{"x":-50,"y":-300,"cMask":["ball","red","blue"],"color":"5faca1","bias":0},{"x":320.5,"y":-119,"cMask":["wall"],"cGroup":["wall"],"bias":-10,"curve":180,"color":"2a4d48"},{"x":373,"y":-199,"cMask":["wall"],"cGroup":["wall"],"bias":10,"curve":125,"color":"2a4d48"},{"x":403,"y":-199,"cMask":["wall"],"cGroup":["wall"],"curve":125,"bias":10,"color":"2a4d48"},{"x":455.5,"y":-119,"cMask":["wall"],"cGroup":["wall"],"curve":-180,"bias":10,"color":"2a4d48"},{"x":313,"y":-129,"cMask":["wall"],"cGroup":["wall"],"bias":-10,"curve":180,"color":"2a4d48"},{"x":363,"y":-207,"cMask":["wall"],"cGroup":["wall"],"bias":-10,"curve":135,"color":"2a4d48"},{"x":463,"y":-129,"cMask":["wall"],"cGroup":["wall"],"curve":-180,"bias":-10,"color":"2a4d48"},{"x":413,"y":-207,"cMask":["wall"],"cGroup":["wall"],"curve":135,"bias":-10,"color":"2a4d48"},{"x":-25,"y":800,"cMask":["ball","red","blue"],"color":"5faca1"},{"x":-875,"y":350,"cMask":["ball","red","blue"],"color":"5faca1"},{"x":-875,"y":800,"cMask":["ball","red","blue"],"color":"5faca1"},{"x":25,"y":800,"cMask":["ball","red","blue"],"color":"5faca1"},{"x":875,"y":350,"cMask":["ball","red","blue"],"color":"5faca1"},{"x":875,"y":800,"cMask":["ball","red","blue"],"color":"5faca1"},{"x":-850,"y":375,"cMask":["ball"],"color":"ffffff","bias":-25},{"x":850,"y":375,"cMask":["ball"],"color":"ffffff","bias":25},{"x":-50,"y":375,"cMask":["ball"],"color":"ffffff","bias":-25},{"x":50,"y":375,"cMask":["ball"],"color":"ffffff","bias":25},{"x":-850,"y":775,"cMask":["ball"],"color":"ffffff","bias":-25},{"x":850,"y":775,"cMask":["ball"],"color":"ffffff","bias":25},{"x":-50,"y":775,"cMask":["ball"],"color":"ffffff","bias":-25},{"x":50,"y":775,"cMask":["ball"],"color":"ffffff","bias":25},{"x":450,"y":375,"cMask":["wall"],"cGroup":["wall"],"color":"ffffff","bias":0},{"x":-450,"y":375,"cMask":["wall"],"cGroup":["wall"],"color":"ffffff","bias":0},{"x":450,"y":775,"cMask":["wall"],"cGroup":["wall"],"color":"ffffff","bias":0},{"x":-450,"y":775,"cMask":["wall"],"cGroup":["wall"],"color":"ffffff","bias":0},{"x":450,"y":620,"cMask":["wall"],"cGroup":["wall"],"color":"ffffff","bias":0,"curve":-180},{"x":-450,"y":620,"cMask":["wall"],"cGroup":["wall"],"color":"ffffff","bias":0,"curve":-180},{"x":450,"y":530,"cMask":["wall"],"cGroup":["wall"],"color":"ffffff","bias":0,"curve":-180},{"x":-450,"y":530,"cMask":["wall"],"cGroup":["wall"],"color":"ffffff","bias":0,"curve":-180},{"x":-850,"y":620,"cMask":["ball"],"cGroup":["wall"],"color":"ffffff","bias":0,"curve":-180},{"x":-850,"y":530,"cMask":["ball"],"cGroup":["wall"],"color":"ffffff","bias":0,"curve":-180},{"x":850,"y":620,"cMask":["ball"],"cGroup":["wall"],"color":"ffffff","bias":0,"curve":0},{"x":850,"y":530,"cMask":["ball"],"cGroup":["wall"],"color":"ffffff","bias":0,"curve":0},{"x":-50,"y":620,"cMask":["ball"],"cGroup":["wall"],"color":"ffffff","bias":-25,"curve":-180},{"x":-50,"y":530,"cMask":["ball"],"cGroup":["wall"],"color":"ffffff","bias":0,"curve":-180},{"x":50,"y":620,"cMask":["ball"],"cGroup":["wall"],"color":"ffffff","bias":0,"curve":0},{"x":50,"y":530,"cMask":["ball"],"cGroup":["wall"],"color":"ffffff","bias":0,"curve":0},{"x":-865,"y":620,"bCoef":0.15,"cMask":["wall"],"cGroup":["wall"],"color":"5faca1","bias":0,"curve":35},{"x":-865,"y":530,"bCoef":0.15,"cMask":["wall"],"cGroup":["wall"],"color":"5faca1","bias":0,"curve":35},{"x":-35,"y":620,"bCoef":0.15,"cMask":["wall"],"cGroup":["wall"],"color":"5faca1","bias":-25,"curve":35},{"x":-35,"y":530,"bCoef":0.15,"cMask":["wall"],"cGroup":["wall"],"color":"5faca1","bias":0,"curve":35},{"x":35,"y":620,"bCoef":0.15,"cMask":["wall","ball"],"cGroup":["wall"],"color":"5faca1","bias":0,"curve":-35},{"x":35,"y":530,"bCoef":0.15,"cMask":["wall","ball"],"cGroup":["wall"],"color":"5faca1","bias":0,"curve":-35},{"x":865,"y":620,"bCoef":0.15,"cMask":["wall","ball"],"cGroup":["wall"],"color":"5faca1","bias":0,"curve":-35},{"x":865,"y":530,"bCoef":0.15,"cMask":["wall","ball"],"cGroup":["wall"],"color":"5faca1","bias":0,"curve":-35},{"x":-925,"y":300,"cMask":["ball","red","blue"],"color":"5faca1"},{"x":925,"y":300,"cMask":["ball","red","blue"],"color":"5faca1"},{"x":-925,"y":850,"cMask":["ball","red","blue"],"color":"5faca1"},{"x":925,"y":850,"cMask":["ball","red","blue"],"color":"5faca1"},{"x":-50,"y":300,"cMask":["wall"],"color":"5faca1","bias":0},{"x":50,"y":300,"cMask":["wall"],"color":"5faca1","bias":0},{"x":-25,"y":400,"cMask":["ball","red","blue"],"color":"5faca1"},{"x":-75,"y":350,"cMask":["ball","red","blue"],"color":"5faca1"},{"x":25,"y":400,"cMask":["ball","red","blue"],"color":"5faca1"},{"x":75,"y":350,"cMask":["ball","red","blue"],"color":"5faca1"},{"x":-600,"y":50,"cMask":["ball"],"cGroup":["wall"],"color":"182c2a","bias":0},{"x":-600,"y":-50,"cMask":["ball"],"cGroup":["wall"],"color":"ffffff","vis":false,"bias":0},{"x":-600,"y":-562.5,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","bias":-12.5},{"x":600,"y":-562.5,"cMask":["ball"],"cGroup":["wall"],"color":"5faca1","bias":-12.5},{"x":-600,"y":-150,"cMask":["wall"],"cGroup":["wall"],"color":"ffffff","bias":25,"vis":false},{"x":-600,"y":150,"cMask":["wall"],"cGroup":["wall"],"color":"5faca1","bias":-25},{"x":-1150,"y":-150,"cMask":["wall"],"cGroup":["wall"],"color":"ffffff","bias":25,"vis":false},{"x":-1150,"y":150,"cMask":["wall"],"cGroup":["wall"],"color":"5faca1","bias":-25},{"x":-1150,"y":95,"cMask":["red","blue"],"cGroup":["wall"],"color":"ffffff","bias":25,"vis":false,"curve":0},{"x":-1150,"y":-95,"cMask":["red","blue"],"cGroup":["wall"],"color":"ffffff","bias":25,"vis":false,"curve":0},{"x":-1175,"y":95,"cMask":["red","blue"],"cGroup":["wall"],"color":"ffffff","bias":25,"vis":false,"curve":25},{"x":-1175,"y":-95,"cMask":["red","blue"],"cGroup":["wall"],"color":"ffffff","bias":25,"vis":false,"curve":25},{"x":-1150,"y":-120,"cMask":["ball"],"cGroup":["wall"],"color":"ffffff","bias":25,"vis":false},{"x":-800,"y":-120,"cMask":["ball"],"cGroup":["wall"],"color":"ffffff","bias":25,"vis":false},{"x":-800,"y":120,"cMask":["ball"],"cGroup":["wall"],"color":"ffffff","bias":-25,"vis":false},{"x":-1150,"y":120,"cMask":["ball"],"cGroup":["wall"],"color":"ffffff","bias":-25,"vis":false},{"x":-700,"y":105,"cMask":["ball"],"cGroup":["wall"],"bias":550,"vis":false},{"x":-700,"y":135,"cMask":["ball"],"cGroup":["wall"],"bias":550,"vis":false},{"x":-700,"y":-105,"cMask":["ball"],"cGroup":["wall"],"bias":550,"vis":false},{"x":-700,"y":-135,"cMask":["ball"],"cGroup":["wall"],"bias":550,"vis":false},{"x":-825,"y":-95,"cMask":["ball"],"cGroup":["wall"],"bias":140,"vis":false},{"x":-805,"y":-25,"cMask":["ball"],"cGroup":["wall"],"bias":-185,"vis":false},{"x":-805,"y":25,"cMask":["ball"],"cGroup":["wall"],"bias":-185,"vis":false},{"x":-825,"y":95,"cMask":["ball"],"cGroup":["wall"],"vis":false,"bias":-140},{"x":-715,"y":-80,"cMask":["ball"],"cGroup":["wall"],"bias":-60,"vis":false},{"x":-685,"y":-80,"cMask":["ball"],"cGroup":["wall"],"bias":-60,"vis":false},{"x":-715,"y":80,"cMask":["ball"],"cGroup":["wall"],"bias":60,"vis":false},{"x":-685,"y":80,"cMask":["ball"],"cGroup":["wall"],"bias":60,"vis":false},{"x":-1200,"y":95,"cMask":["ball"],"cGroup":["wall"],"color":"ffffff","bias":-40,"vis":false},{"x":-1200,"y":-95,"cMask":["ball"],"cGroup":["wall"],"color":"ffffff","bias":-40,"vis":false},{"x":-1200,"y":-30,"cMask":["ball"],"cGroup":["wall"],"color":"ffffff","bias":-40,"vis":false},{"x":-1200,"y":30,"cMask":["ball"],"cGroup":["wall"],"color":"ffffff","bias":-40,"vis":false},{"x":-1215,"y":-115,"cMask":["ball"],"cGroup":["wall"],"bias":85,"vis":false},{"x":-1185,"y":-115,"cMask":["ball"],"cGroup":["wall"],"bias":85,"vis":false},{"x":-1215,"y":115,"cMask":["ball"],"cGroup":["wall"],"bias":-85,"vis":false},{"x":-1185,"y":115,"cMask":["ball"],"cGroup":["wall"],"bias":-85,"vis":false},{"x":-1350,"y":-30,"cMask":["ball"],"cGroup":["wall"],"color":"ffffff","bias":-190,"vis":false},{"x":-1350,"y":30,"cMask":["ball"],"cGroup":["wall"],"color":"ffffff","bias":-190,"vis":false},{"x":-1365,"y":200,"cMask":["ball"],"cGroup":["wall"],"bias":-235,"vis":false},{"x":-1335,"y":200,"cMask":["ball"],"cGroup":["wall"],"bias":-235,"vis":false},{"x":-650,"y":185,"cMask":["ball"],"cGroup":["wall"],"bias":725,"vis":false},{"x":-650,"y":215,"cMask":["ball"],"cGroup":["wall"],"bias":725,"vis":false},{"x":-635,"y":10,"cMask":["ball"],"cGroup":["wall"],"bias":-220,"vis":false},{"x":-665,"y":10,"cMask":["ball"],"cGroup":["wall"],"bias":-220,"vis":false},{"x":-800,"y":-95,"cMask":["wall"],"cGroup":["wall"],"color":"264541","bias":0,"vis":true,"curve":0},{"x":-800,"y":95,"cMask":["wall"],"cGroup":["wall"],"color":"264541","bias":0,"vis":true,"curve":0},{"x":-812,"y":19.49726136155395,"bCoef":-2.4,"cMask":["ball"],"cGroup":["wall"],"bias":0,"vis":false},{"x":-833,"y":94.49975103286853,"bCoef":-2.4,"cMask":["ball"],"cGroup":["wall"],"vis":false,"bias":0},{"x":-833,"y":-94.3698303731169,"bCoef":-2.4,"cMask":["ball"],"cGroup":["wall"],"bias":0,"vis":false},{"x":-811.6296716926201,"y":-20.367838636065226,"bCoef":-2.4,"cMask":["ball"],"cGroup":["wall"],"bias":0,"vis":false},{"x":-813,"y":-25,"bCoef":-2.4,"cMask":["ball"],"cGroup":["wall"],"bias":0,"vis":false},{"x":-813,"y":25,"bCoef":-2.4,"cMask":["ball"],"cGroup":["wall"],"bias":0,"vis":false},{"x":-600,"y":175,"cMask":["red","blue"],"cGroup":["wall"],"color":"5faca1","bias":-25},{"x":-1175,"y":175,"cMask":["red","blue"],"cGroup":["wall"],"color":"5faca1","bias":-25,"curve":50},{"x":-600,"y":-175,"cMask":["red","blue"],"cGroup":["wall"],"color":"5faca1","bias":-25},{"x":-1175,"y":-175,"cMask":["red","blue"],"cGroup":["wall"],"color":"5faca1","bias":-25,"curve":50},{"x":-512.5,"y":87.5,"cMask":["wall"],"cGroup":["wall"],"color":"264541"},{"x":-212.5,"y":87.5,"cMask":["wall"],"cGroup":["wall"],"color":"264541"},{"x":-490,"y":70,"cMask":["wall"],"cGroup":["wall"]},{"x":-490,"y":105,"cMask":["wall"],"cGroup":["wall"]},{"x":-512.5,"y":212.5,"cMask":["wall"],"cGroup":["wall"],"color":"264541"},{"x":-212.5,"y":212.5,"cMask":["wall"],"cGroup":["wall"],"color":"264541"},{"x":-235,"y":195,"cMask":["wall"],"cGroup":["wall"]},{"x":-235,"y":230,"cMask":["wall"],"cGroup":["wall"]},{"x":-362.91545727999994,"y":-21.908359680000032,"cMask":["wall"],"cGroup":["wall"],"color":"eaff00"},{"x":-362.91545727999994,"y":-6.908359680000032,"cMask":["wall"],"cGroup":["wall"],"color":"eaff00"},{"x":-362.91545727999994,"y":-36.90835968000003,"cMask":["wall"],"cGroup":["wall"],"color":"eaff00"},{"x":-377.91545727999994,"y":-21.908359680000032,"cMask":["wall"],"cGroup":["wall"],"color":"eaff00"},{"x":-377.91545727999994,"y":-6.908359680000032,"cMask":["wall"],"cGroup":["wall"],"color":"eaff00"},{"x":-377.91545727999994,"y":-36.90835968000003,"cMask":["wall"],"cGroup":["wall"],"color":"eaff00"},{"x":-347.91545727999994,"y":-37.90835968000003,"cMask":["wall"],"cGroup":["wall"],"color":"eaff00"},{"x":-330.41545727999994,"y":-5.908359680000032,"cMask":["wall"],"cGroup":["wall"],"color":"eaff00"},{"x":-330.41545727999994,"y":-37.90835968000003,"cMask":["wall"],"cGroup":["wall"],"color":"eaff00"},{"x":-347.91545727999994,"y":-5.908359680000032,"cMask":["wall"],"cGroup":["wall"],"color":"eaff00"},{"x":-347.91545727999994,"y":-21.908359680000032,"cMask":["wall"],"cGroup":["wall"],"color":"eaff00"},{"x":-330.41545727999994,"y":-21.908359680000032,"cMask":["wall"],"cGroup":["wall"],"color":"eaff00"},{"x":-410.41545727999994,"y":-26.908359680000032,"cMask":["wall"],"cGroup":["wall"],"color":"eaff00","curve":190},{"x":-395.41545727999994,"y":-31.908359680000032,"cMask":["wall"],"cGroup":["wall"],"color":"eaff00","curve":190},{"x":-395.41545727999994,"y":-16.908359680000032,"cMask":["wall"],"cGroup":["wall"],"color":"eaff00","curve":180},{"x":-410.41545727999994,"y":-9.408359680000032,"cMask":["wall"],"cGroup":["wall"],"color":"eaff00","curve":180},{"x":-420.41545727999994,"y":-51.90835968000003,"cMask":["wall"],"cGroup":["wall"],"color":"eaff00"},{"x":-320.41545727999994,"y":-51.90835968000003,"cMask":["wall"],"cGroup":["wall"],"color":"eaff00"},{"x":-420.41545727999994,"y":8.091640319999968,"cMask":["wall"],"cGroup":["wall"],"color":"eaff00"},{"x":-320.41545727999994,"y":8.091640319999968,"cMask":["wall"],"cGroup":["wall"],"color":"eaff00"}],"segments":[{"v0":4,"v1":5,"color":"5faca1","cMask":["ball"],"bias":-25},{"v0":5,"v1":7,"color":"5faca1","cMask":["ball"],"bias":-25},{"v0":7,"v1":6,"color":"5faca1","cMask":["ball"],"bias":-20},{"v0":6,"v1":4,"color":"5faca1","cMask":["ball"],"bias":-25},{"v0":8,"v1":10,"color":"5faca1","cMask":["ball"],"bias":25},{"v0":10,"v1":11,"color":"5faca1","cMask":["ball"],"bias":25},{"v0":11,"v1":9,"color":"5faca1","cMask":["ball"],"bias":25},{"v0":9,"v1":8,"color":"5faca1","cMask":["ball"],"bias":20},{"v0":12,"v1":13,"color":"5faca1","cMask":["ball"],"y":50},{"v0":15,"v1":14,"color":"5faca1","cMask":["ball"],"y":125},{"v0":17,"v1":16,"color":"5faca1","cMask":["ball"],"y":175},{"v0":19,"v1":18,"color":"5faca1","cMask":["ball"],"y":250},{"v0":13,"v1":15,"color":"5faca1","cMask":["ball"]},{"v0":17,"v1":19,"color":"5faca1","cMask":["ball"]},{"v0":18,"v1":16,"color":"5faca1","cMask":["ball"]},{"v0":14,"v1":12,"color":"5faca1","cMask":["ball"]},{"v0":20,"v1":21,"color":"5faca1","cMask":["ball"],"bias":10},{"v0":22,"v1":23,"color":"5faca1","cMask":["ball"],"bias":10},{"v0":21,"v1":22,"curve":125,"color":"5faca1","cMask":["ball"],"bias":10},{"v0":24,"v1":25,"color":"5faca1","cMask":["ball"],"bias":-10},{"v0":27,"v1":26,"color":"5faca1","cMask":["ball"],"bias":-10},{"v0":25,"v1":27,"curve":109.92142497000222,"color":"5faca1","cMask":["ball"],"bias":-10},{"v0":23,"v1":26,"curve":-180,"color":"5faca1","cMask":["ball"],"bias":10},{"v0":20,"v1":24,"curve":180,"color":"5faca1","cMask":["ball"],"bias":-10},{"v0":30,"v1":28,"color":"5faca1","cMask":["ball"],"bias":25,"x":50},{"v0":28,"v1":29,"color":"5faca1","cMask":["ball"],"bias":25},{"v0":29,"v1":31,"color":"5faca1","cMask":["ball"],"bias":25},{"v0":31,"v1":30,"color":"5faca1","cMask":["ball"],"bias":25,"y":-240},{"v0":32,"v1":33,"color":"5faca1","cMask":["ball"],"bias":-25},{"v0":34,"v1":36,"color":"5faca1","cMask":["ball"],"bias":25,"x":-75},{"v0":36,"v1":37,"color":"5faca1","cMask":["ball"],"bias":25},{"v0":37,"v1":35,"color":"5faca1","cMask":["ball"],"bias":25},{"v0":35,"v1":34,"color":"5faca1","cMask":["ball"],"bias":25,"y":0},{"v0":40,"v1":38,"curve":-180,"color":"5faca1","cMask":["c2"],"cGroup":["c3"]},{"v0":38,"v1":39,"color":"5faca1","cMask":["c2"],"cGroup":["c3"]},{"v0":39,"v1":41,"curve":-180,"color":"5faca1","cMask":["c2"],"cGroup":["c3"]},{"v0":41,"v1":40,"color":"5faca1","cMask":["c2"],"cGroup":["c3"]},{"v0":43,"v1":44,"color":"5faca1","cMask":["c2"],"cGroup":["c3"]},{"v0":42,"v1":43,"curve":-180,"color":"5faca1","cMask":["c2"],"cGroup":["c3"]},{"v0":42,"v1":45,"color":"5faca1","cMask":["c2"],"cGroup":["c3"]},{"v0":45,"v1":44,"curve":180,"color":"5faca1","cMask":["c2"],"cGroup":["c3"]},{"v0":47,"v1":2,"color":"5faca1","cMask":["red","blue","ball"],"cGroup":["wall"]},{"v0":46,"v1":3,"color":"5faca1","cMask":["red","blue","ball"],"cGroup":["wall"]},{"v0":49,"v1":51,"color":"5faca1","cMask":["ball"],"bias":25},{"v0":50,"v1":53,"color":"5faca1","cMask":["ball"],"bias":-25,"x":1175},{"v0":52,"v1":51,"color":"5faca1","cMask":["ball"],"bias":-25,"x":1175},{"v0":52,"v1":54,"color":"5faca1","cMask":["ball"]},{"v0":54,"v1":55,"curve":-25,"color":"5faca1","cMask":["ball"]},{"v0":55,"v1":53,"color":"5faca1","cMask":["ball"]},{"v0":57,"v1":59,"color":"5faca1","cMask":["ball","red","blue"]},{"v0":59,"v1":58,"curve":-35,"color":"5faca1","cMask":["ball","red","blue"]},{"v0":61,"v1":60,"curve":0,"vis":false,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":35,"x":1225},{"v0":62,"v1":63,"vis":false,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":500,"y":-425},{"v0":64,"v1":65,"vis":false,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-265},{"v0":66,"v1":67,"vis":false,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-100},{"v0":66,"v1":68,"vis":false,"color":"5faca1","cMask":["ball","red","blue"],"bias":0},{"v0":69,"v1":67,"vis":false,"color":"5faca1","cMask":["ball","red","blue"],"bias":0},{"v0":70,"v1":71,"vis":false,"color":"5faca1","bCoef":-2.4,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":48,"v1":68,"color":"5faca1","cMask":["ball"],"bias":-25},{"v0":69,"v1":50,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-15},{"v0":73,"v1":58,"color":"5faca1","cMask":["red","blue"]},{"v0":72,"v1":56,"color":"5faca1","cMask":["red","blue"]},{"v0":72,"v1":73,"color":"5faca1","cMask":["wall"],"cGroup":["wall"]},{"v0":74,"v1":75,"vis":false,"color":"5faca1","bCoef":0,"cMask":["red","blue"],"cGroup":["wall"],"bias":0},{"v0":68,"v1":69,"vis":true,"color":"ba3131","cMask":["wall"],"cGroup":["wall"]},{"v0":53,"v1":52,"color":"e56e56","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"x":1175},{"v0":47,"v1":46,"color":"182c2a","cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":76,"v1":77,"curve":-180,"vis":true,"color":"5faca1","cMask":["wall"],"cGroup":["wall"],"bias":0,"x":1175},{"v0":48,"v1":47,"vis":false,"color":"ffffff","cMask":["ball"],"cGroup":["wall"],"bias":25},{"v0":49,"v1":46,"vis":false,"color":"ffffff","cMask":["ball"],"cGroup":["wall"],"bias":-25},{"v0":78,"v1":83,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":12.5},{"v0":84,"v1":81,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":12.5},{"v0":80,"v1":86,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":12.5},{"v0":85,"v1":79,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":12.5},{"v0":87,"v1":91,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-12.5},{"v0":92,"v1":90,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-12.5},{"v0":89,"v1":93,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-12.5},{"v0":94,"v1":88,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-12.5},{"v0":88,"v1":79,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-12.5},{"v0":85,"v1":94,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-12.5},{"v0":93,"v1":86,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-12.5},{"v0":80,"v1":89,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-12.5},{"v0":90,"v1":81,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-12.5},{"v0":84,"v1":92,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-12.5},{"v0":91,"v1":83,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-12.5},{"v0":78,"v1":87,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-12.5},{"v0":0,"v1":96,"color":"5faca1","cGroup":["wall"]},{"v0":95,"v1":2,"color":"5faca1"},{"v0":96,"v1":95,"color":"182c2a","cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":97,"v1":98,"color":"2a4d48","cMask":["wall"],"cGroup":["wall"],"bias":10},{"v0":99,"v1":100,"color":"2a4d48","cMask":["wall"],"cGroup":["wall"],"bias":10},{"v0":98,"v1":99,"curve":125,"color":"2a4d48","cMask":["wall"],"cGroup":["wall"],"bias":10},{"v0":101,"v1":102,"color":"2a4d48","cMask":["wall"],"cGroup":["wall"],"bias":-10},{"v0":104,"v1":103,"color":"2a4d48","cMask":["wall"],"cGroup":["wall"],"bias":-10},{"v0":102,"v1":104,"curve":109.92142497000222,"color":"2a4d48","cMask":["wall"],"cGroup":["wall"],"bias":-10},{"v0":100,"v1":103,"curve":-180,"color":"2a4d48","cMask":["wall"],"cGroup":["wall"],"bias":10},{"v0":97,"v1":101,"curve":180,"color":"2a4d48","cMask":["wall"],"cGroup":["wall"],"bias":-10},{"v0":105,"v1":107,"color":"5faca1","cMask":["ball","red","blue"]},{"v0":107,"v1":106,"color":"5faca1","cMask":["ball","red","blue"]},{"v0":109,"v1":110,"color":"5faca1","cMask":["ball","red","blue"]},{"v0":110,"v1":108,"color":"5faca1","cMask":["ball","red","blue"]},{"v0":111,"v1":113,"color":"ffffff","cMask":["ball"],"bias":-25},{"v0":117,"v1":115,"color":"ffffff","cMask":["ball"],"bias":-25},{"v0":118,"v1":116,"color":"ffffff","cMask":["ball"],"bias":25},{"v0":112,"v1":114,"color":"ffffff","cMask":["ball"],"bias":25},{"v0":126,"v1":124,"curve":180,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":125,"v1":123,"curve":180,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":125,"v1":123,"curve":-180,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":126,"v1":124,"curve":-180,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":128,"v1":111,"color":"ffffff","cMask":["ball"],"bias":-25},{"v0":127,"v1":115,"color":"ffffff","cMask":["ball"],"bias":25},{"v0":132,"v1":113,"color":"ffffff","cMask":["ball"],"bias":25},{"v0":131,"v1":117,"color":"ffffff","cMask":["ball"],"bias":-25},{"v0":133,"v1":118,"color":"ffffff","cMask":["ball"],"bias":25},{"v0":114,"v1":134,"color":"ffffff","cMask":["ball"],"bias":25},{"v0":130,"v1":112,"color":"ffffff","cMask":["ball"],"bias":25},{"v0":116,"v1":129,"color":"ffffff","cMask":["ball"],"bias":25},{"v0":136,"v1":128,"color":"5faca1","cMask":["ball"],"bias":0},{"v0":135,"v1":127,"color":"5faca1","bias":0},{"v0":135,"v1":136,"curve":35,"color":"5faca1","bCoef":0.15,"bias":0},{"v0":131,"v1":137,"color":"5faca1","bias":0},{"v0":132,"v1":138,"color":"5faca1","bias":0},{"v0":138,"v1":137,"curve":35,"color":"5faca1","bCoef":0.15,"bias":0},{"v0":140,"v1":134,"curve":0,"color":"5faca1","cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":140,"v1":139,"curve":-35,"color":"5faca1","bCoef":0.15,"cMask":["wall","ball"],"cGroup":["wall"],"bias":0},{"v0":139,"v1":133,"curve":0,"color":"5faca1","cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":130,"v1":142,"curve":0,"color":"5faca1","cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":129,"v1":141,"curve":0,"color":"5faca1","cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":141,"v1":142,"curve":-35,"color":"5faca1","bCoef":0.15,"cMask":["wall","ball"],"cGroup":["wall"],"bias":0},{"v0":128,"v1":127,"color":"e56e56","cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":132,"v1":131,"color":"5689e5","cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":130,"v1":129,"color":"5689e5","cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":134,"v1":133,"color":"e56e56","cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":143,"v1":1,"color":"5faca1","cMask":["ball","red","blue"]},{"v0":3,"v1":144,"color":"5faca1","cMask":["ball","red","blue"]},{"v0":143,"v1":145,"color":"5faca1","cMask":["ball","red","blue"]},{"v0":145,"v1":146,"color":"5faca1","cMask":["ball","red","blue"]},{"v0":146,"v1":144,"color":"5faca1","cMask":["ball","red","blue"]},{"v0":148,"v1":3,"color":"5faca1","cMask":["ball","red","blue"]},{"v0":147,"v1":1,"color":"5faca1","cMask":["ball","red","blue"]},{"v0":147,"v1":148,"color":"182c2a","cMask":["wall"],"bias":0},{"v0":150,"v1":149,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":106,"v1":150,"color":"5faca1","cMask":["ball","red","blue"],"bias":0},{"v0":149,"v1":105,"color":"5faca1","cMask":["ball","red","blue"],"bias":0},{"v0":151,"v1":108,"color":"5faca1","cMask":["ball","red","blue"]},{"v0":152,"v1":109,"color":"5faca1","cMask":["ball","red","blue"]},{"v0":151,"v1":152,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":154,"v1":0,"color":"5faca1"},{"v0":153,"v1":1,"color":"5faca1"},{"v0":154,"v1":153,"color":"182c2a","cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":120,"v1":122,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":121,"v1":119,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":155,"v1":0,"color":"5faca1"},{"v0":155,"v1":156,"color":"5faca1"},{"v0":156,"v1":2,"color":"5faca1"},{"v0":160,"v1":158,"color":"5faca1","cMask":["wall"],"cGroup":["wall"]},{"v0":159,"v1":157,"color":"5faca1","cMask":["wall"],"cGroup":["wall"]},{"v0":162,"v1":159,"color":"5faca1","cMask":["wall"],"cGroup":["wall"],"x":-1150},{"v0":161,"v1":160,"color":"5faca1","cMask":["wall"],"cGroup":["wall"],"x":-1150},{"v0":164,"v1":162,"color":"5faca1","cMask":["red","blue"],"cGroup":["wall"],"y":-95},{"v0":163,"v1":161,"color":"5faca1","cMask":["red","blue"],"cGroup":["wall"],"y":95},{"v0":163,"v1":164,"curve":25,"color":"5faca1","cMask":["red","blue"],"cGroup":["wall"],"x":-1175},{"v0":165,"v1":166,"vis":false,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":25,"y":-120},{"v0":168,"v1":167,"vis":false,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-25,"y":120},{"v0":169,"v1":170,"vis":false,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":550,"x":-700},{"v0":172,"v1":171,"vis":false,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":550,"x":-700},{"v0":177,"v1":178,"vis":false,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-60,"y":-80},{"v0":179,"v1":180,"vis":false,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":60,"y":80},{"v0":182,"v1":183,"vis":false,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-40},{"v0":184,"v1":181,"vis":false,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-40},{"v0":185,"v1":186,"vis":false,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":85,"y":-115},{"v0":187,"v1":188,"vis":false,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-85,"y":115},{"v0":189,"v1":190,"vis":false,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-190,"x":-1350},{"v0":191,"v1":192,"vis":false,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-235,"y":200},{"v0":193,"v1":194,"vis":false,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":725,"x":-650},{"v0":195,"v1":196,"vis":false,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-220,"y":10},{"v0":162,"v1":161,"color":"e56e56","cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":197,"v1":198,"curve":50,"vis":true,"color":"264541","cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":161,"v1":198,"curve":0,"vis":true,"color":"264541","cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":162,"v1":197,"curve":0,"vis":true,"color":"264541","cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":174,"v1":173,"vis":false,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":140},{"v0":175,"v1":176,"vis":false,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-140},{"v0":174,"v1":175,"vis":false,"color":"5faca1","cMask":["ball"],"cGroup":["wall"],"bias":-185,"x":-805},{"v0":199,"v1":200,"vis":false,"color":"5faca1","bCoef":-2.4,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":202,"v1":201,"vis":false,"color":"5faca1","bCoef":-2.4,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":203,"v1":204,"vis":false,"color":"5faca1","bCoef":-2.4,"cMask":["ball"],"cGroup":["wall"],"bias":0,"x":-813},{"v0":207,"v1":208,"color":"5faca1","cMask":["red","blue"]},{"v0":206,"v1":205,"color":"5faca1","cMask":["red","blue"]},{"v0":206,"v1":208,"curve":50,"color":"5faca1","cMask":["red","blue"]},{"v0":210,"v1":209,"color":"264541","cMask":["wall"],"cGroup":["wall"],"y":87.5},{"v0":209,"v1":211,"color":"264541","cMask":["wall"],"cGroup":["wall"]},{"v0":209,"v1":212,"color":"264541","cMask":["wall"],"cGroup":["wall"]},{"v0":214,"v1":213,"color":"264541","cMask":["wall"],"cGroup":["wall"],"y":212.5},{"v0":214,"v1":215,"color":"264541","cMask":["wall"],"cGroup":["wall"]},{"v0":214,"v1":216,"color":"264541","cMask":["wall"],"cGroup":["wall"]},{"v0":222,"v1":221,"color":"eaff00","cMask":["wall"],"cGroup":["wall"]},{"v0":221,"v1":218,"color":"eaff00","cMask":["wall"],"cGroup":["wall"]},{"v0":220,"v1":217,"color":"eaff00","cMask":["wall"],"cGroup":["wall"]},{"v0":222,"v1":219,"color":"eaff00","cMask":["wall"],"cGroup":["wall"]},{"v0":223,"v1":226,"color":"eaff00","cMask":["wall"],"cGroup":["wall"]},{"v0":227,"v1":228,"color":"eaff00","cMask":["wall"],"cGroup":["wall"]},{"v0":225,"v1":224,"color":"eaff00","cMask":["wall"],"cGroup":["wall"]},{"v0":229,"v1":230,"curve":190,"color":"eaff00","cMask":["wall"],"cGroup":["wall"]},{"v0":229,"v1":231,"color":"eaff00","cMask":["wall"],"cGroup":["wall"]},{"v0":231,"v1":232,"curve":180,"color":"eaff00","cMask":["wall"],"cGroup":["wall"]},{"v0":235,"v1":236,"color":"eaff00","cMask":["wall"],"cGroup":["wall"]},{"v0":236,"v1":234,"color":"eaff00","cMask":["wall"],"cGroup":["wall"]},{"v0":234,"v1":233,"color":"eaff00","cMask":["wall"],"cGroup":["wall"]},{"v0":233,"v1":235,"color":"eaff00","cMask":["wall"],"cGroup":["wall"]}],"goals":[],"discs":[{"radius":0,"pos":[0,0],"cMask":["wall"],"cGroup":["wall"]},{"radius":0,"pos":[0,0],"cMask":["wall"],"cGroup":["wall"]},{"radius":7,"pos":[-363,-233],"color":"EAFF00","bCoef":0.465,"cGroup":["ball","kick"]},{"radius":7,"pos":[-362,-141],"color":"EAFF00","bCoef":0.465,"cGroup":["ball","kick"]},{"radius":7,"pos":[-356.6,87.96000000000002],"color":"EAFF00","cGroup":["ball"],"gravity":[0.035,0]},{"radius":7,"pos":[-357.44,214.24],"color":"EAFF00","cGroup":["ball"],"gravity":[-0.035,0]},{"radius":7,"pos":[91.372037118678,-147.41839434788352],"color":"EAFF00","cGroup":["ball","kick"],"gravity":[0,0.025]},{"radius":15,"invMass":0,"pos":[150,-150],"color":"5689e5","bCoef":1},{"radius":15,"invMass":0,"pos":[385,-150],"color":"5689e5","bCoef":1},{"radius":7,"pos":[321.0016667483076,-140.0109869404761],"color":"EAFF00","bCoef":0.465,"cGroup":["ball","kick"]},{"radius":15,"invMass":1.0e-85,"pos":[103,185],"color":"5689e5","bCoef":1,"cMask":["red","blue","c2","c3","ball"],"cGroup":["red","blue","c0","c2"],"damping":1,"speed":[1.5,0]},{"radius":15,"invMass":1.0e-85,"pos":[63.322653122174906,50.79720908970921],"color":"5689e5","bCoef":1,"cMask":["red","blue","c2","c3","ball"],"cGroup":["red","blue","c0","c2"],"damping":1,"speed":[-1.5,0]},{"radius":7,"pos":[46.00166674830763,118.9890130595239],"color":"EAFF00","bCoef":0.465,"cGroup":["ball","kick"]},{"radius":7,"pos":[161.00166674830763,119.9890130595239],"color":"EAFF00","bCoef":0.465,"cGroup":["ball","kick"]},{"radius":5,"invMass":0,"pos":[600,-50],"color":"ffffff","bCoef":1},{"radius":5,"invMass":0,"pos":[600,50],"color":"ffffff","bCoef":1},{"radius":7,"pos":[846.8507751159347,5.275707161032844],"color":"EAFF00","bCoef":0.465,"cGroup":["ball","kick"]},{"radius":5,"invMass":0,"pos":[1175,-65],"color":"ffffff","bCoef":1},{"radius":5,"invMass":0,"pos":[1175,65],"color":"ffffff","bCoef":1},{"radius":7,"pos":[-441.84000000000003,-432.80000000000007],"color":"EAFF00","bCoef":0.465,"cGroup":["ball","kick"]},{"radius":7,"pos":[-144.83999999999992,-432.80000000000007],"color":"EAFF00","bCoef":0.465,"cGroup":["ball","kick"]},{"radius":7,"pos":[151.08000000000015,-431.7200000000001],"color":"EAFF00","bCoef":0.465,"cGroup":["ball","kick"]},{"radius":7,"pos":[450.24000000000024,-429.5600000000001],"color":"EAFF00","bCoef":0.465,"cGroup":["ball","kick"]},{"radius":5,"invMass":0,"pos":[-50,-300],"color":"ffffff","bCoef":1},{"radius":5,"invMass":0,"pos":[50,-300],"color":"ffffff","bCoef":1},{"radius":7,"pos":[271.8096667483077,117.65621305952389],"color":"EAFF00","bCoef":0.465,"cGroup":["ball","kick"]},{"radius":7,"pos":[382.6176667483077,115.3234130595239],"color":"EAFF00","bCoef":0.465,"cGroup":["ball","kick"]},{"radius":5,"invMass":0,"pos":[-75,350],"color":"75b484","bCoef":1},{"radius":5,"invMass":0,"pos":[-850,620],"color":"ffffff","bCoef":1},{"radius":5,"invMass":0,"pos":[-850,530],"color":"ffffff","bCoef":1},{"radius":5,"invMass":0,"pos":[-50,530],"color":"ffffff","bCoef":1},{"radius":5,"invMass":0,"pos":[-50,620],"color":"ffffff","bCoef":1},{"radius":5,"invMass":0,"pos":[50,620],"color":"ffffff","bCoef":1},{"radius":5,"invMass":0,"pos":[50,530],"color":"ffffff","bCoef":1},{"radius":5,"invMass":0,"pos":[850,530],"color":"ffffff","bCoef":1},{"radius":5,"invMass":0,"pos":[850,620],"color":"ffffff","bCoef":1},{"radius":7,"pos":[-450,575],"color":"EAFF00","cGroup":["ball","kick"],"gravity":[0,0]},{"radius":7,"pos":[450,575],"color":"EAFF00","cGroup":["ball","kick"],"gravity":[0,0]},{"radius":5,"invMass":0,"pos":[-50,300],"color":"ffffff","bCoef":1},{"radius":5,"invMass":0,"pos":[50,300],"color":"ffffff","bCoef":1},{"radius":5,"invMass":0,"pos":[75,350],"color":"75b484","bCoef":1},{"radius":5,"invMass":0,"pos":[-25,400],"color":"75b484","bCoef":1},{"radius":5,"invMass":0,"pos":[25,400],"color":"75b484","bCoef":1},{"radius":3,"invMass":0,"pos":[-865,530],"color":"ffffff","bCoef":1},{"radius":3,"invMass":0,"pos":[-865,620],"color":"ffffff","bCoef":1},{"radius":3,"invMass":0,"pos":[-35,530],"color":"ffffff","bCoef":1},{"radius":3,"invMass":0,"pos":[-35,620],"color":"ffffff","bCoef":1},{"radius":3,"invMass":0,"pos":[35,530],"color":"ffffff","bCoef":1},{"radius":3,"invMass":0,"pos":[35,620],"color":"ffffff","bCoef":1},{"radius":3,"invMass":0,"pos":[865,530],"color":"ffffff","bCoef":1},{"radius":3,"invMass":0,"pos":[865,620],"color":"ffffff","bCoef":1},{"radius":5,"invMass":0,"pos":[-600,-50],"color":"ffffff","bCoef":1},{"radius":5,"invMass":0,"pos":[-600,50],"color":"ffffff","bCoef":1},{"radius":7,"pos":[-990.7303483610787,-1.1719679999999641],"color":"EAFF00","bCoef":0.465,"cGroup":["ball","kick"]},{"radius":5,"invMass":0,"pos":[-1150,-95],"color":"ffffff","bCoef":1},{"radius":5,"invMass":0,"pos":[-1150,95],"color":"ffffff","bCoef":1}],"planes":[],"joints":[{"d0":0,"d1":1,"strength":"rigid","color":"transparent","length":0}],"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":6.9},"ballPhysics":"disc0"}';
const DISCORD_LINK = "https://discord.gg/DYWZFFsSYu";
const ALLOWED_COMMANDS = ["!bye", "!pick", "!sub", "!help", "!login", "!stats", "!surrender"];
const NEW_UPDATE_MESSAGE = "MỚI: Đội trưởng có thể lựa chọn đầu hàng bằng lệnh !surrender";

// Analyze the stadium
let parsedStadium = JSON.parse(STADIUM);
const GOAL_LINE = parsedStadium.goals[0].p0.map((coordinate) => Math.abs(coordinate)); // Both x and y values are positive numbers
const BALL_RADIUS = parsedStadium.ballPhysics.radius || 10;
const PLAYER_RADIUS = parsedStadium.playerPhysics.radius || 15;
delete parsedStadium; // Free the memory

const playerStats = {
  name: null,
  goals: 0,
  assists: 0,
  ownGoals: 0,
  wins: 0,
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
  groups: {
    1: [], // RED penalty takers
    2: [], // BLUE penalty takers
  },
  results: [[], []], // Results of taken penalties (first for RED, second for BLUE)
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
  predict: [predictFunc, 0, ["rand", "pick"]],
  reducesize: [reduceSizeFunc, 0, ["rand", "pick"]],
  captains: [listCaptainsFunc, 0, ["pick"]],
  surrender: [surrenderFunc, 1, ["pick"]],
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
var isTraining = true;
var canPause = false;
var winningStreak = 0;
var prevWinner = 1;
var pickTurn = 0;
var pausedBy = 0;
var captains = {1: 0, 2: 0};
var kits = {red: null, blue: null};
var prevScore = null;
var predictions = {};
var lastMessage = [null, null]; // Last message and the player ID of the sender
var ballRecords = [null, null, null]; // Ball properties of the last 3 kicks
var game = null;
var penalty = null;
var timeouts = {
  toPick: null,
  toResume: null,
  toTakePenalty: null,
  toAct: {},
};
var quotes = [];

var room = HBInit({
  roomName: `💥 [De Paul's auto room] 5v5 (${MODE})`,
  maxPlayers: 30,
  playerName: "BLV Trông Anh Ngược",
  public: true,
});
room.setScoreLimit(5);
room.setTimeLimit(5);
room.setCustomStadium(TRAINING_STADIUM);
room.setTeamsLock(1);
room.setKickRateLimit(7, 15, 3);
room.startGame();

setInterval(randomAnnouncement, NOTIFICATION_INTERVAL * 1000);
if ( MODE == "pick" ) setInterval(showSpecTable.bind(null), 7 * 1000); // Send Spectators table once every few seconds to prevent it from being faded away by other messages
updateMetadata();

function getPlayerStats() {
  let playerList = [];
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if ( key.length != 43 ) continue;
    playerList.push(JSON.parse(localStorage.getItem(key)));
  };
  return playerList;
}

async function randomAnnouncement() {
  let msg = null;
  switch ( Math.floor(Math.random() * 5) ) {
    case 0: // Send Discord link
      msg = `🔔 Đừng quên vào server Discord của De Paul: ${DISCORD_LINK}`;
      break;
    case 1: // Send top scorers list
      let topScorers = getPlayerStats().sort(function(player1, player2) {
        if ( player1.goals == player2.goals ) {
          return player2.assists - player1.assists;
        };
        return player2.goals - player1.goals;
      }).slice(0, 5);
      msg = `Danh sách ghi bàn hàng đầu tháng ${getMonths()}: ${topScorers.map((player, index) => `${index + 1}. ${player.name} (${player.goals} ⚽)`).join("  •  ")}`;
      break;
    case 2: // Send top assisters list
      let topAssisters = getPlayerStats().sort(function(player1, player2) {
        if ( player1.assists == player2.assists ) {
          return player2.goals - player1.goals;
        };
        return player2.assists - player1.assists;
      }).slice(0, 5);
      msg = `Danh sách kiến tạo hàng đầu tháng ${getMonths()}: ${topAssisters.map((player, index) => `${index + 1}. ${player.name} (${player.assists} 👟)`).join("  •  ")}`;
      break;
    default: // Send a random quote
      (quotes.length == 0) && await fetch("https://api.quotable.io/quotes/random?limit=50", { method: "GET" }) // Fetch new quotes
        .then( response => response.json() )
        .then( json => quotes = json.map((quote) => `"${quote.content}" - ${quote.author}`) );
      msg = quotes.pop();
  }
  room.sendAnnouncement(msg, null, YELLOW, "small-italic", 0);
}

function updateMetadata() {
  let month = new Date().getMonth() + 1;
  let lastPlayedMonth = localStorage.getItem("last_played_month");
  // Assign missing metadata items (inaccurately)
  lastPlayedMonth || (lastPlayedMonth = month); // This also prevents `month != lastPlayedMonth` condition below, which is good because calling `resetStorage()` would cause bugs as it uses "last_played_month" from localStorage
  localStorage.getItem("starting_month") || localStorage.setItem("starting_month", lastPlayedMonth);

  if (
    (month != lastPlayedMonth) && // New month has come, should we summarize and reset local storage?
    confirm("Đã sang tháng mới, bạn có muốn tổng kết thống kê?")
  ) resetStorage();

  localStorage.setItem("last_played_month", month);
}

// Reset data saved in the localStorage
function resetStorage() {
  let playerList = getPlayerStats();
  let topScorers = playerList.sort(function(player1, player2) {
    if ( player1.goals == player2.goals ) {
      return player2.assists - player1.assists;
    };
    return player2.goals - player1.goals;
  }).slice(0, 5);
  let topAssisters = playerList.sort(function(player1, player2) {
    if ( player1.assists == player2.assists ) {
      return player2.goals - player1.goals;
    };
    return player2.assists - player1.assists;
  }).slice(0, 5);
  let topOwnGoalScorers = playerList.sort((player1, player2) => player2.ownGoals - player1.ownGoals).slice(0, 5);

  let msg = `Danh sách vua phá lưới tháng ${getMonths()}:

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
  sendWebhook(`✨ Số liệu thống kê trong tháng ${getMonths()}`, null, discordFields);

  localStorage.clear();
  localStorage.setItem("starting_month", new Date().getMonth() + 1);
}

// Get months that are being monitored for statistics
function getMonths() {
  let starting_month = localStorage.getItem("starting_month");
  let ending_month = localStorage.getItem("last_played_month");
  if ( starting_month != ending_month ) return `${starting_month}-${ending_month}`;
  return starting_month;
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

// Return the opposite team ID of a team ID
function getOppositeTeamId(id) {
  return ( id == 1 ) ? 2 : ( id == 2 ) ? 1 : 0;
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
  if ( !value ) return null;
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

function getPredictionWinners() {
  return (predictions[prevScore] || []).filter(function(id) {
    if ( afkList.has(id) ) return false;
    let player = room.getPlayer(id);
    return (player !== null) && (player.team !== prevWinner);
  });
}

// Get the spectator with the highest number of G/A
function getBestSpectatorByStats() {
  let bestPlayer = null;
  let highestGA = -1;
  for (spectator of getNonAfkPlayers().filter((player) => player.team == 0)) {
    let stats = getStats(identities[spectator.id][0]);
    if ( stats.goals + stats.assists <= highestGA ) continue;
    bestPlayer = spectator;
    highestGA = stats.goals + stats.assists;
  };
  return bestPlayer;
}

// Return the index (0 or 1) of the team that will take the penalty
function getPenaltyTurn() {
  return penalty.results.flat(1).length % 2;
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

// Show spectators with their assigned numbers to captains for them to pick by number
function showSpecTable() {
  if ( !isPicking ) return;
  let playerList = room.getPlayerList()
    .filter((player) => (player.team == 0) && !afkList.has(player.id))
    .map((player, index) => `${player.name} (#${index + 1})`);
  let table = " ".repeat(85) + "DANH SÁCH DỰ BỊ\n" + "_".repeat(150) + "\n" + playerList.join("  •  ") + "\n" + "_".repeat(150);
  room.sendAnnouncement(table, captains[pickTurn], BLUE, "small-bold", 0);
  room.sendAnnouncement("Hướng dẫn: nhập số hoặc tag để chọn người chơi (VD: 2 hoặc @De_Paul). Nhập '0' để tự động chọn người chơi có thống kê tốt nhất", captains[pickTurn], YELLOW, "small", 0);
}

// Kick player if violates any rule
function isPlayerValid(player) {
  // 2 players have the same connection ID
  if ( Object.values(identities).map((identity) => identity[1]).includes(player.conn) ) {
    room.kickPlayer(player.id, "Người chơi có cùng địa chỉ IP với một người chơi khác trong phòng");
    return false;
  };
  // Duplicate tag
  let tag = getTag(player.name.trim());
  if ( room.getPlayerList().some((_player) => (_player.id != player.id) && (getTag(_player.name.trim()) == tag)) ) {
    room.kickPlayer(player.id, "Vui lòng đổi tên");
    return false;
  };
  return true;
}

function saveIdentities(player) {
  identities[player.id] = [player.auth, player.conn];
}

// Return player's statistics in the room
function getStats(auth) {
  return JSON.parse(localStorage.getItem(auth)) || { ...playerStats };
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
  penalty.results[getPenaltyTurn()].push(false);
  // Stop and start the game again to reset the ball position
  room.stopGame();
  room.startGame();
  takePenalty();
}

// Returns the team that wins the penalty shootout
function getPenaltyWinner() {
  if ( penalty.results[0].length > 5 ) { // "Sudden Death" round
    if ( penalty.results[0].length != penalty.results[1].length ) return null;
    if ( penalty.results[0].at(-1) == penalty.results[1].at(-1) ) return null;
    return penalty.results[0].at(-1) ? 1 : 2;
  };

  // One team has more penalties scored than the other team even if the other team scores all the remaining penalties
  if ( penalty.results[0].filter((result) => result).length > 5 - penalty.results[1].filter((result) => !result).length ) {
    return 1;
  } else if ( penalty.results[1].filter((result) => result).length > 5 - penalty.results[0].filter((result) => !result).length ) {
    return 2;
  };
  return null;
}

async function updateTeamPlayers(subPlayer) {
  let scores = room.getScores();
  if ( (scores === null) || isTakingPenalty ) return;

  await navigator.locks.request("update_team_players", async lock => {
    let players = getNonAfkPlayers();
    let redPlayersCount = players.filter((player) => player.team == 1).length;
    let bluePlayersCount = players.filter((player) => player.team == 2).length;
    if ( (redPlayersCount >= 5) && (bluePlayersCount >= 5) ) return; // Enough players for 2 teams
    // Find team that needs new player the most, if both have the same number of players, choose team who is worse in scores, or RED if neither is
    let missingTeam = ( redPlayersCount > bluePlayersCount ) ? 2 : ( redPlayersCount < bluePlayersCount ) ? 1 : 1 + (scores.red > scores.blue) | 0;

    if ( !subPlayer ) {
      // Get a bench player
      subPlayer = players.find((player) => player.team == 0);
      if ( !subPlayer ) { // No player left in the Spectators
        if ( Math.abs(redPlayersCount - bluePlayersCount) < 2 ) return;
        // Move a player from one team to another because of the gap in player count between 2 teams
        subPlayer = players.filter((player) => player.team == getOppositeTeamId(missingTeam)).at(-1); // Take player from the last to avoid moving captains
      }
    }

    await room.setPlayerTeam(subPlayer.id, missingTeam);
    if ( MODE == "pick" ) {
      room.sendAnnouncement(`${subPlayer.name} đã được tự động thay vào đội, dùng !sub để thay người`, captains[missingTeam], YELLOW);
    };
  });
}

// Update information to monitor last kickers, possession and passing accuracy
function updateBallKick(player) {
  if ( !isPlaying ) return;
  let ballProperties = room.getDiscProperties(0);
  ballProperties.byPlayer = player;
  ballProperties.isAShot = false;
  ballRecords.unshift(ballProperties);
  ballRecords.pop();

  // If the previous kick was a shot on goal, check whether it's blocked by this kick and exclude that shot from "shots on target" if it is
  if (
    ballRecords[1] &&
    ballRecords[1].isAShot &&
    (ballRecords[1].byPlayer.team != player.team) &&
    (getDistance(ballProperties.x - ballRecords[1].x, ballProperties.y - ballRecords[1].y) < BALL_RADIUS * 2)
  ) {
    game.teams[ballRecords[1].byPlayer.team].shotsOnTarget--;
  } else { // Check for shot on target
    let xOpponentGoal = ( player.team == 1 ) ? GOAL_LINE[0] : -GOAL_LINE[0]; // The x position value of the opponent's goal
    if (
      (xOpponentGoal * ballProperties.xspeed > 0) && // It's a kick toward the opponent goal
      (Math.abs(ballProperties.x + ballProperties.xspeed * 99.762) > GOAL_LINE[0]) // At this speed, the ball can cross the goal line
    ) {
      // Check if it's on target (not really accurate because it might hit the post)
      if ( Math.abs(ballProperties.y + ballProperties.yspeed * (xOpponentGoal - ballProperties.x) / ballProperties.xspeed) < GOAL_LINE[1] ) {
        game.teams[player.team].shotsOnTarget++;
        ballRecords[0].isAShot = true;
      };
    } else {
      // Switch to penalty shootout when it hits maximum added time
      let scores = room.getScores();
      if ( scores.time - scores.timeLimit > MAX_ADDED_TIME ) { // Maximum extra time exceeded
        startPenaltyShootout();
        return;
      };
    };
  };

  // Update total kicks
  game.teams[player.team].kicks++;
  // Update accurate kicks
  if ( ballRecords[1] === null ) { // Kick-off pass
    // Disallow pausing after kick-off
    canPause = false;
    return;
  };
  if ( player.team != ballRecords[1].byPlayer.team ) return; // Received the ball from an opponent player

  // Received the ball from a teammate, so the previous kick was a pass
  if ( player.id != ballRecords[1].byPlayer.id ) game.teams[player.team].passes++;
  // Received the ball from a teammate or from yourself, so the previous kick kept the possession
  game.teams[player.team].possessedKicks++;
}

// Change captain of a specific team
async function updateCaptain(teamId, newCaptain) {
  // Choose a random captain from the current team
  if ( !newCaptain ) {
    // Exclude former captain and AFK players
    let players = getNonAfkPlayers();
    newCaptain = (
      players.find((player) => (player.team == teamId) && !isCaptain(player.id)) || // Find someone who is in the team
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
  if ( newCaptain.team == teamId ) {
    // Move old captain to the bottom of the team list to prevent being re-selected as the captain next time
    room.reorderPlayers([oldCaptainId], false);
  } else if ( !isTakingPenalty ) {
    // Move new captain to team
    await room.setPlayerTeam(newCaptain.id, teamId);
    // Move old captain to Spectators
    await room.setPlayerTeam(oldCaptainId, 0);
  };
  room.sendAnnouncement(`${newCaptain.name} đã được chọn làm đội trưởng của ${TEAM_NAMES[teamId]}`, null, GREEN, "bold");

  // Reset pick timeout for the new captain
  if ( isPicking && (pickTurn == teamId) ) {
    clearTimeout(timeouts.toPick);
    requestPick();
  };
}

// Under certain circumstances, automatically pick, start the game and return true
function checkAutoPick() {
  if ( !isPicking ) return;
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
  if (
    ((redPlayersCount >= 5) && (bluePlayersCount >= 5)) ||
    ((specPlayers.length > 1) && (Math.abs(redPlayersCount - bluePlayersCount) < specPlayers.length))
  ) return false;

  // Move all players to the missing team
  for (player of specPlayers) {
    room.setPlayerTeam(player.id, 1 + (redPlayersCount > bluePlayersCount) | 0);
  };
  room.startGame();
  return true;
}

// Request a pick from the most needed team
function requestPick() {
  if ( !isPicking || checkAutoPick() ) return; // Game started
  let players = room.getPlayerList();
  let redPlayersCount = players.filter((player) => player.team == 1).length;
  let bluePlayersCount = players.filter((player) => player.team == 2).length;
  // Enough players for 2 teams
  if ( (redPlayersCount >= 5) && (bluePlayersCount >= 5) ) {
    room.startGame();
    return;
  };
  pickTurn = ( redPlayersCount > bluePlayersCount ) ? 2 : 1;

  room.sendAnnouncement(`${TEAM_NAMES[pickTurn]} đang chọn người chơi...`, null, YELLOW);
  showSpecTable();
  room.sendAnnouncement("Đã đến lượt bạn chọn người chơi", captains[pickTurn], YELLOW, "bold", 2);
  // Kick if captain doesn't pick in time
  timeouts.toPick = setTimeout(
    room.kickPlayer.bind(null, captains[pickTurn], "AFK"),
    (( Math.min(redPlayersCount, bluePlayersCount) > 1 ) ? PICK_DEADLINE : FIRST_PICK_DEADLINE) * 1000,
  );
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
  let item = getStats(identities[player.id][0]);
  room.sendAnnouncement(`Thống kê trong tháng ${getMonths()} của ${player.name}:`, player.id, BLUE, "bold");
  room.sendAnnouncement(`⚽ Bàn thắng: ${item.goals}
🤝🏻 Kiến tạo: ${item.assists}
❌ Bàn thắng phản lưới nhà: ${item.ownGoals}
👑 Chiến thắng: ${item.wins}`, player.id, BLUE, "small-bold");
  return false;
}

function kickAfkFunc(value, player) {
  if ( !isPlaying || isTraining ) {
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
  } else if ( !getNonAfkPlayers().some((_player) => _player.team == 0) ) {
    room.sendAnnouncement("Đã hết người chơi để thay vào", player.id, RED);
    return false;
  };

  room.setPlayerTeam(player.id, 0);
  room.sendAnnouncement("Bạn đã được di chuyển ra Spectators", player.id, GREEN);
  updateTeamPlayers();
  return true;
}

function listCaptainsFunc(value, player) {
  (captains[1] != 0) && room.sendAnnouncement(`Đội trưởng của RED: ${room.getPlayer(captains[1]).name}`, null, GREEN, "normal", 0);
  (captains[2] != 0) && room.sendAnnouncement(`Đội trưởng của BLUE: ${room.getPlayer(captains[2]).name}`, null, GREEN, "normal", 0);
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
  if ( Object.values(predictions).some((predictors) => predictors.includes(player.id)) ) { // Has already had a prediction
    room.sendAnnouncement("Bạn chỉ có thể thực hiện một dự đoán trong một trận đấu", player.id, RED);
    return false;
  };
  let scores = room.getScores();
  if ( (scores === null) || (scores.time > PREDICTION_PERIOD) || (scores.red + scores.blue != 0) ) {
    room.sendAnnouncement("Đã hết thời hạn dự đoán tỉ số", player.id, RED);
    return false;
  };

  let score = prediction.split("-").map((goals) => Number(goals));
  if ( (score.length != 2) || score.some((goals) => goals % 1 !== 0) ) {
    room.sendAnnouncement("Tỉ số không hợp lệ, vui lòng đảm bảo tỉ số có dạng RED-BLUE (VD: 2-1)", player.id, RED);
    return false;
  };
  let scoreLimit = room.getScores().scoreLimit;
  if ( (scoreLimit != 0) && (score.some((goals) => goals > scoreLimit) || (score[0] + score[1] == scoreLimit * 2)) ) {
    room.sendAnnouncement("Tỉ số không thể xảy ra", player.id, RED);
    return false;
  };
  prediction = score.join("-"); // Re-format weird scores like "0x01-0x02", even though I don't know why I should even care
  if ( predictions[prediction] === undefined ) {
    predictions[prediction] = [player.id];
  } else if ( MODE == "pick" ) { // There is only 1 winner per match in pick mode
    room.sendAnnouncement("Đã có người dự đoán tỉ số này, vui lòng dự đoán tỉ số khác", player.id, RED);
    return false;
  } else if ( predictions[prediction].length <= 5 ) {
    predictions[prediction].push(player.id);
  } else { // There are maximum 5 winners per match in rand mode
    room.sendAnnouncement("Đã có 5 người dự đoán tỉ số này, vui lòng dự đoán tỉ số khác", player.id, RED);
    return false;
  };
  
  room.sendAnnouncement(`${player.name} đã dự đoán tỉ số RED ${prediction} BLUE`, null, GREEN);
  return false;
}

function reduceSizeFunc(value, player) {
  let playerDiscProperties = room.getPlayerDiscProperties(player.id);
  if ( playerDiscProperties === null ) {
    room.sendAnnouncement("Bạn đang ở ngoài sân", player.id, RED);
    return false;
  };

  if ( PLAYER_RADIUS - playerDiscProperties.radius >= MAX_PLAYER_RADIUS_REDUCTION ) {
    room.sendAnnouncement("Đã giảm đến kích thước tối đa", player.id, RED);
    return false;
  };
  room.setPlayerDiscProperties(player.id, { radius: playerDiscProperties.radius - 1 });
  return false;
}

function surrenderFunc(value, player) {
  let scores = room.getScores();
  if ( isTakingPenalty || (scores === null) ) {
    room.sendAnnouncement("Lệnh không khả dụng lúc này", player.id, RED);
    return false;
  };
  if ( scores.time < MIN_TIME_FOR_SURRENDER ) {
    room.sendAnnouncement("Chưa đủ thời gian chơi tối thiểu để có thể đầu hàng, vui lòng đợi thêm", player.id, RED);
    return false;
  };
  if ( ( player.team == 1 ) ? (scores.red >= scores.blue) : (scores.blue >= scores.red) ) {
    room.sendAnnouncement("Bạn chỉ có thể đầu hàng khi đội đang thua", player.id, RED);
    return false;
  };

  room.sendChat(`Đội trưởng của ${TEAM_NAMES[player.team]} đã lựa chọn đầu hàng, ${TEAM_NAMES[player.team]} đã bị xử thua`);
  prevScore = `${scores.red}-${scores.blue}`;
  handlePostGame(getOppositeTeamId(player.team));
  room.stopGame();
  return false;
}

function subFunc(value, player) {
  if ( room.getScores() === null ) {
    room.sendAnnouncement("Bạn chỉ có thể thay người khi trận đấu đang diễn ra", player.id, RED);
    return false;
  };
  let sub = value.split(" ", 2);
  if ( sub[0] == "" ) {
    room.sendAnnouncement("Đặt cầu thủ muốn thay ra TRƯỚC cầu thủ muốn thay vào, bỏ trống vị trí thay vào nếu muốn tự động thay vào cầu thủ có thống kê tốt nhất trong room (VD: !sub @a @b hoặc !sub @a)", player.id, RED);
    return false;
  };

  let [outPlayer, inPlayer] = [getPlayerByName(sub[0]), getPlayerByName(sub[1]) || getBestSpectatorByStats()];
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
    room.sendAnnouncement("Vui lòng cung cấp một người chơi hợp lệ và lý do phạt nếu có (VD: !yellow @De_Paul hoặc !yellow paul Láo)", player.id, RED);
    return false;
  };

  value = value.split(" ");
  let [name, reason] = [value.shift(), value.join(" ")];
  let toPlayer = getPlayerByName(name);
  if ( !toPlayer ) {
    room.sendAnnouncement(`Không thể tìm thấy người chơi "${name}"`, player.id, RED);
    return false;
  };

  let yellowCards = JSON.parse(localStorage.getItem("yellow_cards")) || [];
  let index = yellowCards.indexOf(identities[toPlayer.id][1]);
  if ( index != -1 ) { // Player has already received a yellow card
    yellowCards.splice(index, 1); // Clear the card
    room.kickPlayer(toPlayer.id, "Bạn đã nhận 2 thẻ vàng", true);
    var msg = `🟨🟨 ${toPlayer.name} đã nhận thẻ vàng thứ 2 từ ${player.name}`;
  } else {
    yellowCards.push(identities[toPlayer.id][1]);
    var msg = `🟨 ${toPlayer.name} đã nhận một thẻ vàng từ ${player.name} (2 thẻ vàng = ban)`;
  };
  reason && (msg += `: ${reason}`);
  room.sendAnnouncement(msg, null, YELLOW);
  localStorage.setItem("yellow_cards", JSON.stringify(yellowCards));
  return false;
}

function muteFunc(value, player) {
  if ( !value ) {
    room.sendAnnouncement("Vui lòng cung cấp người chơi, thời hạn cấm chat (đơn vị phút, để 0 để cấm vĩnh viễn) và lý do nếu có (VD: !mute @ân 1 / !mute paul 0 Ngu)", player.id, RED);
    return false;
  };

  value = value.split(" ");
  let [name, period, reason] = [value.shift(), value.shift(), value.join(" ")];
  let toPlayer = getPlayerByName(name);
  if ( !toPlayer ) {
    room.sendAnnouncement(`Không thể tìm thấy người chơi "${name}"`, player.id, RED);
    return false;
  };

  if ( isNaN(period) || period < 0 ) {
    room.sendAnnouncement("Vui lòng cung cấp một thời hạn cấm chat hợp lệ (VD: !mute @De_Paul 3)", player.id, RED);
    return false;
  };

  muteList.add(identities[toPlayer.id][1]);
  if ( period == 0 ) {
    var msg = `${toPlayer.name} đã bị cấm chat bởi ${player.id}`;
  } else {
    setTimeout(muteList.delete.bind(muteList, identities[toPlayer.id][1]), period * 60 * 1000);
    var msg = `${toPlayer.name} đã bị cấm chat trong ${period} phút bởi ${player.name}`;
  };
  reason && (msg += `: ${reason}`);
  room.sendAnnouncement(msg, null, RED, "bold");
  return false;
}

function unmuteFunc(value, player) {
  if ( !value ) {
    room.sendAnnouncement("Vui lòng cung cấp một người chơi hợp lệ (VD: !unmute @De_Paul hoặc !unmute paul)", player.id, RED);
    return false;
  };

  let toPlayer = getPlayerByName(value);
  if ( !toPlayer ) {
    room.sendAnnouncement(`Không thể tìm thấy người chơi "${value}"`, player.id, RED);
    return false;
  };

  muteList.delete(identities[toPlayer.id][1]);
  room.sendAnnouncement(`${toPlayer.name} đã có thể chat trở lại`, null, GREEN);
}

function clearMutesFunc(value, player) {
  muteList.clear();
  room.sendAnnouncement("Đã xóa các lượt cấm chat", null, GREEN);
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
    checkAutoPick();
  };

  updateTeamPlayers();
  reorderPlayers();
  showSpecTable();
  return false;
};

// Pick a player from the Spectators to move to a team
async function pick(pickedPlayer, team) {
  if ( !pickedPlayer ) { // No player provided, therefore select player with the best statistics
    pickedPlayer = getBestSpectatorByStats();
    if ( !pickedPlayer ) return; // Just in case there is any weird race condition bug:/
  };

  clearTimeout(timeouts.toPick);
  await room.setPlayerTeam(pickedPlayer.id, team);
  room.sendAnnouncement(`${pickedPlayer.name} đã được chọn vào ${TEAM_NAMES[team]}`, null, GREEN);
  requestPick();
}

function processCommand(player, input) {
  // Get alias and value from command
  let splitIndex = input.indexOf(" ");
  splitIndex = ( splitIndex != -1 ) ? splitIndex : input.length;
  let [alias, value] = [input.slice(0, splitIndex).toLowerCase(), input.slice(splitIndex + 1).trim()];
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
  var [shot, assist] = ballRecords;
  if ( shot === null ) return;

  if ( shot.byPlayer.team != team ) { // Own goal
    // Not an own goal but probably a clearing/goalkeeping effort
    if (
      assist && // Someone's kick resulted in this goal
      assist.isAShot && // The previous kick was a shot on target
      (assist.byPlayer.team == team) && // The previous kick came from an opponent player
      (Math.abs(shot.x) > GOAL_LINE[0] - BALL_RADIUS * 6) // The gap between the ball and the goal-line was too small that it probably was an effort to clear the ball
    ) {
      // Correct the credits
      [shot, assist] = ballRecords.slice(1);
    } else {
      updatePlayerStats(shot.byPlayer, 0);
      room.sendChat(`Một bàn phản lưới nhà do sai lầm của ${getTag(shot.byPlayer.name)}`);
      return;
    };
  };

  updatePlayerStats(shot.byPlayer, 1);
  // Counting this shot as a "possessed kick"
  game.teams[shot.byPlayer.team].possessedKicks++;
  if ( identities[shot.byPlayer.id] === undefined ) return; // Scorer left the game
  // Design celebrating comment
  let hasScored = game.players[identities[shot.byPlayer.id][0]].goals;
  let comment = SCORER_COMMENTARIES[hasScored] || `Thật điên rồ, bàn thắng thứ ${hasScored} trong trận đấu này của`;
  comment = comment.concat(" ", getTag(shot.byPlayer.name));

  if (
    (assist !== null) &&
    (assist.byPlayer.team == team) && // Assisted by teammate
    (assist.byPlayer.id != shot.byPlayer.id) && // Not a solo goal
    (assist.byPlayer.id in identities) // Assister hasn't left the game
  ) {
    updatePlayerStats(assist.byPlayer, 2);
    let hasAssisted = game.players[identities[assist.byPlayer.id][0]].assists;
    if ( hasAssisted != 1 ) { // Multiple assists O_O
      comment = comment.concat(", ", `${getTag(assist.byPlayer.name)} đã có cho mình kiến tạo thứ ${hasAssisted} trong trận đấu`);
    } else {
      comment = comment.concat(", ", `đường kiến tạo từ ${getTag(assist.byPlayer.name)}`);
    };
  };

  room.sendChat(comment);
  // Calculate goal stats
  let ballProperties = room.getDiscProperties(0);
  let speed = convertToMeters(getDistance(shot.xspeed, shot.yspeed) * 60); // There are 60 frames per second
  let distance = convertToMeters(getDistance(Math.abs(shot.x - ballProperties.x), Math.abs(shot.y - ballProperties.y)));
  room.sendAnnouncement(`Khoảng cách: ${distance || "dưới 1"}m | Lực sút: ${speed} (m/s)`, null, GREEN, "small");
}

function saveStats() {
  for (const [auth, info] of Object.entries(game.players)) {
    let item = getStats(auth);
    item.name = info.name;
    item.goals += info.goals;
    item.assists += info.assists;
    item.ownGoals += info.ownGoals;
    localStorage.setItem(auth, JSON.stringify(item));
  };
  for (player of room.getPlayerList()) {
    if ( player.team != prevWinner ) continue;
    let item = getStats(identities[player.id][0]);
    item.name = player.name;
    item.wins += 1;
    localStorage.setItem(identities[player.id][0], JSON.stringify(item));
  };
}

function reportStats() {
  let scoreline = ` RED ${prevScore} BLUE`;
  if ( penalty.results[0].length != 0 ) {
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
  if (
    ((scores.scoreLimit != 0) && [scores.red, scores.blue].includes(scores.scoreLimit)) || // Maximum goals reached
    ((scores.timeLimit != 0) && (scores.time > scores.timeLimit)) // Overtime goal
  ) {
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
    muteFunc(`${getTag(player.name)} 1 Spam`, room.getPlayer(0));
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
  let deepestPositions = [Number.MAX_VALUE, Number.MIN_VALUE];
  room.getPlayerList().forEach(function(player) {
    let isLowest = false;
    switch ( player.team ) {
      case 0:
        return;
      case 1:
        isLowest = player.position.x < deepestPositions[0];
        break;
      case 2:
        isLowest = player.position.x > deepestPositions[1];
    }

    if ( isLowest ) { // The lowest player will be assigned to the GK role
      penalty.groups[player.team].push(player.id); // GK is the player in the last index of the array
      deepestPositions[player.team - 1] = player.position.x;
    } else {
      penalty.groups[player.team].unshift(player.id);
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

async function endPenaltyShootout(winner) {
  // Put players back to where they were before the penalty shootout
  for (teamId = 1; teamId < 3; teamId++) {
    for (id of penalty.groups[teamId]) {
      await room.setPlayerTeam(id, teamId);
    };
  };
  handlePostGame(winner);
  isTakingPenalty = false;
  room.stopGame();
  room.setTimeLimit(5);
  room.setScoreLimit(5);
  room.setCustomStadium(STADIUM);
}

async function takePenalty() {
  let winner = getPenaltyWinner();
  // Found the winner in this penalty shootout
  if ( winner !== null ) {
    room.sendChat(`Và đó cũng là dấu chấm hết, ${TEAM_NAMES[winner]} là những người chiến thắng, sau màn trình diễn đáng kinh ngạc của họ`);
    endPenaltyShootout(winner);
    return;
  };

  // Put previous penalty taker and goalkeeper back to the Spectators
  for (player of room.getPlayerList()) {
    if ( player.team == 0 ) continue;
    await room.setPlayerTeam(player.id, 0);
  };
  let turn = getPenaltyTurn();
  switch ( turn ) {
    case 0:
      room.setTeamColors(1, ...kits.red);
      room.setTeamColors(2, ...GOALKEEPER_COLORS.blue);
      break;
    case 1:
      room.setTeamColors(1, ...kits.blue);
      room.setTeamColors(2, ...GOALKEEPER_COLORS.red);
  };

  let penaltyTaker = room.getPlayer(penalty.groups[turn + 1].at(penalty.results[1].length % penalty.groups[turn + 1].length));
  await room.setPlayerTeam(penaltyTaker.id, 1);
  await room.setPlayerTeam(penalty.groups[getOppositeTeamId(turn + 1)].at(-1), 2);
  let penResults = [[], []];
  for (i = 0; i < 2; i++) {
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
    } else if ( turn <= i ) {
      penResults[i].push("⚪");
    };
  };
  room.sendAnnouncement(` RED ${penResults[0].reverse().join("")} - ${penResults[1].join("")} BLUE`, null, BLUE, "bold");
  if ( penalty.results.flat(1).length == 10 ) {
    room.sendChat('Giờ ta sẽ đến loạt sút "Sudden Death", một đội thực hiện thành công và đội còn lại đá trượt thì kết quả sẽ được định đoạt');
  };
  room.sendChat(`Bây giờ ${getTag(penaltyTaker.name)} sẽ bước lên để thức hiện quả penalty`);
  room.sendAnnouncement(`Bạn có ${PENALTY_TIMEOUT} giây để thực hiện quả penalty`, penaltyTaker.id, YELLOW);
  timeouts.toTakePenalty = setTimeout(penaltyTimeoutCallback, PENALTY_TIMEOUT * 1000);
}

async function randPlayers() {
  // Prediction winners
  let predictionWinners = getPredictionWinners();
  for (playerId of predictionWinners) {
    room.sendAnnouncement("Chúc mừng bạn đã dự đoán đúng tỉ số, bạn đã nhận được 1 suất đá chính", playerId, GREEN, "bold", 2);
  };

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
      room.setPlayerTeam(id, getOppositeTeamId(prevWinner));
    } else {
      room.setPlayerTeam(id, 0);
    };
  });

  room.startGame();
}

async function pickPlayers() {
  let players = getNonAfkPlayers();
  // Change captain of the losing team
  let predictionWinner = getPredictionWinners()[0];
  if ( predictionWinner !== undefined ) {
    room.sendAnnouncement("Chúc mừng bạn đã dự đoán đúng tỉ số, bạn đã nhận được chiếc băng đội trưởng", predictionWinner, GREEN, "bold", 2);
    await updateCaptain(getOppositeTeamId(prevWinner), room.getPlayer(predictionWinner));
  } else {
    // Choose a random player who is not from the winning team to give the captain armband
    await updateCaptain(getOppositeTeamId(prevWinner), randomChoice(players.filter((player) => player.team != prevWinner)));
  };
  // Move players to Spectators
  for (player of players) {
    if ( isCaptain(player.id) || ((players.length > 10) && (player.team == prevWinner)) ) continue;
    await room.setPlayerTeam(player.id, 0);
  };
  isPicking = true;
  requestPick();
}

function reset() {
  game = JSON.parse(JSON.stringify(gameDefault));
  penalty = JSON.parse(JSON.stringify(penaltyDefault));
  predictions = {};
}

function handlePostGame(winner) {
  if ( winner == prevWinner ) {
    winningStreak++;
  } else {
    winningStreak = 1;
    prevWinner = winner;
  };
  reportStats();
}

room.onPlayerJoin = async function(player) {
  if ( !isPlayerValid(player) ) return;
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
    showSpecTable();
  };
  if ( isTraining && getNonAfkPlayers().length >= 6 ) {
    isTraining = false;
    room.stopGame();
    room.setCustomStadium(STADIUM);
    room.startGame();
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

  if ( isTakingPenalty ) {
    // A penalty taker left the room
    for (teamId = 1; teamId < 3; teamId++) {
      let index = penalty.groups[teamId].indexOf(player.id);
      if ( index == -1 ) continue;
      penalty.groups[teamId].splice(index, 1);
      if ( penalty.groups[teamId].length == 0 ) {
        room.sendChat(`Toàn bộ cầu thủ sút luân lưu của ${TEAM_NAMES[teamId]} đã rời phòng, ${TEAM_NAMES[teamId]} đã bị xử thua`);
        await endPenaltyShootout(getOppositeTeamId(teamId));
        break;
      };
    };
  } else if ( !isTraining && (getNonAfkPlayers().length < 6) ) { // Switch to training mode if there aren't enough players
    isTraining = true;
    room.stopGame();
    room.setCustomStadium(TRAINING_STADIUM);
    room.setTeamColors(1, ...TRAINING_COLOR);
    room.setTeamColors(2, ...TRAINING_COLOR);
    room.startGame();
    room.sendChat("Các cầu thủ đã được chuyển sang sân tập để chuẩn bị cho trận siêu kinh điển sắp tới");
  };

  // A captain left, assign another one
  if ( isCaptain(player.id) ) {
    if ( isTakingPenalty ) {
      // To assign another player who is from the same team, we have to pick up from `penalty.groups`
      await updateCaptain(player.team, room.getPlayer(penalty.groups[1 + (captains[2] == player.id) | 0].at(0)));
    } else {
      await updateCaptain(player.team);
    };
  };
  checkAutoPick() || showSpecTable();
}

room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
  if ( isTakingPenalty ) {
    // The current penalty taker was moved to the Spectators by an admin, consider it a failed penalty
    if ( (changedPlayer.team == 0) && (byPlayer.id != 0) && Object.values(penalty.groups).some((group) => group.includes(changedPlayer.id)) ) {
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
          break;
        default:
          showSpecTable();
      };
    };
  } else if ( afkList.has(changedPlayer.id) ) { // Move AFK players back to Spectators
    room.setPlayerTeam(changedPlayer.id, 0);
    room.sendAnnouncement("Người chơi đang ở trạng thái AFK", byPlayer.id, RED);
  } else if ( room.getScores() !== null ) {
    room.sendAnnouncement("Bạn đã được thay vào sân", changedPlayer.id, BLUE, "small", 2);
    if ( isPlaying ) {
      timeouts.toAct[changedPlayer.id] = setTimeout(afkCallback.bind(null, changedPlayer.id), AFK_DEADLINE * 1000);
    };
  };
}

room.onPlayerBallKick = function(player) {
  if ( isTakingPenalty || isTraining ) return;
  updateBallKick(player);
}

room.onTeamGoal = function(team) {
  if ( isTakingPenalty ) {
    clearTimeout(timeouts.toTakePenalty);
    penalty.results[getPenaltyTurn()].push(team == 1);
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
  ballRecords = [null, null,  null];
  // Allows captains to pause the game before kick-off
  if ( (MODE == "pick") && (room.getScores().time != 0) ) {
    canPause = true;
    for (captain of Object.values(captains)) {
      room.sendAnnouncement('Bạn có thể dừng game bằng lệnh !pause để thay người (dùng "!sub @thay_vào @thay_ra") trước khi kick-off', captain, YELLOW);
    };
  };
}

room.onPlayerChat = function(player, message) {
  if ( player.id == 0 ) return;
  clearAfkRecord(player.id);

  message = message.trimEnd();
  if ( !message ) return false; // Empty messages are not allowed
  if ( isPicking && isCaptain(player.id) && !message.includes(" ") && (Number.isInteger(+message) || message.startsWith("@")) ) { // Captain picks someone
    if ( player.team != pickTurn ) {
      room.sendAnnouncement("Chưa đến lượt bạn chọn", player.id, RED);
      return false;
    };

    switch ( message[0] ) {
      case "0": // Smart auto-pick
        pick(null, player.team);
        return false;
      case "@":
        var pickedPlayer = getPlayerByName(message);
        break;
      default:
        var pickedPlayer = getPlayerByPos(message);
    }

    if ( pickedPlayer === undefined ) {
      room.sendAnnouncement("Người chơi không tồn tại hoặc đã rời đi", player.id, RED);
    } else if ( afkList.has(pickedPlayer.id) ) {
      room.sendAnnouncement("Người chơi đang ở trạng thái AFK", player.id, RED);
    } else if ( pickedPlayer.team != 0 ) {
      room.sendAnnouncement("Người chơi không ở Spectators", player.id, RED);
    } else {
      pick(pickedPlayer, player.team);
    };

    return false;
  };
  // Perform some validations on the message
  if ( !player.admin && ALLOWED_COMMANDS.every((command) => !message.startsWith(command)) ) {
    // Disallow Spectators from messaging when 2 teams are picking or taking penalty
    if ( isTakingPenalty && (player.team == 0) ) {
      room.sendAnnouncement("Bạn chưa thể chat vào lúc này", player.id, RED);
      return false;
    };
    if ( muteList.has(identities[player.id][1]) ) {
      room.sendAnnouncement("Không thể chat, bạn đã bị cấm", player.id, RED);
      return false;
    };
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
  prevScore = `${scores.red}-${scores.blue}`;
  handlePostGame(( scores.red > scores.blue ) ? 1 : 2);
}

room.onGameStart = function(byPlayer) {
  isPlaying = true;
  isPicking = false;
  if ( isTakingPenalty || isTraining ) {
    return;
  };
  reset();
  // Stop forcing captain to pick
  clearTimeout(timeouts.toPick);
  setRandomColors();
  trackAfk();
  room.sendChat("Vậy là trận đấu đã chính thức được bắt đầu");
  room.sendChat(`Quý vị khán giả có ${PREDICTION_PERIOD} giây để dự đoán tỉ số và có cơ hội nhận được phần thưởng, cú pháp "!predict RED-BLUE" (VD: !predict 1-2)`);
}

room.onGameStop = async function(byPlayer) {
  isPlaying = false;
  clearAfkRecords(); // Stop monitoring AFK when the game is stopped
  if ( getNonAfkPlayers().length >= 10 ) saveStats(); // Save stats of the previous game
  if ( (byPlayer !== null) && (byPlayer.id != 0) ) { // It wasn't a game over or stopped by host player
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

room.onTeamsLockChange = function(locked, byPlayer) {
  // Make sure teams are always locked
  !locked && room.setTeamsLock(true);
}
