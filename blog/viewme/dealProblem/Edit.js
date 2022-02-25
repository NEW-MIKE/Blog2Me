
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

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("update", "cache");
    
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.responseText);
       }};
    console.log(document.getElementById("jilu").value)
    var data = "中国"+document.getElementById("jilu").value;
    console.log(data)
    xhr.send(data);    
}

function downloaddata(){
    console.log("ok")
    var url = "https://9f01-115-192-20-43.ngrok.io/cv.txt";
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