window.onload = function () {
    downloaddata('log')
}
var url = getUrl();

function pullproject(){
    downloaddata("updatepull");
}

function showlog(){
    downloaddata('log')
}
function downloaddata(topic){
    console.log("ok")
    console.log("url is "+url);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("update", "get"+topic);
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var r = xhr.responseText;   
            document.querySelector('.info').innerHTML = r; 
        }
    };
    xhr.send(null);  
}