
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
    var currentYear = Number(getYear());
    var futureYear=1+Number(currentYear);
    water+="<li><span class='spcircle circlegreen' ></span>"+ 
            "<label>"+futureYear+"</label></li>";
    water+="<li><span class='spcircle circlegreen' id='currentYearId'></span>"+ 
            "<label>"+getNowFormatDate()+"</label></li>";
    for(var i = currentYear-1;i>1991;i--){
        water+="<li><span class='spcircle circlegrey'></span>"+ 
            "<label>"+i+"</label></li>";
    }

    return water;
}

function getYear(){
    var time=getNowFormatDate();
    var year = time.split('-')[0];
    console.log(year);
    return year;
}
function getNowFormatDate() {
    var currentdate;
    $.ajax({
        type: 'GET',
        dataType: 'json',
        async: false,
        url: 'http://quan.suning.com/getSysTime.do',
        success: function (data) {
            var data = data.sysTime2;
            currentdate = data.slice(0, 10);
            console.log(data);
        }
    })
    console.log(currentdate);
    return currentdate
}
 
