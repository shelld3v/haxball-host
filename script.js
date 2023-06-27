const ADMIN_PASSWORD = "nyc";
const START_GAME_COMMENT = `Chào mừng đến với SVĐ De Paul, tôi là Trông Anh Ngược, BLV của các bạn ngày hôm nay`;
const STATS_COLOR = 0x990099;
const RED = 0xFF0000;
const GREEN = 0x00FF00;

const commands = { // Format: "alias: [function, requiresAdmin]"
  help: [helpFunc, false],
  var: [varFunc, false],
  penalty: [penaltyFunc, false],
  login: [loginFunc, false],
  wait: [waitFunc, true],
  noautopick: [disableAutoPickFunc, true],
  autopick: [enableAutoPickFunc, true],
}
const replies = {
  "tin chuẩn chưa a": "Chuẩn em nhé",
  "ngu": "Toxic nên anh sẽ block em nhé",
  "memaybeo": "Mẹ tao béo, nhưng ít nhất tao có mẹ",
};
const goalComments = {
  "-4": "liệu còn hy vọng nào không",
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
const scorerComments = {
  "2": "Cú đúp cho",
  "3": "Hattrick của",
  "4": "Thật không thể tin được, một cú poker đến từ",
};
const teamStats = {
  passes: 0,
  accuratePasses: 0,
  possessedKicks: 0,
  goals: [],
};
const gameDefault = {
  lastKicked: [null, null], // 2 last players who kicked the ball
  red: JSON.parse(JSON.stringify(teamStats)),
  blue: JSON.parse(JSON.stringify(teamStats)),
};

var game = JSON.parse(JSON.stringify(gameDefault));
var config = {
  wait: false,
  autoPickDisabled: false,
};
var room = HBInit({
  roomName: "Phòng tự động của De Paul",
  maxPlayers: 30,
  playerName: "BLV Trông Anh Ngược",
  public: false,
});
room.setScoreLimit(0);
room.setTimeLimit(5);
room.setTeamColors(1, 60, 0xFFFFFF, [0xD60419]);
room.setTeamColors(2, 60, 0xFFFFFF, [0x0099FF]);
room.setCustomStadium('{"name":"HaxViet 5v5 from HaxMaps","width":900,"height":404,"spawnDistance":310,"bg":{"type":"grass","width":793,"height":346,"kickOffRadius":95,"cornerRadius":0,"color":"718B5B"},"vertexes":[{"x":-793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":404,"trait":"kickOffBarrier"},{"x":0,"y":95,"trait":"line"},{"x":0,"y":-95,"trait":"line"},{"x":0,"y":-404,"trait":"kickOffBarrier"},{"x":-821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0},{"x":821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0},{"x":-821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0},{"x":821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0},{"x":-793,"y":-271,"trait":"line"},{"x":-572,"y":-50,"trait":"line"},{"x":793,"y":-271,"trait":"line"},{"x":572,"y":-50,"trait":"line"},{"x":-793,"y":271,"trait":"line"},{"x":-572,"y":50,"trait":"line"},{"x":793,"y":271,"trait":"line"},{"x":572,"y":50,"trait":"line"},{"x":0,"y":95,"trait":"kickOffBarrier","curve":180},{"x":0,"y":-95,"trait":"kickOffBarrier","curve":180},{"x":802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-55,"y":28,"trait":"line"},{"x":-43,"y":-27,"bCoef":0,"trait":"line"},{"x":-52,"y":28,"bCoef":0,"trait":"line"},{"x":-40,"y":-27,"bCoef":0,"trait":"line"},{"x":-50,"y":0,"bCoef":0,"trait":"line"},{"x":-47.5,"y":3,"bCoef":0,"trait":"line"},{"x":-21,"y":3,"bCoef":0,"trait":"line"},{"x":-22,"y":0,"bCoef":0,"trait":"line"},{"x":-16,"y":-27,"bCoef":0,"trait":"line"},{"x":-13,"y":-27,"bCoef":0,"trait":"line"},{"x":-27,"y":28,"bCoef":0,"trait":"line"},{"x":-24,"y":28,"bCoef":0,"trait":"line"},{"x":-8,"y":-27,"bCoef":0,"trait":"line"},{"x":1,"y":28,"bCoef":0,"trait":"line"},{"x":-5,"y":-27,"bCoef":0,"trait":"line"},{"x":3,"y":22,"bCoef":0,"trait":"line"},{"x":25,"y":-27,"bCoef":0,"trait":"line"},{"x":28,"y":-27,"bCoef":0,"trait":"line"},{"x":4,"y":28,"bCoef":0,"trait":"line"},{"x":23,"y":28,"bCoef":0,"trait":"line"},{"x":32,"y":-27,"bCoef":0,"trait":"line"},{"x":35,"y":-27,"bCoef":0,"trait":"line"},{"x":26,"y":27,"bCoef":0,"trait":"line"},{"x":53,"y":28,"bCoef":0,"trait":"line"},{"x":50,"y":28,"bCoef":0,"trait":"line"},{"x":21.5,"y":28,"bCoef":0,"trait":"line"},{"x":35,"y":28,"bCoef":0,"trait":"line"},{"x":0,"y":346,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-346,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":6,"v1":13,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":1,"v1":14,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":5,"v1":15,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":16,"v1":17,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":18,"v1":19,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":20,"v1":21,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":22,"v1":23,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":17,"v1":21,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-600},{"v0":19,"v1":23,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":572},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":25,"v1":24,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":26,"v1":27,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":28,"v1":29,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":32,"v1":33,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":35,"v1":34,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":37,"v1":36,"vis":true,"color":"454C5E","bCoef":0,"trait":"line"},{"v0":38,"v1":41,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":39,"v1":40,"vis":true,"color":"454C5E","bCoef":0,"trait":"line"},{"v0":44,"v1":42,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":43,"v1":45,"vis":true,"color":"454C5E","bCoef":0,"trait":"line"},{"v0":48,"v1":49,"vis":true,"color":"454C5E","bCoef":0,"trait":"line"},{"v0":51,"v1":52,"vis":true,"color":"454C5E","bCoef":0,"trait":"line"},{"v0":46,"v1":47,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":50,"v1":47,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":55,"v1":56,"vis":true,"color":"454C5E","bCoef":0,"trait":"line"},{"v0":53,"v1":54,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":60,"v1":57,"vis":true,"color":"454C5E","bCoef":0,"trait":"line"},{"v0":59,"v1":58,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":25,"v1":62,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":24,"v1":61,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":7,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"v0":0,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea"}],"goals":[{"p0":[-802,-95],"p1":[-802,95],"team":"red"},{"p0":[802,95],"p1":[802,-95],"team":"blue"}],"discs":[{"radius":5,"pos":[-793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[-793,-95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,-95],"color":"FFFFFF","trait":"goalPost"},{"radius":0,"invMass":0,"pos":[-821,95],"bCoef":0,"cMask":["ball"]},{"radius":0,"invMass":0,"pos":[821,95],"bCoef":0,"cMask":["ball"]},{"radius":0,"invMass":0,"pos":[-821,-95],"bCoef":0,"cMask":["ball"]},{"radius":0,"invMass":0,"pos":[821,-95],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-823.2,87.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-825.2,80.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-828.5,66.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-827,73.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-830,59.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-831.2,52.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-832.3,45.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-833.3,38.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-834,31.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-834.7,24.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-835.1,17.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-835.4,10.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-835.5,3.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-835.5,-3.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-835.4,-10.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-835.2,-17.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-834.7,-24.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-834.1,-31.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-833.2,-38.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[831.2,-52.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-832.3,-45.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-830,-59.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-828.5,-66.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-827,-73.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-825.2,-80.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-823.2,-87.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[823.2,-87.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[825.2,-80.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[827,-73.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[828.5,-66.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[830,-59.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-831.2,-52.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[832.3,-45.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[833.2,-38.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[834.1,-31.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[834.7,-24.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.2,-17.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.4,-10.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.5,-3.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.5,3.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.4,10.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.1,17.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[834.7,24.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[834,31.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[833.3,38.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[832.3,45.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[831.2,52.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[830,59.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[828.5,66.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[827,73.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[825.2,80.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[823.2,87.5],"bCoef":0,"cMask":["ball"]}],"planes":[{"normal":[0,1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,-346],"b":[900,-346]}}},{"normal":[0,-1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,346],"b":[900,346]}}},{"normal":[0,1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[900,-404]}}},{"normal":[0,-1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,404],"b":[900,404]}}},{"normal":[1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[-900,404]}}},{"normal":[-1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[900,-404],"b":[900,404]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":6.9},"ballPhysics":{"radius":7,"color":"EAFF00","bCoef":0.465,"invMass":1},"joints":[{"d0":5,"d1":9,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":9,"d1":10,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":10,"d1":12,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":11,"d1":12,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":11,"d1":13,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":13,"d1":14,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":14,"d1":15,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":15,"d1":16,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":16,"d1":17,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":17,"d1":18,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":18,"d1":19,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":19,"d1":20,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":20,"d1":21,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":21,"d1":22,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":22,"d1":23,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":23,"d1":24,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":24,"d1":25,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":25,"d1":26,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":26,"d1":27,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":27,"d1":29,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":29,"d1":40,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":30,"d1":40,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":30,"d1":31,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":31,"d1":32,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":32,"d1":33,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":33,"d1":34,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":7,"d1":34,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":7,"d1":33,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":31,"d1":33,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":31,"d1":40,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":27,"d1":40,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":25,"d1":27,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":23,"d1":25,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":21,"d1":23,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":19,"d1":21,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":17,"d1":19,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":15,"d1":17,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":13,"d1":15,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":12,"d1":13,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":9,"d1":12,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":5,"d1":10,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":10,"d1":11,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":11,"d1":14,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":14,"d1":16,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":16,"d1":18,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":18,"d1":20,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":20,"d1":22,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":22,"d1":24,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":24,"d1":26,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":26,"d1":29,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":29,"d1":30,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":30,"d1":32,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":32,"d1":34,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":7,"d1":34,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":5,"d1":9,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":6,"d1":60,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":59,"d1":60,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":58,"d1":59,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":57,"d1":58,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":56,"d1":57,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":55,"d1":56,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":54,"d1":55,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":53,"d1":54,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":52,"d1":53,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":51,"d1":52,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":50,"d1":51,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":49,"d1":50,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":48,"d1":49,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":47,"d1":48,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":46,"d1":47,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":45,"d1":46,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":44,"d1":45,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":43,"d1":44,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":42,"d1":43,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":41,"d1":42,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":28,"d1":41,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":28,"d1":39,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":38,"d1":39,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":37,"d1":38,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":36,"d1":37,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":35,"d1":36,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":8,"d1":35,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":8,"d1":36,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":36,"d1":38,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":28,"d1":38,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":28,"d1":42,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":42,"d1":44,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":44,"d1":46,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":46,"d1":48,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":48,"d1":50,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":50,"d1":52,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":52,"d1":54,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":54,"d1":56,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":56,"d1":58,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":58,"d1":60,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":6,"d1":60,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":6,"d1":59,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":57,"d1":59,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":55,"d1":57,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":53,"d1":55,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":51,"d1":53,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":49,"d1":51,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":47,"d1":49,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":45,"d1":47,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":43,"d1":45,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":41,"d1":43,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":39,"d1":41,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":37,"d1":39,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":35,"d1":37,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":8,"d1":35,"strength":"rigid","color":"ffffff","length":null,"radius":0}],"canBeStored":false,"redSpawnPoints":[[-310,0],[-310,50],[-310,-50],[-310,100],[-310,-100],[-310,380]],"blueSpawnPoints":[[310,0],[310,50],[310,-50],[310,100],[310,-100],[310,380]],"kickOffReset":"full"}');

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
  let nameExists = players.some((_player) => (_player.name == player.name) && (_player.id != player.id));
  if ( !nameExists ) return;
  room.kickPlayer(player.id, "Tên người chơi đã tồn tại, vui lòng thay tên");
}

