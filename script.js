const ADMIN_PASSWORD = "malone";
const MODE = "pick"; // can be "rand" or "pick"
const ACTIVITY_TIMEOUT = 10;
const AFK_TIMEOUT = 10 * 60;
const FIRST_PICK_TIMEOUT = 15;
const PICK_TIMEOUT = 25;
const PAUSE_TIMEOUT = 15;
const PENALTY_TIMEOUT = 10;
const AFTER_GAME_REST = 2.5;
const PREDICTION_PERIOD = 60;
const MAX_SUBSTITUTIONS = 2;
const MAX_PLAYERS = 5;
const TIME_LIMIT = 5;
const SCORE_LIMIT = 4;
const MAX_ADDED_TIME = 90;
const NOTIFICATION_INTERVAL = 2 * 60;
const MIN_TIME_FOR_SURRENDER = 2 * 60;
const MAX_AFK_PLAYERS = 3;
const SAVE_RECORDINGS = true;
const RED = 0xFA3E3E;
const GREEN = 0x5DB899;
const YELLOW = 0xF1CC81;
const BLUE = 0x047CC4;
const TEAM_NAMES = {
  1: "RED",
  2: "BLUE",
};
const ROLE = {
  PLAYER: 0,
  VIP: 1,
  ADMIN: 2,
};
const TEAM_COLORS = [
  [[60, 0xFFCC00, [0xE83030]], [60, 0xFFCC00, [0x004170]]],
  [[60, 0xFFFFFF, [0xFF4A4A]], [60, 0xFFFFFF, [0x5ECFFF]]],
  [[60, 0xFFFFFF, [0xD60419]], [60, 0xFFFFFF, [0x0099FF]]],
  [[0, 0x000000, [0xFF2400, 0xFFFF00, 0xFF2400]], [0, 0x000000, [0x1F51FF, 0xFFFFFF, 0x1F51FF]]],
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
const STADIUM_TRAINING = '{"name":"Practice","width":420,"height":200,"spawnDistance":170,"bg":{"type":"grass","width":370,"height":170,"kickOffRadius":75,"cornerRadius":0},"vertexes":[{"x":-370,"y":170,"trait":"ballArea"},{"x":-370,"y":-170,"trait":"ballArea"},{"x":370,"y":170,"trait":"ballArea"},{"x":370,"y":-170,"trait":"ballArea"},{"x":0,"y":200,"trait":"kickOffBarrier"},{"x":0,"y":-200,"trait":"kickOffBarrier"}],"segments":[],"goals":[],"discs":[],"planes":[{"normal":[0,1],"dist":-170,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-170,"canvas_rect":[-661,-212,661,213],"a":[-661,-170],"b":[661,-170]}}},{"normal":[0,-1],"dist":-170,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-170,"canvas_rect":[-661,-212,661,213],"a":[-661,170],"b":[661,170]}}},{"normal":[0,1],"dist":-200,"bCoef":0.1,"_data":{"extremes":{"normal":[0,1],"dist":-200,"canvas_rect":[-661,-212,661,213],"a":[-661,-200],"b":[661,-200]}}},{"normal":[0,-1],"dist":-200,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-200,"canvas_rect":[-661,-212,661,213],"a":[-661,200],"b":[661,200]}}},{"normal":[1,0],"dist":-420,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-420,"canvas_rect":[-661,-212,661,213],"a":[-420,-212],"b":[-420,213]}}},{"normal":[-1,0],"dist":-420,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-420,"canvas_rect":[-661,-212,661,213],"a":[420,-212],"b":[420,213]}}},{"normal":[1,0],"dist":-370,"bCoef":1,"cMask":["ball"],"trait":"ballArea","_data":{"extremes":{"normal":[1,0],"dist":-370,"canvas_rect":[-661,-212,661,213],"a":[-370,-212],"b":[-370,213]}}},{"normal":[-1,0],"dist":-370,"bCoef":1,"cMask":["ball"],"trait":"ballArea","_data":{"extremes":{"normal":[-1,0],"dist":-370,"canvas_rect":[-661,-212,661,213],"a":[370,-212],"b":[370,213]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"ballPhysics":{"radius":6.4},"playerPhysics":{"kickStrength":6.7},"canBeStored":false}';
const STADIUM_1v1 = '{"name":"Futsal 1v1 by Luchooo from HaxMaps","width":420,"height":200,"spawnDistance":180,"bg":{"type":"hockey","width":368,"height":171,"kickOffRadius":50,"cornerRadius":0},"vertexes":[{"x":-368,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-368,"y":50,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-368,"y":-50,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-368,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":50,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":-50,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":176,"trait":"kickOffBarrier"},{"x":0,"y":50,"trait":"kickOffBarrier"},{"x":0,"y":-50,"trait":"line"},{"x":0,"y":-176,"trait":"kickOffBarrier"},{"x":-384,"y":-50,"bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"x":384,"y":-50,"bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"x":-384,"y":50,"bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"x":384,"y":50,"bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"x":-368,"y":-127,"trait":"line"},{"x":368,"y":-127,"trait":"line"},{"x":-368,"y":127,"trait":"line"},{"x":368,"y":127,"trait":"line"},{"x":-350,"y":-171,"bCoef":0,"trait":"line"},{"x":-368,"y":-163,"bCoef":0,"trait":"line"},{"x":350,"y":-171,"bCoef":0,"trait":"line"},{"x":368,"y":-163,"bCoef":0,"trait":"line"},{"x":-350,"y":171,"bCoef":0,"trait":"line"},{"x":-368,"y":163,"bCoef":0,"trait":"line"},{"x":350,"y":171,"bCoef":0,"trait":"line"},{"x":368,"y":163,"bCoef":0,"trait":"line"},{"x":368,"y":171,"bCoef":1,"trait":"ballArea"},{"x":368,"y":-171,"bCoef":1,"trait":"ballArea"},{"x":0,"y":171,"bCoef":0,"trait":"line"},{"x":0,"y":-171,"bCoef":0,"trait":"line"},{"x":0,"y":50,"trait":"kickOffBarrier"},{"x":0,"y":-50,"trait":"kickOffBarrier"},{"x":377,"y":-50,"bCoef":1,"cMask":["red"],"trait":"line"},{"x":377,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-377,"y":-50,"bCoef":1,"cMask":["blue"],"trait":"line"},{"x":-377,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-377,"y":50,"bCoef":1,"cMask":["blue"],"trait":"line"},{"x":-377,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":377,"y":50,"bCoef":1,"cMask":["red"],"trait":"line"},{"x":377,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"v0":6,"v1":13,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"v0":1,"v1":14,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"v0":5,"v1":15,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"v0":12,"v1":14,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet","x":-585},{"v0":13,"v1":15,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet","x":585},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-368},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":368},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-368},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":368},{"v0":0,"v1":28,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":171},{"v0":3,"v1":29,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-171},{"v0":30,"v1":31,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":33,"v1":32,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":34,"v1":35,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":330},{"v0":36,"v1":37,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-330},{"v0":38,"v1":39,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-330},{"v0":40,"v1":41,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":330},{"v0":34,"v1":40,"curve":60,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["red"],"trait":"line"},{"v0":38,"v1":36,"curve":60,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["blue"],"trait":"line"}],"goals":[{"p0":[-372,-52],"p1":[-372,48],"team":"red"},{"p0":[372,50],"p1":[372,-50],"team":"blue"}],"discs":[{"radius":5,"pos":[-368,50],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[-368,-50],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[368,50],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[368,-50],"color":"FFFFFF","trait":"goalPost"},{"radius":3,"invMass":0,"pos":[383,51],"color":"FFFFFF","bCoef":0,"trait":"line"},{"radius":3,"invMass":0,"pos":[-383,51],"color":"FFFFFF","bCoef":0,"trait":"line"},{"radius":3,"invMass":0,"pos":[383,-51],"color":"FFFFFF","bCoef":0,"trait":"line"},{"radius":3,"invMass":0,"pos":[-383,-51],"color":"FFFFFF","bCoef":0,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-171,"trait":"ballArea"},{"normal":[0,-1],"dist":-171,"trait":"ballArea"},{"normal":[0,1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":6.5},"ballPhysics":{"radius":6.4,"color":"EAFF00"}}';
const STADIUM_3v3 = '{"name":"Futsal 3v3 Zimska Liga from HaxMaps","width":755,"height":339,"spawnDistance":310,"bg":{"type":"hockey","width":665,"height":290,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":-665,"y":290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-665,"y":80,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-665,"y":-80,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-665,"y":-290,"trait":"ballArea","bCoef":1,"cMask":["ball"]},{"x":665,"y":290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":665,"y":80,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":665,"y":-80,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":665,"y":-290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":306,"trait":"kickOffBarrier"},{"x":0,"y":80,"trait":"kickOffBarrier"},{"x":0,"y":-80,"trait":"line"},{"x":0,"y":-306,"trait":"kickOffBarrier"},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-693,"y":-80},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":693,"y":-80},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-693,"y":80},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":693,"y":80},{"trait":"line","x":-665,"y":-215},{"trait":"line","x":-500,"y":-50},{"trait":"line","x":665,"y":-215},{"trait":"line","x":500,"y":-50},{"trait":"line","x":-665,"y":215},{"trait":"line","x":-500,"y":50},{"trait":"line","x":665,"y":215},{"trait":"line","x":500,"y":50},{"bCoef":1,"trait":"ballArea","x":665,"y":290},{"bCoef":1,"trait":"ballArea","x":665,"y":-290},{"bCoef":0,"trait":"line","x":0,"y":290},{"bCoef":0,"trait":"line","x":0,"y":-290},{"x":0,"y":80,"trait":"kickOffBarrier"},{"x":0,"y":-80,"trait":"kickOffBarrier"},{"x":674,"y":-80,"trait":"line","cMask":["ball"],"bCoef":1},{"x":674,"y":-290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-674,"y":-80,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-674,"y":-290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-674,"y":80,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-674,"y":290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":674,"y":80,"trait":"line","cMask":["ball"],"bCoef":1},{"x":674,"y":290,"trait":"ballArea","cMask":["ball"],"bCoef":1}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":2,"v1":12,"color":"FFFFFF","curve":-35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":6,"v1":13,"color":"FFFFFF","curve":35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":1,"v1":14,"color":"FFFFFF","curve":35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":5,"v1":15,"color":"FFFFFF","curve":-35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":12,"v1":14,"x":-585,"color":"FFFFFF","curve":-35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":13,"v1":15,"x":585,"color":"FFFFFF","curve":35},{"color":"FFFFFF","trait":"line","v0":16,"v1":17,"curve":90},{"color":"FFFFFF","trait":"line","v0":18,"v1":19,"curve":-90},{"color":"FFFFFF","trait":"line","v0":20,"v1":21,"curve":-90},{"color":"FFFFFF","trait":"line","v0":22,"v1":23,"curve":90},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":17,"v1":21,"curve":0},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":19,"v1":23,"curve":0},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":1,"v1":0,"cMask":["ball"],"x":-665},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":5,"v1":4,"cMask":["ball"],"x":665},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":2,"v1":3,"cMask":["ball"],"x":-665},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":6,"v1":7,"cMask":["ball"],"x":665},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":0,"v1":24,"y":290},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":3,"v1":25,"y":-290},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":26,"v1":27},{"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":10,"v1":9},{"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":29,"v1":28},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":2,"v1":1},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":6,"v1":5},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":30,"v1":31,"cMask":["ball"],"x":614},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":32,"v1":33,"cMask":["ball"],"x":-614},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":34,"v1":35,"cMask":["ball"],"x":-614},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":36,"v1":37,"cMask":["ball"],"x":614}],"goals":[{"p0":[-674,-80],"p1":[-674,80],"team":"red"},{"p0":[674,80],"p1":[674,-80],"team":"blue"}],"discs":[{"pos":[-665,80],"trait":"goalPost","color":"FFFFFF","radius":5},{"pos":[-665,-80],"trait":"goalPost","color":"FFFFFF","radius":5},{"pos":[665,80],"trait":"goalPost","color":"FFFFFF","radius":5},{"pos":[665,-80],"trait":"goalPost","color":"FFFFFF","radius":5}],"planes":[{"normal":[0,1],"dist":-290,"trait":"ballArea"},{"normal":[0,-1],"dist":-290,"trait":"ballArea"},{"normal":[0,1],"dist":-339,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-339,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-755,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-755,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":7},"ballPhysics":{"radius":6.4,"color":"9CF0E5"}}';
const STADIUM = '{"name":"De Paul Stadium","width":900,"height":404,"bg":{"type":"grass","width":793,"height":346,"kickOffRadius":95,"cornerRadius":0,"color":"718B5B"},"vertexes":[{"x":-793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":100,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-100,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":100,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-100,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":404,"trait":"kickOffBarrier"},{"x":0,"y":95,"trait":"kickOffBarrier"},{"x":0,"y":-95,"trait":"line"},{"x":0,"y":-404,"trait":"kickOffBarrier"},{"x":-840,"y":-100,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":840,"y":-100,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-840,"y":100,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":840,"y":100,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-793,"y":-271,"trait":"line"},{"x":-572,"y":-50,"trait":"line"},{"x":793,"y":-271,"trait":"line"},{"x":572,"y":-50,"trait":"line"},{"x":-793,"y":271,"trait":"line"},{"x":-572,"y":50,"trait":"line"},{"x":793,"y":271,"trait":"line"},{"x":572,"y":50,"trait":"line"},{"x":793,"y":346,"bCoef":1,"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"trait":"ballArea"},{"x":0,"y":346,"bCoef":0,"trait":"line"},{"x":0,"y":-346,"bCoef":0,"trait":"line"},{"x":0,"y":95,"trait":"kickOffBarrier"},{"x":0,"y":-95,"trait":"kickOffBarrier"},{"x":802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":331,"trait":"cornerDecoration"},{"x":-778,"y":346,"trait":"cornerDecoration"},{"x":-778,"y":-346,"trait":"cornerDecoration"},{"x":-793,"y":-331,"trait":"cornerDecoration"},{"x":778,"y":346,"trait":"cornerDecoration"},{"x":793,"y":331,"trait":"cornerDecoration"},{"x":793,"y":-331,"trait":"cornerDecoration"},{"x":778,"y":-346,"trait":"cornerDecoration"},{"x":-625,"y":-2.75,"trait":"line"},{"x":-625,"y":2.75,"trait":"line"},{"x":625,"y":-2.75,"trait":"line"},{"x":625,"y":2.75,"trait":"line"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"vis":true,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":6,"v1":13,"vis":true,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":1,"v1":14,"vis":true,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":5,"v1":15,"vis":true,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":12,"v1":14,"vis":true,"cMask":["ball"],"trait":"goalNet","x":-840},{"v0":13,"v1":15,"vis":true,"cMask":["ball"],"trait":"goalNet","x":585},{"v0":16,"v1":17,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":18,"v1":19,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":20,"v1":21,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":22,"v1":23,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":17,"v1":21,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-600},{"v0":19,"v1":23,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":572},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":9,"x":-665},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-9,"x":665},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-9,"x":-665},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":9,"x":665},{"v0":0,"v1":24,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":290},{"v0":3,"v1":25,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-290},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":29,"v1":28,"curve":180.43079330521417,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","_data":{"mirror":{},"arc":{"a":[0,-95],"b":[0,95],"curve":180.43079330521417,"radius":95.00067131878964,"center":[0.3571428571409862,0],"from":-1.574555707580645,"to":1.574555707580645}}},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FF9494","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"A3BAFF","bCoef":0,"trait":"line"},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":32,"v1":33,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":34,"v1":35,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":36,"v1":37,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":38,"v1":39,"vis":true,"trait":"cornerDecoration"},{"v0":40,"v1":41,"vis":true,"trait":"cornerDecoration"},{"v0":42,"v1":43,"vis":true,"trait":"cornerDecoration"},{"v0":44,"v1":45,"vis":true,"trait":"cornerDecoration"},{"v0":46,"v1":47,"trait":"line"},{"v0": 46,"v1":47,"curve":-180,"trait":"line"},{"v0":46,"v1":47,"curve":180,"trait":"line"},{"v0":48,"v1":49,"trait":"line"},{"v0":48,"v1":49,"curve":-180,"trait":"line"},{"v0":48,"v1":49,"curve":180,"trait":"line"}],"goals":[{"p0":[-802,-100],"p1":[-802,100],"team":"red"},{"p0":[802,100],"p1":[802,-100],"team":"blue"}],"discs":[{"pos":[-793,100],"trait":"goalPost"},{"pos":[-793,-100],"trait":"goalPost"},{"pos":[793,100],"trait":"goalPost"},{"pos":[793,-100],"trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,-346],"b":[900,-346]}}},{"normal":[0,-1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,346],"b":[900,346]}}},{"normal":[0,1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[900,-404]}}},{"normal":[0,-1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,404],"b":[900,404]}}},{"normal":[1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[-900,404]}}},{"normal":[-1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[900,-404],"b":[900,404]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":4.5,"invMass":0,"color":"C6D881","bCoef":1.2},"goalNet":{"vis":true,"color":"DDE6ED","bCoef":0.15,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"color":"FFFFFF","cMask":[""]},"cornerDecoration":{"vis":true,"color":"FFFFFF","bCoef":0,"cMask":[""],"curve":90},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.655,"bCoef":0.2529},"ballPhysics":{"radius":6.5,"color":"CCFF99","bCoef":0.465,"invMass":1.4},"joints":[],"redSpawnPoints":[[-310, 0], [-310, 55], [-310, -55], [-310, 110], [-310, -110], [-700, 370]],"blueSpawnPoints":[[310, 0], [310, 55], [310, -55], [310, 110], [310, -110], [700, 370]],"canBeStored":false}';
const PENALTY_STADIUM = '{"name":"De Paul Stadium | PEN","width":420,"height":200,"spawnDistance":310,"bg":{"type":"grass","width":400,"height":260,"kickOffRadius":0,"cornerRadius":0,"color":"718B5B"},"vertexes":[{"x":323,"y":260,"bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-30},{"x":323,"y":100,"bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-30},{"x":323,"y":-100,"bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":30},{"x":323,"y":-260,"bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":30},{"x":370,"y":-100,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0},{"x":370,"y":100,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0},{"x":332,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":323,"y":260,"bCoef":0,"trait":"line"},{"x":323,"y":-260,"bCoef":0,"trait":"line"},{"x":0,"y":-260,"bCoef":0,"trait":"line"},{"x":0,"y":260,"bCoef":0,"trait":"line"},{"x":323,"y":200,"bCoef":0,"trait":"line"},{"x":110,"y":200,"bCoef":0,"trait":"line"},{"x":110,"y":-200,"bCoef":0,"trait":"line"},{"x":323,"y":-200,"bCoef":0,"trait":"line"},{"x":0,"y":100,"bCoef":0,"trait":"line"},{"x":0,"y":-100,"bCoef":0,"trait":"line"},{"x":110,"y":5,"bCoef":0,"trait":"line"},{"x":110,"y":-5,"bCoef":0,"trait":"line"},{"x":55,"y":-260,"bCoef":0,"cMask":["red"],"trait":"penArea"},{"x":65,"y":260,"bCoef":0,"cMask":["red"],"trait":"penArea"},{"x":300,"y":-90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":365,"y":-90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":365,"y":90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":300,"y":90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":2,"v1":4,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"goalNet","y":-100},{"v0":1,"v1":5,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"goalNet","y":100},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-30,"x":665},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":30,"x":665},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":7,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":9,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":9,"v1":8,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":11,"v1":12,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":12,"v1":13,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":13,"v1":14,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":15,"v1":16,"curve":150,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":18,"v1":17,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":17,"v1":18,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"goalNet"},{"v0":19,"v1":20,"curve":45,"vis":false,"bCoef":0,"cMask":["red"],"trait":"penArea"},{"v0":21,"v1":22,"vis":false,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":22,"v1":23,"vis":false,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":23,"v1":24,"vis":false,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":24,"v1":21,"vis":false,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"}],"goals":[{"p0":[332,100],"p1":[332,-100],"team":"blue"},{"p0":[325,-100],"p1":[100,0],"team":"red"},{"p0":[100,0],"p1":[320,100],"team":"red"}],"discs":[{"radius":6.5,"color":"FFDEAD","bCoef":0.465,"invMass":1.4,"pos":[110,0],"cGroup":["ball","kick","score"]},{"pos":[323,100],"trait":"goalPost"},{"pos":[323,-100],"trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-260,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-260,"canvas_rect":[-710,-260,710,260],"a":[-710,-260],"b":[710,-260]}}},{"normal":[0,-1],"dist":-260,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-260,"canvas_rect":[-710,-260,710,260],"a":[-710,260],"b":[710,260]}}},{"normal":[1,0],"dist":-499,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-499,"canvas_rect":[-710,-260,710,260],"a":[-499,-260],"b":[-499,260]}}},{"normal":[-1,0],"dist":-376,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-376,"canvas_rect":[-710,-260,710,260],"a":[376,-260],"b":[376,260]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":4.5,"invMass":0,"color":"C6D881","bCoef":1},"goalNet":{"vis":true,"bCoef":0.2,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n/d"],"color":"cccccc"},"penArea":{"vis":false,"bCoef":0,"cMask":["red"]}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.655,"bCoef":0.2527},"ballPhysics":"disc0","joints":[],"canBeStored":false,"redSpawnPoints":[[-100,0]],"blueSpawnPoints":[[323,0]],"kickOffReset":"full"}';
const DISCORD_LINK = "https://discord.gg/DYWZFFsSYu";
const COMMANDS_TO_VALIDATE = ["discord", "kickafk", "afk", "captains", "unmute", "clearmutes"]; // These commands can cause spam in the chat or bypass the mute
const NEW_UPDATE_MESSAGE = "MỚI: Người chơi có thể trở thành VIP mở khóa nhiều tính năng hấp dẫn bằng cách donate cho room";

class Setting {
  constructor(setting) {
    this.msgColor = "normal";
    this.sizeDecreasement = 0;
    if ( setting !== null ) {
      Object.assign(this, setting);
    };
  };
}
class Kick {
  constructor(ballProperties, byPlayer) {
    this.properties = ballProperties;
    this.byPlayer = byPlayer;
    this.time = room.getScores().time;

    let xOpponentGoal = ( byPlayer.team == 1 ) ? stadium.goalLine.x : -stadium.goalLine.x; // The x position value of the opponent's goal
    this.isAShot = (
      (xOpponentGoal * ballProperties.xspeed > 0) && // It's a kick toward the opponent goal
      (Math.abs(ballProperties.x + ballProperties.xspeed * 97.5) > stadium.goalLine.x) && // At this speed, the ball can cross the goal line
      (Math.abs(ballProperties.y + ballProperties.yspeed * (xOpponentGoal - ballProperties.x) / ballProperties.xspeed) < stadium.goalLine.y) // Check if it's on target (not really accurate because it might hit the post)
    );
  }
}
class PlayerReport {
  constructor(player) {
    this.name = "";
    this.goals = 0;
    this.assists = 0;
    this.ownGoals = 0;
    this.cleansheets = 0;
    this.wins = 0;
    this.games = 0;
    if ( player !== null ) {
      Object.assign(this, player);
    };
  }
  getWinRate() {
    if ( this.games == 0 ) return 0; 
    return (this.wins / this.games * 100).toFixed(2);
  }
}
class PlayerStats {
  constructor(name) {
    this.name = name;
    this.goals = 0;
    this.assists = 0;
    this.ownGoals = 0;
    this.touches = 0;
    this.passes = 0;
    this.shotsOnTarget = 0;
  }
}
class TeamStats {
  constructor() {
    this.substitutions = 0;
    this.possession = 0;
    this.players = {};
  }
}
class Penalty {
  constructor() {
    this.groups = [[], []]; // Penalty takers
    this.results = [[], []]; // Results of taken penalties (first for RED, second for BLUE)
  }
  getTurn() {
    return this.results[0].length - this.results[1].length;
  }
  // Returns the team that wins the penalty shootout
  getPenaltyWinner() {
    if ( this.results[0].length > 5 ) { // "Sudden Death" round
      if ( this.results[0].length != this.results[1].length ) return null;
      if ( this.results[0].at(-1) == this.results[1].at(-1) ) return null;
      return this.results[0].at(-1) ? 1 : 2;
    };

    // One team has more penalties scored than the other team even if the other team scores all the remaining penalties
    if ( this.results[0].filter(result => result).length > 5 - this.results[1].filter(result => !result).length ) {
      return 1;
    } else if ( this.results[1].filter(result => result).length > 5 - this.results[0].filter(result => !result).length ) {
      return 2;
    };
    return null;
  }
  getPenaltyTakers() {
    let turn = this.getTurn();
    return [this.groups[turn].at(this.results[1].length % this.groups[turn].length), this.groups[turn ^ 1].at(-1)];
  }
  push(result) {
    this.results[this.getTurn()].push(result);
  }
}
class Game {
  constructor() {
    this.teams = {
      1: new TeamStats(),
      2: new TeamStats(),
    }; 
    this.penalty = new Penalty();
    this.ballRecords = [null, null, null];
  }
  resetBallRecords() {
    this.ballRecords = [null, null, null];
  } 
  getStats() {
    let stats = {
      possession: [50, 50],
      passes: [0, 0],
      shotsOnTarget: [0, 0],
    };
    if ( this.teams[1].possession + this.teams[2].possession != 0 ) {
      stats.possession[0] = ~~(game.teams[1].possession / (game.teams[1].possession + game.teams[2].possession) * 100);
      stats.possession[1] = 100 - stats.possession[0];
    };
    for (let i = 0; i < 2; i++) {
      for (const player of Object.values(this.teams[i + 1].players)) {
        stats.passes[i] += player.passes;
        stats.shotsOnTarget[i] += player.shotsOnTarget;
      };
    };
    return stats;
  }
}

var commands = { // Format: "alias: [function, availableModes, minimumRole, captainOnly]"
  help: [helpFunc, ["rand", "pick"], ROLE.PLAYER, false],
  discord: [discordFunc, ["rand", "pick"], ROLE.PLAYER, false],
  bye: [byeFunc, ["rand", "pick"], ROLE.PLAYER, false],
  stats: [showStatsFunc, ["rand", "pick"], ROLE.PLAYER, false],
  rank: [showRankingsFunc, ["rand", "pick"], ROLE.PLAYER, false],
  kickafk: [kickAfkFunc, ["rand", "pick"], ROLE.PLAYER, false],
  spec: [specFunc, ["rand", "pick"], ROLE.PLAYER, false],
  login: [loginFunc, ["rand", "pick"], ROLE.PLAYER, false],
  afk: [afkFunc, ["rand", "pick"], ROLE.PLAYER, false],
  predict: [predictFunc, ["rand", "pick"], ROLE.PLAYER, false],
  captains: [listCaptainsFunc, ["pick"], ROLE.PLAYER, false],
  surrender: [surrenderFunc, ["pick"], ROLE.PLAYER, true],
  sub: [subFunc, ["pick"], ROLE.PLAYER, true],
  pause: [pauseFunc, ["pick"], ROLE.PLAYER, true],
  resume: [resumeFunc, ["pick"], ROLE.PLAYER, true],
  msgcolor: [setMsgColorFunc, ["rand", "pick"], ROLE.VIP, false],
  reducesize: [reduceSizeFunc, ["rand", "pick"], ROLE.VIP, false],
  yellow: [yellowCardFunc, ["rand", "pick"], ROLE.ADMIN, false],
  clearyellow: [clearYellowCardFunc, ["rand", "pick"], ROLE.ADMIN, false],
  mute: [muteFunc, ["rand", "pick"], ROLE.ADMIN, false],
  unmute: [unmuteFunc, ["rand", "pick"], ROLE.ADMIN, false],
  clearmutes: [clearMutesFunc, ["rand", "pick"], ROLE.ADMIN, false],
  clearbans: [clearBansFunc, ["rand", "pick"], ROLE.ADMIN, false],
  assigncap: [assignCaptainFunc, ["pick"], ROLE.ADMIN, false],
};
var identities = {}; // Store connection string/public IDs of players
var adminAuths = new Set(); // Remember admin's auth for auto-login
var afkList = new Set([0]); // Host player is always in AFK mode
var muteList = new Set();
var isPlaying = false;
var isPicking = false;
var isTakingPenalty = false;
var canPause = false;
var winningStreak = 0;
var prevWinner = 1;
var pickTurn = 0;
var pausedBy = 0;
var captains = {1: 0, 2: 0};
var kits = {red: null, blue: null};
var prevScore = null;
var predictions = {};
var lastMessage = [null, null, null]; // The last message with the player ID and sending time
var game = null;
var penalty = null;
var stadium = { // Stadium attributes
  goalLine: { x: 0, y: 0 },
  ballRadius: 0,
  playerRadius: 0,
};
var timeouts = {
  toPick: null,
  toResume: null,
  toTakePenalty: null,
  toAct: {},
  toQuitAfk: {},
};
var selectedCaptain = null;
var quotes = [];

var room = HBInit({
  roomName: `💥 [De Paul's auto room] 5v5 (${MODE})`,
  maxPlayers: 30,
  playerName: "BLV Khảnh Dơi",
  public: true,
});
room.setTeamsLock(1);
room.setKickRateLimit(7, 15, 3);
loadStadium("training");
room.startGame();

setInterval(randomAnnouncement, NOTIFICATION_INTERVAL * 1000);
setInterval(randomGameStat, 2.5 * 60 * 1000);
if ( MODE == "pick" ) setInterval(showSpecTable.bind(null), 5 * 1000); // Send Spectators table once every few seconds to prevent it from being faded away by other messages
updateMetadata();

function loadStadium(name) {
  let _stadium = {
    "penalty": [PENALTY_STADIUM, 0, 0],
    "5v5": [STADIUM, SCORE_LIMIT, TIME_LIMIT],
    "3v3": [STADIUM_3v3, 5, 5],
    "1v1": [STADIUM_1v1, 5, 5],
    "training": [STADIUM_TRAINING, 0, 0],
  }[name];
  let wasPlaying = !!room.getScores();
  room.stopGame();
  room.setCustomStadium(_stadium[0]);
  room.setScoreLimit(_stadium[1]);
  room.setTimeLimit(_stadium[2]);
  wasPlaying && room.startGame();
  // Analyze the stadium
  let parsedStadium = JSON.parse(_stadium[0]);
  if ( parsedStadium.goals.length != 0 ) {
    stadium.goalLine.x = Math.abs(parsedStadium.goals[0].p0[0]);
    stadium.goalLine.y = Math.abs(parsedStadium.goals[0].p0[1]);
  };
  stadium.ballRadius = parsedStadium.ballPhysics.radius || 10;
  stadium.playerRadius = parsedStadium.playerPhysics.radius || 15;
}

function getPlayerStats() {
  let playerList = [];
  for (let i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if ( key.length != 43 ) continue;
    playerList.push({ ...JSON.parse(localStorage.getItem(key)), auth: key });
  };
  return playerList;
}

async function randomAnnouncement() {
  let msg;
  switch ( Math.floor(Math.random() * 3) ) {
    case 0: // Send Discord link
      msg = `🔔 Đừng quên vào server Discord của De Paul: ${DISCORD_LINK}`;
      break;
    case 1:
      msg = `Donate cho room để trở thành người chơi VIP với khả năng đổi màu tin nhắn, thu nhỏ cầu thủ, hiệu ứng ăn mừng, ... Vào Discord để biết thêm chi tiết: ${DISCORD_LINK}`;
      break;
    default: // Send a random quote
      try {
        (quotes.length == 0) && await fetch("https://api.quotable.io/quotes/random?limit=50", { method: "GET" }) // Fetch new quotes
          .then(response => response.json())
          .then(json => quotes = json.map(quote => `"${quote.content}" - ${quote.author}`));
      } catch (error) {
        return;
      };
      msg = quotes.pop();
  }
  room.sendAnnouncement(msg, null, YELLOW, "small-italic", 0);
}

function randomGameStat() {
  let scores = room.getScores();
  if ( (scores == null) || (scores.time < 60) ) return;
  let fact;
  switch ( Math.floor(Math.random() * 4) ) {
    case 0:
      fact = `Kiểm soát bóng: 🟥 ${game.getStats().possession.map(possession => possession + "%").join(" - ")} 🟦`;
      break;
    case 1:
      fact = `Lượt chuyền bóng: 🟥 ${game.getStats().passes.join(" - ")} 🟦`;
      break;
    case 2:
      fact = `Sút trúng đích: 🟥 ${game.getStats().shotsOnTarget.join(" - ")} 🟦`;
      break;
    case 3:
      if ( winningStreak < 3 ) return;
      fact = `Chuỗi bất bại của ${TEAM_NAMES[prevWinner]}: ${winningStreak}`;
  };
  room.sendAnnouncement(`⏩⏩    ${fact}    ⏪⏪`, null, 0xCF9FFF, "small-bold");
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
      value: `============================\n\n*${topScorers.map((player, index) => `${index + 1}. ${player.name} - ${player.goals} bàn thắng`).join("\n")}*`,
    },
    {
      name: "Vua kiến tạo",
      value: `============================\n\n*${topAssisters.map((player, index) => `${index + 1}. ${player.name} - ${player.assists} kiến tạo`).join("\n")}*`,
    },
    {
      name: "Vua báo",
      value: `============================\n\n*${topOwnGoalScorers.map((player, index) => `${index + 1}. ${player.name} - ${player.ownGoals} bàn thắng phản lưới nhà`).join("\n")}*`,
    },
  ];
  sendWebhook(`✨ Số liệu thống kê trong tháng ${getMonths()}`, null, discordFields);

  for (const key in localStorage) {
    if ( key.length != 43 ) continue;
    localStorage.removeItem(key);
  }
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
async function sendWebhook(title, content, fields, attachment) {
  if ( !DISCORD_WEBHOOK ) return;
  await fetch(DISCORD_WEBHOOK, {
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
  });
  if ( !attachment || !attachment[1] ) return;
  let form = new FormData();
  form.append(null, new File([attachment[1]], attachment[0], { "type": "text/plain" }));
  fetch(DISCORD_WEBHOOK, {
    method: "POST",
    body: form,
  });
}

