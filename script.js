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
const NOTIFICATION_INTERVAL = 5 * 60;
const MIN_TIME_FOR_SURRENDER = 3 * 60;
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
const TRAINING_STADIUM = '{"name":"Namajunas Practice from HaxMaps","width":850,"height":668,"bg":{"width":653,"height":320,"color":"484848"},"vertexes":[{"x":-651,"y":320,"cMask":["ball","wall"],"trait":"ballArea","vis":true,"color":"252525","curve":0,"bias":10},{"x":-650,"y":100,"bCoef":1.0e-27,"trait":"ballArea","vis":false,"color":"252525","curve":0,"radius":4.5,"invMass":6.0e-6},{"x":-650,"y":-100,"bCoef":1.0e-27,"cMask":["blue"],"cGroup":["blue"],"trait":"ballArea","color":"252525","vis":false,"curve":0,"radius":4.5,"invMass":6.0e-6},{"x":-650,"y":-320,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","vis":true,"bias":-30},{"x":750,"y":320,"trait":"ballArea","vis":true,"color":"252525","curve":0},{"x":750,"y":100,"bCoef":0.1,"cMask":["red"],"cGroup":["red"],"trait":"ballArea","vis":false,"color":"252525","curve":0,"radius":4.5,"invMass":6.0e-6},{"x":750,"y":-100,"bCoef":0.1,"cMask":["red"],"cGroup":["red"],"trait":"ballArea","curve":0,"vis":false,"color":"252525","radius":4.5,"invMass":6.0e-6},{"x":750,"y":-320,"cMask":["ball","wall"],"trait":"ballArea","curve":0,"vis":false,"color":"252525","bias":-1},{"x":0,"y":80,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":0,"y":80,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":0,"y":-336,"cMask":["wall"],"cGroup":["c1"],"trait":"kickOffBarrier","color":"252525","vis":false,"curve":20},{"x":-650,"y":-200,"bCoef":1,"cMask":["blue"],"cGroup":["blue"],"curve":0,"vis":false,"color":"252525"},{"x":-650,"y":200,"bCoef":1,"cMask":["blue","red"],"cGroup":["blue","red"],"curve":0,"vis":false,"radius":2,"color":"252525"},{"x":750,"y":200,"bCoef":1,"cMask":["red"],"cGroup":["red"],"curve":0,"vis":false},{"x":750,"y":-200,"bCoef":1,"cMask":["red"],"cGroup":["red"],"curve":0,"vis":false,"color":"252525"},{"x":-658.8,"y":320,"trait":"ballArea","vis":false,"color":"ffffff","curve":0,"bias":-10},{"x":-658.8,"y":100,"bCoef":0.1,"trait":"ballArea","vis":false,"color":"FFFFFF","radius":4.5,"invMass":6.0e-6,"bias":-10},{"x":750,"y":320,"trait":"ballArea","vis":true,"color":"252525","curve":0},{"x":750,"y":100,"bCoef":0.1,"cMask":["red"],"cGroup":["red"],"trait":"ballArea","vis":true,"color":"252525","curve":0,"radius":4.5,"invMass":6.0e-6},{"x":-658.8,"y":-320,"trait":"ballArea","vis":false,"color":"ffffff","curve":0,"bias":10},{"x":-658.8,"y":-100,"bCoef":0.1,"trait":"ballArea","vis":false,"color":"FFFFFF","radius":4.5,"invMass":6.0e-6,"bias":10},{"x":755,"y":-320,"trait":"ballArea","vis":false,"color":"ffffff","curve":0,"bias":-40},{"x":755,"y":-119,"trait":"ballArea","vis":false,"color":"FFFFFF","radius":4.6,"bias":-40},{"x":755,"y":122,"trait":"ballArea","vis":false,"color":"252525","curve":0,"radius":0.01,"bias":-40},{"x":755,"y":320,"trait":"ballArea","vis":false,"color":"252525","curve":0,"bias":-40},{"x":-650,"y":100,"bCoef":1.0e-27,"trait":"ballArea","vis":true,"color":"FFFFFF","radius":4.5,"invMass":6.0e-6},{"x":-650,"y":-100,"bCoef":1.0e-27,"cMask":["blue"],"cGroup":["blue"],"trait":"ballArea","color":"FFFFFF","vis":true,"radius":4.5,"invMass":6.0e-6},{"x":0,"y":320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":true,"bias":-5,"curve":0},{"x":0,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":true},{"x":0,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":true},{"x":0,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-1},{"x":-650,"y":-100,"bCoef":1.0e-27,"cMask":["wall"],"cGroup":["wall"],"color":"252525","radius":4.5,"invMass":6.0e-6},{"x":-650,"y":100,"bCoef":1.0e-27,"cMask":["wall"],"cGroup":["wall"],"color":"252525","radius":4.5,"invMass":6.0e-6},{"x":750,"y":-100,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"252525","radius":4.5,"invMass":6.0e-6},{"x":750,"y":100,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"252525","radius":4.5,"invMass":6.0e-6},{"x":-651,"y":-123,"bCoef":-0.5,"cGroup":["c0"],"trait":"kickOffBarrier","radius":7,"curve":-40,"color":"252525","invMass":1.0e-6},{"x":-572,"y":-123,"bCoef":0.1,"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-651,"y":123,"bCoef":-0.5,"cGroup":["c0"],"trait":"kickOffBarrier","radius":3,"invMass":1.0e-5,"curve":-40,"color":"252525"},{"x":-572,"y":123,"bCoef":0.1,"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-650,"y":-213,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-436,"y":-213,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-650,"y":213,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-436,"y":213,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-436,"y":213,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-436,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":145,"color":"252525"},{"x":-436,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":145,"color":"252525"},{"x":-650,"y":-641,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","curve":0,"color":"252525"},{"x":0,"y":-641,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"color":"252525","vis":false,"bias":2},{"x":750,"y":320,"bCoef":1,"cMask":["red","blue","wall","ball"],"cGroup":["wall"],"trait":"ballArea","bias":10,"color":"252525","curve":0},{"x":750,"y":320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-10,"color":"252525"},{"x":750,"y":-641,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":20},{"x":31,"y":-557,"bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":3,"vis":true},{"x":0,"y":-544,"bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":3},{"x":0,"y":-423,"bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":3},{"x":33,"y":-410,"bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":3},{"x":33,"y":-410,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":5,"curve":-60,"color":"252525"},{"x":199,"y":-483,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","_data":{"mirror":{}}},{"x":302,"y":-520,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","_data":{"mirror":{}}},{"x":197,"y":-451,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","_data":{"mirror":{}}},{"x":138,"y":-551,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","_data":{"mirror":{}}},{"x":-715,"y":150,"cMask":["ball"],"trait":"ballArea","bias":-150},{"x":-701,"y":150,"cMask":["ball"],"trait":"ballArea","bias":-150},{"x":-715,"y":-150,"cMask":["ball"],"trait":"ballArea","bias":150},{"x":-701,"y":-150,"cMask":["ball"],"trait":"ballArea","bias":150},{"x":830,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false},{"x":-670,"y":-85,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea"},{"x":-670,"y":85,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea"},{"x":-620,"y":-85,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea"},{"x":-620,"y":85,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea"},{"x":280.8333333333333,"y":-23.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":292.8333333333333,"y":13.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":279.3333333333333,"y":-22.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":292.8333333333333,"y":13.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":279.8333333333333,"y":-22.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":292.8333333333333,"y":13.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":323,"y":-26,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-180,"color":"2E2E2E"},{"x":323,"y":10.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":50,"color":"2E2E2E"},{"x":319,"y":-21.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-180,"color":"2E2E2E"},{"x":325.5,"y":-26.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-180,"color":"2E2E2E"},{"x":323,"y":10.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-190,"color":"2E2E2E"},{"x":325.66666666666663,"y":-25.66666666666663,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-180,"color":"2E2E2E"},{"x":319,"y":-21.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-180,"color":"2E2E2E"},{"x":319.33333333333337,"y":5.833333333333314,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-190,"color":"2E2E2E"},{"x":352.66666666666663,"y":6.833333333333314,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":30,"color":"2E2E2E"},{"x":323.33333333333337,"y":10.166666666666686,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-190,"color":"2E2E2E"},{"x":319.6666666666667,"y":5.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-190,"color":"2E2E2E"},{"x":351.66666666666674,"y":-15.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-10,"color":"2E2E2E"},{"x":351.66666666666674,"y":18.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-160,"color":"2E2E2E"},{"x":356.66666666666663,"y":19.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-160,"color":"2E2E2E"},{"x":352.66666666666674,"y":-15.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-10,"color":"2E2E2E"},{"x":351.66666666666674,"y":18.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-160,"color":"2E2E2E"},{"x":-651,"y":664.3,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":10,"color":"252525"},{"x":0,"y":664.3,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-5,"curve":0,"color":"252525"},{"x":-650,"y":-641,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"252525"},{"x":-35,"y":-320,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":-20},{"x":-650,"y":-611,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":30},{"x":-650,"y":-320,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":30},{"x":-650,"y":-320,"trait":"ballArea","color":"252525","vis":true,"curve":0,"bias":-10},{"x":-650,"y":-611,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","vis":true,"bias":-30},{"x":-650,"y":-641,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":-30},{"x":-748.5,"y":-320,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"252525","bias":20},{"x":-648.5,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false},{"x":0,"y":-320,"cMask":["wall"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":10},{"x":-650,"y":-320,"cMask":["wall"],"trait":"ballArea","color":"252525","vis":true,"curve":0,"bias":10},{"x":750,"y":-320,"cMask":["wall"],"trait":"ballArea","curve":0,"vis":false,"color":"252525","bias":10},{"x":0,"y":-320,"cMask":["wall"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":10},{"x":-651,"y":320,"cMask":["wall"],"trait":"ballArea","vis":true,"color":"252525","curve":0,"bias":-10},{"x":750,"y":320,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","bias":-10,"color":"252525","curve":0},{"x":750,"y":-320,"trait":"ballArea","curve":0},{"x":750,"y":320,"cMask":["ball","wall"],"trait":"ballArea","curve":0,"bias":-10},{"x":750,"y":664.3,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-10},{"x":7,"y":320,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":5,"curve":0},{"x":7,"y":664.3,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":5,"curve":0,"color":"252525","vis":false},{"x":523.0103134593124,"y":-628.0436457603902,"bCoef":0,"cMask":["c3"],"cGroup":["c1"],"curve":-180,"bias":2},{"x":506.01065450337177,"y":-628.1513276144995,"bCoef":0,"cMask":["c3"],"cGroup":["c1"],"curve":-180,"bias":2},{"x":523.0103134593124,"y":-628.0436457603902,"bCoef":0,"cMask":["c3"],"cGroup":["c3"],"curve":180,"bias":-2},{"x":506.01065450337177,"y":-628.1513276144995,"bCoef":0,"cMask":["c3"],"cGroup":["c3"],"curve":180,"bias":-2},{"x":55,"y":-641,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":-2},{"x":0,"y":-336.5,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":2},{"x":340,"y":-345,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":20,"vis":false,"bias":2,"color":"252525"},{"x":340,"y":-640,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":-2,"color":"252525"},{"x":340,"y":-640,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"vis":false,"bias":2,"color":"252525"},{"x":195,"y":-378,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":2,"color":"252525"},{"x":373,"y":-462.5,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":2,"color":"252525"},{"x":371.5,"y":-543,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":2,"color":"252525"},{"x":194.5,"y":-612,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":2,"color":"252525"},{"x":380,"y":-320,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"vis":false,"bias":1},{"x":380,"y":-640,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":false,"curve":0},{"x":340,"y":-345,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":20,"vis":true,"bias":2,"color":"252525"},{"x":57,"y":-641,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"color":"252525","vis":true,"bias":-5},{"x":340,"y":-640,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"vis":true,"bias":2,"color":"252525"},{"x":57,"y":-332,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":5,"color":"252525"},{"x":-400,"y":-320,"bCoef":0.1,"cMask":["blue"],"cGroup":["blue"],"trait":"kickOffBarrier"},{"x":-280,"y":-320,"bCoef":0.1,"cMask":["red"],"cGroup":["red"],"trait":"kickOffBarrier"},{"x":2,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":2,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-1},{"x":-2,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":-2,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-1},{"x":2,"y":320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-5,"curve":0},{"x":2,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":-2,"y":320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-5,"curve":0},{"x":-2,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":270.1260754171482,"y":-175.08817212714803,"bCoef":-4,"cMask":["ball"],"cGroup":["c0"],"curve":-50,"vis":false,"bias":0},{"x":370.9962562492123,"y":-218.96534864189977,"bCoef":0.5,"cMask":["ball"],"cGroup":["c0"],"vis":false},{"x":276.9070936057916,"y":-159.49914418037446,"bCoef":-4,"cMask":["ball"],"cGroup":["c0"],"curve":50,"vis":false,"bias":0},{"x":377.7772744378558,"y":-203.37632069512622,"bCoef":0.5,"cMask":["ball"],"cGroup":["c0"],"vis":false},{"x":235.51633140103326,"y":-176.93631149932702,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"curve":-50,"vis":false,"color":"2E2E2E","bias":18},{"x":254.4632939869488,"y":-133.3787334127539,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"curve":50,"vis":false,"color":"2E2E2E","bias":18},{"x":496.5,"y":-288.5,"bCoef":0.85,"cMask":["ball"],"vis":false,"bias":-5},{"x":532.5,"y":-250,"bCoef":0.85,"cMask":["ball"],"vis":false,"bias":-5},{"x":149.5,"y":-126,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":163,"y":-123,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":154.5,"y":-113,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":136,"y":-121.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":149.5,"y":-118.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":141,"y":-108.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":141.5,"y":257,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":152,"y":270,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":136.5,"y":268,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":143.5,"y":158.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":154,"y":171.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":138.5,"y":169.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":629,"y":80,"bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0},{"x":660,"y":80,"bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"curve":-80},{"x":631,"y":-80,"bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0},{"x":660,"y":-80,"bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"curve":-80},{"x":624,"y":-75,"cMask":["wall"],"cGroup":["wall"]},{"x":624,"y":75,"cMask":["wall"],"cGroup":["wall"]},{"x":-1,"y":223,"bCoef":1,"cMask":["wall"],"trait":"ballArea"},{"x":750,"y":224,"bCoef":1,"cMask":["wall"],"trait":"ballArea"},{"x":747,"y":122,"bCoef":1,"cMask":["wall"],"trait":"ballArea","curve":0},{"x":2,"y":123,"bCoef":1,"cMask":["wall"],"trait":"ballArea","curve":0},{"x":680,"y":65,"bCoef":1.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"curve":-80},{"x":680,"y":-65,"bCoef":1.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"curve":-80},{"x":171,"y":197,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":171,"y":212,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":196,"y":154.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":196,"y":169.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":240,"y":191.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":240,"y":206.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":270,"y":152.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":270,"y":167.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":300,"y":195.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":300,"y":210.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":325,"y":150.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":325,"y":165.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":171,"y":296,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":171,"y":311,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":198,"y":252,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":198,"y":267,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":242,"y":288.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":242,"y":303.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":272,"y":250,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":272,"y":265,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":300,"y":292.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":300,"y":307.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":325,"y":246.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":325,"y":261.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":16,"y":272,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":29,"y":281,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":16,"y":292,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":1,"y":282,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":15,"y":172,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":29,"y":181,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":15,"y":192,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":0,"y":182,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":-340,"y":-518,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","color":"D4D4D4","bias":0},{"x":-340,"y":-444,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","color":"D4D4D4","bias":0},{"x":-570,"y":-582,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-5,"color":"D4D4D4"},{"x":-110,"y":-582,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-5,"color":"D4D4D4"},{"x":-570,"y":-382,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":5,"color":"D4D4D4"},{"x":-110,"y":-382,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":5,"color":"D4D4D4"},{"x":-110,"y":-582,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4"},{"x":-110,"y":-531,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4","pos":[-110,-531]},{"x":-570,"y":-582,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4"},{"x":-570,"y":-531,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4","pos":[-570,-531]},{"x":-110,"y":-431,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4","pos":[-110,-431]},{"x":-110,"y":-382,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4"},{"x":-570,"y":-431,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4","pos":[-570,-431]},{"x":-570,"y":-382,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4"},{"x":-20,"y":-320,"bCoef":1,"cMask":["wall"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-5},{"x":-20,"y":-641,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"color":"252525","vis":false,"bias":-5},{"x":-88,"y":-320,"bCoef":0.1,"cMask":["wall"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-5},{"x":-88,"y":-641,"bCoef":0.1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"color":"252525","vis":false,"bias":-5},{"x":-594,"y":-322,"bCoef":0.1,"cMask":["wall"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":5},{"x":-594,"y":-643,"bCoef":0.1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"color":"252525","vis":false,"bias":5},{"x":-109,"y":-420,"bCoef":0.1,"cMask":["wall"],"bias":5},{"x":-87,"y":-420,"bCoef":0.1,"cMask":["wall"],"bias":5},{"x":-109,"y":-540,"bCoef":0.1,"cMask":["wall"],"bias":-5},{"x":-87,"y":-540,"bCoef":0.1,"cMask":["wall"],"bias":-5},{"x":-593,"y":-548,"bCoef":0.1,"cMask":["wall"],"bias":-5},{"x":-571,"y":-548,"bCoef":0.1,"cMask":["wall"],"bias":-5},{"x":-593,"y":-419,"bCoef":0.1,"cMask":["wall"],"bias":5},{"x":-571,"y":-419,"bCoef":0.1,"cMask":["wall"],"bias":5},{"x":-340,"y":-582,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["wall"],"trait":"kickOffBarrier","color":"D4D4D4"},{"x":-340,"y":-382,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["wall"],"trait":"kickOffBarrier","color":"D4D4D4"},{"x":170,"y":320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"545454"},{"x":170,"y":663,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"545454"}],"segments":[{"v0":0,"v1":1,"vis":true,"color":"252525","trait":"ballArea","x":-650},{"v0":2,"v1":3,"vis":true,"color":"252525","trait":"ballArea","x":-650},{"v0":4,"v1":5,"vis":true,"color":"252525","trait":"ballArea","x":750},{"v0":6,"v1":7,"curve":0,"vis":true,"color":"252525","trait":"ballArea","x":750},{"v0":14,"v1":6,"curve":0,"vis":false,"color":"252525","bCoef":1,"cMask":["red"],"cGroup":["red"],"x":750},{"v0":13,"v1":5,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["red"],"cGroup":["red"],"x":750},{"v0":12,"v1":1,"curve":0,"vis":false,"color":"252525","bCoef":1,"cMask":["blue"],"cGroup":["blue"],"x":-650},{"v0":11,"v1":2,"curve":0,"vis":false,"color":"252525","bCoef":1,"cMask":["blue"],"cGroup":["blue"],"x":-650},{"v0":15,"v1":16,"vis":false,"color":"ffffff","trait":"ballArea","bias":-10,"x":-658.8},{"v0":17,"v1":18,"curve":0,"vis":true,"color":"252525","trait":"ballArea","x":750},{"v0":19,"v1":20,"vis":false,"color":"ffffff","trait":"ballArea","bias":10,"x":-658.8,"y":-320},{"v0":21,"v1":22,"vis":false,"color":"ffffff","trait":"ballArea","bias":-40,"x":755,"y":-320},{"v0":23,"v1":24,"curve":0,"vis":false,"color":"252525","trait":"ballArea","bias":-40,"x":755,"y":-320},{"v0":27,"v1":28,"vis":true,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","x":0},{"v0":29,"v1":30,"vis":true,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier"},{"v0":31,"v1":32,"curve":0,"vis":true,"color":"252525","bCoef":0,"cMask":["wall"],"cGroup":["wall"],"radius":0.05},{"v0":33,"v1":34,"curve":0,"vis":true,"color":"252525","bCoef":0,"cMask":["wall"],"cGroup":["wall"],"x":750},{"v0":35,"v1":36,"vis":true,"color":"252525","bCoef":0.1,"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":37,"v1":38,"vis":true,"color":"252525","bCoef":0.1,"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":36,"v1":38,"vis":true,"color":"252525","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":39,"v1":40,"vis":true,"color":"252525","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":41,"v1":42,"vis":true,"color":"252525","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":40,"v1":43,"vis":true,"color":"252525","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":44,"v1":45,"curve":145,"vis":true,"color":"252525","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":46,"v1":47,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea"},{"v0":0,"v1":48,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":10},{"v0":7,"v1":50,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":20,"x":750},{"v0":47,"v1":50,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"v0":51,"v1":52,"curve":-90,"vis":true,"color":"252525","bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","bias":3},{"v0":53,"v1":54,"curve":-90,"vis":true,"color":"252525","bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","bias":3},{"v0":52,"v1":53,"vis":true,"color":"252525","bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","bias":2},{"v0":56,"v1":57,"curve":-10,"vis":true,"color":"576C46","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","_data":{"mirror":{},"arc":{"a":[199,-483],"b":[302,-520],"curve":-10,"radius":627.8648209651011,"center":[39.044032398915135,-1090.1476935922092],"from":1.138662041414245,"to":1.313194966613678}}},{"v0":58,"v1":57,"curve":-10,"vis":true,"color":"576C46","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","_data":{"mirror":{},"arc":{"a":[197,-451],"b":[302,-520],"curve":-10,"radius":720.7921451143133,"center":[-144.8368044452664,-1085.5777458949706],"from":0.9021496803902804,"to":1.0766826055897134}}},{"v0":59,"v1":56,"curve":-140,"vis":true,"color":"576C46","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","_data":{"mirror":{},"arc":{"a":[138,-551],"b":[199,-483],"curve":-140,"radius":48.606836699682276,"center":[180.87498796505088,-528.1010921451192],"from":1.1886744132709777,"to":-2.651049941116548}}},{"v0":59,"v1":58,"curve":-180,"vis":true,"color":"576C46","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","_data":{"mirror":{},"arc":{"a":[138,-551],"b":[197,-451],"curve":-180,"radius":58.0538543078752,"center":[167.5,-501],"from":1.0377622166174065,"to":-2.1038304369723866}}},{"v0":60,"v1":61,"vis":false,"color":"ffffff","cMask":["ball"],"trait":"ballArea","bias":-150,"y":150},{"v0":62,"v1":63,"vis":false,"color":"ffffff","cMask":["ball"],"trait":"ballArea","bias":150,"y":-150},{"v0":7,"v1":64,"vis":false,"color":"DBD2C1","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-320},{"v0":65,"v1":66,"vis":false,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea","x":-670},{"v0":65,"v1":67,"vis":false,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea","y":-85},{"v0":67,"v1":68,"vis":false,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea","x":-620},{"v0":66,"v1":68,"vis":false,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea","y":85},{"v0":69,"v1":70,"curve":40,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":90},{"v0":71,"v1":72,"curve":40,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":90},{"v0":73,"v1":74,"curve":40,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":90},{"v0":75,"v1":76,"curve":50,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":130},{"v0":75,"v1":77,"curve":-180,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":78,"v1":79,"curve":50,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":130},{"v0":80,"v1":81,"curve":-180,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":82,"v1":83,"curve":30,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":82,"v1":79,"curve":-190,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":85,"v1":84,"curve":-190,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":86,"v1":87,"curve":-10,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":180},{"v0":87,"v1":88,"curve":-160,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":89,"v1":90,"curve":-10,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":166.66666666666669},{"v0":0,"v1":91,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":10},{"v0":27,"v1":92,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-5,"x":0},{"v0":91,"v1":92,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":10,"y":664.3},{"v0":95,"v1":96,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":30},{"v0":97,"v1":30,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-10},{"v0":30,"v1":7,"curve":0,"vis":true,"color":"252525","cMask":["ball"],"bias":-1},{"v0":98,"v1":99,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-30},{"v0":100,"v1":101,"vis":false,"color":"DBD2C1","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-320},{"v0":103,"v1":102,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","bias":10},{"v0":105,"v1":104,"curve":0,"vis":true,"color":"252525","cMask":["wall"],"bias":10},{"v0":106,"v1":107,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","bias":-10,"y":320},{"v0":108,"v1":109,"curve":0,"vis":true,"color":"252525","trait":"ballArea","x":750},{"v0":92,"v1":110,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":10,"y":664.3},{"v0":109,"v1":110,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-10,"x":750},{"v0":111,"v1":112,"curve":0,"vis":false,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":5,"x":20},{"v0":113,"v1":114,"curve":-180,"vis":true,"color":"ff0000","bCoef":0,"cMask":["wall"],"cGroup":["c1"],"bias":2,"x":514},{"v0":115,"v1":116,"curve":180,"vis":true,"color":"ff0000","bCoef":0,"cMask":["wall"],"cGroup":["c1"],"bias":-2,"x":514},{"v0":120,"v1":119,"curve":50.545030732114945,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":-2},{"v0":122,"v1":123,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":2},{"v0":124,"v1":125,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":2},{"v0":47,"v1":121,"curve":50.545030732114945,"vis":false,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":0},{"v0":119,"v1":10,"curve":14.794713706848997,"vis":false,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":0},{"v0":127,"v1":126,"curve":0,"vis":false,"color":"0D0D0D","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":0,"x":380},{"v0":130,"v1":129,"curve":45.93532925828217,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":2},{"v0":55,"v1":131,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":5},{"v0":51,"v1":129,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":-5},{"v0":131,"v1":128,"curve":62.190372743895615,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":2},{"v0":134,"v1":135,"vis":false,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","x":2},{"v0":136,"v1":137,"vis":false,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","x":-2},{"v0":138,"v1":139,"vis":false,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","x":2},{"v0":140,"v1":141,"vis":false,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","x":-2},{"v0":142,"v1":143,"vis":false,"color":"1AF0E9","bCoef":0.5,"cMask":["ball"],"cGroup":["wall"],"bias":0,"y":-75},{"v0":144,"v1":145,"vis":false,"color":"1AF0E9","bCoef":0.5,"cMask":["ball"],"cGroup":["wall"],"bias":0,"y":-58},{"v0":146,"v1":147,"vis":false,"color":"2E2E2E","bCoef":0.5,"cMask":["ball"],"cGroup":["wall"],"bias":18},{"v0":146,"v1":142,"curve":41.993762397652105,"vis":false,"color":"1AF0E9","bCoef":0,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":147,"v1":144,"curve":-28.076285755567678,"vis":false,"color":"1AF0E9","bCoef":0,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":142,"v1":144,"curve":-63.60183201071682,"vis":false,"color":"1AF0E9","bCoef":-4,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":148,"v1":149,"vis":false,"color":"1AF0E9","bCoef":0.85,"cMask":["ball"],"bias":-5},{"v0":150,"v1":151,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":151,"v1":152,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":153,"v1":154,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":154,"v1":155,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":156,"v1":157,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":157,"v1":158,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":159,"v1":160,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":160,"v1":161,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":162,"v1":163,"vis":true,"color":"252525","bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"y":80},{"v0":164,"v1":165,"vis":true,"color":"252525","bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"y":-80},{"v0":166,"v1":167,"curve":0,"vis":true,"color":"252525","cMask":["wall"],"cGroup":["wall"]},{"v0":168,"v1":169,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","bias":-10},{"v0":170,"v1":171,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","bias":-10},{"v0":173,"v1":172,"vis":true,"color":"252525","bCoef":1.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"x":680},{"v0":173,"v1":165,"curve":-80,"vis":true,"color":"252525","bCoef":1.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0},{"v0":163,"v1":172,"curve":-80,"vis":true,"color":"252525","bCoef":1.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0},{"v0":174,"v1":175,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":171},{"v0":175,"v1":174,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":171},{"v0":176,"v1":177,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":196},{"v0":177,"v1":176,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":196},{"v0":178,"v1":179,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":240},{"v0":179,"v1":178,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":240},{"v0":180,"v1":181,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":270},{"v0":181,"v1":180,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":270},{"v0":182,"v1":183,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":300},{"v0":183,"v1":182,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":300},{"v0":184,"v1":185,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":325},{"v0":185,"v1":184,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":325},{"v0":186,"v1":187,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":171},{"v0":187,"v1":186,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":171},{"v0":188,"v1":189,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":198},{"v0":189,"v1":188,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":198},{"v0":190,"v1":191,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":242},{"v0":191,"v1":190,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":242},{"v0":192,"v1":193,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":272},{"v0":193,"v1":192,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":272},{"v0":194,"v1":195,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":300},{"v0":195,"v1":194,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":300},{"v0":196,"v1":197,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":325},{"v0":197,"v1":196,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":325},{"v0":198,"v1":199,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":199,"v1":200,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":199,"v1":201,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":202,"v1":203,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":203,"v1":204,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":203,"v1":205,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":206,"v1":207,"curve":180,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","bias":0},{"v0":207,"v1":206,"curve":180,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","bias":0},{"v0":208,"v1":209,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-5,"y":-100},{"v0":210,"v1":211,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":5,"y":100},{"v0":212,"v1":213,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"x":-110},{"v0":214,"v1":215,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"x":-570},{"v0":216,"v1":217,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"x":-110},{"v0":218,"v1":219,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"x":-570},{"v0":221,"v1":220,"vis":false,"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","bias":-5,"x":-20},{"v0":223,"v1":222,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"trait":"ballArea","bias":-5,"x":-20},{"v0":225,"v1":224,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"trait":"ballArea","bias":5,"x":-20},{"v0":226,"v1":227,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"bias":5,"y":-420},{"v0":228,"v1":229,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"bias":-5,"y":-540},{"v0":230,"v1":231,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"bias":-5,"y":-540},{"v0":232,"v1":233,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"bias":5,"y":-420},{"v0":234,"v1":235,"vis":true,"color":"D4D4D4","bCoef":0.1,"cMask":["red","blue"],"cGroup":["wall"],"trait":"kickOffBarrier"},{"v0":236,"v1":237,"curve":0,"vis":true,"color":"545454","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":170}],"goals":[],"discs":[{"radius":7,"invMass":0,"pos":[-650,98],"color":"000000","cMask":["ball","red","blue"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-660,98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-670,98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-680,98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea","y":180},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea","y":180},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,90],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea","y":180},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,80],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,70],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,60],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,50],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,40],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,30],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,20],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,10],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,0],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-10],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-20],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-30],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-40],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-50],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-60],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-70],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-80],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-90],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea","y":-180},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea","y":-180},{"radius":4.5,"invMass":6.0e-6,"pos":[-680,-98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-670,-98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-660,-98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":8,"invMass":0,"pos":[-650,-98],"color":"000000","cMask":["ball","red","blue"],"trait":"ballArea"},{"radius":5.5,"invMass":0,"pos":[-723,-137],"color":"000000","cMask":["ball"],"trait":"ballArea"},{"radius":5.5,"invMass":0,"pos":[-723,137],"color":"000000","cMask":["ball"],"trait":"ballArea"},{"radius":8,"invMass":5.0e-5,"pos":[-207,5],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.958,"x":-80},{"radius":0,"invMass":0,"pos":[-149,3],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":0,"invMass":0,"pos":[-217,-219],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":-80},{"radius":8,"invMass":5.0e-5,"pos":[-245,-210],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.96,"x":-80},{"radius":0,"invMass":0,"pos":[-217,225],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":-80},{"radius":8,"invMass":5.0e-5,"pos":[-248,212],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.96,"x":-80},{"radius":7,"invMass":8.0e-6,"pos":[214.5,-144.5],"color":"1AF0E9","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick"],"damping":0.99,"speed":[0,0]},{"radius":8,"invMass":0,"pos":[32,-558],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96},{"radius":8,"invMass":0,"pos":[32,-408],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96},{"radius":6,"invMass":8.0e-6,"pos":[72,-467],"color":"ffffff","bCoef":1,"cMask":["all","c1"],"cGroup":["wall","kick"],"damping":1,"speed":[0,0]},{"radius":0,"invMass":0,"pos":[-456,-284],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":8,"invMass":5.0e-5,"pos":[-469,-252],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.945,"x":-80},{"radius":0,"invMass":0,"pos":[-456,284],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":8,"invMass":5.0e-5,"pos":[-469,252],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.945,"x":-80},{"radius":0,"invMass":0,"pos":[-108,-143],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":-80},{"radius":8,"invMass":5.0e-5,"pos":[-154,-141],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.964,"x":-80},{"radius":0,"invMass":0,"pos":[-108,143],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":-80},{"radius":8,"invMass":5.0e-5,"pos":[-154,141],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.964,"x":-80},{"radius":25,"invMass":1.0e-41,"pos":[-646,-3],"color":"252525","bCoef":2,"cMask":["kick","red","blue","c3"],"cGroup":["wall"],"trait":"ballArea","damping":1,"speed":[0,-5]},{"radius":8,"invMass":8.0e-6,"pos":[-327,464],"color":"252525","bCoef":0.5,"cMask":["all"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":15,"invMass":1.0e-26,"pos":[-473,406],"color":"205F63","bCoef":1,"cMask":["all"],"cGroup":["wall"],"trait":"ballArea","damping":1,"speed":[-2,0]},{"radius":15,"invMass":1.0e-26,"pos":[-208,546],"color":"205F63","bCoef":1,"cMask":["all"],"cGroup":["wall"],"trait":"ballArea","damping":1,"speed":[2,0]},{"radius":9,"invMass":1.2e-5,"pos":[-340,-483],"color":"252525","bCoef":1,"cMask":["all","c1"],"cGroup":["wall","kick"],"damping":0.992,"speed":[0,0],"_data":{"mirror":{}}},{"radius":7,"invMass":1.0e-41,"pos":[643,439],"color":"252525","bCoef":1,"cMask":["kick","red","blue","c3","wall"],"cGroup":["wall"],"trait":"ballArea","damping":1,"speed":[0,1]},{"radius":7,"invMass":1.0e-41,"pos":[643,509],"color":"252525","bCoef":1,"cMask":["kick","red","blue","c3","wall"],"cGroup":["wall"],"trait":"ballArea","damping":1,"speed":[0,-1]},{"radius":6,"invMass":1.2e-5,"pos":[389,481],"color":"457760","bCoef":0.5,"cMask":["all"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":0.05,"invMass":6.0e-6,"pos":[661,439],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,439],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,447],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,455],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,463],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,509],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[661,509],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,471],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[653,439],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[669,439],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[653,509],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,479],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,487],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,495],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,502],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[669,509],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":4,"invMass":0,"pos":[693,423.5],"color":"000000","bCoef":1,"cMask":["wall"],"trait":"ballArea"},{"radius":4,"invMass":0,"pos":[693,521.5],"color":"000000","bCoef":1,"cMask":["wall"],"trait":"ballArea"},{"radius":6.082762530298219,"invMass":8.0e-6,"pos":[430,-423],"color":"1AF0E9","bCoef":0.5,"cMask":["all","c1"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":8.0e-6,"pos":[505,-423],"color":"1AF0E9","bCoef":0.5,"cMask":["all","c1"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":8.0e-6,"pos":[579,-423],"color":"1AF0E9","bCoef":0.5,"cMask":["all","c1"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":0,"pos":[447,-630],"color":"transparent","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","damping":0.99,"speed":[0,0]},{"radius":7,"invMass":0,"pos":[514.5,-628],"color":"transparent","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":0,"pos":[576,-630],"color":"transparent","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":1.0e+57,"pos":[447,-630],"color":"ff0000","bCoef":-1000,"cMask":["wall"],"cGroup":["c1"],"damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":1.0e+57,"pos":[576,-630],"color":"ff0000","bCoef":-1000,"cMask":["wall"],"cGroup":["c1"],"damping":0.99,"speed":[0,0]},{"radius":18,"invMass":0,"pos":[516,-290],"color":"ffffff","cMask":["ball"],"cGroup":["c0"],"damping":0.99,"speed":[0,0]},{"radius":14,"invMass":0,"pos":[516,-290],"color":"e56e56","cMask":["ball"],"cGroup":["c0"],"damping":0.99,"speed":[0,0]},{"radius":18,"invMass":0,"pos":[248,-156.5],"color":"ffffff","cMask":["ball"],"cGroup":["c0"],"damping":0.99,"speed":[0,0]},{"radius":14,"invMass":0,"pos":[248,-156.5],"color":"e56e56","cMask":["ball"],"cGroup":["c0"],"damping":0.99,"speed":[0,0]},{"radius":2.719361147327249,"invMass":1.0e-103,"pos":[724.5,265.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[0,4]},{"radius":2.5,"invMass":1.0e-103,"pos":[718.5,254.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[707.5,247.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[693.5,248.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[686.5,257.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[683.5,268.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[687.5,278.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[696.5,285.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[-4,0]},{"radius":2.719361147327249,"invMass":1.0e-103,"pos":[708.5,287.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[-4,0]},{"radius":2.719361147327249,"invMass":1.0e-103,"pos":[722.5,176.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[0,4]},{"radius":2.5,"invMass":1.0e-103,"pos":[716.5,165.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[705.5,158.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[691.5,159.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[684.5,168.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[681.5,179.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[685.5,189.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[694.5,196.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[-4,0]},{"radius":2.719361147327249,"invMass":1.0e-103,"pos":[706.5,198.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[-4,0]},{"radius":0,"invMass":0,"pos":[705,268],"color":"000000","cMask":["ball"],"cGroup":["c3"],"damping":1.002},{"radius":0,"invMass":0,"pos":[701.5,179],"color":"000000","cMask":["ball"],"cGroup":["c3"],"damping":1.002},{"radius":7.3,"invMass":3.0e-5,"pos":[474,176],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.95,"x":-80},{"radius":0,"invMass":0,"pos":[431,176],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":7.3,"invMass":3.0e-5,"pos":[474,266],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.95,"x":-80},{"radius":0,"invMass":0,"pos":[430,266],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":8,"invMass":3.9e-5,"pos":[39,271],"color":"252525","bCoef":0.4,"cMask":["all"],"cGroup":["ball"],"trait":"ballArea","damping":0.92,"speed":[0,0],"gravity":[0,1]},{"radius":8,"invMass":3.9e-5,"pos":[39,288],"color":"252525","bCoef":0.4,"cMask":["all"],"cGroup":["ball"],"trait":"ballArea","damping":0.92,"speed":[0,0],"gravity":[0,-1]},{"radius":0,"invMass":0,"pos":[39,239],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":0,"invMass":0,"pos":[39,322],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":8,"invMass":0,"pos":[625,-79],"color":"000000","cMask":["ball","red","blue"],"trait":"ballArea"},{"radius":8,"invMass":0,"pos":[625,79],"color":"000000","cMask":["ball","red","blue"],"trait":"ballArea","curve":180},{"radius":7,"invMass":8.0e-6,"pos":[108,-109],"color":"1AF0E9","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick"],"damping":0.99,"speed":[0,0]},{"radius":7,"invMass":8.0e-6,"pos":[36,-83],"color":"1AF0E9","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick"],"damping":0.99,"speed":[0,0]},{"radius":8,"invMass":3.9e-5,"pos":[39,188],"color":"252525","bCoef":0.4,"cMask":["all"],"cGroup":["ball"],"trait":"ballArea","damping":0.92,"speed":[0,0],"gravity":[0,-1]},{"radius":8,"invMass":3.9e-5,"pos":[39,171],"color":"252525","bCoef":0.4,"cMask":["all"],"cGroup":["ball"],"trait":"ballArea","damping":0.92,"speed":[0,0],"gravity":[0,1]},{"radius":0,"invMass":0,"pos":[39,222],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":0,"invMass":0,"pos":[39,139],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":10,"invMass":2.2e-5,"pos":[150,420],"color":"457760","bCoef":0.5,"cMask":["all"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":10,"invMass":2.2e-5,"pos":[150,475],"color":"457760","bCoef":0.5,"cMask":["all"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":10,"invMass":2.2e-5,"pos":[150,530],"color":"457760","bCoef":0.5,"cMask":["all"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":0,"invMass":0,"pos":[-110,-531],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96,"x":-110,"y":-531},{"radius":0,"invMass":0,"pos":[-110,-431],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96,"x":-110,"y":-431},{"radius":0,"invMass":0,"pos":[-570,-531],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96,"x":-570,"y":-531},{"radius":0,"invMass":0,"pos":[-570,-431],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96,"x":-570,"y":-431},{"radius":14.3,"invMass":4.0e-6,"pos":[677,-258],"color":"5689e5","bCoef":0.5,"cMask":["red","blue","ball"],"cGroup":["ball"],"damping":0.96},{"radius":6,"invMass":0,"pos":[723,-287],"color":"ffffff","bCoef":0.5,"cMask":["red","blue"],"cGroup":["ball"],"damping":0.99,"x":-80}],"joints":[{"d0":1,"d1":2,"color":"000000","strenght":"rigid","radius":7,"invMass":1.0e-5,"bCoef":-0.5},{"d0":2,"d1":3,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":3,"d1":4,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":4,"d1":5,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1,"y":180},{"d0":5,"d1":6,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1,"y":180},{"d0":6,"d1":7,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":7,"d1":8,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":8,"d1":9,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":9,"d1":10,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":10,"d1":11,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":11,"d1":12,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":12,"d1":13,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":13,"d1":14,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":14,"d1":15,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":15,"d1":16,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":16,"d1":17,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":17,"d1":18,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":18,"d1":19,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":19,"d1":20,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":20,"d1":21,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":21,"d1":22,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":22,"d1":23,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":23,"d1":24,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":24,"d1":25,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1,"y":-180},{"d0":26,"d1":27,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":27,"d1":28,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":28,"d1":29,"color":"000000","strenght":"rigid","radius":7,"invMass":1.0e-5,"bCoef":-0.5},{"d0":25,"d1":26,"strength":"rigid","color":"000000","length":null,"radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":25,"d1":30,"strength":"rigid","color":"000000","length":null,"radius":3},{"d0":5,"d1":31,"strength":"rigid","color":"000000","length":null,"radius":3,"bCoef":-0.5},{"d0":32,"d1":33,"_length":-1,"strength":11,"color":"transparent","length":-1,"pos":[-80,0],"x":-80},{"d0":34,"d1":35,"_length":-1,"strength":11,"color":"transparent","length":-1,"pos":[-148,-222]},{"d0":36,"d1":37,"strength":11,"color":"transparent","length":null,"pos":[-148,222]},{"d0":42,"d1":43,"_length":-1,"strength":11,"color":"transparent","length":-1},{"d0":44,"d1":45,"_length":-1,"strength":11,"color":"transparent","length":-1},{"d0":46,"d1":47,"_length":-1,"strength":11,"color":"transparent","length":-1},{"d0":48,"d1":49,"_length":-1,"strength":11,"color":"transparent","length":-1},{"d0":55,"d1":56,"_length":5,"strength":1.0e+38,"color":"252525","length":5},{"d0":55,"d1":66,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":58,"d1":66,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":58,"d1":67,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":59,"d1":67,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":59,"d1":60,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":60,"d1":61,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":61,"d1":62,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":62,"d1":65,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":65,"d1":69,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":69,"d1":70,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":70,"d1":71,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":71,"d1":72,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":63,"d1":72,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":63,"d1":73,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":64,"d1":73,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":64,"d1":68,"strength":"rigid","color":"000000","length":null,"radius":3,"bCoef":3},{"d0":56,"d1":68,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":63,"d1":75,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":59,"d1":74,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":39,"d1":40,"strength":"rigid","color":"252525","length":null},{"d0":7,"d1":8,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":8,"d1":9,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":9,"d1":10,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":10,"d1":11,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":11,"d1":12,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":12,"d1":13,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":13,"d1":14,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":14,"d1":15,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":15,"d1":16,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":16,"d1":17,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":17,"d1":18,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":18,"d1":19,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":19,"d1":20,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":20,"d1":21,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":21,"d1":22,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":22,"d1":23,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":23,"d1":24,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":97,"d1":98,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":98,"d1":99,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":99,"d1":100,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":100,"d1":101,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":101,"d1":102,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":102,"d1":103,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":103,"d1":104,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":104,"d1":105,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":88,"d1":89,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":89,"d1":90,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":90,"d1":91,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":91,"d1":92,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":92,"d1":93,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":93,"d1":94,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":94,"d1":95,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":95,"d1":96,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":88,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":89,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":90,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":91,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":92,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":93,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":94,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":95,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":96,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":97,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":98,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":99,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":100,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":101,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":102,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":103,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":104,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":105,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":88,"d1":96,"strength":0,"color":"590000","length":null},{"d0":97,"d1":105,"strength":0,"color":"002033","length":null},{"d0":108,"d1":109,"_length":-1,"strength":20,"color":"transparent","length":-1},{"d0":110,"d1":111,"_length":-1,"strength":20,"color":"transparent","length":-1},{"d0":112,"d1":114,"strength":"rigid","color":"transparent","length":null},{"d0":113,"d1":115,"strength":"rigid","color":"transparent","length":null},{"d0":121,"d1":123,"strength":"rigid","color":"transparent","length":null},{"d0":120,"d1":122,"strength":"rigid","color":"transparent","length":null},{"d0":127,"d1":128,"strength":"rigid","color":"590000","length":null,"x":-110},{"d0":129,"d1":130,"strength":"rigid","color":"002033","length":null,"x":-570},{"d0":131,"d1":132,"_length":-1,"strength":190,"color":"transparent","length":-1}],"planes":[{"normal":[0,-1],"dist":-666,"cMask":["ball","red","blue"],"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-666,"canvas_rect":[-850,-668,850,680],"a":[-850,666],"b":[850,666]}}},{"normal":[0,1],"dist":-644,"bCoef":1,"_data":{"extremes":{"normal":[0,1],"dist":-644,"canvas_rect":[-850,-668,850,680],"a":[-850,-644],"b":[850,-644]}}},{"normal":[0,-1],"dist":-680,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-680,"canvas_rect":[-850,-668,850,680],"a":[-850,680],"b":[850,680]}}},{"normal":[1,0],"dist":-750,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-750,"canvas_rect":[-850,-668,850,680],"a":[-750,-668],"b":[-750,680]}}},{"normal":[0,-1],"dist":-680,"bCoef":0.0001,"cMask":["wall"],"cGroup":["red"],"_data":{"extremes":{"normal":[0,-1],"dist":-680,"canvas_rect":[-850,-668,850,680],"a":[-850,680],"b":[850,680]}}},{"normal":[0,1],"dist":-651,"bCoef":10000,"cMask":["wall"],"cGroup":["red"],"_data":{"extremes":{"normal":[0,1],"dist":-651,"canvas_rect":[-850,-668,850,680],"a":[-850,-651],"b":[850,-651]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0.01,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":700000,"invMass":4.0e-6},"ballPhysics":{"bCoef":0.5,"invMass":8.0e-6,"color":"46D0D9","damping":0.99,"cMask":["all"],"cGroup":["ball"]},"cameraFollow":"player"}';
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
    1: [], // RED penalty takers and goalkeeper against them
    2: [], // BLUE penalty takers and goalkeeper against them
  },
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
var showTableInterval = null;
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
  public: true,
});
room.setScoreLimit(5);
room.setTimeLimit(5);
room.setCustomStadium(TRAINING_STADIUM);
room.setTeamsLock(1);
room.setKickRateLimit(7, 15, 3);
room.startGame();