// If there are no admins left in the room give admin to one of the remaining players.
function updateAdmins() {
  // Get all players
  let players = getPlayers();
  if ( players.length == 0 ) return; // No player left
  if ( players.some((player) => player.admin) ) return; // There's an admin left
  room.setPlayerAdmin(players[0].id, true); // Give admin to the first non-admin player in the list
}

// Move players to teams until it's enough
async function updateTeamPlayers() {
  if ( config.autoPickDisabled ) return;

  let players = getPlayers();

  // Get a bench player (like Penaldo) that aren't admins cause admins can do it themself
  let specPlayer = players.find(player => (player.team == 0) && !player.admin);
  if ( specPlayer == undefined ) return; // No players left in the Spectators

  // Count players from 2 teams
  let redPlayersCount = players.filter(player => player.team == 1).length;
  let bluePlayersCount = players.filter(player => player.team == 2).length;
  if ( (redPlayersCount >= 5) && (bluePlayersCount >= 5) ) return; // There are enough players

  // Find the team that needs new players the most
  let missingTeam = ( redPlayersCount > bluePlayersCount ) ? 2 : 1;

  // API functions that modify the game's state execute asynchronously, so we have to wait before rechecking everything
  await room.setPlayerTeam(specPlayer.id, missingTeam);
}