// Move AFK player to bottom of the Spectators list
function reorderPlayers() {
  room.reorderPlayers(Array.from(afkList), false);
}

function getAuth(id) {
  return identities[id][0];
}

function getConn(id) {
  return identities[id][1];
}

function getRole(player) {
  if ( player.admin ) return 2;
  return +localStorage.getItem("vip").includes(getAuth(player.id));
}

function getSetting(id) {
  return new Setting(JSON.parse(localStorage.getItem(`${getAuth(id)}_setting`)));
}

function saveSetting(id, setting) {
  localStorage.setItem(`${getAuth(id)}_setting`, JSON.stringify(setting));
}

// Return player's statistics in the room
function getStats(auth) {
  return new PlayerReport(JSON.parse(localStorage.getItem(auth)));
}

function getGameStats(player) {
  if ( identities[player.id] === undefined ) return new PlayerStats();
  let auth = getAuth(player.id);
  if ( game.teams[player.team].players[auth] === undefined ) {
    game.teams[player.team].players[auth] = new PlayerStats(player.name);
  };
  return game.teams[player.team].players[auth];
}

// Get a player by name or tag
function getPlayerByName(value) {
  if ( !value ) return null;
  // Find player by tag
  if ( value.startsWith("@") ) {
    return room.getPlayerList().find(player => getTag(player.name) == value);
  };
  // Find player by part of the name
  value = value.toLowerCase();
  return room.getPlayerList().find(player => player.name.toLowerCase().includes(value));
}

