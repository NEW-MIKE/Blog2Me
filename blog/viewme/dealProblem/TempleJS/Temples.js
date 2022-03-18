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
function bookread_id(topic){
    var data = getValueById(topic.name);
    var showContent = '<h2>藉由<--'+data+'-->之书，发展相关技能，树立正确态度</h2><br><br><br>'+
    '<h1>一，<  '+data+'  >是在什么样的背景下提出来的，解决了什么样的问题？</h1><br><br><br>'+
    '<h1>二，关于<  '+data+'  >提出来的问题，你自己的想象力空间是什么？</h1><br><br><br>'+
    '<h1>三，<  '+data+'  >此书塑造的是什么样的领域空间？</h1><br><br><br>'+
    '<h1>四，<  '+data+'  >能解决当下的什么问题，以及如何解决，最好先问一问“关我什么事”？</h1><br><br><br>'+
    '<h1>五，关于<  '+data+'  >旧瓶装新酒，在当前的环境加持之下，此种解决方案还可以如何改变和加持？</h1><br><br><br>'+
    '<h1>六，<  '+data+'  >不能解决什么问题？</h1><br><br><br>'+
    '<h1>七，<  '+data+'  >在如何阅读一本书中，如何回答学会提问？</h1><br><br><br>'+
    '<h1>《学会提问，批判性思维》，<  '+data+'  >论题和结论是什么</h1><br><br><br>'+
    '<h1>《学会提问，批判性思维》，<  '+data+'  >理由是什么，只有问一问别人为什么持有这样的观点，并得到一个明确的答复，才能公正地判断为什么应该同意它</h1><br><br><br>'+
    '<h1>《学会提问，批判性思维》，<  '+data+'  >哪些词语意思不明确，可惜的是，大多数词语都有不止一种含义。</h1><br><br><br>'+
    '<h1>《学会提问，批判性思维》，<  '+data+'  >什么是价值观假设和描述性假设，在所有的论证中，都有一些作者认为是理所当然的特定想法，但通常情况下他们却不会明说出来。就好像你眼看着魔术师把手帕放进了帽子里，出来的却是一只兔子，而你压根儿就不知道魔术师暗地里到底玩的什么把戏。</h1><br><br><br>'+
    '<h1>《学会提问，批判性思维》，<  '+data+'  >推理过程中有没有谬误   判断交流者的推理是不是以错误的假设为基础，是不是通过逻辑上的错误或带有欺骗性的推理来糊弄你，就要特别小心推理过程中的那些诡计花招。</h1><br><br><br>'+
    '<h1>《学会提问，批判性思维》，<  '+data+'  >证据的效力如何：直觉、个人经历、典型案例、当事人证词和专家意见    如果有人对出示证据这一简单要求的反应是怒火中烧或退避三舍，往往是因为他们觉得尴尬难为情，因为他们意识到，没有证据，他们对自己的看法本来不应该那样底气十足。</h1><br><br><br>'+
    '<h1>《学会提问，批判性思维》，<  '+data+'  > 证据的效力如何：个人观察，研究报告和类比    从某种意义上说，所有类比都是错误的，因为它们做出了错误的假设：因为两样东西在一两个方面有相似之处，它们在其他重要方面也必然会有相似之处。</h1><br><br><br>'+
    '<h1>《学会提问，批判性思维》，<  '+data+'  >有没有替代的原因    人类都有这种强烈的倾向，愿意相信如果两件事紧随前后发生，那么第一件事肯定导致了第二件事。比如你可能在写出一篇极出色的论文的同时戴了某一顶帽子，所以现在你一逢到写论文就坚持非要戴同一顶帽子不可。可能的原因不止一个</h1><br><br><br>'+
    '<h1>《学会提问，批判性思维》，<  '+data+'  >数据有没有欺骗性    当你遇到听起来让人动心的数字或者百分比，一定要当心！你可能需要其他信息来判定这些数字到底有多让人动心！</h1><br><br><br>'+
    '<h1>《学会提问，批判性思维》，<  '+data+'  >有什么重要信息被省略了    说服力不够强的推理，并不是因为说出来的不顶用，而是因为省略掉的太关键。就像马眼睛上所戴的一副眼罩，眼罩让马心无旁骛全神贯注于正前方的道路，但是眼罩同时也阻止它去关注某些特定的信息——也许是至关重要的信息。</h1><br><br><br>'+
    '<h1>《学会提问，批判性思维》，<  '+data+'  > 能得出哪些合理的结论    很少有重要的问题我们可以用简简单单的“是”或斩钉截铁的“不是”来回答。</h1><br><br><br>'
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