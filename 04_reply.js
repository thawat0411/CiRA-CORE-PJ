var result = payload.ResultFaceRec
var  datetime  = payload.datetimetFaceRec
var currentDate = new Date();
var formattedDate = currentDate.toLocaleString();


payload.line_msg = result +("\n") + formattedDate//+("\nกดLocationตรงเมนูเพื่อยืนยันตำแน่งของคุณ") 

