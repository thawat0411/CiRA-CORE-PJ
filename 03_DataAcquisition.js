var objs = payload.FaceRec.face_array
var  datetime  = payload.datetimetFaceRec
var currentDate = new Date();
var formattedDate = currentDate.toLocaleString();
var num = '';

for (var i = 0; i < objs.length; i++) {
	num = num + objs[i].name;
}

var payload = {
	"ResultFaceRec": num  
};