setInterval(room.sendAnnouncement.bind(null, `🔔 Đừng quên vào server Discord của De Paul: ${DISCORD_LINK}`, null, YELLOW, "small-italic", 0), NOTIFICATION_INTERVAL * 1000);
updateMetadata();

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
  let playerList = room.getPlayerList()
    .filter((player) => (player.team == 0) && !afkList.has(player.id))
    .map((player, index) => `${player.name} (#${index + 1})`);
  let table = " ".repeat(85) + "DANH SÁCH DỰ BỊ\n" + "_".repeat(150) + "\n" + playerList.join("  •  ") + "\n" + "_".repeat(150);
  room.sendAnnouncement(table, captains[pickTurn], BLUE, "small-bold");
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
    let missingTeam = ( redPlayersCount > bluePlayersCount ) ? 2 : ( redPlayersCount < bluePlayersCount ) ? 1 : Number(scores.red > scores.blue) + 1;

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
  if ( !isPicking ) return; // Game started
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

  room.sendChat(`Đội trưởng của ${TEAM_NAMES[player.team]} đã lựa chọn đầu hàng, ${TEAM_NAMES[player.team]} đã bị xử thua`);
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
    } else if ( isPicking && !autoPick() ) {
      showSpecTable();
    };
  };

  updateTeamPlayers();
  reorderPlayers();
  return false;
};

