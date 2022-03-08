
var myVar ="001";
function uploaddata(){
    var obj = document.getElementById("name"); //定位id
    var index = obj.selectedIndex; // 选中索引
    var text = obj.options[index].text; // 选中文本
    var value = obj.options[index].value; // 选中值
    console.log("ok")
    var url =  getUrl();
    var data = document.getElementById("jilu").value;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("update", "talk");
    
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.responseText);
          document.getElementById("jilu").value= '';
       }};
    var time2 = new Date().Format("yyyy-MM-dd HH:mm:ss");  
    console.log(time2)
    console.log(document.getElementById("jilu").value)
    var data = time2+"  "+text+":"+data;
    xhr.send(data);  
    setTimeout(function() { downloaddata(); }, 500);
    console.log("myVar");
    console.log(myVar);
    if(myVar == "001"){
        myVar ="002";
        console.log(myVar);
        setInterval("downloaddata()","2000"); 
    }
      
}
var myVarb ="001";
function uploaddatabeifen(){
    console.log("ok")
    var url =  getUrl();
    var data = document.getElementById("beifen").value;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("update", "beifen");
    
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.responseText);
          document.getElementById("beifen").value= '';
       }};
    var time2 = new Date().Format("yyyy-MM-dd HH:mm:ss");  
    console.log(time2)
    var data = time2+"  "+":"+data;
    console.log(data)
    xhr.send(data);  
    setTimeout(function() { downloaddatabeifen(); }, 500);
    
    if(myVarb == "001"){
        myVarb ="002";
        console.log(myVarb);
        setInterval("downloaddatabeifen()","4000"); 
    }
      
}

function keydownbeifen(){
    if(event.keyCode == 13){ //按下回车键
        //do something
        uploaddatabeifen();
     }
}
function keydown(){
    if(event.keyCode == 13){ //按下回车键
        //do something
        uploaddata();
     }
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
function downloaddatabeifen(){
    console.log("ok")
    var url =  getUrl();
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("update", "getbeifen");
    
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
var cache = "";
function downloaddata(){
    console.log("ok")
    var url =  getUrl();
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("update", "gettalk");
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var r = xhr.responseText;      
            if(cache == r){}
            else{
                cache = r;
                document.querySelector('.info').innerHTML = r; //显示
            }
        }
    };
    xhr.send(null);  
}
function downloaddataget(){
    console.log("ok")
    var url =  getUrl()+"/talk.txt";
    var xhr = new XMLHttpRequest();

    //2-设置请求报文
    //2-1请求行
    xhr.open('get', url);
    //2-2请求头
    xhr.setRequestHeader('content-type', 'text/html');
    //2-3请求主体
    xhr.send(null);

    //3-监听服务器响应
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var r = xhr.responseText;      
            document.querySelector('.info').innerHTML = r; //显示
        }
    }
}