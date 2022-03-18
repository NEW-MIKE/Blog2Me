function keydown(topic){
    if(event.keyCode == 13){ 
        paythings(topic);
     }
}

function paythings(topic){
    var functionname = '';
    functionname+=topic+'('+topic+')';
    showif(eval(functionname))
}

function thingdeal_id(topic){
    var data = getValueById(topic.name);
    var showContent = '<h2>生而为人，必然于世界之上，完成必要的事业和成就，在此处开启你的事业之路,<--'+data+'-->将带给你新的力量</h2><br><br><br>'+
    '<h1>一，你想要完成<  '+data+'  >这件事，你必须清楚，欲成一事，必须苦其心智，练起体肤，请填写你将如何面对各项挑战？</h1><br><br><br>'+
    '<h1>二，请回答关于<  '+data+'  >这件事，关于这件事，事件相关的SWOT属性分别是什么？</h1><br><br><br>'+
    '<h1>三，请回答关于<  '+data+'  >这件事，关于这件事，事件相关的5W2H1E属性分别是什么？</h1><br><br><br>'+
    '<h1>四，请回答关于<  '+data+'  >这件事，关于这件事，天时地利人和分别是什么？</h1><br><br><br>'+
    '<h1>五，请回答关于<  '+data+'  >这件事，关于这件事，历史上，人们是怎么做的？</h1><br><br><br>'+
    '<h1>六，请回答关于<  '+data+'  >这件事，关于这件事，你目前还需要准备什么？</h1><br><br><br>'+
    '<h1>七，请回答关于<  '+data+'  >这件事，关于这件事，你是否询问了智者了，智者怎么说？</h1><br><br><br>'+
    '<h1>八，请回答关于<  '+data+'  >这件事，关于这件事，你目前做到了什么？</h1><br><br><br>'
    return showContent
}



function showif(innerHTMLContent){
    document.querySelector('.info').innerHTML = innerHTMLContent; //显示
}

function getValueById(topic){
    var data = document.getElementById(topic).value;
    document.getElementById(topic).value = '';
    return data;
}