// Pick a player from the Spectators to move to a team
async function pick(pickedPlayer, team) {
  if ( !pickedPlayer ) { // No player provided, therefore select player with the best statistics
    let highest_ga = -1;
    for (spectator of getNonAfkPlayers().filter((player) => player.team == 0)) {
      let stats = getStats(identities[spectator.id][0]);
      if ( stats.goals + stats.assists <= highest_ga ) continue;
      pickedPlayer = spectator;
      highest_ga = stats.goals + stats.assists;
    };
  };
  if ( !pickedPlayer ) return; // Just in case there is any weird race condition bug:/

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
  let deepestPositions = [-1, -1];
  room.getPlayerList().forEach(function(player) {
    if ( player.team == 0 ) return;
    if ( Math.abs(player.position.x) > deepestPositions[player.team - 1] ) {
      penalty.groups[player.team].push(player.id); // GK is the player in the last index of the array
      deepestPositions[player.team - 1] = Math.abs(player.position.x);
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
    for (id of penalty.groups[i]) {
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

  let penaltyTaker = room.getPlayer(penalty.groups[turn].at(penalty.results[1].length % penalty.groups[turn].length));
  await room.setPlayerTeam(penaltyTaker.id, 1);
  await room.setPlayerTeam(penalty.groups[getOpposideTeamId(turn)].at(-1), 2);
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
  // Resend Spectators table once every 7 seconds to prevent it from being faded away by other messages
  showTableInterval = setInterval(showSpecTable.bind(null), 7 * 1000);
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
    isPicking && showSpecTable();
  };
  if ( isTraining && getNonAfkPlayers().length >= 8 ) {
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
        room.sendChat(`Toàn bộ cầu thủ sút luân lưu của ${TEAM_NAMES[teamId]} đã rời phòng, RED đã bị xử thua`);
        await endPenaltyShootout(getOpposideTeamId(teamId));
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
      await updateCaptain(player.team, room.getPlayer(penalty.groups[player.team][0]));
    } else {
      await updateCaptain(player.team);
    };
  };
  isPicking && !autoPick() && showSpecTable();
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
          isPicking && showSpecTable();
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
  if ( isTakingPenalty ) {
    clearTimeout(timeouts.toTakePenalty);
    return;
  };
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
  if ( isTakingPenalty ) {
    return;
  };
  reset();
  // Stop forcing captain to pick
  clearTimeout(timeouts.toPick);
  // Stop showing Spectators table
  clearInterval(showTableInterval);
  setRandomColors();
  trackAfk();
  room.sendChat("Vậy là trận đấu đã chính thức được bắt đầu");
  room.sendChat(`Quý vị khán giả có ${PREDICTION_PERIOD} giây để dự đoán tỉ số và có cơ hội nhận được phần thưởng, cú pháp "!predict RED-BLUE" (VD: !predict 1-2)`);
}

room.onGameStop = async function(byPlayer) {
  clearAfkRecords(); // Stop monitoring AFK when the game is stopped
  if ( getNonAfkPlayers().length >= 10 ) saveStats(); // Save stats of the previous game
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

room.onTeamsLockChange = function(locked, byPlayer) {
  // Make sure teams are always locked
  !locked && room.setTeamsLock(true);
}
