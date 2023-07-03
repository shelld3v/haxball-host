const ADMIN_PASSWORD = "ngu";
const START_GAME_COMMENT = `Chào mừng đến với Cà Khịa TV, tôi là Trông Anh Ngược, BLV của các bạn ngày hôm nay`;
const YELLOW = 0xFFEA00;
const RED = 0xFF0000;
const GREEN = 0x00FF00;
const AFK_DEADLINE = 6.5;
const VOTES_COUNT_TO_KICK = 6;
const MAX_DUPE_MESSAGES = 3;

const maps = {
  "3v3": '{"name":"3v3","width":755,"height":339,"spawnDistance":310,"bg":{"type":"hockey","width":665,"height":290,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":-665,"y":290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-665,"y":80,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-665,"y":-80,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-665,"y":-290,"trait":"ballArea","bCoef":1,"cMask":["ball"]},{"x":665,"y":290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":665,"y":80,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":665,"y":-80,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":665,"y":-290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":306,"trait":"kickOffBarrier"},{"x":0,"y":80,"trait":"kickOffBarrier"},{"x":0,"y":-80,"trait":"line"},{"x":0,"y":-306,"trait":"kickOffBarrier"},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-693,"y":-80},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":693,"y":-80},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-693,"y":80},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":693,"y":80},{"trait":"line","x":-665,"y":-215},{"trait":"line","x":-500,"y":-50},{"trait":"line","x":665,"y":-215},{"trait":"line","x":500,"y":-50},{"trait":"line","x":-665,"y":215},{"trait":"line","x":-500,"y":50},{"trait":"line","x":665,"y":215},{"trait":"line","x":500,"y":50},{"bCoef":1,"trait":"ballArea","x":665,"y":290},{"bCoef":1,"trait":"ballArea","x":665,"y":-290},{"bCoef":0,"trait":"line","x":0,"y":290},{"bCoef":0,"trait":"line","x":0,"y":-290},{"x":0,"y":80,"trait":"kickOffBarrier"},{"x":0,"y":-80,"trait":"kickOffBarrier"},{"x":674,"y":-80,"trait":"line","cMask":["ball"],"bCoef":1},{"x":674,"y":-290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-674,"y":-80,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-674,"y":-290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-674,"y":80,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-674,"y":290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":674,"y":80,"trait":"line","cMask":["ball"],"bCoef":1},{"x":674,"y":290,"trait":"ballArea","cMask":["ball"],"bCoef":1}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":2,"v1":12,"color":"FFFFFF","curve":-35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":6,"v1":13,"color":"FFFFFF","curve":35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":1,"v1":14,"color":"FFFFFF","curve":35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":5,"v1":15,"color":"FFFFFF","curve":-35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":12,"v1":14,"x":-585,"color":"FFFFFF","curve":-35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":13,"v1":15,"x":585,"color":"FFFFFF","curve":35},{"color":"FFFFFF","trait":"line","v0":16,"v1":17,"curve":90},{"color":"FFFFFF","trait":"line","v0":18,"v1":19,"curve":-90},{"color":"FFFFFF","trait":"line","v0":20,"v1":21,"curve":-90},{"color":"FFFFFF","trait":"line","v0":22,"v1":23,"curve":90},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":17,"v1":21,"curve":0},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":19,"v1":23,"curve":0},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":1,"v1":0,"cMask":["ball"],"x":-665},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":5,"v1":4,"cMask":["ball"],"x":665},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":2,"v1":3,"cMask":["ball"],"x":-665},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":6,"v1":7,"cMask":["ball"],"x":665},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":0,"v1":24,"y":290},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":3,"v1":25,"y":-290},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":26,"v1":27},{"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":10,"v1":9},{"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":29,"v1":28},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":2,"v1":1},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":6,"v1":5},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":30,"v1":31,"cMask":["ball"],"x":614},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":32,"v1":33,"cMask":["ball"],"x":-614},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":34,"v1":35,"cMask":["ball"],"x":-614},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":36,"v1":37,"cMask":["ball"],"x":614}],"goals":[{"p0":[-674,-80],"p1":[-674,80],"team":"red"},{"p0":[674,80],"p1":[674,-80],"team":"blue"}],"discs":[{"pos":[-665,80],"trait":"goalPost","color":"FFFFFF","radius":5},{"pos":[-665,-80],"trait":"goalPost","color":"FFFFFF","radius":5},{"pos":[665,80],"trait":"goalPost","color":"FFFFFF","radius":5},{"pos":[665,-80],"trait":"goalPost","color":"FFFFFF","radius":5}],"planes":[{"normal":[0,1],"dist":-290,"trait":"ballArea"},{"normal":[0,-1],"dist":-290,"trait":"ballArea"},{"normal":[0,1],"dist":-339,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-339,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-755,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-755,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":7},"ballPhysics":{"radius":6.4,"color":"EAFF00"}}',
  "vsc": '{"name":"vsc","width":900,"height":404,"spawnDistance":310,"bg":{"type":"grass","width":793,"height":346,"kickOffRadius":95,"cornerRadius":0,"color":"718B5B"},"vertexes":[/*0*/{"x":-793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},/*1*/{"x":-793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},/*2*/{"x":-793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},/*3*/{"x":-793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},/*4*/{"x":793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},/*5*/{"x":793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},/*6*/{"x":793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},/*7*/{"x":793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},/*8*/{"x":0,"y":404,"trait":"kickOffBarrier"},/*9*/{"x":0,"y":95,"trait":"line"},/*10*/{"x":0,"y":-95,"trait":"line"},/*11*/{"x":0,"y":-404,"trait":"kickOffBarrier"},/*12*/{"x":-821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0,"color":"FFFFFF","curve":-29.0508329},/*13*/{"x":821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0,"curve":-29.0508329,"color":"FFFFFF"},/*14*/{"x":-821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0,"color":"FFFFFF","curve":-29.0508329},/*15*/{"x":821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0,"color":"FFFFFF"},/*16*/{"x":-793,"y":-271,"trait":"line"},/*17*/{"x":-572,"y":-50,"trait":"line"},/*18*/{"x":793,"y":-271,"trait":"line"},/*19*/{"x":572,"y":-50,"trait":"line"},/*20*/{"x":-793,"y":271,"trait":"line"},/*21*/{"x":-572,"y":50,"trait":"line"},/*22*/{"x":793,"y":271,"trait":"line"},/*23*/{"x":572,"y":50,"trait":"line"},/*24*/{"x":0,"y":95,"trait":"kickOffBarrier","curve":180},/*25*/{"x":0,"y":-95,"trait":"kickOffBarrier","curve":180},/*26*/{"x":802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},/*27*/{"x":802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},/*28*/{"x":-802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},/*29*/{"x":-802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},/*30*/{"x":-802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},/*31*/{"x":-802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},/*32*/{"x":802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},/*33*/{"x":802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},/*34*/{"x":0,"y":346,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},/*35*/{"x":0,"y":-346,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},/*36*/{"x":821.6000061035156,"y":88.99999994039536,"curve":-29.0508329},/*37*/{"x":-85.5,"y":-19,"trait":"line","color":"FFFFFF"},/*38*/{"x":-73,"y":-19.5,"trait":"line","color":"FFFFFF"},/*39*/{"x":-61,"y":33.5,"trait":"line","color":"FFFFFF"},/*40*/{"x":-51,"y":33.5,"trait":"line","color":"FFFFFF","radius":1},/*41*/{"x":-56.5,"y":29,"trait":"line","color":"FFFFFF","radius":1},/*42*/{"x":-47.5,"y":26,"trait":"line","color":"FFFFFF","radius":1},/*43*/{"x":-42,"y":15,"trait":"line","color":"FFFFFF","radius":1},/*44*/{"x":-36,"y":3.5,"trait":"line","color":"FFFFFF","radius":1},/*45*/{"x":-27,"y":-21,"trait":"line","color":"FFFFFF","radius":1},/*46*/{"x":-39.5,"y":-21.5,"trait":"line","color":"FFFFFF","radius":1},/*47*/{"x":-83.5,"y":-19,"trait":"line","color":"FFFFFF"},/*48*/{"x":-59,"y":33.5,"trait":"line","color":"FFFFFF","radius":1},/*49*/{"x":-81.5,"y":-19,"trait":"line","color":"FFFFFF"},/*50*/{"x":-57,"y":33.5,"trait":"line","color":"FFFFFF","radius":1},/*51*/{"x":-79.5,"y":-19,"trait":"line","color":"FFFFFF"},/*52*/{"x":-55,"y":33.5,"trait":"line","color":"FFFFFF","radius":1},/*53*/{"x":-75,"y":-19.5,"trait":"line","color":"FFFFFF"},/*54*/{"x":-53,"y":33.5,"trait":"line","color":"FFFFFF","radius":1},/*55*/{"x":-77,"y":-19.5,"trait":"line","color":"FFFFFF"},/*56*/{"x":-55,"y":33.5,"trait":"line","color":"FFFFFF","radius":1},/*57*/{"x":-54.5,"y":30,"trait":"line","color":"FFFFFF","radius":1},/*58*/{"x":-37.5,"y":-21.5,"trait":"line","color":"FFFFFF","radius":1},/*59*/{"x":-49.5,"y":18,"trait":"line","color":"FFFFFF","radius":1},/*60*/{"x":-35.5,"y":-21.5,"trait":"line","color":"FFFFFF","radius":1},/*61*/{"x":-47.5,"y":20,"trait":"line","color":"FFFFFF","radius":1},/*62*/{"x":-33.5,"y":-21.5,"trait":"line","color":"FFFFFF","radius":1},/*63*/{"x":-38,"y":3.5,"trait":"line","color":"FFFFFF","radius":1},/*64*/{"x":-29,"y":-21,"trait":"line","color":"FFFFFF","radius":1},/*65*/{"x":-40,"y":3.5,"trait":"line","color":"FFFFFF","radius":1},/*66*/{"x":-31,"y":-21,"trait":"line","color":"FFFFFF","radius":1},/*67*/{"x":-56.5,"y":27,"trait":"line","color":"FFFFFF","radius":1},/*68*/{"x":-47.5,"y":22,"trait":"line","color":"FFFFFF","radius":1},/*69*/{"x":-54.5,"y":25,"trait":"line","color":"FFFFFF","radius":1},/*70*/{"x":-51.5,"y":30,"trait":"line","color":"FFFFFF","radius":1},/*71*/{"x":-49.5,"y":35,"trait":"line","color":"FFFFFF","radius":1},/*72*/{"x":-40,"y":10,"trait":"line","color":"FFFFFF","radius":1},/*73*/{"x":-42,"y":13,"trait":"line","color":"FFFFFF","radius":1},/*74*/{"x":-42,"y":11,"trait":"line","color":"FFFFFF","radius":1},/*75*/{"x":-42,"y":9,"trait":"line","color":"FFFFFF","radius":1},/*76*/{"x":-41,"y":6,"trait":"line","color":"FFFFFF","radius":1},/*77*/{"x":-41,"y":8,"trait":"line","color":"FFFFFF","radius":1},/*78*/{"x":-46,"y":4.5,"trait":"line","color":"FFFFFF","radius":1},/*79*/{"x":-19.5,"y":-18,"trait":"line","curve":40,"color":"FFFFFF","radius":1},/*80*/{"x":-13,"y":-13.5,"trait":"line","curve":40,"color":"FFFFFF","radius":1},/*81*/{"x":-13.5,"y":-12,"trait":"line","color":"FFFFFF","radius":1},/*82*/{"x":-17,"y":-0.5,"trait":"line","color":"FFFFFF","radius":1},/*83*/{"x":17,"y":1.5,"trait":"line","color":"FFFFFF"},/*84*/{"x":16,"y":10.5,"trait":"line","color":"FFFFFF"},/*85*/{"x":-22.5,"y":11.5,"trait":"line","curve":110,"color":"FFFFFF","radius":1},/*86*/{"x":-28.5,"y":0,"trait":"line","curve":110,"color":"FFFFFF","radius":1},/*87*/{"x":29,"y":-23,"trait":"line","color":"FFFFFF"},/*88*/{"x":26,"y":-14.5,"trait":"line","color":"FFFFFF"},/*89*/{"x":3,"y":-23,"trait":"line","color":"FFFFFF"},/*90*/{"x":-9,"y":-14.5,"trait":"line","color":"FFFFFF","radius":1},/*91*/{"x":-12,"y":-16,"trait":"line","color":"FFFFFF","radius":1},/*92*/{"x":-19.5,"y":-16,"trait":"line","curve":40,"color":"FFFFFF","radius":1},/*93*/{"x":-19.5,"y":-14,"trait":"line","curve":40,"color":"FFFFFF","radius":1},/*94*/{"x":-13.5,"y":-14,"trait":"line","curve":40,"color":"FFFFFF","radius":1},/*95*/{"x":-15.5,"y":-13,"trait":"line","color":"FFFFFF","radius":1},/*96*/{"x":-25,"y":7.5,"trait":"line","color":"FFFFFF","radius":1},/*97*/{"x":-15.5,"y":-16,"trait":"line","color":"FFFFFF","radius":1},/*98*/{"x":-27,"y":7,"trait":"line","color":"FFFFFF","radius":1},/*99*/{"x":-13.5,"y":-15,"trait":"line","color":"FFFFFF","radius":1},/*100*/{"x":-29,"y":6,"trait":"line","color":"FFFFFF","radius":1},/*101*/{"x":-11.5,"y":-21,"trait":"line","color":"FFFFFF","radius":1},/*102*/{"x":-27.5,"y":1,"trait":"line","color":"FFFFFF","radius":1},/*103*/{"x":-25.5,"y":-5,"trait":"line","color":"FFFFFF","radius":1},/*104*/{"x":-24.5,"y":-10.5,"trait":"line","color":"FFFFFF","radius":1},/*105*/{"x":-21,"y":-15,"trait":"line","color":"FFFFFF","radius":1},/*106*/{"x":16,"y":8.5,"trait":"line","color":"FFFFFF"},/*107*/{"x":-24.5,"y":9.5,"trait":"line","curve":110,"color":"FFFFFF","radius":1},/*108*/{"x":16,"y":8.5,"trait":"line","color":"FFFFFF"},/*109*/{"x":-28.5,"y":7.5,"trait":"line","curve":110,"color":"FFFFFF","radius":1},/*110*/{"x":13,"y":6,"trait":"line","color":"FFFFFF"},/*111*/{"x":-28.5,"y":5,"trait":"line","curve":110,"color":"FFFFFF","radius":1},/*112*/{"x":15,"y":4,"trait":"line","color":"FFFFFF"},/*113*/{"x":-28.5,"y":3,"trait":"line","curve":110,"color":"FFFFFF","radius":1},/*114*/{"x":15,"y":2,"trait":"line","color":"FFFFFF"},/*115*/{"x":-28.5,"y":1,"trait":"line","curve":110,"color":"FFFFFF","radius":1},/*116*/{"x":-13,"y":8,"trait":"line","color":"FFFFFF","radius":1},/*117*/{"x":26,"y":-16.5,"trait":"line","color":"FFFFFF"},/*118*/{"x":-9,"y":-16.5,"trait":"line","color":"FFFFFF","radius":1},/*119*/{"x":28,"y":-18.5,"trait":"line","color":"FFFFFF"},/*120*/{"x":-10,"y":-18.5,"trait":"line","color":"FFFFFF","radius":1},/*121*/{"x":30,"y":-20.5,"trait":"line","color":"FFFFFF"},/*122*/{"x":-12,"y":-20.5,"trait":"line","color":"FFFFFF","radius":1},/*123*/{"x":30,"y":-22.5,"trait":"line","color":"FFFFFF"},/*124*/{"x":-12,"y":-22.5,"trait":"line","color":"FFFFFF","radius":1},/*125*/{"x":10.584891419591912,"y":21.057034696200162,"trait":"line","curve":40,"color":"FFFFFF","radius":1},/*126*/{"x":12.06078035221779,"y":29.53480950210306,"trait":"line","curve":40,"color":"FFFFFF","radius":1},/*127*/{"x":2.575266374183599,"y":27.02806637948801,"trait":"line","color":"FFFFFF","radius":1},/*128*/{"x":11.118681577056947,"y":10.552240809593457,"trait":"line","color":"FFFFFF","radius":1},/*129*/{"x":-27.87931327864237,"y":10.475018676767391,"trait":"line","color":"FFFFFF"},/*130*/{"x":-21.858087861281007,"y":-0.5133772240600649,"trait":"line","color":"FFFFFF"},/*131*/{"x":11.641838526134109,"y":0.5628814724203011,"trait":"line","curve":110,"color":"FFFFFF","radius":1},/*132*/{"x":22.619625445500333,"y":10.074443640373616,"trait":"line","curve":110,"color":"FFFFFF","radius":1},/*133*/{"x":-43.947817894113484,"y":33.94213232013625,"trait":"line","color":"FFFFFF"},/*134*/{"x":-37.92948837661845,"y":24.453733623894188,"trait":"line","color":"FFFFFF"},/*135*/{"x":-6.947871938796084,"y":33.9981197175522,"trait":"line","color":"FFFFFF"},/*136*/{"x":4.07044826065021,"y":24.519374020864618,"trait":"line","color":"FFFFFF","radius":1},/*137*/{"x":8.055961306879539,"y":32.02708244343512,"trait":"line","color":"FFFFFF","radius":1},/*138*/{"x":12.588752619413697,"y":28.057038423419655,"trait":"line","curve":40,"color":"FFFFFF","radius":1},/*139*/{"x":12.59261381923551,"y":26.057042150639134,"trait":"line","curve":40,"color":"FFFFFF","radius":1},/*140*/{"x":10.584891419591912,"y":21.057034696200162,"trait":"line","curve":40,"color":"FFFFFF","radius":1},/*141*/{"x":5.5733320470532135,"y":21.031925715700055,"trait":"line","color":"FFFFFF","radius":1},/*142*/{"x":14.134111467466141,"y":4.567700517758567,"trait":"line","color":"FFFFFF","radius":1},/*143*/{"x":10.56754024732055,"y":26.031920124870823,"trait":"line","color":"FFFFFF","radius":1},/*144*/{"x":16.13314244029121,"y":5.071560785775489,"trait":"line","color":"FFFFFF","radius":1},/*145*/{"x":12.563675320279259,"y":28.03577759747313,"trait":"line","color":"FFFFFF","radius":1},/*146*/{"x":18.131208113160824,"y":6.075420121987534,"trait":"line","color":"FFFFFF","radius":1},/*147*/{"x":14.565602192970658,"y":27.039640660904666,"trait":"line","color":"FFFFFF","radius":1},/*148*/{"x":21.621557909020964,"y":9.07251490407247,"trait":"line","color":"FFFFFF","radius":1},/*149*/{"x":20.60997803677509,"y":17.068642522592206,"trait":"line","color":"FFFFFF","radius":1},/*150*/{"x":11.578141774342754,"y":26.54930577392247,"trait":"line","color":"FFFFFF","radius":1},/*151*/{"x":12.090680423909987,"y":30.05993618689574,"trait":"line","color":"FFFFFF","radius":1},/*152*/{"x":-21.86194906110279,"y":1.4866190487204562,"trait":"line","color":"FFFFFF"},/*153*/{"x":13.637973599092817,"y":2.566738945022607,"trait":"line","curve":110,"color":"FFFFFF","radius":1},/*154*/{"x":-23.865806533705097,"y":3.4827541216791786,"trait":"line","color":"FFFFFF"},/*155*/{"x":19.634104944832046,"y":16.574457617446697,"trait":"line","curve":110,"color":"FFFFFF","radius":1},/*156*/{"x":-23.870633033482335,"y":5.982749462654823,"trait":"line","color":"FFFFFF"},/*157*/{"x":18.62927844505481,"y":5.0744529584223415,"trait":"line","curve":110,"color":"FFFFFF","radius":1},/*158*/{"x":-25.87449050608464,"y":7.978884535613545,"trait":"line","color":"FFFFFF"},/*159*/{"x":12.625417245233024,"y":9.074449231202863,"trait":"line","curve":110,"color":"FFFFFF","radius":1},/*160*/{"x":-25.878351705906425,"y":9.97888080839406,"trait":"line","color":"FFFFFF"},/*161*/{"x":19.62155604541124,"y":5.07444550398337,"trait":"line","curve":110,"color":"FFFFFF","radius":1},/*162*/{"x":6.135099130738524,"y":1.044534250632708,"trait":"line","color":"FFFFFF","radius":1},/*163*/{"x":-37.933349576440264,"y":26.4537298966747,"trait":"line","color":"FFFFFF"},/*164*/{"x":4.066587060828425,"y":26.519370293645125,"trait":"line","color":"FFFFFF","radius":1},/*165*/{"x":-39.93720704904257,"y":28.449864969633424,"trait":"line","color":"FFFFFF"},/*166*/{"x":5.062723997396887,"y":28.521297166336538,"trait":"line","color":"FFFFFF","radius":1},/*167*/{"x":-41.94106452164485,"y":30.446000042592146,"trait":"line","color":"FFFFFF"},/*168*/{"x":7.0588590703556235,"y":30.525154638938844,"trait":"line","color":"FFFFFF","radius":1},/*169*/{"x":-41.94492572146663,"y":32.44599631537265,"trait":"line","color":"FFFFFF"},/*170*/{"x":4.055003461363071,"y":32.51935911198666,"trait":"line","color":"FFFFFF","radius":1},/*171*/{"x":30.5,"y":4,"trait":"line","curve":40,"color":"FFFFFF","radius":1},/*172*/{"x":40,"y":-19.5,"trait":"line","curve":40,"color":"FFFFFF","radius":1},/*173*/{"x":43.5,"y":-12,"trait":"line","color":"FFFFFF","radius":1},/*174*/{"x":27,"y":25.5,"trait":"line","color":"FFFFFF","radius":1},/*175*/{"x":73,"y":22.5,"trait":"line","color":"FFFFFF"},/*176*/{"x":67,"y":33.5,"trait":"line","color":"FFFFFF"},/*177*/{"x":26.5,"y":33.5,"trait":"line","curve":110,"color":"FFFFFF","radius":1},/*178*/{"x":20.5,"y":22,"trait":"line","curve":110,"color":"FFFFFF","radius":1},/*179*/{"x":86,"y":-24,"trait":"line","color":"FFFFFF"},/*180*/{"x":80,"y":-14.5,"trait":"line","color":"FFFFFF"},/*181*/{"x":59,"y":-24,"trait":"line","color":"FFFFFF"},/*182*/{"x":48,"y":-14.5,"trait":"line","color":"FFFFFF","radius":1},/*183*/{"x":44,"y":-22,"trait":"line","color":"FFFFFF","radius":1},/*184*/{"x":28.5,"y":4,"trait":"line","curve":40,"color":"FFFFFF","radius":1},/*185*/{"x":28.5,"y":6,"trait":"line","curve":40,"color":"FFFFFF","radius":1},/*186*/{"x":33.5,"y":2,"trait":"line","curve":40,"color":"FFFFFF","radius":1},/*187*/{"x":41.5,"y":-13,"trait":"line","color":"FFFFFF","radius":1},/*188*/{"x":24,"y":29.5,"trait":"line","color":"FFFFFF","radius":1},/*189*/{"x":41.5,"y":-16,"trait":"line","color":"FFFFFF","radius":1},/*190*/{"x":22,"y":29,"trait":"line","color":"FFFFFF","radius":1},/*191*/{"x":39.5,"y":-18,"trait":"line","color":"FFFFFF","radius":1},/*192*/{"x":20,"y":28,"trait":"line","color":"FFFFFF","radius":1},/*193*/{"x":37.5,"y":-17,"trait":"line","color":"FFFFFF","radius":1},/*194*/{"x":21.5,"y":23,"trait":"line","color":"FFFFFF","radius":1},/*195*/{"x":23.5,"y":17,"trait":"line","color":"FFFFFF","radius":1},/*196*/{"x":32.5,"y":-1.5,"trait":"line","color":"FFFFFF","radius":1},/*197*/{"x":33,"y":7,"trait":"line","color":"FFFFFF","radius":1},/*198*/{"x":67,"y":31.5,"trait":"line","color":"FFFFFF"},/*199*/{"x":24.5,"y":31.5,"trait":"line","curve":110,"color":"FFFFFF","radius":1},/*200*/{"x":69,"y":29.5,"trait":"line","color":"FFFFFF"},/*201*/{"x":20.5,"y":29.5,"trait":"line","curve":110,"color":"FFFFFF","radius":1},/*202*/{"x":69,"y":27,"trait":"line","color":"FFFFFF"},/*203*/{"x":20.5,"y":27,"trait":"line","curve":110,"color":"FFFFFF","radius":1},/*204*/{"x":71,"y":25,"trait":"line","color":"FFFFFF"},/*205*/{"x":20.5,"y":25,"trait":"line","curve":110,"color":"FFFFFF","radius":1},/*206*/{"x":71,"y":23,"trait":"line","color":"FFFFFF"},/*207*/{"x":20.5,"y":23,"trait":"line","curve":110,"color":"FFFFFF","radius":1},/*208*/{"x":36,"y":30,"trait":"line","color":"FFFFFF","radius":1},/*209*/{"x":80,"y":-16.5,"trait":"line","color":"FFFFFF"},/*210*/{"x":48,"y":-16.5,"trait":"line","color":"FFFFFF","radius":1},/*211*/{"x":82,"y":-18.5,"trait":"line","color":"FFFFFF"},/*212*/{"x":47,"y":-18.5,"trait":"line","color":"FFFFFF","radius":1},/*213*/{"x":84,"y":-20.5,"trait":"line","color":"FFFFFF"},/*214*/{"x":45,"y":-20.5,"trait":"line","color":"FFFFFF","radius":1},/*215*/{"x":84,"y":-22.5,"trait":"line","color":"FFFFFF"},/*216*/{"x":48,"y":-22.5,"trait":"line","color":"FFFFFF","radius":1},/*217*/{"bCoef":0,"trait":"line","x":-34.399993896484375,"y":-2.4000003933906555,"color":"FFFFFF"},/*218*/{"bCoef":0,"trait":"line","x":-35.399993896484375,"y":-7.4000003933906555,"color":"FFFFFF"},/*219*/{"bCoef":0,"trait":"line","x":-45.399993896484375,"y":4.5999996066093445,"color":"FFFFFF"},/*220*/{"bCoef":0,"trait":"line","x":-20,"y":-6.600000381469727},/*221*/{"bCoef":0,"trait":"line","x":-46,"y":5.200000762939453},/*222*/{"bCoef":0,"trait":"line","x":-56,"y":27.200000762939453},/*223*/{"bCoef":0,"trait":"line","x":-45,"y":0.20000076293945312},/*224*/{"bCoef":0,"trait":"line","x":-61,"y":24.200000762939453},/*225*/{"x":-821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0,"color":"FFFFFF","curve":-29.0508329},/*226*/{"x":-821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0,"color":"FFFFFF","curve":-29.0508329},/*227*/{"bCoef":0,"trait":"line","x":-62,"y":13.999999225139618}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":6,"v1":13,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":1,"v1":14,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":5,"v1":15,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":16,"v1":17,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":18,"v1":19,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":20,"v1":21,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":22,"v1":23,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":17,"v1":21,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-600},{"v0":19,"v1":23,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":572},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":25,"v1":24,"curve":178.6277516593836,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":26,"v1":27,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":28,"v1":29,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":32,"v1":33,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":25,"v1":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":24,"v1":34,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":7,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"v0":0,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"vis":true,"trait":"line","v0":12,"v1":14,"curve":-29.0508329,"color":"FFFFFF"},{"v0":37,"v1":39,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":39,"v1":40,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":40,"v1":38,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":38,"v1":37,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":41,"v1":42,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":42,"v1":43,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":44,"v1":45,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":45,"v1":46,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":46,"v1":41,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":47,"v1":48,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":49,"v1":50,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":51,"v1":52,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":54,"v1":53,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":56,"v1":55,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":58,"v1":57,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":60,"v1":59,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":62,"v1":61,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":63,"v1":64,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":65,"v1":66,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":67,"v1":68,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":69,"v1":70,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":71,"v1":72,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":89,"v1":87,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":87,"v1":88,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":81,"v1":82,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":82,"v1":83,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":83,"v1":84,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":84,"v1":85,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":79,"v1":80,"curve":40,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":80,"v1":81,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":90,"v1":91,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":91,"v1":89,"curve":20,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":90,"v1":88,"vis":true,"color":"FFFFFF","trait":"line","curve":4.259035399201421},{"v0":85,"v1":86,"curve":110,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":95,"v1":96,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":97,"v1":98,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":99,"v1":100,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":101,"v1":102,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":103,"v1":104,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":106,"v1":107,"vis":true,"color":"FFFFFF","trait":"line","y":22.5},{"v0":108,"v1":109,"vis":true,"color":"FFFFFF","trait":"line","y":20.5},{"v0":110,"v1":111,"vis":true,"color":"FFFFFF","trait":"line","y":18},{"v0":112,"v1":113,"vis":true,"color":"FFFFFF","trait":"line","y":16},{"v0":114,"v1":115,"vis":true,"color":"FFFFFF","trait":"line","y":14},{"v0":118,"v1":117,"vis":true,"color":"FFFFFF","trait":"line","y":-14.5},{"v0":120,"v1":119,"vis":true,"color":"FFFFFF","trait":"line","y":-16.5},{"v0":122,"v1":121,"vis":true,"color":"FFFFFF","trait":"line","y":-18.5},{"v0":124,"v1":123,"vis":true,"color":"FFFFFF","trait":"line","y":-20.5},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":101,"v1":115},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":104,"v1":115},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":101,"v1":115},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":66,"v1":71},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":66,"v1":70},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":64,"v1":70},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":64,"v1":70},{"v0":135,"v1":133,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":133,"v1":134,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":127,"v1":128,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":128,"v1":129,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":129,"v1":130,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":130,"v1":131,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":125,"v1":126,"curve":40,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":126,"v1":127,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":136,"v1":137,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":137,"v1":135,"curve":20,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":136,"v1":134,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":131,"v1":132,"curve":110,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":141,"v1":142,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":143,"v1":144,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":145,"v1":146,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":147,"v1":148,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":149,"v1":150,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":152,"v1":153,"vis":true,"color":"FFFFFF","trait":"line","y":22.5},{"v0":154,"v1":155,"vis":true,"color":"FFFFFF","trait":"line","y":20.5},{"v0":156,"v1":157,"vis":true,"color":"FFFFFF","trait":"line","y":18},{"v0":158,"v1":159,"vis":true,"color":"FFFFFF","trait":"line","y":16},{"v0":160,"v1":161,"vis":true,"color":"FFFFFF","trait":"line","y":14,"curve":-24.6475302919288},{"v0":164,"v1":163,"vis":true,"color":"FFFFFF","trait":"line","y":-14.5},{"v0":166,"v1":165,"vis":true,"color":"FFFFFF","trait":"line","y":-16.5},{"v0":168,"v1":167,"vis":true,"color":"FFFFFF","trait":"line","y":-18.5},{"v0":170,"v1":169,"vis":true,"color":"FFFFFF","trait":"line","y":-20.5},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":147,"v1":161},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":150,"v1":161},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":147,"v1":161},{"v0":181,"v1":179,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":179,"v1":180,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":173,"v1":174,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":174,"v1":175,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":175,"v1":176,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":176,"v1":177,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":171,"v1":172,"curve":40,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":172,"v1":173,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":182,"v1":183,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":183,"v1":181,"curve":20,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":182,"v1":180,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":177,"v1":178,"curve":110,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":187,"v1":188,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":189,"v1":190,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":191,"v1":192,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":193,"v1":194,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":195,"v1":196,"vis":true,"color":"FFFFFF","trait":"line","radius":1},{"v0":198,"v1":199,"vis":true,"color":"FFFFFF","trait":"line","y":22.5},{"v0":200,"v1":201,"vis":true,"color":"FFFFFF","trait":"line","y":20.5},{"v0":202,"v1":203,"vis":true,"color":"FFFFFF","trait":"line","y":18},{"v0":204,"v1":205,"vis":true,"color":"FFFFFF","trait":"line","y":16},{"v0":206,"v1":207,"vis":true,"color":"FFFFFF","trait":"line","y":14},{"v0":210,"v1":209,"vis":true,"color":"FFFFFF","trait":"line","y":-14.5},{"v0":212,"v1":211,"vis":true,"color":"FFFFFF","trait":"line","y":-16.5},{"v0":214,"v1":213,"vis":true,"color":"FFFFFF","trait":"line","y":-18.5},{"v0":216,"v1":215,"vis":true,"color":"FFFFFF","trait":"line","y":-20.5},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":193,"v1":207},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":196,"v1":207},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":193,"v1":207},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":162,"v1":170},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":153,"v1":170},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":161,"v1":135},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":149,"v1":170},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":66,"v1":71},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":45,"v1":71},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":217,"v1":71},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":217,"v1":71},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":218,"v1":71},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":218,"v1":70},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":218,"v1":42},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":219,"v1":70},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":219,"v1":70},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":110,"v1":150},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":153,"v1":168},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":101,"v1":160},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":97,"v1":156},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":124,"v1":152},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":122,"v1":130},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":124,"v1":130},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":122,"v1":104},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":124,"v1":160},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":105,"v1":160},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":124,"v1":152},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":124,"v1":111},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":122,"v1":160},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":123,"v1":91},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":87,"v1":101},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":128,"v1":166},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":161,"v1":168},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":162,"v1":168},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":124,"v1":156},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":91,"v1":158},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":122,"v1":130},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":66,"v1":71},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":66,"v1":71},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":66,"v1":71},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":66,"v1":42},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":66,"v1":71},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":66,"v1":42},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":66,"v1":70},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":45,"v1":42},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":118,"v1":220},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":120,"v1":220},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":124,"v1":105},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":124,"v1":105},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":124,"v1":105},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":149,"v1":170},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":151,"v1":170},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":151,"v1":135},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":94,"v1":123},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":99,"v1":123},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":221,"v1":222},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":221,"v1":222},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":219,"v1":56},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":221,"v1":56},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":223,"v1":222},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":223,"v1":222},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":223,"v1":224,"curve":59.95357268715172},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":78,"v1":56},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":78,"v1":54},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":75,"v1":56},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":219,"v1":54},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":78,"v1":56},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":78,"v1":56},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":219,"v1":54},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":66,"v1":54},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":187,"v1":174},{"vis":true,"trait":"line","v0":225,"v1":226,"curve":-26.877326994949126,"color":"FFFFFF"},{"curve":26.004024327597246,"vis":true,"bCoef":0,"cMask":["ball"],"v0":13,"v1":15,"color":"FFFFFF"},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":187,"v1":174},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":177,"v1":187},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":187,"v1":177},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":157,"v1":140},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":157,"v1":151},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":162,"v1":161},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":153,"v1":161},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":153,"v1":161},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":153,"v1":161},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":153,"v1":161},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":170,"v1":207},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":170,"v1":205},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":161,"v1":195},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":161,"v1":207},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":193,"v1":207},{"curve":-33.22022077011033,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":222,"v1":223},{"curve":-33.22022077011033,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":227,"v1":61}],"goals":[{"p0":[-802,-95],"p1":[-802,95],"team":"red"},{"p0":[802,95],"p1":[802,-95],"team":"blue"}],"discs":[{"radius":5,"pos":[-793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[-793,-95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,-95],"color":"FFFFFF","trait":"goalPost"},{"radius":0,"invMass":0,"pos":[-821,95],"bCoef":0,"cMask":["ball"]},{"radius":0,"invMass":0,"pos":[821,95],"bCoef":0,"cMask":["ball"]},{"radius":0,"invMass":0,"pos":[-821,-95],"bCoef":0,"cMask":["ball"]},{"radius":0,"invMass":0,"pos":[821,-95],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-823.2,87.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-825.2,80.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-828.5,66.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-827,73.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-830,59.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-831.2,52.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-832.3,45.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-833.3,38.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-834,31.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-834.7,24.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-835.1,17.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-824.4,31.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-835.5,3.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-835.5,-3.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-835.4,-10.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-835.2,-17.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-834.7,-24.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-834.1,-31.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-833.2,-38.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[831.2,-52.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-832.3,-45.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-839,3.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-828.5,-66.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-827,-73.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-825.2,-80.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-823.2,-87.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[823.2,-87.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[825.2,-80.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[827,-73.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[828.5,-66.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[830,-59.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-831.2,-52.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[832.3,-45.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[833.2,-38.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[834.1,-31.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[834.7,-24.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.2,-17.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.4,-10.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.5,-3.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.5,3.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.4,10.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.1,17.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[834.7,24.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[834,31.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[833.3,38.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[832.3,45.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[831.2,52.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[830,59.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[828.5,66.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[827,73.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[825.2,80.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[823.2,87.5],"bCoef":0,"cMask":["ball"]}],"planes":[{"normal":[0,1],"dist":-346,"trait":"ballArea"},{"normal":[0,-1],"dist":-346,"trait":"ballArea"},{"normal":[0,1],"dist":-404,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-404,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-900,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-900,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.6,"radius":15,"bCoef":0.35,"invMass":0.5,"damping":0.96,"cGroup":["red","blue"],"gravity":[0,0],"kickingDamping":0.96,"kickback":0},"ballPhysics":{"radius":6.5,"color":"FFFFFF","bCoef":0.465,"invMass":1.4,"cMask":["all"],"damping":0.99,"gravity":[0,0],"cGroup":["ball"]},"joints":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"canBeStored":false,"redSpawnPoints":[[-310,0],[-310,50],[-310,-50],[-310,100],[-310,-100],[-310,380]],"blueSpawnPoints":[[310,0],[310,50],[310,-50],[310,100],[310,-100],[310,380]],"kickOffReset":"partial","cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball"}',
  "haxviet": '{"name":"haxviet","width":900,"height":404,"spawnDistance":310,"bg":{"type":"grass","width":793,"height":346,"kickOffRadius":95,"cornerRadius":0,"color":"718B5B"},"vertexes":[{"x":-793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":404,"trait":"kickOffBarrier"},{"x":0,"y":95,"trait":"line"},{"x":0,"y":-95,"trait":"line"},{"x":0,"y":-404,"trait":"kickOffBarrier"},{"x":-821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0},{"x":821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0},{"x":-821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0},{"x":821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","radius":0},{"x":-793,"y":-271,"trait":"line"},{"x":-572,"y":-50,"trait":"line"},{"x":793,"y":-271,"trait":"line"},{"x":572,"y":-50,"trait":"line"},{"x":-793,"y":271,"trait":"line"},{"x":-572,"y":50,"trait":"line"},{"x":793,"y":271,"trait":"line"},{"x":572,"y":50,"trait":"line"},{"x":0,"y":95,"trait":"kickOffBarrier","curve":180},{"x":0,"y":-95,"trait":"kickOffBarrier","curve":180},{"x":802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-55,"y":28,"trait":"line"},{"x":-43,"y":-27,"bCoef":0,"trait":"line"},{"x":-52,"y":28,"bCoef":0,"trait":"line"},{"x":-40,"y":-27,"bCoef":0,"trait":"line"},{"x":-50,"y":0,"bCoef":0,"trait":"line"},{"x":-47.5,"y":3,"bCoef":0,"trait":"line"},{"x":-21,"y":3,"bCoef":0,"trait":"line"},{"x":-22,"y":0,"bCoef":0,"trait":"line"},{"x":-16,"y":-27,"bCoef":0,"trait":"line"},{"x":-13,"y":-27,"bCoef":0,"trait":"line"},{"x":-27,"y":28,"bCoef":0,"trait":"line"},{"x":-24,"y":28,"bCoef":0,"trait":"line"},{"x":-8,"y":-27,"bCoef":0,"trait":"line"},{"x":1,"y":28,"bCoef":0,"trait":"line"},{"x":-5,"y":-27,"bCoef":0,"trait":"line"},{"x":3,"y":22,"bCoef":0,"trait":"line"},{"x":25,"y":-27,"bCoef":0,"trait":"line"},{"x":28,"y":-27,"bCoef":0,"trait":"line"},{"x":4,"y":28,"bCoef":0,"trait":"line"},{"x":23,"y":28,"bCoef":0,"trait":"line"},{"x":32,"y":-27,"bCoef":0,"trait":"line"},{"x":35,"y":-27,"bCoef":0,"trait":"line"},{"x":26,"y":27,"bCoef":0,"trait":"line"},{"x":53,"y":28,"bCoef":0,"trait":"line"},{"x":50,"y":28,"bCoef":0,"trait":"line"},{"x":21.5,"y":28,"bCoef":0,"trait":"line"},{"x":35,"y":28,"bCoef":0,"trait":"line"},{"x":0,"y":346,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-346,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":6,"v1":13,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":1,"v1":14,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":5,"v1":15,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":16,"v1":17,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":18,"v1":19,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":20,"v1":21,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":22,"v1":23,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":17,"v1":21,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-600},{"v0":19,"v1":23,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":572},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":25,"v1":24,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":26,"v1":27,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":28,"v1":29,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":32,"v1":33,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":35,"v1":34,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":37,"v1":36,"vis":true,"color":"454C5E","bCoef":0,"trait":"line"},{"v0":38,"v1":41,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":39,"v1":40,"vis":true,"color":"454C5E","bCoef":0,"trait":"line"},{"v0":44,"v1":42,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":43,"v1":45,"vis":true,"color":"454C5E","bCoef":0,"trait":"line"},{"v0":48,"v1":49,"vis":true,"color":"454C5E","bCoef":0,"trait":"line"},{"v0":51,"v1":52,"vis":true,"color":"454C5E","bCoef":0,"trait":"line"},{"v0":46,"v1":47,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":50,"v1":47,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":55,"v1":56,"vis":true,"color":"454C5E","bCoef":0,"trait":"line"},{"v0":53,"v1":54,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":60,"v1":57,"vis":true,"color":"454C5E","bCoef":0,"trait":"line"},{"v0":59,"v1":58,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":25,"v1":62,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":24,"v1":61,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":7,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"v0":0,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea"}],"goals":[{"p0":[-802,-95],"p1":[-802,95],"team":"red"},{"p0":[802,95],"p1":[802,-95],"team":"blue"}],"discs":[{"radius":5,"pos":[-793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[-793,-95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,-95],"color":"FFFFFF","trait":"goalPost"},{"radius":0,"invMass":0,"pos":[-821,95],"bCoef":0,"cMask":["ball"]},{"radius":0,"invMass":0,"pos":[821,95],"bCoef":0,"cMask":["ball"]},{"radius":0,"invMass":0,"pos":[-821,-95],"bCoef":0,"cMask":["ball"]},{"radius":0,"invMass":0,"pos":[821,-95],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-823.2,87.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-825.2,80.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-828.5,66.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-827,73.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-830,59.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-831.2,52.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-832.3,45.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-833.3,38.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-834,31.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-834.7,24.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-835.1,17.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-835.4,10.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-835.5,3.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-835.5,-3.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-835.4,-10.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-835.2,-17.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-834.7,-24.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-834.1,-31.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-833.2,-38.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[831.2,-52.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-832.3,-45.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-830,-59.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-828.5,-66.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-827,-73.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-825.2,-80.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-823.2,-87.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[823.2,-87.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[825.2,-80.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[827,-73.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[828.5,-66.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[830,-59.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[-831.2,-52.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[832.3,-45.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[833.2,-38.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[834.1,-31.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[834.7,-24.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.2,-17.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.4,-10.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.5,-3.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.5,3.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.4,10.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[835.1,17.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[834.7,24.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[834,31.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[833.3,38.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[832.3,45.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[831.2,52.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[830,59.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[828.5,66.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[827,73.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[825.2,80.5],"bCoef":0,"cMask":["ball"]},{"radius":0,"pos":[823.2,87.5],"bCoef":0,"cMask":["ball"]}],"planes":[{"normal":[0,1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,-346],"b":[900,-346]}}},{"normal":[0,-1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,346],"b":[900,346]}}},{"normal":[0,1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[900,-404]}}},{"normal":[0,-1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,404],"b":[900,404]}}},{"normal":[1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[-900,404]}}},{"normal":[-1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[900,-404],"b":[900,404]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":6.9},"ballPhysics":{"radius":7,"color":"EAFF00","bCoef":0.465,"invMass":1},"joints":[{"d0":5,"d1":9,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":9,"d1":10,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":10,"d1":12,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":11,"d1":12,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":11,"d1":13,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":13,"d1":14,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":14,"d1":15,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":15,"d1":16,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":16,"d1":17,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":17,"d1":18,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":18,"d1":19,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":19,"d1":20,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":20,"d1":21,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":21,"d1":22,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":22,"d1":23,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":23,"d1":24,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":24,"d1":25,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":25,"d1":26,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":26,"d1":27,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":27,"d1":29,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":29,"d1":40,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":30,"d1":40,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":30,"d1":31,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":31,"d1":32,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":32,"d1":33,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":33,"d1":34,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":7,"d1":34,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":7,"d1":33,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":31,"d1":33,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":31,"d1":40,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":27,"d1":40,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":25,"d1":27,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":23,"d1":25,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":21,"d1":23,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":19,"d1":21,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":17,"d1":19,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":15,"d1":17,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":13,"d1":15,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":12,"d1":13,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":9,"d1":12,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":5,"d1":10,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":10,"d1":11,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":11,"d1":14,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":14,"d1":16,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":16,"d1":18,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":18,"d1":20,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":20,"d1":22,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":22,"d1":24,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":24,"d1":26,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":26,"d1":29,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":29,"d1":30,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":30,"d1":32,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":32,"d1":34,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":7,"d1":34,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":5,"d1":9,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":6,"d1":60,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":59,"d1":60,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":58,"d1":59,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":57,"d1":58,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":56,"d1":57,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":55,"d1":56,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":54,"d1":55,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":53,"d1":54,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":52,"d1":53,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":51,"d1":52,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":50,"d1":51,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":49,"d1":50,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":48,"d1":49,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":47,"d1":48,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":46,"d1":47,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":45,"d1":46,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":44,"d1":45,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":43,"d1":44,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":42,"d1":43,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":41,"d1":42,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":28,"d1":41,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":28,"d1":39,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":38,"d1":39,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":37,"d1":38,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":36,"d1":37,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":35,"d1":36,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":8,"d1":35,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":8,"d1":36,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":36,"d1":38,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":28,"d1":38,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":28,"d1":42,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":42,"d1":44,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":44,"d1":46,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":46,"d1":48,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":48,"d1":50,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":50,"d1":52,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":52,"d1":54,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":54,"d1":56,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":56,"d1":58,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":58,"d1":60,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":6,"d1":60,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":6,"d1":59,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":57,"d1":59,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":55,"d1":57,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":53,"d1":55,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":51,"d1":53,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":49,"d1":51,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":47,"d1":49,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":45,"d1":47,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":43,"d1":45,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":41,"d1":43,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":39,"d1":41,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":37,"d1":39,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":35,"d1":37,"strength":"rigid","color":"ffffff","length":null,"radius":0},{"d0":8,"d1":35,"strength":"rigid","color":"ffffff","length":null,"radius":0}],"canBeStored":false,"redSpawnPoints":[[-310,0],[-310,50],[-310,-50],[-310,100],[-310,-100],[-310,380]],"blueSpawnPoints":[[310,0],[310,50],[310,-50],[310,100],[310,-100],[310,380]],"kickOffReset":"full"}',
  "haxvietpl": '{"name":"haxvietpl","width":900,"height":404,"spawnDistance":310,"bg":{"type":"grass","width":793,"height":346,"kickOffRadius":95,"cornerRadius":0,"color":"718B5B"},"vertexes":[{"x":-793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":404,"trait":"kickOffBarrier"},{"x":0,"y":95,"trait":"kickOffBarrier"},{"x":0,"y":-95,"trait":"line"},{"x":0,"y":-404,"trait":"kickOffBarrier"},{"x":-821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-793,"y":-271,"trait":"line"},{"x":-572,"y":-50,"trait":"line"},{"x":793,"y":-271,"trait":"line"},{"x":572,"y":-50,"trait":"line"},{"x":-793,"y":271,"trait":"line"},{"x":-572,"y":50,"trait":"line"},{"x":793,"y":271,"trait":"line"},{"x":572,"y":50,"trait":"line"},{"x":793,"y":346,"bCoef":1,"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"trait":"ballArea"},{"x":0,"y":346,"bCoef":0,"trait":"line"},{"x":0,"y":-346,"bCoef":0,"trait":"line"},{"x":0,"y":95,"trait":"kickOffBarrier","_selected":"segment","_data":{"mirror":{}}},{"x":0,"y":-95,"trait":"kickOffBarrier","_selected":"segment","_data":{"mirror":{}}},{"x":802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":6,"v1":13,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":1,"v1":14,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":5,"v1":15,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":12,"v1":14,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-821},{"v0":13,"v1":15,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":585},{"v0":16,"v1":17,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":18,"v1":19,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":20,"v1":21,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":22,"v1":23,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":17,"v1":21,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-600},{"v0":19,"v1":23,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":572},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":0,"v1":24,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":290},{"v0":3,"v1":25,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-290},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":29,"v1":28,"curve":180.43079330521417,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","_selected":true,"_data":{"mirror":{},"arc":{"a":[0,-95],"b":[0,95],"curve":180.43079330521417,"radius":95.00067131878964,"center":[0.3571428571409862,0],"from":-1.574555707580645,"to":1.574555707580645}}},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":32,"v1":33,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":34,"v1":35,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":36,"v1":37,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614}],"goals":[{"p0":[-802,-95],"p1":[-802,95],"team":"red"},{"p0":[802,95],"p1":[802,-95],"team":"blue"}],"discs":[{"radius":5,"pos":[-793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[-793,-95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,-95],"color":"FFFFFF","trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,-346],"b":[900,-346]}}},{"normal":[0,-1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-346,"canvas_rect":[-900,-404,900,404],"a":[-900,346],"b":[900,346]}}},{"normal":[0,1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[900,-404]}}},{"normal":[0,-1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-404,"canvas_rect":[-900,-404,900,404],"a":[-900,404],"b":[900,404]}}},{"normal":[1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[-900,-404],"b":[-900,404]}}},{"normal":[-1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-900,"canvas_rect":[-900,-404,900,404],"a":[900,-404],"b":[900,404]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":7},"ballPhysics":{"radius":7,"color":"EAFF00"},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}',
  "haxvietdark": '{"name":"haxvietdark","width":900,"height":404,"spawnDistance":310,"bg":{"color":"222c47 "},"vertexes":[{"x":-793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":404,"trait":"kickOffBarrier"},{"x":0,"y":95,"trait":"kickOffBarrier"},{"x":0,"y":-95,"trait":"line"},{"x":0,"y":-404,"trait":"kickOffBarrier"},{"x":-821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-793,"y":-271,"trait":"line"},{"x":-572,"y":-50,"trait":"line"},{"x":793,"y":-271,"trait":"line"},{"x":572,"y":-50,"trait":"line"},{"x":-793,"y":271,"trait":"line"},{"x":-572,"y":50,"trait":"line"},{"x":793,"y":271,"trait":"line"},{"x":572,"y":50,"trait":"line"},{"x":793,"y":346,"bCoef":1,"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"trait":"ballArea"},{"x":-1,"y":-96,"bCoef":0,"trait":"line"},{"x":-1,"y":-788,"bCoef":0,"trait":"line"},{"x":0,"y":95,"trait":"line","color":"FFFFFF"},{"x":0,"y":-95,"trait":"kickOffBarrier","color":"FFFFFF"},{"x":802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":-95,"trait":"line"},{"x":1,"y":344,"trait":"line"},{"x":1,"y":-346,"trait":"line"},{"x":-41,"y":-28,"bCoef":0,"trait":"line","vis":false},{"x":41,"y":-28.5,"bCoef":0,"trait":"line","vis":false},{"x":-41,"y":28,"bCoef":0,"trait":"line","vis":true},{"x":41,"y":28.5,"bCoef":0,"trait":"line","vis":false},{"x":-29.5,"y":-27,"bCoef":0,"trait":"line","vis":true},{"x":-29.5,"y":-27,"bCoef":0,"trait":"line","vis":true},{"x":-52.5,"y":27.5,"bCoef":0,"trait":"line","vis":true,"curve":0,"color":"FFFFFF"},{"x":-41,"y":-27.5,"bCoef":0,"trait":"line","vis":true,"curve":0,"color":"FFFFFF"},{"x":-24.5,"y":28,"bCoef":0,"trait":"line","vis":true},{"x":-13,"y":-27,"bCoef":0,"trait":"line","vis":true},{"x":-46.5,"y":-0.5,"bCoef":0,"trait":"line","vis":false},{"x":35.5,"y":0,"bCoef":0,"trait":"line","vis":false},{"x":-47,"y":-0.5,"bCoef":0,"trait":"line","vis":true,"bias":0},{"x":-19,"y":0,"bCoef":0,"trait":"line","vis":true,"bias":0},{"x":-44,"y":1.5,"bCoef":0,"trait":"line","color":"999999"},{"x":-49.5,"y":28,"bCoef":0,"trait":"line","color":"999999"},{"x":-37.5,"y":-27.5,"bCoef":0,"trait":"line","color":"999999","curve":0},{"x":-49.5,"y":28,"bCoef":0,"trait":"line","color":"999999","curve":0},{"x":-21,"y":2.5,"bCoef":0,"trait":"line","color":"999999"},{"x":-10,"y":-27,"bCoef":0,"trait":"line","color":"999999"},{"x":-22,"y":28,"bCoef":0,"trait":"line","color":"999999"},{"x":-4.5,"y":-27.5,"bCoef":0,"trait":"line"},{"x":4,"y":28.5,"bCoef":0,"trait":"line"},{"x":28,"y":-27.5,"bCoef":0,"trait":"line"},{"x":-4.5,"y":-27.5,"bCoef":0,"trait":"line"},{"x":4,"y":28.5,"bCoef":0,"trait":"line"},{"x":-2,"y":-27.5,"bCoef":0,"trait":"line"},{"x":4,"y":28.5,"bCoef":0,"trait":"line"},{"x":-2,"y":-28,"bCoef":0,"trait":"line","curve":0,"color":"999999"},{"x":5.5,"y":22,"bCoef":0,"trait":"line","curve":0,"color":"999999"},{"x":28,"y":-27.5,"bCoef":0,"trait":"line"},{"x":-47,"y":-0.5,"bCoef":0,"trait":"line","vis":true,"bias":0},{"x":-19,"y":0,"bCoef":0,"trait":"line","vis":true,"bias":0},{"x":7,"y":28.5,"bCoef":0,"trait":"line","color":"999999"},{"x":30.5,"y":-27.5,"bCoef":0,"trait":"line","color":"999999"},{"x":4,"y":28.5,"bCoef":0,"trait":"line"},{"x":28,"y":-27.5,"bCoef":0,"trait":"line"},{"x":35.5,"y":-28,"bCoef":0,"trait":"line"},{"x":26,"y":29,"bCoef":0,"trait":"line"},{"x":49,"y":29,"bCoef":0,"trait":"line"},{"x":35.5,"y":-28,"bCoef":0,"trait":"line","color":"222023"},{"x":26,"y":29,"bCoef":0,"trait":"line","color":"222023"},{"x":28.5,"y":28.5,"bCoef":0,"trait":"line","curve":0,"color":"999999"},{"x":38,"y":-28.5,"bCoef":0,"trait":"line","curve":0,"color":"999999"},{"x":26,"y":29,"bCoef":0,"trait":"line"},{"x":26,"y":29,"bCoef":0,"trait":"line"},{"x":53.5,"y":29,"bCoef":0,"trait":"line"},{"x":0,"y":92,"trait":"line","color":"999999"},{"x":0,"y":-92,"trait":"kickOffBarrier","color":"999999"},{"x":0,"y":92,"trait":"line","color":"999999","curve":-180.2436962373499},{"x":0,"y":-92,"trait":"kickOffBarrier","color":"999999","curve":-180.2436962373499},{"x":3,"y":-95,"trait":"line","color":"999999"},{"x":3,"y":-346,"trait":"line","color":"999999"},{"x":3,"y":95,"trait":"line","color":"999999"},{"x":3,"y":344,"trait":"line","color":"999999"},{"x":-24.5,"y":28,"bCoef":0,"trait":"line","vis":true},{"x":-13,"y":-27,"bCoef":0,"trait":"line","vis":true},{"x":0,"y":95,"trait":"line","color":"FFFFFF"},{"x":0,"y":-95,"trait":"kickOffBarrier","color":"FFFFFF"},{"x":-793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"trait":"ballArea"},{"x":-793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":346,"bCoef":1,"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":6,"v1":13,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":1,"v1":14,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":5,"v1":15,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":12,"v1":14,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-821},{"v0":13,"v1":15,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":585},{"v0":16,"v1":17,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":18,"v1":19,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":20,"v1":21,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":22,"v1":23,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":17,"v1":21,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-600},{"v0":19,"v1":23,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":572},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":0,"v1":24,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":290},{"v0":3,"v1":25,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-290},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":29,"v1":28,"curve":180.43079330521417,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":32,"v1":33,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":34,"v1":35,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":36,"v1":37,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":28,"v1":39,"curve":0,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":38,"v1":40,"curve":0,"vis":true,"color":"FFFFFF","trait":"line"},{"v0":41,"v1":42,"curve":0,"vis":false,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":43,"v1":44,"curve":0,"vis":false,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":47,"v1":48,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":49,"v1":50,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":51,"v1":52,"curve":0,"vis":false,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":53,"v1":54,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","bias":0},{"v0":55,"v1":56,"curve":0,"vis":true,"color":"999999","bCoef":0,"trait":"line"},{"v0":57,"v1":58,"curve":0,"vis":true,"color":"999999","bCoef":0,"trait":"line"},{"v0":55,"v1":59,"curve":0,"vis":true,"color":"999999","bCoef":0,"trait":"line"},{"v0":59,"v1":59,"curve":0,"vis":true,"color":"222023","bCoef":0,"trait":"line"},{"v0":60,"v1":61,"curve":0,"vis":true,"color":"999999","bCoef":0,"trait":"line"},{"v0":62,"v1":63,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","bias":0},{"v0":63,"v1":64,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","bias":0},{"v0":64,"v1":64,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","bias":0},{"v0":65,"v1":66,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","bias":0},{"v0":69,"v1":70,"curve":0,"vis":true,"color":"999999","bCoef":0,"trait":"line","bias":0},{"v0":72,"v1":73,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","bias":0},{"v0":74,"v1":75,"curve":0,"vis":true,"color":"999999","bCoef":0,"trait":"line","bias":0},{"v0":76,"v1":77,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","bias":0},{"v0":78,"v1":79,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","bias":0},{"v0":79,"v1":80,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","bias":0},{"v0":83,"v1":84,"curve":0,"vis":true,"color":"999999","bCoef":0,"trait":"line","bias":0},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","bias":0},{"v0":89,"v1":88,"curve":180.2436962373499,"vis":true,"color":"999999","bCoef":0,"trait":"line"},{"v0":91,"v1":90,"curve":-180.2436962373499,"vis":true,"color":"999999","bCoef":0,"trait":"line"},{"v0":92,"v1":93,"curve":0,"vis":true,"color":"999999","trait":"line","x":3},{"v0":94,"v1":95,"curve":0,"vis":true,"color":"999999","trait":"line","x":3},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":99,"v1":98,"curve":180.43079330521417,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":100,"v1":101,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-290},{"v0":102,"v1":103,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":290}],"goals":[{"p0":[-802,-95],"p1":[-802,95],"team":"red"},{"p0":[802,95],"p1":[802,-95],"team":"blue"}],"discs":[{"radius":5,"pos":[-793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[-793,-95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,-95],"color":"FFFFFF","trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-346,"canvas_rect":[-1800,-808,1800,808],"a":[-1800,-346],"b":[1800,-346]}}},{"normal":[0,-1],"dist":-346,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-346,"canvas_rect":[-1800,-808,1800,808],"a":[-1800,346],"b":[1800,346]}}},{"normal":[0,1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-404,"canvas_rect":[-1800,-808,1800,808],"a":[-1800,-404],"b":[1800,-404]}}},{"normal":[0,-1],"dist":-404,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-404,"canvas_rect":[-1800,-808,1800,808],"a":[-1800,404],"b":[1800,404]}}},{"normal":[1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-900,"canvas_rect":[-1800,-808,1800,808],"a":[-900,-808],"b":[-900,808]}}},{"normal":[-1,0],"dist":-900,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-900,"canvas_rect":[-1800,-808,1800,808],"a":[900,-808],"b":[900,808]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"bCoef":0.35,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.65},"ballPhysics":{"radius":6.5,"bCoef":0.465,"invMass":1.4,"color":"7cfc00"},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}',
}
const commands = { // Format: "alias: [function, requiresAdmin]"
  help: [helpFunc, false],
  discord: [discordFunc, false],
  bb: [byeFunc, false],
  var: [varFunc, false],
  penalty: [penaltyFunc, false],
  kickafk: [kickAfkFunc, false],
  spec: [specFunc, false],
  votekick: [voteKickFunc, false],
  login: [loginFunc, false],
  yellow: [yellowCardFunc, true],
  maplist: [listMapsFunc, true],
  map: [selectMapFunc, true],
  wait: [waitFunc, true],
  clearbans: [clearBansFunc, true],
}
const replies = {
  "tin chuẩn chưa a": "Muốn biết tin chuẩn chưa anh thì hãy so sánh xem xét các nguồn tin khác. Cứ nhai đi nhai lại như một con bò.",
  "ngu ": "Toxic nên anh sẽ block em nhé.",
  "memaybeo": "Mẹ tao béo, nhưng ít nhất tao có mẹ.",
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
  "2": "Cú đúp dành cho",
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

var lastMessage = [null, null]; // Last message and the player ID of the sender
var duplicateMessagesCount = 0;
var yellowCards = [];
var votesToKick = {};
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
room.setScoreLimit(6);
room.setTimeLimit(5);
room.setTeamColors(1, 60, 0xFFFFFF, [0xD60419]);
room.setTeamColors(2, 60, 0xFFFFFF, [0x0099FF]);
room.setCustomStadium(maps["haxvietpl"]);

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
  room.sendAnnouncement("Tổ VAR đang bận xem sex, vui lòng gọi lại sau", null, GREEN, "normal", 0);
  return true;
}

