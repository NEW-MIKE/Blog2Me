var script = document.createElement("script");
script.language = "javascript";
script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@8";
document.getElementsByTagName("head")[0].appendChild(script); //将jq的js文件引入到head中
function keydown(topic){
    if(event.keyCode == 13){ 
        uploaddata(topic);
     }
}
var url = getUrl();
function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
  
    // 将textarea元素添加到文档中
    document.body.appendChild(textArea);
  
    // 选中并复制文本
    textArea.select();
    document.execCommand("copy");
  
    // 移除textarea元素
    document.body.removeChild(textArea);
  
    console.log("文本已复制到剪贴板");
  }
function uploaddata(topic){
    console.log("ok")
    var data = document.getElementById(topic).value;
    copyTextToClipboard(data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("update", topic);
    
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.responseText);
          document.getElementById(topic).value= '';
       }};
    var time2 = new Date().Format("yyyy-MM-dd HH:mm:ss");  
    console.log(time2)
    console.log(document.getElementById(topic).value)
    var data = time2+":"+data+"<br>";
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
function downloaddata(topic){
    console.log("ok")
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("update", "get"+topic);
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var r = xhr.responseText;     
            cachebeifen = r;
            DaKaBox(r);
            document.querySelector('.info').innerHTML = r; //显示
        }
    };
    xhr.send(null);  
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function DaKaBox(msg){
    let date = new Date();
    Swal.fire({
    background:getRandomColor(),//'#bdba1f',
    type: 'success',
    title: date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日",
      footer: '<p>要想做点事，别把自己太当人，别把别人不当人.</p>',
    html:
    '' +msg,
    showConfirmButton: false,
    timer: 200000,
    }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
    }
    else{
    }
    })

}