// Exclude AFK players from player list
function getNonAfkPlayers() {
  return room.getPlayerList().filter(player => !afkList.has(player.id));
}

function getSpectators() {
  return room.getPlayerList().filter(player => (player.team == 0) && !afkList.has(player.id));
}

// Get a player by position in Spectators list
function getPlayerByPos(number) {
  return getNonAfkPlayers().filter(player => player.team == 0)[number - 1];
}

function getPredictionWinners() {
  return (predictions[prevScore] || []).reduce(function(players, id) {
    if ( afkList.has(id) ) return players;
    let player = room.getPlayer(id);
    (player !== null) && (player.team !== prevWinner) && players.push(player);
    return players;
  }, []);
}

// Get the spectator with the highest number of G/A
function getBestSpectatorByStats() {
  let bestPlayer = null;
  let highestGA = -1;
  for (const player of getSpectators()) {
    let stats = getStats(getAuth(player.id));
    if ( stats.goals + stats.assists <= highestGA ) continue;
    bestPlayer = player;
    highestGA = stats.goals + stats.assists;
  };
  return bestPlayer;
}

function isCaptain(id) {
  return Object.values(captains).includes(id);
}

function resizePlayer(id) {
  let setting = getSetting(id);
  if ( setting.sizeDecreasement == 0 ) return;
  let playerDiscProperties = room.getPlayerDiscProperties(id);
  room.setPlayerDiscProperties(id, { radius: playerDiscProperties.radius - setting.sizeDecreasement });
}