function penaltyFunc(penalty, player) {
  room.sendAnnouncement("Ngã không đẹp, trọng tài quyết định không có penalty", null, RED, "normal", 0);
  return true;
}

function kickAfkFunc(value, player) {
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

function voteKickFunc(id, player) {
  if ( !id.startsWith("#") ) {
    room.sendAnnouncement("Vui lòng cung cấp một ID người chơi hợp lệ: !votekick #<id>", player.id, RED);
    return false;
  }

  id = id.slice(1);
  if ( player.id > id ) { // You can't vote kick someone who comes before you, to prevent spammy votes
    room.sendAnnouncement("Bạn chỉ có thế vote kick người chơi vào sau bạn", player.id, RED);
    return false;
  } else if ( !votesToKick[id] ) {
    votesToKick[id] = [];
  } else if ( votesToKick[id].includes(player.id) ) {
    room.sendAnnouncement("Bạn đã vote kick người này", player.id, RED);
    return false;
  }

  votesToKick[id].push(player.id);
  room.sendAnnouncement(`Vote kick thành công người chơi ID ${id} (${votesToKick[id].length}/${VOTES_COUNT_TO_KICK})`, player.id, GREEN);
  if ( votesToKick[id].length >= VOTES_COUNT_TO_KICK ) {
    room.kickPlayer(id, "Bạn đã bị những người chơi khác vote kick");
    delete votesToKick[id];
  }
  return false;
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
  room.sendAnnouncement(`Các map có sẵn: ${Object.keys(maps).join(", ")} (dùng "!map <tên map>" để áp dụng)`, null, GREEN);
  return true;
}

function selectMapFunc(map, player) {
  if ( maps[map] === undefined ) {
    room.sendAnnouncement(`Tên map trống hoặc không hợp lệ, cú pháp: !map <tên map> (dùng "!maplist" để xem danh sách map)`, null, RED);
  } else if ( room.getScores() !== null ) {
    room.sendAnnouncement("Không thể thay map khi trận đấu đang diễn ra", null, RED);
  } else {
    room.setCustomStadium(maps[map]);
  };
  return true;
}

function waitFunc(value, player) {
  cache.wait = 1;
  room.sendAnnouncement("Đã dừng tự động cấp Admin", null, GREEN);
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
  room.sendChat(`${mentionAdmins} vui lòng khởi động trận đấu hoặc chat !wait trong 15 giây trước khi room cấp Admin ngẫu nhiên`)
  await new Promise(r => setTimeout(r, 15000));
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
  if ( [message, player.id] != lastMessage ) { // The message is unique, not spammy
    lastMessage = [message, player.id];
    duplicateMessagesCount = 0;
    return;
  };

  duplicateMessagesCount++;
  if ( duplicateMessagesCount >= MAX_DUPE_MESSAGES ) {
    room.kickPlayer(player.id, "Spam");
  };
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
  room.sendAnnouncement("Discord: https://discord.gg/DYWZFFsSYu", player.id, GREEN, "normal", 0);
  room.sendChat(`Chào mừng ${getTag(player.name)} đến với băng ghế dự bị cùng Cristiano Ronaldo`, player.id);
  updateAdmins();
  updateTeamPlayers();
}

room.onPlayerLeave = async function(player) {
  delete votesToKick[player.id];
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

room.onPlayerKicked = async function(kickedPlayer, reason, ban, byPlayer) {
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
  room.setCustomStadium(maps["haxvietpl"]);
}
