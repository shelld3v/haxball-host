const ADMIN_PASSWORD = "depao";
const START_GAME_COMMENT = `Chào mừng đến với Cà Khịa TV, tôi là Trông Anh Ngược, BLV của các bạn ngày hôm nay`;
const YELLOW = 0xFFEA00;
const RED = 0xFF0000;
const GREEN = 0x00FF00;
const AFK_DEADLINE = 6;

const maps = {
  "1v1": '{"name":"1v1","width":420,"height":200,"spawnDistance":180,"bg":{"type":"hockey","width":368,"height":171,"kickOffRadius":50,"cornerRadius":0},"vertexes":[{"x":-368,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-368,"y":50,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-368,"y":-50,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-368,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":50,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":-50,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":176,"trait":"kickOffBarrier"},{"x":0,"y":50,"trait":"kickOffBarrier"},{"x":0,"y":-50,"trait":"line"},{"x":0,"y":-176,"trait":"kickOffBarrier"},{"x":-384,"y":-50,"bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"x":384,"y":-50,"bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"x":-384,"y":50,"bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"x":384,"y":50,"bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"x":-368,"y":-127,"trait":"line"},{"x":368,"y":-127,"trait":"line"},{"x":-368,"y":127,"trait":"line"},{"x":368,"y":127,"trait":"line"},{"x":-350,"y":-171,"bCoef":0,"trait":"line"},{"x":-368,"y":-163,"bCoef":0,"trait":"line"},{"x":350,"y":-171,"bCoef":0,"trait":"line"},{"x":368,"y":-163,"bCoef":0,"trait":"line"},{"x":-350,"y":171,"bCoef":0,"trait":"line"},{"x":-368,"y":163,"bCoef":0,"trait":"line"},{"x":350,"y":171,"bCoef":0,"trait":"line"},{"x":368,"y":163,"bCoef":0,"trait":"line"},{"x":368,"y":171,"bCoef":1,"trait":"ballArea"},{"x":368,"y":-171,"bCoef":1,"trait":"ballArea"},{"x":0,"y":171,"bCoef":0,"trait":"line"},{"x":0,"y":-171,"bCoef":0,"trait":"line"},{"x":0,"y":50,"trait":"kickOffBarrier"},{"x":0,"y":-50,"trait":"kickOffBarrier"},{"x":377,"y":-50,"bCoef":1,"cMask":["red"],"trait":"line"},{"x":377,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-377,"y":-50,"bCoef":1,"cMask":["blue"],"trait":"line"},{"x":-377,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-377,"y":50,"bCoef":1,"cMask":["blue"],"trait":"line"},{"x":-377,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":377,"y":50,"bCoef":1,"cMask":["red"],"trait":"line"},{"x":377,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"v0":6,"v1":13,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"v0":1,"v1":14,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"v0":5,"v1":15,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet"},{"v0":12,"v1":14,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet","x":-585},{"v0":13,"v1":15,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet","x":585},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-368},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":368},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-368},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":368},{"v0":0,"v1":28,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":171},{"v0":3,"v1":29,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-171},{"v0":30,"v1":31,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":33,"v1":32,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":34,"v1":35,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":330},{"v0":36,"v1":37,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-330},{"v0":38,"v1":39,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-330},{"v0":40,"v1":41,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":330},{"v0":34,"v1":40,"curve":60,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["red"],"trait":"line"},{"v0":38,"v1":36,"curve":60,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["blue"],"trait":"line"}],"goals":[{"p0":[-372,-52],"p1":[-372,48],"team":"red"},{"p0":[372,50],"p1":[372,-50],"team":"blue"}],"discs":[{"radius":5,"pos":[-368,50],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[-368,-50],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[368,50],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[368,-50],"color":"FFFFFF","trait":"goalPost"},{"radius":3,"invMass":0,"pos":[383,51],"color":"FFFFFF","bCoef":0,"trait":"line"},{"radius":3,"invMass":0,"pos":[-383,51],"color":"FFFFFF","bCoef":0,"trait":"line"},{"radius":3,"invMass":0,"pos":[383,-51],"color":"FFFFFF","bCoef":0,"trait":"line"},{"radius":3,"invMass":0,"pos":[-383,-51],"color":"FFFFFF","bCoef":0,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-171,"trait":"ballArea"},{"normal":[0,-1],"dist":-171,"trait":"ballArea"},{"normal":[0,1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":6.5},"ballPhysics":{"radius":6.4,"color":"EAFF00"}}',
  "3v3": '{"name":"3v3","width":755,"height":339,"spawnDistance":310,"bg":{"type":"hockey","width":665,"height":290,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":-665,"y":290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-665,"y":80,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-665,"y":-80,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-665,"y":-290,"trait":"ballArea","bCoef":1,"cMask":["ball"]},{"x":665,"y":290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":665,"y":80,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":665,"y":-80,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":665,"y":-290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":306,"trait":"kickOffBarrier"},{"x":0,"y":80,"trait":"kickOffBarrier"},{"x":0,"y":-80,"trait":"line"},{"x":0,"y":-306,"trait":"kickOffBarrier"},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-693,"y":-80},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":693,"y":-80},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-693,"y":80},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":693,"y":80},{"trait":"line","x":-665,"y":-215},{"trait":"line","x":-500,"y":-50},{"trait":"line","x":665,"y":-215},{"trait":"line","x":500,"y":-50},{"trait":"line","x":-665,"y":215},{"trait":"line","x":-500,"y":50},{"trait":"line","x":665,"y":215},{"trait":"line","x":500,"y":50},{"bCoef":1,"trait":"ballArea","x":665,"y":290},{"bCoef":1,"trait":"ballArea","x":665,"y":-290},{"bCoef":0,"trait":"line","x":0,"y":290},{"bCoef":0,"trait":"line","x":0,"y":-290},{"x":0,"y":80,"trait":"kickOffBarrier"},{"x":0,"y":-80,"trait":"kickOffBarrier"},{"x":674,"y":-80,"trait":"line","cMask":["ball"],"bCoef":1},{"x":674,"y":-290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-674,"y":-80,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-674,"y":-290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-674,"y":80,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-674,"y":290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":674,"y":80,"trait":"line","cMask":["ball"],"bCoef":1},{"x":674,"y":290,"trait":"ballArea","cMask":["ball"],"bCoef":1}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":2,"v1":12,"color":"FFFFFF","curve":-35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":6,"v1":13,"color":"FFFFFF","curve":35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":1,"v1":14,"color":"FFFFFF","curve":35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":5,"v1":15,"color":"FFFFFF","curve":-35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":12,"v1":14,"x":-585,"color":"FFFFFF","curve":-35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":13,"v1":15,"x":585,"color":"FFFFFF","curve":35},{"color":"FFFFFF","trait":"line","v0":16,"v1":17,"curve":90},{"color":"FFFFFF","trait":"line","v0":18,"v1":19,"curve":-90},{"color":"FFFFFF","trait":"line","v0":20,"v1":21,"curve":-90},{"color":"FFFFFF","trait":"line","v0":22,"v1":23,"curve":90},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":17,"v1":21,"curve":0},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":19,"v1":23,"curve":0},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":1,"v1":0,"cMask":["ball"],"x":-665},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":5,"v1":4,"cMask":["ball"],"x":665},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":2,"v1":3,"cMask":["ball"],"x":-665},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":6,"v1":7,"cMask":["ball"],"x":665},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":0,"v1":24,"y":290},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":3,"v1":25,"y":-290},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":26,"v1":27},{"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":10,"v1":9},{"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":29,"v1":28},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":2,"v1":1},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":6,"v1":5},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":30,"v1":31,"cMask":["ball"],"x":614},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":32,"v1":33,"cMask":["ball"],"x":-614},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":34,"v1":35,"cMask":["ball"],"x":-614},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":36,"v1":37,"cMask":["ball"],"x":614}],"goals":[{"p0":[-674,-80],"p1":[-674,80],"team":"red"},{"p0":[674,80],"p1":[674,-80],"team":"blue"}],"discs":[{"pos":[-665,80],"trait":"goalPost","color":"FFFFFF","radius":5},{"pos":[-665,-80],"trait":"goalPost","color":"FFFFFF","radius":5},{"pos":[665,80],"trait":"goalPost","color":"FFFFFF","radius":5},{"pos":[665,-80],"trait":"goalPost","color":"FFFFFF","radius":5}],"planes":[{"normal":[0,1],"dist":-290,"trait":"ballArea"},{"normal":[0,-1],"dist":-290,"trait":"ballArea"},{"normal":[0,1],"dist":-339,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-339,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-755,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-755,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":7},"ballPhysics":{"radius":6.4,"color":"9CF0E5"}}',
  "5v5": '{"name":"5v5","width":900,"height":404,"spawnDistance":310,"bg":{"type":"hockey","width":793,"height":346,"kickOffRadius":95,"cornerRadius":0},"vertexes":[{"x":-793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":404,"trait":"kickOffBarrier"},{"x":0,"y":95,"trait":"kickOffBarrier"},{"x":0,"y":-95,"trait":"line"},{"x":0,"y":-404,"trait":"kickOffBarrier"},{"x":-821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-793,"y":-271,"trait":"line"},{"x":-572,"y":-50,"trait":"line"},{"x":793,"y":-271,"trait":"line"},{"x":572,"y":-50,"trait":"line"},{"x":-793,"y":271,"trait":"line"},{"x":-572,"y":50,"trait":"line"},{"x":793,"y":271,"trait":"line"},{"x":572,"y":50,"trait":"line"},{"x":793,"y":346,"bCoef":1,"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"trait":"ballArea"},{"x":0,"y":346,"bCoef":0,"trait":"line"},{"x":0,"y":-346,"bCoef":0,"trait":"line"},{"x":0,"y":95,"trait":"kickOffBarrier"},{"x":0,"y":-95,"trait":"kickOffBarrier"},{"x":802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":6,"v1":13,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":1,"v1":14,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":5,"v1":15,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":12,"v1":14,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-821},{"v0":13,"v1":15,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":585},{"v0":16,"v1":17,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":18,"v1":19,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":20,"v1":21,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":22,"v1":23,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":17,"v1":21,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-600},{"v0":19,"v1":23,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":572},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":0,"v1":24,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":290},{"v0":3,"v1":25,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-290},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":29,"v1":28,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":32,"v1":33,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":34,"v1":35,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":36,"v1":37,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614}],"goals":[{"p0":[-802,-95],"p1":[-802,95],"team":"red"},{"p0":[802,95],"p1":[802,-95],"team":"blue"}],"discs":[{"radius":5,"pos":[-793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[-793,-95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,-95],"color":"FFFFFF","trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-346,"trait":"ballArea"},{"normal":[0,-1],"dist":-346,"trait":"ballArea"},{"normal":[0,1],"dist":-404,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-404,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-900,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-900,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":7},"ballPhysics":{"radius":6.4,"color":"EAFF00"}}',
  "haxviet": '{"name":"haxviet","width":900,"height":404,"spawnDistance":310,"bg":{"type":"grass","width":793,"height":346,"kickOffRadius":95,"cornerRadius":0,"color":"718B5B"},"vertexes":[{"x":-793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":404,"trait":"kickOffBarrier"},{"x":0,"y":95,"trait":"line"},{"x":0,"y":-95,"trait":"line"},{"x":0,"y":-404,"trait":"kickOffBarrier"},{"x":-821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0},{"x":821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0},{"x":-821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0},{"x":821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0},{"x":-793,"y":-271,"trait":"line"},{"x":-572,"y":-50,"trait":"line"},{"x":793,"y":-271,"trait":"line"},{"x":572,"y":-50,"trait":"line"},{"x":-793,"y":271,"trait":"line"},{"x":-572,"y":50,"trait":"line"},{"x":793,"y":271,"trait":"line"},{"x":572,"y":50,"trait":"line"},{"x":0,"y":95,"trait":"kickOffBarrier","curve":180},{"x":0,"y":-95,"trait":"kickOffBarrier","curve":180},{"x":802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-55,"y":28,"trait":"line"},{"x":-43,"y":-27,"bCoef":0,"trait":"line"},{"x":-52,"y":28,"bCoef":0,"trait":"line"},{"x":-40,"y":-27,"bCoef":0,"trait":"line"},{"x":-50,"y":0,"bCoef":0,"trait":"line"},{"x":-47.5,"y":3,"bCoef":0,"trait":"line"},{"x":-21,"y":3,"bCoef":0,"trait":"line"},{"x":-22,"y":0,"bCoef":0,"trait":"line"},{"x":-16,"y":-27,"bCoef":0,"trait":"line"},{"x":-13,"y":-27,"bCoef":0,"trait":"line"},{"x":-27,"y":28,"bCoef":0,"trait":"line"},{"x":-24,"y":28,"bCoef":0,"trait":"line"},{"x":-8,"y":-27,"bCoef":0,"trait":"line"},{"x":1,"y":28,"bCoef":0,"trait":"line"},{"x":-5,"y":-27,"bCoef":0,"trait":"line"},{"x":3,"y":22,"bCoef":0,"trait":"line"},{"x":25,"y":-27,"bCoef":0,"trait":"line"},{"x":28,"y":-27,"bCoef":0,"trait":"line"},{"x":4,"y":28,"bCoef":0,"trait":"line"},{"x":23,"y":28,"bCoef":0,"trait":"line"},{"x":32,"y":-27,"bCoef":0,"trait":"line"},{"x":35,"y":-27,"bCoef":0,"trait":"line"},{"x":26,"y":27,"bCoef":0,"trait":"line"},{"x":53,"y":28,"bCoef":0,"trait":"line"},{"x":50,"y":28,"bCoef":0,"trait":"line"},{"x":21.5,"y":28,"bCoef":0,"trait":"line"},{"x":35,"y":28,"bCoef":0,"trait":"line"},{"x":0,"y":346,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-346,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":6,"v1":13,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":1,"v1":14,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":5,"v1":15,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":16,"v1":17,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":18,"v1":19,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":20,"v1":21,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":22,"v1":23,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":17,"v1":21,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-600},{"v0":19,"v1":23,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":572},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":25,"v1":24,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":26,"v1":27,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":28,"v1":29,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":32,"v1":33,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":35,"v1":34,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":37,"v1":36,"vis":true,"color":"454C5E","bCoef":0,"trait":"line"},{"v0":38,"v1":41,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":39,"v1":40,"vis":true,"color":"454C5E","bCoef":0,"trait":"line"},{"v0":44,"v1":42,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":43,"v1":45,"vis":true,"color":"454C5E","bCoef":0,"trait":"line"},{"v0":48,"v1":49,"vis":true,"color":"454C5E","bCoef":0,"trait":"line"},{"v0":51,"v1":52,"vis":true,"color":"454C5E","bCoef":0,"trait":"line"},{"v0":46,"v1":47,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":50,"v1":47,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":55,"v1":56,"vis":true,"color":"454C5E","bCoef":0,"trait":"line"},{"v0":53,"v1":54,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":60,"v1":57,"vis":true,"color":"454C5E","bCoef":0,"trait":"line"},{"v0":59,"v1":58,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":25,"v1":62,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":24,"v1":61,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":7,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"v0":0,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea"}],"goals":[{"p0":[-802,-95],"p1":[-802,95],"team":"red"},{"p0":[802,95],"p1":[802,-95],"team":"blue"}],"discs":[{"radius":5,"pos":[-793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[-793,-95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,-95],"color":"FFFFFF","trait":"goalPost"},{"radius":0,"invMass":0,"pos":[-821,95],"bCoef":0,"cMask":["ball"]},{"radius":0,"invMass":0,"pos":[821,95],"bCoef":0,"cMask":["ball"]},{"radius":0,"invMass":0,"pos":[-821,-95],"bCoef":0,"cMask":["ball"]},{"radius":0,"invMass":0,"pos":[821,-95],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-823.2,87.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-825.2,80.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-828.5,66.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-827,73.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-830,59.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-831.2,52.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-832.3,45.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-833.3,38.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-834,31.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-834.7,24.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-835.1,17.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-835.4,10.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-835.5,3.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-835.5,-3.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-835.4,-10.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-835.2,-17.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-834.7,-24.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-834.1,-31.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-833.2,-38.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[831.2,-52.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-832.3,-45.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-830,-59.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-828.5,-66.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-827,-73.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-825.2,-80.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-823.2,-87.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[823.2,-87.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[825.2,-80.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[827,-73.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[828.5,-66.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[830,-59.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-831.2,-52.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[832.3,-45.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[833.2,-38.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[834.1,-31.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[834.7,-24.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.2,-17.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.4,-10.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.5,-3.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.5,3.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.4,10.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.1,17.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[834.7,24.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[834,31.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[833.3,38.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[832.3,45.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[831.2,52.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[830,59.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[828.5,66.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[827,73.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[825.2,80.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[823.2,87.5],"bCoef":0,"cMask":["ball"]}],"planes":[{"normal":[0,1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,-346],"b":[900,-346]}}},{"normal":[0,-1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,346],"b":[900,346]}}},{"normal":[0,1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[900,-404]}}},{"normal":[0,-1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,404],"b":[900,404]}}},{"normal":[1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[-900,404]}}},{"normal":[-1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[900,-404],"b":[900,404]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":6.9},"ballPhysics":{"radius":7,"color":"EAFF00","bCoef":0.465,"invMass":1},"joints":[{"d0":5,"d1":9,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":9,"d1":10,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":10,"d1":12,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":11,"d1":12,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":11,"d1":13,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":13,"d1":14,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":14,"d1":15,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":15,"d1":16,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":16,"d1":17,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":17,"d1":18,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":18,"d1":19,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":19,"d1":20,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":20,"d1":21,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":21,"d1":22,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":22,"d1":23,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":23,"d1":24,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":24,"d1":25,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":25,"d1":26,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":26,"d1":27,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":27,"d1":29,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":29,"d1":40,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":30,"d1":40,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":30,"d1":31,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":31,"d1":32,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":32,"d1":33,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":33,"d1":34,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":7,"d1":34,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":7,"d1":33,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":31,"d1":33,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":31,"d1":40,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":27,"d1":40,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":25,"d1":27,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":23,"d1":25,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":21,"d1":23,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":19,"d1":21,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":17,"d1":19,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":15,"d1":17,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":13,"d1":15,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":12,"d1":13,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":9,"d1":12,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":5,"d1":10,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":10,"d1":11,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":11,"d1":14,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":14,"d1":16,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":16,"d1":18,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":18,"d1":20,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":20,"d1":22,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":22,"d1":24,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":24,"d1":26,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":26,"d1":29,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":29,"d1":30,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":30,"d1":32,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":32,"d1":34,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":7,"d1":34,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":5,"d1":9,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":6,"d1":60,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":59,"d1":60,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":58,"d1":59,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":57,"d1":58,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":56,"d1":57,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":55,"d1":56,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":54,"d1":55,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":53,"d1":54,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":52,"d1":53,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":51,"d1":52,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":50,"d1":51,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":49,"d1":50,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":48,"d1":49,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":47,"d1":48,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":46,"d1":47,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":45,"d1":46,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":44,"d1":45,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":43,"d1":44,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":42,"d1":43,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":41,"d1":42,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":28,"d1":41,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":28,"d1":39,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":38,"d1":39,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":37,"d1":38,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":36,"d1":37,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":35,"d1":36,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":8,"d1":35,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":8,"d1":36,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":36,"d1":38,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":28,"d1":38,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":28,"d1":42,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":42,"d1":44,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":44,"d1":46,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":46,"d1":48,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":48,"d1":50,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":50,"d1":52,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":52,"d1":54,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":54,"d1":56,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":56,"d1":58,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":58,"d1":60,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":6,"d1":60,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":6,"d1":59,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":57,"d1":59,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":55,"d1":57,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":53,"d1":55,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":51,"d1":53,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":49,"d1":51,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":47,"d1":49,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":45,"d1":47,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":43,"d1":45,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":41,"d1":43,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":39,"d1":41,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":37,"d1":39,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":35,"d1":37,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":8,"d1":35,"strength":"rigid","color":"ffffff","length":null,"radius":0}],"canBeStored":false,"redSpawnPoints":[[-310,0],[-310,50],[-310,-50],[-310,100],[-310,-100],[-310,380]],"blueSpawnPoints":[[310,0],[310,50],[310,-50],[310,100],[310,-100],[310,380]],"kickOffReset":"full"}',
  "haxviet2": '{"name":"haxviet2","width":900,"height":404,"spawnDistance":310,"bg":{"color":"222c47 "},"vertexes":[{"x":-793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":404,"trait":"kickOffBarrier"},{"x":0,"y":95,"trait":"kickOffBarrier"},{"x":0,"y":-95,"trait":"line"},{"x":0,"y":-404,"trait":"kickOffBarrier"},{"x":-821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-793,"y":-271,"trait":"line"},{"x":-572,"y":-50,"trait":"line"},{"x":793,"y":-271,"trait":"line"},{"x":572,"y":-50,"trait":"line"},{"x":-793,"y":271,"trait":"line"},{"x":-572,"y":50,"trait":"line"},{"x":793,"y":271,"trait":"line"},{"x":572,"y":50,"trait":"line"},{"x":793,"y":346,"bCoef":1,"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"trait":"ballArea"},{"x":-1,"y":-96,"bCoef":0,"trait":"line"},{"x":-1,"y":-788,"bCoef":0,"trait":"line"},{"x":0,"y":95,"trait":"line","color":"FFFFFF"},{"x":0,"y":-95,"trait":"kickOffBarrier","color":"FFFFFF"},{"x":802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":-95,"trait":"line"},{"x":1,"y":344,"trait":"line"},{"x":1,"y":-346,"trait":"line"},{"x":-41,"y":-28,"bCoef":0,"trait":"line","vis":false},{"x":41,"y":-28.5,"bCoef":0,"trait":"line","vis":false},{"x":-41,"y":28,"bCoef":0,"trait":"line","vis":true},{"x":41,"y":28.5,"bCoef":0,"trait":"line","vis":false},{"x":-29.5,"y":-27,"bCoef":0,"trait":"line","vis":true},{"x":-29.5,"y":-27,"bCoef":0,"trait":"line","vis":true},{"x":-52.5,"y":27.5,"bCoef":0,"trait":"line","vis":true,"curve":0,"color":"FFFFFF"},{"x":-41,"y":-27.5,"bCoef":0,"trait":"line","vis":true,"curve":0,"color":"FFFFFF"},{"x":-24.5,"y":28,"bCoef":0,"trait":"line","vis":true},{"x":-13,"y":-27,"bCoef":0,"trait":"line","vis":true},{"x":-46.5,"y":-0.5,"bCoef":0,"trait":"line","vis":false},{"x":35.5,"y":0,"bCoef":0,"trait":"line","vis":false},{"x":-47,"y":-0.5,"bCoef":0,"trait":"line","vis":true,"bias":0},{"x":-19,"y":0,"bCoef":0,"trait":"line","vis":true,"bias":0},{"x":-44,"y":1.5,"bCoef":0,"trait":"line","color":"999999"},{"x":-49.5,"y":28,"bCoef":0,"trait":"line","color":"999999"},{"x":-37.5,"y":-27.5,"bCoef":0,"trait":"line","color":"999999","curve":0},{"x":-49.5,"y":28,"bCoef":0,"trait":"line","color":"999999","curve":0},{"x":-21,"y":2.5,"bCoef":0,"trait":"line","color":"999999"},{"x":-10,"y":-27,"bCoef":0,"trait":"line","color":"999999"},{"x":-22,"y":28,"bCoef":0,"trait":"line","color":"999999"},{"x":-4.5,"y":-27.5,"bCoef":0,"trait":"line"},{"x":4,"y":28.5,"bCoef":0,"trait":"line"},{"x":28,"y":-27.5,"bCoef":0,"trait":"line"},{"x":-4.5,"y":-27.5,"bCoef":0,"trait":"line"},{"x":4,"y":28.5,"bCoef":0,"trait":"line"},{"x":-2,"y":-27.5,"bCoef":0,"trait":"line"},{"x":4,"y":28.5,"bCoef":0,"trait":"line"},{"x":-2,"y":-28,"bCoef":0,"trait":"line","curve":0,"color":"999999"},{"x":5.5,"y":22,"bCoef":0,"trait":"line","curve":0,"color":"999999"},{"x":28,"y":-27.5,"bCoef":0,"trait":"line"},{"x":-47,"y":-0.5,"bCoef":0,"trait":"line","vis":true,"bias":0},{"x":-19,"y":0,"bCoef":0,"trait":"line","vis":true,"bias":0},{"x":7,"y":28.5,"bCoef":0,"trait":"line","color":"999999"},{"x":30.5,"y":-27.5,"bCoef":0,"trait":"line","color":"999999"},{"x":4,"y":28.5,"bCoef":0,"trait":"line"},{"x":28,"y":-27.5,"bCoef":0,"trait":"line"},{"x":35.5,"y":-28,"bCoef":0,"trait":"line"},{"x":26,"y":29,"bCoef":0,"trait":"line"},{"x":49,"y":29,"bCoef":0,"trait":"line"},{"x":35.5,"y":-28,"bCoef":0,"trait":"line","color":"222023"},{"x":26,"y":29,"bCoef":0,"trait":"line","color":"222023"},{"x":28.5,"y":28.5,"bCoef":0,"trait":"line","curve":0,"color":"999999"},{"x":38,"y":-28.5,"bCoef":0,"trait":"line","curve":0,"color":"999999"},{"x":26,"y":29,"bCoef":0,"trait":"line"},{"x":26,"y":29,"bCoef":0,"trait":"line"},{"x":53.5,"y":29,"bCoef":0,"trait":"line"},{"x":0,"y":92,"trait":"line","color":"999999"},{"x":0,"y":-92,"trait":"kickOffBarrier","color":"999999"},{"x":0,"y":92,"trait":"line","color":"999999","curve":-180.2436962373499},{"x":0,"y":-92,"trait":"kickOffBarrier","color":"999999","curve":-180.2436962373499},{"x":3,"y":-95,"trait":"line","color":"999999"},{"x":3,"y":-346,"trait":"line","color":"999999"},{"x":3,"y":95,"trait":"line","color":"999999"},{"x":3,"y":344,"trait":"line","color":"999999"},{"x":-24.5,"y":28,"bCoef":0,"trait":"line","vis":true},{"x":-13,"y":-27,"bCoef":0,"trait":"line","vis":true},{"x":0,"y":95,"trait":"line","color":"FFFFFF"},{"x":0,"y":-95,"trait":"kickOffBarrier","color":"FFFFFF"},{"x":-793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"trait":"ballArea"},{"x":-793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":346,"bCoef":1,"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":6,"v1":13,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":1,"v1":14,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":5,"v1":15,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":12,"v1":14,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-821},{"v0":13,"v1":15,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":585},{"v0":16,"v1":17,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":18,"v1":19,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":20,"v1":21,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":22,"v1":23,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":17,"v1":21,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-600},{"v0":19,"v1":23,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":572},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":0,"v1":24,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":290},{"v0":3,"v1":25,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-290},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":29,"v1":28,"curve":180.43079330521417,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":32,"v1":33,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":34,"v1":35,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":36,"v1":37,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":28,"v1":39,"curve":0,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":38,"v1":40,"curve":0,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":41,"v1":42,"curve":0,"vis":false,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":43,"v1":44,"curve":0,"vis":false,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":47,"v1":48,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":49,"v1":50,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":51,"v1":52,"curve":0,"vis":false,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":53,"v1":54,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","bias":0},{"v0":55,"v1":56,"curve":0,"vis":true,"color":"999999","bCoef":0,"trait":"line"},{"v0":57,"v1":58,"curve":0,"vis":true,"color":"999999","bCoef":0,"trait":"line"},{"v0":55,"v1":59,"curve":0,"vis":true,"color":"999999","bCoef":0,"trait":"line"},{"v0":59,"v1":59,"curve":0,"vis":true,"color":"222023","bCoef":0,"trait":"line"},{"v0":60,"v1":61,"curve":0,"vis":true,"color":"999999","bCoef":0,"trait":"line"},{"v0":62,"v1":63,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","bias":0},{"v0":63,"v1":64,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","bias":0},{"v0":64,"v1":64,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","bias":0},{"v0":65,"v1":66,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","bias":0},{"v0":69,"v1":70,"curve":0,"vis":true,"color":"999999","bCoef":0,"trait":"line","bias":0},{"v0":72,"v1":73,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","bias":0},{"v0":74,"v1":75,"curve":0,"vis":true,"color":"999999","bCoef":0,"trait":"line","bias":0},{"v0":76,"v1":77,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","bias":0},{"v0":78,"v1":79,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","bias":0},{"v0":79,"v1":80,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","bias":0},{"v0":83,"v1":84,"curve":0,"vis":true,"color":"999999","bCoef":0,"trait":"line","bias":0},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","bias":0},{"v0":89,"v1":88,"curve":180.2436962373499,"vis":true,"color":"999999","bCoef":0,"trait":"line"},{"v0":91,"v1":90,"curve":-180.2436962373499,"vis":true,"color":"999999","bCoef":0,"trait":"line"},{"v0":92,"v1":93,"curve":0,"vis":true,"color":"999999","trait":"line","x":3},{"v0":94,"v1":95,"curve":0,"vis":true,"color":"999999","trait":"line","x":3},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":99,"v1":98,"curve":180.43079330521417,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":100,"v1":101,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-290},{"v0":102,"v1":103,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":290}],"goals":[{"p0":[-802,-95],"p1":[-802,95],"team":"red"},{"p0":[802,95],"p1":[802,-95],"team":"blue"}],"discs":[{"radius":5,"pos":[-793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[-793,-95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,-95],"color":"FFFFFF","trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-346,"canvas_rect":[-1800,-808,1800,808],"a":[-1800,-346],"b":[1800,-346]}}},{"normal":[0,-1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-346,"canvas_rect":[-1800,-808,1800,808],"a":[-1800,346],"b":[1800,346]}}},{"normal":[0,1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-404,"canvas_rect":[-1800,-808,1800,808],"a":[-1800,-404],"b":[1800,-404]}}},{"normal":[0,-1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-404,"canvas_rect":[-1800,-808,1800,808],"a":[-1800,404],"b":[1800,404]}}},{"normal":[1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-900,"canvas_rect":[-1800,-808,1800,808],"a":[-900,-808],"b":[-900,808]}}},{"normal":[-1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-900,"canvas_rect":[-1800,-808,1800,808],"a":[900,-808],"b":[900,808]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"bCoef":0.35,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.65},"ballPhysics":{"radius":6.5,"bCoef":0.465,"invMass":1.4,"color":"7cfc00"},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}',
}
const commands = { // Format: "alias: [function, requiresAdmin]"
  help: [helpFunc, false],
  discord: [discordFunc, false],
  bb: [byeFunc, false],
  var: [varFunc, false],
  penalty: [penaltyFunc, false],
  afk: [afkFunc, false],
  spec: [specFunc, false],
  login: [loginFunc, false],
  yellow: [yellowCardFunc, true],
  maplist: [listMapsFunc, true],
  map: [selectMapFunc, true],
  wait: [waitFunc, true],
}
const replies = {
  "tin chuẩn chưa a": "Chuẩn em nhé",
  "ngu ": "Toxic nên anh sẽ block em nhé",
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
  "5": "Vâng, không ai khác, một cú repocker cho",
};
const playerStats = {
  goals: 0,
  assists: 0,
  ownGoals: 0,
  forTeam: 0,
}
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

