
window.onload = function(){
    var insertDiv = document.getElementById("water_id")
    insertDiv.innerHTML = generateHtml();
    console.log(Number(getYear())-2019);
    setInterval("click()","1000"); 
}
var clickType = 0;
function click(){
    if(clickType == 0){
        document.getElementById( "currentYearId" ).className = "spcircle circlegreen";
        clickType =1;
    }
    else{
        document.getElementById( "currentYearId" ).className = "spcircle circlegrey";
        clickType =0;
    }
}
var water = "<div class='cirline'></div>";
function generateHtml(){
    var currentYear = getYear();
    var futureYear=1+Number(currentYear); 
    water+="<li><span class='spcircle circlegreen' ></span>"+ 
            "<label>"+futureYear+"</label><label>未来值得一窥</label></li>";
    water+="<li><span class='spcircle circlegreen' id='currentYearId'></span>"+ 
            "<label>Today is "+getNowFormatDate()+"</label><label>明天和停止跳动，哪一个会先到来</label></li>";
    for(var i = currentYear-1;i>1991;i--){
        water+="<li><span class='spcircle circlegrey'></span>"+ 
            "<label>"+i+"</label></li>";
    }

    return water;
}

function getYear(){
    var time = getNowFormatDate();
    var year = time.split('-')[0];
    console.log(year);
    return year;
}
function getNowFormatDate() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth()<10?"0"+(Number(d.getMonth())+1):d.getMonth()+1;
    var day = d.getDate() <10?"0"+d.getDate():d.getDate();
    var currentdate = year+"-"+month+"-"+day;
    console.log(currentdate);
    $.ajax({
        type: 'GET',
        dataType: 'json',
        async: false,
        url: 'https://quan.suning.com/getSysTime.do',
        success: function (data) {
            var data = data.sysTime2;
            currentdate = data.slice(0, 10);
            console.log(data);
            console.log("data");
        }
    })
    console.log(currentdate);
    return currentdate
}
 