// Change players' size according to their settings
function resizePlayers() {
  for (const player of room.getPlayerList()) {
    if ( player.team == 0 ) continue;
    resizePlayer(player.id);
  };
}

// Set random colors for 2 teams
function setRandomColors() {
  let colors = randomChoice(TEAM_COLORS);
  room.setTeamColors(1, ...colors[0]);
  room.setTeamColors(2, ...colors[1]);
  [kits.red, kits.blue] = colors;
}

async function avatarEffect(playerId, avatars) {
  for (const avatar of avatars) {
    await room.setPlayerAvatar(playerId, avatar);
    await new Promise(r => setTimeout(r, 100));
  };
  room.setPlayerAvatar(playerId, null);
}

async function celebrationEffect(player, hasScored) {
  switch ( Math.floor(Math.random() * 6) ) {
    case 0:
      avatarEffect(player.id, ["🤫", "😂", "🤫", "😂"]);
      break;
    case 1:
      avatarEffect(player.id, ["😴", "💤", "😴", "💤"]);
      break;
    case 2:
      let avatars;
      switch ( hasScored ) {
        case 2:
          avatars = ["✌", "2", "✌🏻", "2", "✌🏿"];
          break;
        case 3:
          avatars = ["👌", "3", "👌🏻", "3️", "👌🏿"];
          break;
        case 4:
          avatars = ["✌✌", "4", "✌🏻✌🏻", "4", "✌🏿✌🏿"];
          break;
        default:
          avatars = ["🌟", "⭐", "✨", "💫"];
      };
      avatarEffect(player.id, avatars, 250);
      break;
    case 3:
      let originalRadius = room.getPlayerDiscProperties(player.id).radius;
      for (let i = 1; i <= 5; i += 1) {
        await room.setPlayerDiscProperties(player.id, { radius: stadium.playerRadius - stadium.playerRadius * (i % 2) / 2 });
        await new Promise(r => setTimeout(r, 100));
      };
      room.setPlayerDiscProperties(player.id, { radius: originalRadius });
      break;
    case 4:
      room.setPlayerDiscProperties(player.id, { radius: stadium.playerRadius * 2 });
      break;
    case 5:
      let players = room.getPlayerList().flatMap(player_ => (player_.team == player.team) && (player_.id != player.id) ? [player_.id] : []);
      for (let i = 0; i < players.length; i++) {
        room.setPlayerDiscProperties(
          players[i],
          {
            x: player.x + stadium.playerRadius * 4 * Math.cos(Math.PI * 2 * i / players.length),
            y: player.y + stadium.playerRadius * 4 * Math.sin(Math.PI * 2 * i / players.length)
          }
        );
      };
  };
}

// Show spectators with their assigned numbers to captains for them to pick by number
function showSpecTable() {
  if ( !isPicking ) return;
  let playerList = getSpectators().map((player, index) => `${player.name} (#${index + 1})`);
  let table = " ".repeat(85) + "DANH SÁCH DỰ BỊ\n" + "_".repeat(150) + "\n" + playerList.join("  •  ") + "\n" + "_".repeat(150);
  room.sendAnnouncement(table, captains[pickTurn], BLUE, "small-bold", 0);
  room.sendAnnouncement("Hướng dẫn: nhập số hoặc tag để chọn người chơi (VD: 2 hoặc @De_Paul). Nhập '0' để tự động chọn người chơi có thống kê tốt nhất", captains[pickTurn], YELLOW, "small", 0);
}

function isPlayerValid(player) {
  // Players without a name are not allowed
  if ( player.name.trim().length == 0 ) {
    room.kickPlayer(player.id, "Người chơi không có tên");
    return false;
  };

  let tag = getTag(player.name.trim());
  for (const _player of room.getPlayerList()) {
    if ( _player.id == player.id ) continue;
    // Player joined by 2 tabs
    if ( (_player.id != 0) && (getConn(_player.id) == player.conn) ) {
      room.kickPlayer(_player.id, "Bạn đã vào room bằng 1 tab khác");
      continue;
    };
    // Duplicate tag
    if ( getTag(_player.name.trim()) == tag ) {
      room.kickPlayer(player.id, "Vui lòng đổi tên");
      return false;
    };
  };
  return true;
}

function saveIdentities(player) {
  identities[player.id] = [player.auth, player.conn];
}

function canUseCommand(command, player) {
  if ( !command[1].includes(MODE) ) return false; // Command is not available in this mode
  if ( getRole(player) < command[2] ) return false; // Role is not high enough
  if ( isCaptain(player.id) < command[3] ) return false; // Captain required
  return true;
}

// Kick player if player doesn't act in time
function afkCallback(id) {
  room.kickPlayer(id, "AFK");
  delete timeouts.toAct[id];
}