var lastMessages = [null, null, null];
var yellowCards = [];
var monitorAfk = {
  deadline: null,
  players: [],
};
var game = JSON.parse(JSON.stringify(gameDefault));
var cache = {};
var room = HBInit({
  roomName: "💥 Phòng tự động của De Paul (futsal) 💥",
  maxPlayers: 30,
  playerName: "BLV Trông Anh Ngược",
  public: false,
});
room.setScoreLimit(8);
room.setTimeLimit(5);
room.setTeamColors(1, 60, 0xFFFFFF, [0xD60419]);
room.setTeamColors(2, 60, 0xFFFFFF, [0x0099FF]);
room.setCustomStadium(maps["5v5"]);

// Get a chat-pingable tag from player's name
function getTag(name) {
  return "@" + name.replace(/ /g, "_");
}

// Exclude host player from players list
function getNonHostPlayers() {
  return room.getPlayerList().filter((player) => player.id != 0);
}

// If there are no admins left in the room give admin to one of the remaining players.
function updateAdmins() {
  let players = getNonHostPlayers();
  if ( players.length == 0 ) return; // No player left
  if ( players.some((player) => player.admin) ) return; // There's an admin left
  room.setPlayerAdmin(players[0].id, true); // Give admin to the first non-admin player in the list
}

