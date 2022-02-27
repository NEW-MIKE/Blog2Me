
window.onload = function () {
    // var fso, ts, s ;

    // var ForReading = 1;

    // fso = new ActiveXObject("Scripting.FileSystemObject");

    // ts = fso.OpenTextFile("../../cv.txt", ForReading);

    // s = ts.ReadLine();

    // document.getElementById("output").innerHTML=s;
}

function uploaddata(){
    console.log("ok")
    var url = "https://9f01-115-192-20-43.ngrok.io";
    var data = document.getElementById("jilu").value;
    document.getElementById("jilu").value= '';
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("update", "buildme");
    
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.responseText);
       }};
    var time2 = new Date().Format("yyyy-MM-dd HH:mm:ss");  
    console.log(time2)
    console.log(document.getElementById("jilu").value)
    var data = time2+":"+data;
    xhr.send(data);    
}
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "H+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

var cachebeifen ="123";
function downloaddata(){
    console.log("ok")
    var url = "https://9f01-115-192-20-43.ngrok.io";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("update", "getbuildme");
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var r = xhr.responseText;      
            if(cachebeifen == r){}
            else{
                cachebeifen = r;
                document.querySelector('.info').innerHTML = r; //显示
            }
        }
    };
    xhr.send(null);  
}