// Update information to monitor last kickers, possession and passing accuracy
async function updateBallKick(player) {
  // Update information about 2 last players who kicked the ball
  game.lastKicked.length = 1;
  game.lastKicked.unshift(player);

  team = ( player.team == 1 ) ? game.red : game.blue;
  // Update total kicks
  team.kicks++;
  // Update accurate kicks
  if ( 
    (game.lastKicked[1] == null) || // Kick-off pass
    (player.team != game.lastKicked[1].team) // Received the ball from an opponent player, not a kick from possession
  ) {
    team.passes++; // Still a pass
    return;
  };

  if (player.id != game.lastKicked[1].id) { // Received the ball from a teammate, an accurate pass must have been made
    team.accuratePasses++;
    team.passes++;
  };
  // Other cases are wall kicks and duels, not counting as a pass to eliminate the previous pass count
  team.possessedKicks++;

  // Check for commentary
  if ( room.getScores().time > room.getScores().timeLimit ) {
    room.sendChat("Vậy là những phút thi đấu chính thức đã kết thúc, chúng ta đang tiến đến khoảng thời gian bù giờ");
  };
}

function varFunc(value, player) {
  room.sendAnnouncement("Phòng VAR thông báo không có lỗi, vui lòng mua gói VAR để cải thiện chất lượng", null, GREEN, 0);
  return true;
}

