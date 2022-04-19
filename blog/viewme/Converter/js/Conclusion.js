
var url =  getUrl();
function uploadClue(topicname,inputdata){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("update", topicname);
    
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.responseText);
       }};
    var time2 = new Date().Format("yyyy-MM-dd HH:mm:ss");  
    console.log(time2)
    var data = time2+":"+inputdata;
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

function clearCache(name){
    document.getElementById(name).value= '';
}

function makeConclusion(titlename,inputname,inputnumber,savetype){
    var output = "";
    for (let i = 1; i < inputnumber+1; i++) {
        if(i < 10){
            var id = '_0'+i;
            output += document.getElementById(titlename+id).innerText+" :<br>";
            output += document.getElementById(inputname+id).value+" :<br>";
            clearCache(inputname+id);
        }
        else{
            output += document.getElementById(titlename+"_"+i).innerText+" :<br>";
            output += document.getElementById(inputname+"_"+i).value+" :<br>";
            clearCache(inputname+"_"+i);
        }
      }
    console.log(output)
    uploadClue(savetype,output);
}

function downloadClue(topicname){
    console.log("ok")
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("update", "get"+topicname);
    
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