// Move a player to missing teams
async function updateTeamPlayers() {
  let players = room.getPlayerList();

  // Get a bench player (like Penaldo) that aren't admins cause admins can do it themself
  let specPlayer = players.find((player) => (player.team == 0) && !player.admin);
  if ( !specPlayer ) return; // No players left in the Spectators

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
function updateBallKick(player) {
  // Update information about 2 last players who kicked the ball
  game.lastKicked.unshift(player);
  game.lastKicked.length = 2;

  // Update total kicks
  game.teams[player.team].kicks++;
  // Update accurate kicks
  if ( 
    (game.lastKicked[1] === null) || // Kick-off pass
    (player.team != game.lastKicked[1].team) // Received the ball from an opponent player
  ) return;

  // Received the ball from a teammate, so the previous kick was a pass
  if (player.id != game.lastKicked[1].id) game.teams[player.team].passes++; 
  // Received the ball from a teammate or from yourself, so the previous kick kept the possession
  game.teams[player.team].possessedKicks++;

  // Overtime commentary
  let scores = room.getScores();
  if (
    (scores.time < scores.timeLimit) || // Not overtime
    (scores.red != scores.blue) || // The game is over
    (cache.overtimeCommentary) // Already made this comment
  ) return;
  room.sendChat("Vậy là những phút thi đấu chính thức đã kết thúc, chúng ta đang tiến đến khoảng thời gian bù giờ");
  cache.overtimeCommentary = 1;
}

function helpFunc(value, player) {
  let allAlias = Object.keys(commands).filter((command) => !commands[command][1] || player.admin);
  allAlias = allAlias.map((alias) => "!" + alias)
  room.sendAnnouncement(`Các câu lệnh có sẵn: ${allAlias.join(", ")}`, player.id, GREEN);
  return false;
}

function discordFunc(value, player) {
  room.sendAnnouncement("Vào server của De Paul 🥰: https://discord.gg/DYWZFFsSYu", null, GREEN, "normal", 0);
  return true;
}

function byeFunc(value, player) {
  room.kickPlayer(player.id, "Bye, sớm quay lại room nha 👋🏻🥺");
  return true;
}

function varFunc(value, player) {
  room.sendAnnouncement("Tổ VAR đang bận chơi fifai, vui lòng gọi lại sau", null, GREEN, "normal", 0);
  return true;
}

function penaltyFunc(penalty, player) {
  room.sendAnnouncement("Ngã không đẹp, trọng tài quyết định không có penalty", null, RED, "normal", 0);
  return true;
}

function afkFunc(value, player) {
  if ( room.getScores() === null ) {
    room.sendAnnouncement("Không thể báo cáo AFK khi trận đấu chưa bắt đầu", player.id, RED);
    return false;
  };

  if ( monitorAfk.players.length == 0 ) {
    monitorAfk.deadline = new Date().getTime() / 1000 + AFK_DEADLINE; // Deadline for players to do something
    monitorAfk.players.push(...room.getPlayerList().filter((player) => player.team != 0).map((player) => player.id));
  };
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
  let newPlayer = room.getPlayerList().find((_player) => (_player.team == 0) && !_player.admin)
  if ( !newPlayer ) return;
  room.setPlayerTeam(newPlayer.id, player.team);
  return true;
}

function loginFunc(password, player) {
  switch ( password ) {
    case "":
      room.sendAnnouncement("Vui lòng đính kèm mật khẩu: !login <mật khẩu>", player.id, RED);
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

function yellowCardFunc(id, player) {
  if ( !id.startsWith("#") ) {
    room.sendAnnouncement("Vui lòng cung cấp một ID người chơi hợp lệ: !yellow #<id>", player.id, RED);
    return false;
  }

  id = id.slice(1);
  let targetPlayer = getNonHostPlayers().find((player) => player.id == id);
  if ( !targetPlayer ) {
    room.sendAnnouncement(`Không thể tìm thấy người chơi với ID: ${id}`, player.id, RED);
    return false;
  };

  let index = yellowCards.indexOf(targetPlayer.auth);
  if ( index != -1 ) { // Player has already received a yellow card
    yellowCards.splice(index, 1); // Clear the card
    room.kickPlayer(id, "Bạn đã nhận 2 thẻ vàng", true);
    room.sendAnnouncement(`🟨🟨 ${targetPlayer.name} đã nhận thẻ vàng thứ 2 từ ${player.name} (BAN)`, null, YELLOW);
  } else {
    yellowCards.push(targetPlayer.auth);
    room.sendAnnouncement(`🟨 ${targetPlayer.name} đã nhận một thẻ vàng từ ${player.name}, nhận 2 thẻ vàng người chơi sẽ bị ban`, null, YELLOW);
  };
  return false;
}

function listMapsFunc(value, player) {
  room.sendAnnouncement(`Các map có sẵn: ${Object.keys(maps).join(", ")} (dùng "!map <tên map>" để áp dụng)`, player.id, GREEN);
  return false;
}

function selectMapFunc(map, player) {
  if ( maps[map] === undefined ) {
    room.sendAnnouncement(`Tên map trống hoặc không hợp lệ, cú pháp: !map <tên map> (dùng "!maplist" để xem danh sách map)`, player.id, RED);
  } else if ( room.getScores() !== null ) {
    room.sendAnnouncement("Không thể thay map khi trận đấu đang diễn ra", player.id, RED);
  } else {
    room.setCustomStadium(maps[map]);
  };
  return false;
}

function waitFunc(value, player) {
  cache.wait = 1;
  room.sendAnnouncement("Đã dừng tự động cấp Admin", null, GREEN);
  return true;
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
  let [scorer, assister] = game.lastKicked;
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
  let comment = `${getTag(scorer.name)} là người đã ghi bàn`;
  let hasScored = game.players[scorer.name].goals;
  if ( hasScored != 1 ) {
    comment = scorerComments[hasScored] || `Đây đã là bàn thắng thứ ${hasScored} trong trận đấu này của`;
    comment = comment.concat(" ", getTag(scorer.name));
  }

  if (
    (assister !== null) &&
    (assister.id != scorer.id) && // Not a solo goal
    (assister.team == team) // Assisted by teammate
  ) {
    updatePlayerStats(assister, 2);
    let hasAssisted = game.players[assister.name].assists;
    if ( hasAssisted != 1 ) { // Multiple assists O_O
      comment = comment.concat(", ", `lần kiến tạo thứ ${hasAssisted} của ${getTag(assister.name)}`);
    } else {
      comment = comment.concat(", ", `${getTag(assister.name)} là người đã kiến tạo`);
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
  room.sendAnnouncement(`Kiểm soát bóng: RED ${redPossession}% - ${bluePossession}% BLUE`, null, YELLOW, "small-bold", 0);
  // Passing stats
  room.sendAnnouncement(`Lượt chuyền bóng: RED ${game.teams[1].passes} - ${game.teams[2].passes} BLUE`, null, YELLOW, "small-bold", 0);
  let redSuccessRate = ~~(game.teams[1].possessedKicks / game.teams[1].kicks * 100);
  let blueSuccessRate = ~~(game.teams[2].possessedKicks / game.teams[2].kicks * 100);
  room.sendAnnouncement(`Tỉ lệ xử lý bóng thành công: RED ${redSuccessRate}% - ${blueSuccessRate}% BLUE`, null, YELLOW, "small-bold", 0);
  // Player stats information
  let redPlayerStats = [];
  let bluePlayerStats = [];
  for (const [player, stats] of Object.entries(game.players)) {
    let msg = ( stats.forTeam == 1 ) ? redPlayerStats : bluePlayerStats;
    (msg.length != 0) && msg.push(" • ");
    msg.push(player);

    if ( stats.goals == 1 ) {
      msg.push("⚽");
    } else if ( stats.goals != 0 ) { // More than 1 goal
      msg.push(`${stats.goals}⚽`);
    };
    if ( stats.assists == 1 ) {
      msg.push("👟");
    } else if ( stats.assists != 0 ) { // More than 1 assist
      msg.push(`${stats.assists}👟`);
    };
    if ( stats.ownGoals == 1 ) {
      msg.push("🥅");
    } else if ( stats.ownGoals != 0 ) { // More than 1 own goal
      msg.push(`${stats.ownGoals}🥅`);
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

// Give another player admin if current admins seem to be unresponsive
async function monitorInactivity() {
  await new Promise(r => setTimeout(r, 15000));// Wait 15 seconds
  if ( room.getScores() !== null ) return; // Game has started

  // Room is inactive, are admins AFK?
  let players = getNonHostPlayers()
  let admins = players.filter((player) => player.admin);
  if (
    (admins.length == 0) || // No one else in the room:((
    (admins.length >= 4) // I don't think all 4 admins are AFK :P
  ) return;
  // Notify admins about inactivity, give random admin if no action is made from current admins
  let mentionAdmins = admins.map((admin) => getTag(admin.name)).join(" "); // Tag all admins
  room.sendChat(`${mentionAdmins} vui lòng khởi động trận đấu hoặc chat !wait trong 10 giây trước khi room cấp Admin ngẫu nhiên`)
  await new Promise(r => setTimeout(r, 10000));
  if ( cache.wait || room.getScores() !== null ) return; // Admins are up :D

  let nonAdminPlayer = players.find((player) => !player.admin)
  if ( !nonAdminPlayer ) {
    room.sendAnnouncement("Không có người chơi để cấp Admin!", null, RED);
    return;
  }
  room.setPlayerAdmin(nonAdminPlayer.id, true);
  // Monitor again, make sure the new admin isn't AFK too
  monitorInactivity();
}

async function checkSpam(player, message) {
  if ( lastMessages.every((msg) => msg == message) ) {
    room.kickPlayer(player.id, "Spam");
    return;
  };

  lastMessages.unshift(message);
  lastMessages.length = 3;
}

function checkAfk(player) {
  if ( monitorAfk.players.length == 0 ) return; // No AFK monitor is ongoing
  (room.getScores() === null) && (monitorAfk.players.length = 0); // If the game is over, stop monitoring AFK

  let index = monitorAfk.players.indexOf(player.id);
  if ( index != -1 ) { // Player is monitored
    monitorAfk.players.splice(index, 1); // Remove player from AFK checklist
    return;
  };

  let time = new Date().getTime() / 1000;
  if ( monitorAfk.deadline > time ) return; // There is still time for players to make action
  monitorAfk.players.forEach(function(id) {
    room.kickPlayer(id, "AFK");
  });
  monitorAfk.players.length = 0;
}

function reset() {
  game = JSON.parse(JSON.stringify(gameDefault));
  cache = {};
}

room.onPlayerJoin = function(player) {
  room.sendAnnouncement("Nhập !help để xem các câu lệnh", player.id, GREEN, "normal", 0);
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
  room.setPlayerTeam(0, 0);
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
  checkAfk(player);
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
  reset();
  room.sendChat(START_GAME_COMMENT);
}

room.onGameStop = function(byPlayer) {
  (byPlayer !== null) && room.sendChat("Trận đấu đã bị hủy bỏ vì thời tiết xấu");
  monitorInactivity();
}

room.onGamePause = function(byPlayer) {
  room.sendChat("Trận đấu đang được tạm dừng để check VAR");
}

room.onGameUnpause = function(byPlayer) {
  room.sendChat("Trọng tài đã check VAR và trận đấu được TIẾP TỤC");
}

room.onStadiumChange = function(newStadiumName, byPlayer) {
  if (maps[newStadiumName] !== undefined) return;
  room.sendAnnouncement("Thay đổi map là hành vi bị cấm ❌ Vui lòng lựa chọn map bằng lệnh !map", null, RED);
  room.setCustomStadium(maps["5v5"]);
}