function penaltyFunc(penalty, player) {
  room.sendAnnouncement("Trọng tài quyết định chỉ trao penalty cho những đội tên Real Madrid", null, RED, 0);
  return true;
}

function loginFunc(password, player) {
  switch ( password ) {
    case "":
      room.sendAnnouncement("Vui lòng đính kèm mật khẩu: !login <mật khẩu>", player.id, RED, 0);
      break;
    case ADMIN_PASSWORD:
      room.setPlayerAdmin(player.id, true);
      room.sendAnnouncement("Đăng nhập thành công", player.id, GREEN, 0);
      break;
    default:
      room.kickPlayer(player.id, "Bạn đã nhập sai mật khẩu, vui lòng thử lại");
  };
  return false;
}

function waitFunc(value, player) {
  config.wait = true;
  room.sendAnnouncement("Đã dừng tự động cấp Admin", null, GREEN, 0);
  return false;
}

function disableAutoPickFunc(value, player) {
  config.autoPickDisabled = true;
  room.sendAnnouncement("Đã tắt tự động thay người, bật lại bằng lệnh !autopick", player.id, GREEN, 0);
  return false;
}

function enableAutoPickFunc(value, player) {
  config.autoPickDisabled = false;
  room.sendAnnouncement("Đã bật tự động thay người", player.id, GREEN, 0);
  return false;
}

function helpFunc(value, player) {
  let allAlias = Object.keys(commands).filter((command) => !commands[command][1] || player.admin);
  allAlias = allAlias.map((alias) => "!" + alias)
  room.sendAnnouncement(`Các câu lệnh có sẵn: ${allAlias.join(", ")}`, player.id, GREEN, 0);
  return false;
}

function processCommand(player, command) {
  // Get alias and value from command
  let splitIndex = command.indexOf(" ");
  splitIndex = ( splitIndex != -1 ) ? splitIndex : command.length;
  let [alias, value] = [command.slice(0, splitIndex), command.slice(splitIndex + 1)];
  let found = commands[alias];
  if ( found == undefined ) return true;

  let [func, requiresAdmin] = found;
  if ( requiresAdmin && !player.admin ) {
    room.sendAnnouncement("Bạn cần phải là Admin để thực hiện lệnh này", player.id, RED, 0);
    return false;
  }
  return func(value, player);
}

// Check if the message needs a reply
async function processReply(player, message) {
  message = message.toLowerCase();
  for ( const [keyword, response] of Object.entries(replies) ) {
    message.startsWith(keyword) && room.sendChat(`${getTag(player.name)} ${response}`);
  };
}

function processMessage(player, message) {
  if ( message.startsWith("!") ) { // Indicating a command
    return processCommand(player, message.slice(1));
  }

  processReply(player, message);
  return true;
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
    scream = "VÀOOOOOOOOOO";
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
  } else {
    comment = goalComments[goalDiff] || comment;
  };

  room.sendChat(`${scream} ${scoreline}, ${comment}`);
}