// Kick if player doesn't quit AFK mode in time
function oversleepCallback(id) {
  room.kickPlayer(id, "Bạn đã AFK quá lâu");
  delete timeouts.toQuitAfk[id];
}

function penaltyTimeoutCallback() {
  if ( !isTakingPenalty ) return;
  room.sendChat("Cầu thủ đã không thực hiện penalty trong thời gian quy định");
  // Count as a miss if player doesn't perform the penalty in time
  game.penalty.push(false);
  takePenalty();
}

async function updateTeamPlayers() {
  if ( room.getScores() === null ) return;

  await navigator.locks.request("update_team_players", async lock => {
    let players = getNonAfkPlayers();
    let redPlayers = players.filter(player => player.team == 1);
    let bluePlayers = players.filter(player => player.team == 2);
    let maxPlayers = MAX_PLAYERS;
    if ( isTakingPenalty ) maxPlayers = 1; // One player each side for taking a penalty
    if ( (redPlayers.length >= maxPlayers) && (bluePlayers.length >= maxPlayers) ) return; // Enough players for 2 teams
    // Find team that needs new player the most
    let missingTeam = ( redPlayers.length > bluePlayers.length ) ? 2 : ( redPlayers.length < bluePlayers.length ) ? 1 : 0;
    let subPlayers = players.filter(player => player.team == 0);

    if ( missingTeam == 0 ) {
      if ( subPlayers.length < 2 ) return;
      room.setPlayerTeam(subPlayers[0].id, 1);
      room.setPlayerTeam(subPlayers[1].id, 2);
    } else if ( subPlayers.length != 0 ) {
      room.setPlayerTeam(subPlayers[0].id, missingTeam);
    } else if ( players.length != 1 ) { // If there is only 1 player, let them chill with the training map
      room.setPlayerTeam(((missingTeam == 1) ? bluePlayers : redPlayers).at(-1).id, 0);
    };
  });
}

// Update information to monitor last kickers, possession and passing accuracy
function updateBallKick(player) {
  if ( !isPlaying ) return;
  let ballProperties = room.getDiscProperties(0);
  game.ballRecords.unshift(new Kick(ballProperties, player));
  game.ballRecords.pop();

  if ( game.ballRecords[1] === null ) { // Kick-off pass
    // Disallow pausing after kick-off
    canPause = false;
    return;
  };

  let timeGap = game.ballRecords[0].time - game.ballRecords[1].time;
  let stats = getGameStats(player);
  stats.touches++;
  // If the previous kick was a shot on goal, check whether it was blocked and exclude that shot if it was
  if (
    game.ballRecords[1].isAShot &&
    (timeGap < 1) &&
    (getDistance(ballProperties.x - game.ballRecords[1].properties.x, ballProperties.y - game.ballRecords[1].properties.y) < stadium.ballRadius * 2.5)
  ) {
    getGameStats(game.ballRecords[1].byPlayer.id).shotsOnTarget--;
  } else if ( game.ballRecords[0].isAShot ) {
    stats.shotsOnTarget++;
  } else if ( Math.abs(ballProperties.x + ballProperties.xspeed * 100) < stadium.goalLine.x ) { // Switch to penalty shootout when it hits maximum added time
    let scores = room.getScores();
    if ( (scores.timeLimit != 0) && (scores.time - scores.timeLimit > MAX_ADDED_TIME) ) {
      startPenaltyShootout();
      return;
    };
  };

  if ( player.team != game.ballRecords[1].byPlayer.team ) return; // Received the ball from an opponent player
  if ( player.id != game.ballRecords[1].byPlayer.id ) getGameStats(game.ballRecords[1].byPlayer).passes++; // Received the ball from a teammate, so the previous kick was a pass
  game.teams[player.team].possession += timeGap; // Received the ball from a teammate or from yourself, so it's in possession
}

// Change captain of a specific team
async function updateCaptain(teamId, newCaptain) {
  // Choose a random captain from the current team
  if ( !newCaptain ) {
    // Exclude former captain and AFK players
    let players = getNonAfkPlayers();
    // How new captain is picked:
    // - Find a player who is already in the team first
    // - If 2 teams are taking penalty, get that team player from `game.penalty.groups`
    // - As the last option, find someone in the Spectators
    newCaptain = isTakingPenalty ? room.getPlayer(game.penalty.groups[teamId - 1].at(0)) : (
      players.find(player => (player.team == teamId) && !isCaptain(player.id)) ||
      players.find(player => player.team == 0)
    );
    // No player left to assign
    if ( !newCaptain ) {
      // Clear captain slot
      captains[teamId] = 0;
      return;
    };
  };

  let oldCaptainId = captains[teamId];
  captains[teamId] = newCaptain.id;
  if ( newCaptain.team == teamId ) {
    // Move old captain to the bottom of the team list to prevent being re-selected as the captain next time
    room.reorderPlayers([oldCaptainId], false);
  } else if ( isTakingPenalty ) {
    // Remove old captain from the penalty group
    game.penalty.groups[teamId - 1] = game.penalty.groups[teamId - 1].filter(id => id != oldCaptainId);
    // Add new captain to the penalty group (if necessary)
    game.penalty.groups[teamId - 1].includes(newCaptain.id) || game.penalty.groups[teamId - 1].unshift(newCaptain.id);
  } else {
    // Move new captain to team
    await room.setPlayerTeam(newCaptain.id, teamId);
    // Move old captain to Spectators
    await room.setPlayerTeam(oldCaptainId, 0);
  };
  room.sendAnnouncement(`${newCaptain.name} đã được chọn làm đội trưởng của ${TEAM_NAMES[teamId]}`, null, GREEN, "bold", 0);

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
  if ( (redPlayersCount == bluePlayersCount) && ((specPlayers.length == 1) || (redPlayersCount >= MAX_PLAYERS)) ) {
    room.startGame();
    return true;
  };
  if ( Math.abs(redPlayersCount - bluePlayersCount) < specPlayers.length ) return false;

  // Move all players to the missing team
  for (const player of specPlayers) {
    room.setPlayerTeam(player.id, 1 + (redPlayersCount > bluePlayersCount) | 0);
  };
  room.startGame();
  return true;
}

// Request a pick from the most needed team
function requestPick() {
  if ( !isPicking || checkAutoPick() ) return;
  let players = room.getPlayerList();
  let redPlayersCount = players.filter(player => player.team == 1).length;
  let bluePlayersCount = players.filter(player => player.team == 2).length;
  pickTurn = ( redPlayersCount > bluePlayersCount ) ? 2 : 1;

  room.sendAnnouncement(`${TEAM_NAMES[pickTurn]} đang chọn người chơi...`, null, YELLOW, "small", 0);
  showSpecTable();
  room.sendAnnouncement("Đã đến lượt bạn chọn người chơi", captains[pickTurn], YELLOW, "bold", 2);
  // Kick if captain doesn't pick in time
  timeouts.toPick = setTimeout(
    room.kickPlayer.bind(null, captains[pickTurn], "AFK"),
    (( Math.min(redPlayersCount, bluePlayersCount) > 1 ) ? PICK_TIMEOUT : FIRST_PICK_TIMEOUT) * 1000,
  );
}

function helpFunc(value, player) {
  let allAlias = Object.keys(commands).filter(alias => canUseCommand(commands[alias], player));
  allAlias = allAlias.map(alias => "!" + alias)
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
  let showPlayer;
  if ( !value ) {
    showPlayer = player;
  } else {
    if ( getRole(player) < ROLE.VIP ) {
      room.sendAnnouncement("Bạn cần phải là người chơi VIP để có thể xem thống kê người khác", player.id, RED);
      return false;
    };
    showPlayer = getPlayerByName(value);
    if ( showPlayer === undefined ) {
      room.sendAnnouncement(`Người chơi "${value}" không tồn tại hoặc đã rời đi`, player.id, RED);
      return false;
    };
  };
  let item = getStats(getAuth(showPlayer.id));
  room.sendAnnouncement(`Thống kê trong tháng ${getMonths()} của ${showPlayer.name}:`, player.id, BLUE, "bold", 0);
  room.sendAnnouncement(`⚽ Bàn thắng: ${item.goals}
🤝🏻 Kiến tạo: ${item.assists}
❌ Bàn thắng phản lưới nhà: ${item.ownGoals}
🧤 Sạch lưới: ${item.cleansheets}
🔰 Số trận đã chơi: ${item.games}
🏆 Tỉ lệ thắng: ${item.getWinRate()}%`, player.id, BLUE, "small-bold", 0);
  return false;
}

function showGameStatsFunc(value, player) {
  let stats = game[player.team][getAuth(showPlayer.id)];
  room.sendAnnouncement(`Thống kê trong tháng ${getMonths()} của ${player.name}:`, player.id, BLUE, "bold", 0);
  room.sendAnnouncement(`Bàn thắng: ${stats.goals}
Kiến tạo: ${stats.assists}
Bàn thắng phản lưới nhà: ${stats.ownGoals}
Đường chuyền: ${stats.passes}
Sút trúng đích: ${stats.shotsOnTarget}`, player.id, BLUE, "small-bold", 0);
  return false;
}

function showRankingsFunc(value, player) {
  let playerList = getPlayerStats();

  // Sort players by goals scored
  playerList.sort(function(player1, player2) {
    if ( player1.goals == player2.goals ) {
      return player2.assists - player1.assists;
    };
    return player2.goals - player1.goals;
  })
  if ( playerList.length == 0 ) {
    room.sendAnnouncement("Chưa có dữ liệu người chơi", player.id, RED);
    return false;
  };
  let msg = `⚽ Danh sách ghi bàn hàng đầu tháng ${getMonths()} ⚽: ${playerList.slice(0, 5).map((player, index) => `${index + 1}. ${player.name} (${player.goals})`).join("  •  ")}`;
  msg += `\n (Xếp hạng của bạn: ${1 + playerList.findIndex(stats => stats.auth == getAuth(player.id)) || "Không có"})`;

  // Sort players by assists made
  playerList.sort(function(player1, player2) {
    if ( player1.assists == player2.assists ) {
      return player2.goals - player1.goals;
    };
    return player2.assists - player1.assists;
  });
  msg += `\n👟 Danh sách kiến tạo hàng đầu tháng ${getMonths()} 👟: ${playerList.slice(0, 5).map((player, index) => `${index + 1}. ${player.name} (${player.assists})`).join("  •  ")}`;
  msg += `\n (Xếp hạng của bạn: ${1 + playerList.findIndex(stats => stats.auth == getAuth(player.id)) || "Không có"})`;

  room.sendAnnouncement(msg, player.id, YELLOW, "small-italic", 0);
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
  } else if ( getSpectators().length == 0 ) {
    room.sendAnnouncement("Đã hết người chơi để thay vào", player.id, RED);
    return false;
  };

  room.setPlayerTeam(player.id, 0);
  room.sendAnnouncement("Bạn đã được di chuyển ra Spectators", player.id, GREEN);
  updateTeamPlayers();
  return true;
}

