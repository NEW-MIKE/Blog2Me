
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
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.setRequestHeader("update", "cache");
    
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.responseText);
       }};
    console.log(document.getElementById("jilu").value)
    var data = `我是测试数据`+document.getElementById("jilu").value;
    
    xhr.send(data);    
}