// Update stat about scorers and assisters
function updateStats(team) {
  let goals = team == 1 ? game.red.goals : game.blue.goals;
  let time = formatTime(room.getScores().time);
  let scorer = game.lastKicked[0];
  if ( scorer.team != team ) { // Own goal
    goals.push(`${scorer.name} ${time} (OG)`);
    room.sendChat(`Một bàn phản lưới nhà do sai lầm của ${getTag(scorer.name)}`);
    return;
  };

  goals.push(`${scorer.name} ${time}`);
  let comment = `${getTag(scorer.name)} là người đã ghi bàn`;
  let hasScored = goals.filter((goal) => goal.startsWith(scorer.name) && !goal.endsWith("OG)")).length;
  // Better comment if player has scored more than once
  if ( hasScored != 1 ) {
    comment = scorerComments[hasScored] || `Đây đã là bàn thắng thứ ${hasScored} trong trận đấu này của`;
    comment = comment.concat(" ", getTag(scorer.name));
  }

  let assister = game.lastKicked[1];
  if (
    (assister == null) || // Kick-off goal
    (assister.id == scorer.id) // Solo goal
  ) {} else if ( assister.team != team ) { // Assisted by the opponent team
    if ( randomBoolean(30) ) { // Only comment about it sometimes
      comment = comment.concat(", ", `${getTag(assister.name)} đã làm không tốt`);
    };
  } else { // A valid assist
    comment = comment.concat(", ", `kiến tạo thuộc về ${getTag(assister.name)}`);
  };

  room.sendChat(comment);
}

function reportStats(scores) {
  room.sendAnnouncement(` RED ${scores.red}-${scores.blue} BLUE`, null, STATS_COLOR, "bold", 0);
  // Possession stats
  let totalPossessedKicks = game.red.possessedKicks + game.blue.possessedKicks;
  let redPossession = ~~(game.red.possessedKicks / totalPossessedKicks * 100);
  let bluePossession = 100 - redPossession;
  room.sendAnnouncement(`Kiểm soát bóng: RED ${redPossession}% | BLUE ${bluePossession}%`, null, STATS_COLOR, 0);
  // Pass accuracy stats
  let redAccuracy = ( game.red.passes != 0 ) ? ~~(game.red.accuratePasses / game.red.passes * 100): 0;
  let blueAccuracy = ( game.blue.passes != 0 ) ? ~~(game.blue.accuratePasses / game.blue.passes * 100): 0;
  room.sendAnnouncement(`Tỉ lệ chuyền bóng chính xác: RED ${redAccuracy}% | BLUE ${blueAccuracy}%`, null, STATS_COLOR, 0);
  // Goals information
  if ( game.red.goals.length != 0 ) {
    room.sendAnnouncement(`Bàn thắng của RED: ${game.red.goals.join(", ")}`, null, STATS_COLOR, 0);
  };
  if ( game.blue.goals.length != 0 ) {
    room.sendAnnouncement(`Bàn thắng của BLUE: ${game.blue.goals.join(", ")}`, null, STATS_COLOR, 0);
  };
}

// Give another player admin if current admins seem to be unresponsive
async function monitorInactivity() {
  await new Promise(r => setTimeout(r, 10000));// Wait 10 seconds
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
    room.sendAnnouncement("Không có người chơi để cấp Admin!", null, RED, 0);
    return;
  }
  room.setPlayerAdmin(nonAdminPlayer.id, true);
  // Monitor again, make sure the new admin isn't AFK too
  monitorInactivity();
}

function reset() {
  game = JSON.parse(JSON.stringify(gameDefault));
  config.wait = false;
}

room.onPlayerJoin = function(player) {
  validatePlayer(player);
  room.sendAnnouncement("Nhập !help để xem các câu lệnh", player.id, GREEN, 0);
  room.sendChat(`Chào mừng ${getTag(player.name)} đến với băng ghế dự bị cùng Cristiano Ronaldo`, player.id);
  updateAdmins();
  updateTeamPlayers();
}

room.onPlayerLeave = function(player) {
  updateAdmins();
  (player.team != 0) && updateTeamPlayers();
}

room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
  // Move host player back to Spectators if it was moved to a team
  if ( changedPlayer.id != 0 ) return;
  room.setTeamPlayer(0, 0);
}

room.onPlayerAdminChange = function(changedPlayer, byPlayer) {
  if ( changedPlayer.admin ) return;
  updateAdmins();
}

room.onPlayerBallKick = function(player) {
  updateBallKick(player);
}

room.onTeamGoal = function(team) {
  celebrateGoal(team);
  updateStats(team);
  game.lastKicked = [null, null]
}

room.onPlayerChat = function(player, message) {
  return processMessage(player, message);
}

room.onTeamVictory = function(scores) {
  reportStats(scores);
}

room.onGameStart = function(byPlayer) {
  reset();
  room.sendChat(START_GAME_COMMENT);
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

room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {
  // Log this for admin to monitor kicking activity
  action = ban ? "banned" : "kicked";
  console.log(`${kickedPlayer.name} was ${action} by ${byPlayer.name} (reason: ${reason})`);
}