function listCaptainsFunc(value, player) {
  for (let teamId = 1; teamId < 3; teamId++) {
    (captains[teamId] != 0) && room.sendAnnouncement(`Đội trưởng của ${TEAM_NAMES[teamId]}: ${room.getPlayer(captains[teamId]).name}`, null, GREEN, "normal", 0);
  };
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
  if ( Object.values(predictions).some(predictors => predictors.includes(player.id)) ) { // Has already had a prediction
    room.sendAnnouncement("Bạn chỉ có thể thực hiện một dự đoán trong một trận đấu", player.id, RED);
    return false;
  };
  let scores = room.getScores();
  if ( isTakingPenalty || (scores === null) || (scores.time > PREDICTION_PERIOD) || (scores.red + scores.blue != 0) ) {
    room.sendAnnouncement("Chưa thể đoán tỉ số hoặc đã hết thời hạn dự đoán tỉ số", player.id, RED);
    return false;
  };

  let score = prediction.split("-").map(goals => Number(goals));
  if ( (score.length != 2) || score.some(goals => goals % 1 !== 0) ) {
    room.sendAnnouncement("Tỉ số không hợp lệ, vui lòng đảm bảo tỉ số có dạng RED-BLUE (VD: 2-1)", player.id, RED);
    return false;
  };
  let scoreLimit = room.getScores().scoreLimit;
  if ( (scoreLimit != 0) && (score.some(goals => goals > scoreLimit) || (score[0] + score[1] == scoreLimit * 2)) ) {
    room.sendAnnouncement("Tỉ số không thể xảy ra", player.id, RED);
    return false;
  };
  prediction = score.join("-"); // Re-format weird scores like "0x01-0x02", even though I don't know why I should even care
  if ( predictions[prediction] === undefined ) {
    predictions[prediction] = [player.id];
  } else if ( (MODE != "pick") && (predictions[prediction].length <= MAX_PLAYERS) ) {
    predictions[prediction].push(player.id);
  } else { // Maximum winners per match reached (1 in pick mode and maximum number of players each team in rand mode) 
    room.sendAnnouncement("Đã có đủ người dự đoán tỉ số này, vui lòng dự đoán tỉ số khác", player.id, RED);
    return false;
  };
  
  room.sendAnnouncement(`${player.name} đã dự đoán tỉ số RED ${prediction} BLUE`, null, GREEN);
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
  if ( isTakingPenalty || (room.getScores() === null) ) {
    room.sendAnnouncement("Bạn chỉ có thể thay người khi trận đấu đang diễn ra", player.id, RED);
    return false;
  };
  if ( game.teams[player.team].substitutions >= MAX_SUBSTITUTIONS ) {
    room.sendAnnouncement("Bạn đã hết lượt thay người", player.id, RED);
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
  room.sendAnnouncement(`🔻 ${outPlayer.name} đã được thay ra ngoài`, null, 0xFF0000, "small", 0);
  room.sendAnnouncement(`🔺 ${inPlayer.name} đã được thay vào sân`, null, 0x00FF00, "small", 0);
  room.setPlayerTeam(inPlayer.id, player.team);
  room.setPlayerTeam(outPlayer.id, 0);
  game.teams[player.team].substitutions++;
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

function setMsgColorFunc(value, player) {
  if ( value != "normal" ) {
    if ( !/^[0-9A-F]{6}$/i.test(value) ) {
      room.sendAnnouncement('Vui lòng nhập một mã màu hợp lệ hoặc dùng "normal" để đặt lại về mặc định (VD: !msgcolor 00FFFF hoặc !msgcolor normal)', player.id, RED);
      return false;
    };
    value = `0x${value}`;
  };
  let setting = getSetting(player.id);
  setting.msgColor = value;
  saveSetting(player.id, setting);
  return false;
}

function reduceSizeFunc(value, player) {
  if ( !value || isNaN(value) ) {
    room.sendAnnouncement("Vui lòng cung cấp số đơn vị muốn giảm, dùng 0 để chỉnh lại về bình thường (VD: !reducesize 2)", player.id, RED);
    return false;
  };
  let setting = getSetting(player.id);
  if ( (value < 0) || (value > stadium.playerRadius / 3) ) {
    room.sendAnnouncement("Kích cỡ cầu thủ đã bị chỉnh tới mức không hợp lệ", player.id, RED);
    return false;
  };
  let gap = value - setting.sizeDecreasement;
  setting.sizeDecreasement = value;
  saveSetting(player.id, setting);

  let playerDiscProperties = room.getPlayerDiscProperties(player.id);
  (playerDiscProperties !== null) && room.setPlayerDiscProperties(player.id, { radius: playerDiscProperties.radius - gap });
  room.sendAnnouncement("Đã chỉnh và lưu kích thước cầu thủ", player.id, GREEN);
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
      adminAuths.add(getAuth(player.id));
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
  let index = yellowCards.indexOf(getConn(toPlayer.id));
  if ( index != -1 ) { // Player has already received a yellow card
    yellowCards.splice(index, 1); // Clear the card
    room.kickPlayer(toPlayer.id, "Bạn đã nhận 2 thẻ vàng", true);
    var msg = `🟨🟨 ${toPlayer.name} đã nhận thẻ vàng thứ 2 từ ${player.name}`;
  } else {
    yellowCards.push(getConn(toPlayer.id));
    var msg = `🟨 ${toPlayer.name} đã nhận một thẻ vàng từ ${player.name} (2 thẻ vàng = ban)`;
  };
  reason && (msg += `: ${reason}`);
  room.sendAnnouncement(msg, null, YELLOW);
  localStorage.setItem("yellow_cards", JSON.stringify(yellowCards));
  return false;
}

function clearYellowCardFunc(value, player) {
  if ( !value ) {
    room.sendAnnouncement("Vui lòng cung cấp một người chơi hợp lệ (VD: !clearyellow @De_Paul hoặc !clearyellow paul)", player.id, RED);
    return false;
  };

  let toPlayer = getPlayerByName(value);
  if ( !toPlayer ) {
    room.sendAnnouncement(`Không thể tìm thấy người chơi "${value}"`, player.id, RED);
    return false;
  };

  let yellowCards = JSON.parse(localStorage.getItem("yellow_cards")) || [];
  let index = yellowCards.indexOf(getConn(toPlayer.id));
  if ( index == -1 ) {
    room.sendAnnouncement(`${toPlayer.name} chưa nhận thẻ vàng nào`, player.id, RED);
    return false;
  };
  yellowCards.splice(index, 1);
  localStorage.setItem("yellow_cards", JSON.stringify(yellowCards));
  room.sendAnnouncement(`🟨❌ ${toPlayer.name} đã được xóa thẻ vàng`, null, YELLOW);
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

  muteList.add(getConn(toPlayer.id));
  if ( period == 0 ) {
    var msg = `${toPlayer.name} đã bị cấm chat bởi ${player.name}`;
  } else {
    setTimeout(muteList.delete.bind(muteList, getConn(toPlayer.id)), period * 60 * 1000);
    var msg = `${toPlayer.name} đã bị cấm chat trong ${period} phút bởi ${player.name}`;
  };
  reason && (msg += `: ${reason}`);
  room.sendAnnouncement(msg, null, RED, "bold", 0);
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

  muteList.delete(getConn(toPlayer.id));
  room.sendAnnouncement(`${toPlayer.name} đã có thể chat trở lại`, null, GREEN);
  return false;
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
    clearTimeout(timeouts.toQuitAfk[player.id]);
    delete timeouts.toQuitAfk[player.id];
    room.sendAnnouncement(`${player.name} đã thoát chế độ AFK`, null, GREEN);
  } else {
    if ( getRole(player) < ROLE.VIP ) {
      // Only allows a limited number of AFK players including the host
      if ( afkList.size == MAX_AFK_PLAYERS ) {
        room.sendAnnouncement("Đã có quá nhiều người chơi AFK, bạn không thể AFK", player.id, RED);
        return false;
      };
      timeouts.toQuitAfk[player.id] = setTimeout(oversleepCallback.bind(null, player.id), AFK_TIMEOUT * 1000);
    };
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
  room.sendAnnouncement(`${pickedPlayer.name} đã được chọn vào ${TEAM_NAMES[team]}`, null, GREEN, "small", 0);
  requestPick();
}

function handleCommand(player, input) {
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

// Update stats about goals, assists and own goals
function updateGoalStats(team) {
  let [shot, assist] = game.ballRecords;
  if ( shot === null ) return;

  if ( shot.byPlayer.team != team ) { // Own goal
    // Not an own goal but probably a clearing/goalkeeping effort
    if (
      assist && // Someone's kick resulted in this goal
      assist.isAShot && // The previous kick was a shot on target
      (assist.byPlayer.team == team) && // The previous kick came from an opponent player
      (stadium.goalLine.x - Math.abs(shot.properties.x) < stadium.playerRadius * 3) && // The gap between the ball and the goal-line was pretty small it probably was an effort to clear the ball
      (shot.time - assist.time < 2.5) // The time between 2 kicks wasn't too big, otherwise, it sounds nothing like a save
    ) {
      // Correct the credits
      [shot, assist] = game.ballRecords.slice(1);
    } else {
      getGameStats(shot.byPlayer).ownGoals++;
      room.sendChat(`Một bàn phản lưới nhà do sai lầm của ${getTag(shot.byPlayer.name)}`);
      return;
    };
  };

  let ballPosition = room.getBallPosition();
  let shooterStats = getGameStats(shot.byPlayer);
  shooterStats.goals++;
  let comment = SCORER_COMMENTARIES[shooterStats.goals] || `Thật điên rồ, bàn thắng thứ ${shooterStats.goals} trong trận đấu này của`;
  comment = comment.concat(" ", getTag(shot.byPlayer.name));
  if ( getRole(shot.byPlayer) >= ROLE.VIP ) celebrationEffect(shot.byPlayer, shooterStats.goals);

  if (
    (assist !== null) &&
    (assist.byPlayer.team == team) && // Assisted by teammate
    (assist.byPlayer.id != shot.byPlayer.id) && // Not a solo goal
    (assist.byPlayer.id in identities) // Assister hasn't left the game
  ) {
    let assisterStats = getGameStats(assist.byPlayer);
    assisterStats.assists++;
    if ( assisterStats.assists != 1 ) { // Multiple assists O_O
      comment = comment.concat(", ", `${getTag(assist.byPlayer.name)} đã có cho mình kiến tạo thứ ${assisterStats.assists} trong trận đấu`);
    } else {
      comment = comment.concat(", ", `đường kiến tạo từ ${getTag(assist.byPlayer.name)}`);
    };
  };

  room.sendChat(comment);
  // Calculate goal stats
  let speed = convertToMeters(getDistance(shot.properties.xspeed, shot.properties.yspeed) * 60); // There are 60 frames per second
  let distance = convertToMeters(getDistance(shot.properties.x - ballPosition.x, shot.properties.y - ballPosition.y));
  room.sendAnnouncement(`Khoảng cách: ${distance || "dưới 1"}m | Lực sút: ${speed} (m/s)`, null, 0x00FF00, "small", 0);
}

function saveStats() {
  for (let teamId = 1; teamId < 3; teamId++) {
    for (const [auth, info] of Object.entries(game.teams[teamId].players)) {
      let item = getStats(auth);
      item.name = info.name;
      item.goals += info.goals;
      item.assists += info.assists;
      item.ownGoals += info.ownGoals;
      item.games++;
      if ( teamId == prevWinner ) {
        item.wins++;
      };
      if ( prevScore.split("0").length > (teamId != prevWinner) + 1 ) {
        item.cleansheets++;
      };
      localStorage.setItem(auth, JSON.stringify(item));
    };
  };
}

function reportStats() {
  let scoreline = ` RED ${prevScore} BLUE`;
  let time;
  if ( game.penalty.results[0].length != 0 ) {
    scoreline += ` (Luân lưu: ${game.penalty.results.map(results => results.length).join("-")})`;
    time = 60 * MAX_TIME + MAX_ADDED_TIME;
  } else {
    time = room.getScores().time;
  };
  let minutes = Math.floor(time / 60);
  let elapsedTime = `${minutes}:${Math.round(time - minutes * 60).toString().padStart(2, "0")}`;
  room.sendAnnouncement(scoreline, null, YELLOW, "bold", 0);

  let stats = game.getStats();
  let contributions = [[], []];
  for (let i = 0; i < 2; i++) {
    for (const player of Object.values(game.teams[i + 1].players)) {
      if ( player.goals + player.assists + player.ownGoals == 0 ) continue;
      let msg = player.name + " (";
      if ( player.goals == 1 ) {
        msg += "⚽";
      } else if ( player.goals != 0 ) { // More than 1 goal
        msg += `${player.goals}⚽`;
      };
      if ( player.assists == 1 ) {
        msg += "👟";
      } else if ( player.assists != 0 ) { // More than 1 assist
        msg += `${player.assists}👟`;
      };
      if ( player.ownGoals == 1 ) {
        msg += "🥅";
      } else if ( player.ownGoals != 0 ) { // More than 1 own goal
        msg += `${player.ownGoals}🥅`;
      };
      msg += ")";
      contributions[i].push(msg);
    };
  };

  // Generate a room message about game statistics
  let statsMsg = `Kiểm soát bóng: 🔴 ${stats.possession.map(possession => possession + "%").join(" - ")} 🔵
Sút trúng đích: 🔴 ${stats.shotsOnTarget.join(" - ")} 🔵
Lượt chuyền bóng: 🔴 ${stats.passes.join(" - ")} 🔵`;
  if ( contributions[0].length != 0 ) {
    statsMsg += `\nRED: ${contributions[0].join("  •  ")}`;
  };
  if ( contributions[1].length != 0 ) {
    statsMsg += `\nBLUE: ${contributions[1].join("  •  ")}`;
  };
  statsMsg += `\nChuỗi bất bại: ${winningStreak} trận`;
  room.sendAnnouncement(statsMsg, null, YELLOW, "small-bold", 0);

  // Generate a Discord embed about game statistics
  let discordMsg = `**RED (captain: ${room.getPlayer(captains[1]).name})**
\`\`\`ansi
[2;31m${contributions[0].join("\n")}\`\`\`
**BLUE (captain: ${room.getPlayer(captains[2]).name})**
\`\`\`ansi
[2;34m${contributions[1].join("\n")}\`\`\``;
  let discordFields = [
    {
      name: "Thống kê",
      value: "=======================\n\n**Kiểm soát bóng**\n**Sút trúng đích**\n**Lượt chuyền bóng**",
      inline: true,
    },
    {
      name: "🔴 **RED**",
      value: `==========\n\n${stats.possession[0]}%\n${stats.shotsOnTarget[0]}\n${stats.passes[0]}`,
      inline: true,
    },
    {
      name: "🔵 **BLUE**",
      value: `==========\n\n${stats.possession[1]}%\n${stats.shotsOnTarget[1]}\n${stats.passes[1]}`,
      inline: true,
    },
    {
      name: "",
      value: `Thời gian chơi: ${elapsedTime}\nChuỗi bất bại: ${winningStreak} trận`,
      inline: false,
    },
  ];
  sendWebhook(`🌟 ${scoreline}`, discordMsg, discordFields, [new Date().toString().slice(0, 21).replace(":", "h") + ".hbr2", room.stopRecording()]);
}

function celebrateGoal(team) {
  // Get ScoresObject
  let scores = room.getScores();
  let goalDiff = scores.red - scores.blue;
  if ( team == 2 ) goalDiff = -goalDiff;
  // Get score line in string
  let scoreline = `${scores.red}-${scores.blue}`;

  var scream = "VÀOOO"; // Goal screamer
  var comment = "bàn thắng mang lại không nhiều giá trị";
  // Design a good comment :P
  if (
    ((scores.scoreLimit != 0) && [scores.red, scores.blue].includes(scores.scoreLimit)) || // Maximum goals reached
    ((scores.timeLimit != 0) && (scores.time > scores.timeLimit)) // Overtime goal
  ) {
    scream = "VÀOOOOOOOO";
    // Pick a random comment
    comment = randomChoice(WINNING_GOAL_COMMENTARIES);
  } else {
    comment = GOAL_COMMENTARIES[goalDiff] || comment;
  };

  room.sendChat(`${scream} ${scoreline}, ${comment}`);
}

function celebratePenalty(team) {
  if ( team == 1 ) {
    room.sendChat(randomChoice(PENALTY_GOAL_COMMENTARIES));
  } else {
    room.sendChat(randomChoice(PENALTY_MISS_COMMENTARIES));
  };
}

function checkSpam(player, message) {
  let time = new Date().getTime();
  if ( (message === lastMessage[0]) && (player.id === lastMessage[1]) && (time - lastMessage[2] < 3000) ) { // The message is duplicated
    muteFunc(`${getTag(player.name)} 1 Spam`, room.getPlayer(0));
    return true;
  };
  lastMessage = [message, player.id, time];
  return false;
}

// Track all players on the pitch to find and kick AFK players
function trackAfk() {
  // Track every player on the pitch
  room.getPlayerList().forEach(function(player) {
    if ( player.team == 0 ) return;
    if ( timeouts.toAct[player.id] !== undefined ) return; // Player has already been monitored
    timeouts.toAct[player.id] = setTimeout(afkCallback.bind(null, player.id), ACTIVITY_TIMEOUT * 1000);
  });
}

// Stop all AFK trackers
function clearAfkRecords() {
  for (const id of Object.keys(timeouts.toAct)) {
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
  let deepestPositions = [Number.MAX_NUMBER, Number.MIN_NUMBER];
  // Store players' team and role (GK or not) for the penalty shootout
  room.getPlayerList().forEach(function(player) {
    if ( player.team == 0 ) return;
    let group = game.penalty.groups[player.team - 1];
    if (
      (group.length == 0) ||
      ((player.position.x - deepestPositions[player.team - 1]) * (player.team * 2 - 3) > 0)
    ) { // The lowest player will be assigned to the GK role
      group.push(player.id); // GK is the player in the last index of the array
      deepestPositions[player.team - 1] = player.position.x;
    } else {
      group.unshift(player.id);
    };
  });
  await room.stopGame();
  loadStadium("penalty");
  room.sendChat("Vậy là những phút thi đấu chính thức của trận đấu đã hết, 2 đội sẽ bước đến loạt sút luân lưu");
  await new Promise(r => setTimeout(r, AFTER_GAME_REST * 1000));
  takePenalty();
}

async function endPenaltyShootout(winner) {
  // Put players back to where they were before the penalty shootout
  for (let i = 0; i < 2; i++) {
    for (const id of game.penalty.groups[i]) {
      await room.setPlayerTeam(id, i + 1);
    };
  };
  handlePostGame(winner);
  isTakingPenalty = false;
  await room.stopGame();
  let playersCount = getNonAfkPlayers().length;
  if ( playersCount < 2 ) {
    loadStadium("training");
  } else if ( playersCount < 6 ) {
    loadStadium("1v1");
  } else if ( playersCount < 8 ) {
    loadStadium("3v3");
  } else {
    loadStadium("5v5");
  };
}

async function takePenalty() {
  let winner = game.penalty.getPenaltyWinner();
  // Found the winner in this penalty shootout
  if ( winner !== null ) {
    room.sendChat(`Và đó cũng là dấu chấm hết, ${TEAM_NAMES[winner]} là những người chiến thắng, sau màn trình diễn đáng kinh ngạc của họ`);
    endPenaltyShootout(winner);
    return;
  };

  room.stopGame();
  // Put previous penalty taker and goalkeeper back to the Spectators
  for (const player of room.getPlayerList()) {
    await room.setPlayerTeam(player.id, 0);
  };
  switch ( game.penalty.getTurn() ) {
    case 0:
      room.setTeamColors(1, ...kits.red);
      room.setTeamColors(2, ...GOALKEEPER_COLORS.blue);
      break;
    case 1:
      room.setTeamColors(1, ...kits.blue);
      room.setTeamColors(2, ...GOALKEEPER_COLORS.red);
  };

  let [penaltyTaker, goalkeeper] = game.penalty.getPenaltyTakers();
  await room.setPlayerTeam(penaltyTaker, 1);
  await room.setPlayerTeam(goalkeeper, 2);
  room.startGame();

  let penResults = [[], []];
  for (let i = 0; i < 2; i++) {
    game.penalty.results[i].forEach(function(result) {
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
    } else if ( game.penalty.getTurn() <= i ) {
      penResults[i].push("⚪");
    };
  };
  room.sendAnnouncement(` RED ${penResults[0].reverse().join("")} - ${penResults[1].join("")} BLUE`, null, BLUE, "bold", 0);
  if ( game.penalty.results.flat(1).length == 10 ) {
    room.sendChat('Giờ ta sẽ đến loạt sút "Sudden Death", một đội thực hiện thành công và đội còn lại đá trượt thì kết quả sẽ được định đoạt');
  };
  room.sendChat(`Bây giờ ${getTag(room.getPlayer(penaltyTaker).name)} sẽ bước lên để thức hiện quả penalty`);
  room.sendAnnouncement(`Bạn có ${PENALTY_TIMEOUT} giây để thực hiện quả penalty`, penaltyTaker, YELLOW);
  timeouts.toTakePenalty = setTimeout(penaltyTimeoutCallback, PENALTY_TIMEOUT * 1000);
}

async function randPlayers() {
  // Prediction winners
  let predictionWinners = getPredictionWinners();
  (predictionWinners.length != 0) && room.sendChat(`Chúc mừng ${predictionWinners.map(winner => getTag(winner.name)).join(", ")} đã dự đoán đúng tỉ số và nhận được 1 suất đá chính`);

  let players = getNonAfkPlayers();
  // Get player list and suffle it
  let idList = players.sort(function(player1, player2) {
    if ( players.length <= MAX_PLAYERS * 2 ) return Math.random() - 0.5;
    // Sort players of the winning team to be on top of the list so they will be picked up in the same team  
    if ( player1.team == prevWinner ) return -1;
    if ( player2.team == prevWinner ) return 1;
    // Prediction winners get advantages over others
    for (const winner of predictionWinners) {
      if ( player1.id == winner.id ) return -1;
      if ( player2.id == winner.id ) return 1;
    };
    // Random order
    return Math.random() - 0.5;
  }).map(player => player.id);

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
  let captain = getPredictionWinners()[0];
  if ( captain !== undefined ) {
    room.sendChat(`Chúc mừng ${getTag(captain.name)} đã dự đoán đúng tỉ số và nhận được chiếc băng đội trưởng`);
  } else {
    captain = (afkList.has(selectedCaptain) ? null : room.getPlayer(selectedCaptain)) || players.find(player => player.team == 0);
    selectedCaptain = null;
  };
  await updateCaptain(getOppositeTeamId(prevWinner), captain);
  // Move players to Spectators
  for (const player of players) {
    if ( isCaptain(player.id) || ((players.length > 10) && (player.team == prevWinner)) ) continue;
    await room.setPlayerTeam(player.id, 0);
  };
  isPicking = true;
  requestPick();
}

function personalizeMsg(message, player) {
  let newMessage = `${player.name.trim()}: ${message}`;
  let color = getSetting(player.id).msgColor;
  if ( message.includes("@") ) {
    for (const _player of room.getPlayerList()) {
      if ( message.includes(getTag(_player.name)) ) {
        room.sendAnnouncement(newMessage, _player.id, color, "bold", 2);
      } else {
        room.sendAnnouncement(newMessage, _player.id, color);
      };
    };
    return;
  };
  room.sendAnnouncement(newMessage, null, color);
}

function reset() {
  game = new Game();
  predictions = {};
}

function handlePostGame(winner) {
  if ( winner == prevWinner ) {
    winningStreak++;
  } else {
    winningStreak = 1;
    prevWinner = winner;
  };
  if ( getNonAfkPlayers().length >= 10 ) reportStats();
}

room.onPlayerJoin = async function(player) {
  if ( !isPlayerValid(player) ) return;
  saveIdentities(player);
  initiateChat(player);
  await updateTeamPlayers();
  reorderPlayers();
  if ( adminAuths.has(player.auth) ) { // Auto-login
    room.setPlayerAdmin(player.id, true);
  };
  if ( MODE == "pick" ) {
    // Assign captains if missing
    for (let teamId = 1; teamId < 3; teamId++) {
      if ( captains[teamId] == 0 ) {
        updateCaptain(teamId, player);
        break;
      };
    };
    showSpecTable();
  };
  if ( !isTakingPenalty ) {
    switch ( getNonAfkPlayers().length ) {
      case 2:
        loadStadium("1v1");
        break;
      case 6:
        loadStadium("3v3");
        break;
      case 8:
        loadStadium("5v5");
    };
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
    for (let i = 0; i < 2; i++) {
      let index = game.penalty.groups[i].indexOf(player.id);
      if ( index == -1 ) continue;
      game.penalty.groups[i].splice(index, 1);
      if ( game.penalty.groups[i].length == 0 ) {
        room.sendChat(`Toàn bộ cầu thủ sút luân lưu của ${TEAM_NAMES[i + 1]} đã rời phòng, ${TEAM_NAMES[i + 1]} đã bị xử thua`);
        await endPenaltyShootout(2 - i);
        break;
      };
    };
  } else {
    switch ( getNonAfkPlayers().length ) {
      case 7:
        loadStadium("3v3");
        break;
      case 5:
        loadStadium("1v1");
        break;
      case 1:
        loadStadium("training");
    };
  };

  // A captain left, assign another one
  let isCaptainOf = ( player.id == captains[1] ) ? 1 : ( player.id == captains[2] ) ? 2 : 0;
  if ( isCaptainOf != 0 ) {
    await updateCaptain(isCaptainOf);
  };
  checkAutoPick() || showSpecTable();
}

room.onPlayerTeamChange = async function(changedPlayer, byPlayer) {
  if ( isTakingPenalty ) {
    // The current penalty taker was moved to the Spectators by an admin, consider it a failed penalty
    if ( (changedPlayer.team == 0) && (byPlayer.id != 0) && Object.values(game.penalty.groups).some(group => group.includes(changedPlayer.id)) ) {
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
      let isCaptainOf = ( changedPlayer.id == captains[1] ) ? 1 : ( changedPlayer.id == captains[2] ) ? 2 : 0;
      if ( isCaptainOf != 0 ) {
        updateCaptain(isCaptainOf);
      } else {
        showSpecTable();
      };
    };
  } else if ( afkList.has(changedPlayer.id) ) { // Move AFK players back to Spectators
    room.setPlayerTeam(changedPlayer.id, 0);
    room.sendAnnouncement("Người chơi đang ở trạng thái AFK", byPlayer.id, RED);
  } else {
    let scores = room.getScores();
    if ( scores === null ) return;
    resizePlayer(changedPlayer.id);
    room.sendAnnouncement("Bạn đã được thay vào sân", changedPlayer.id, BLUE, "small", 2);
    if ( isPlaying ) {
      timeouts.toAct[changedPlayer.id] = setTimeout(afkCallback.bind(null, changedPlayer.id), ACTIVITY_TIMEOUT * 1000);
    };
    // Player was moved in in late of the game, we should not take away his chance of being a captain
    if (
      (MODE == "pick") &&
      (selectedCaptain === null) &&
      (
        (scores.timeLimit && (scores.timeLimit - scores.time < 15)) ||
        (scores.scoreLimit && (Math.max(scores.red, scores.blue) == scores.scoreLimit))
      )
    ) {
      selectedCaptain = changedPlayer.id;
    };
  };
}

room.onPlayerBallKick = function(player) {
  if ( isTakingPenalty ) return;
  updateBallKick(player);
}

room.onTeamGoal = function(team) {
  if ( isTakingPenalty ) {
    clearTimeout(timeouts.toTakePenalty);
    game.penalty.push(team == 1);
    celebratePenalty(team);
    return;
  };

  isPlaying = false; // The game is basically "off" until a position reset
  celebrateGoal(team);
  updateGoalStats(team);
}

room.onPositionsReset = function() {
  if ( isTakingPenalty ) {
    takePenalty();
    return;
  };

  resizePlayers();
  isPlaying = true;
  game.resetBallRecords();
  // Allows captains to pause the game before kick-off
  if ( (MODE == "pick") && (room.getScores().time != 0) && getSpectators().length ) {
    canPause = true;
    for (const captain of Object.values(captains)) {
      room.sendAnnouncement('Bạn có thể dừng game bằng lệnh !pause để thay người (dùng "!sub @thay_ra @thay_vào") trước khi kick-off', captain, YELLOW);
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
  if ( !message.startsWith("!") || COMMANDS_TO_VALIDATE.some(command => message.substring(1).startsWith(command)) ) {
    if ( muteList.has(getConn(player.id)) ) {
      room.sendAnnouncement("Không thể chat, bạn đã bị cấm", player.id, RED);
      return false;
    };
    if ( getRole(player) < ROLE.ADMIN ) {
      // Disallow Spectators from messaging when 2 teams are picking or taking penalty
      if ( isTakingPenalty && (player.team == 0) ) {
        room.sendAnnouncement("Bạn chưa thể chat vào lúc này", player.id, RED);
        return false;
      };
      if ( (getRole(player) < ROLE.VIP) && checkSpam(player, message) ) return false;
    };
  };
  if ( message.startsWith("!") ) { // Indicating a command
    return handleCommand(player, message.slice(1));
  };
  if ( getSetting(player.id).msgColor != "normal" ) {
    personalizeMsg(message, player);
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
  prevScore = `${scores.red}-${scores.blue}`;
  handlePostGame(( scores.red > scores.blue ) ? 1 : 2);
}

room.onGameStart = function(byPlayer) {
  isPlaying = true;
  isPicking = false;
  resizePlayers();
  if ( isTakingPenalty ) return;
  reset();
  // Stop forcing captain to pick
  clearTimeout(timeouts.toPick);
  setRandomColors();
  trackAfk();
  if ( DISCORD_WEBHOOK && SAVE_RECORDINGS ) room.startRecording();
  room.sendChat("Vậy là trận đấu đã chính thức được bắt đầu");
  room.sendChat(`Quý vị khán giả có ${PREDICTION_PERIOD} giây để dự đoán tỉ số và có cơ hội nhận được 1 suất đá chính, cú pháp "!predict RED-BLUE" (VD: !predict 1-2)`);
}

room.onGameStop = async function(byPlayer) {
  isPlaying = false;
  clearAfkRecords(); // Stop monitoring AFK when the game is stopped
  if ( getNonAfkPlayers().length >= 10 ) saveStats(); // Save stats of the previous game
  if ( (byPlayer !== null) && (byPlayer.id != 0) ) { // It wasn't a game over or stopped by host player
    room.sendChat("Trận đấu đã bị hủy bỏ vì thời tiết xấu");
    room.stopRecording();
    return;
  };
  if ( isTakingPenalty ) return;
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
