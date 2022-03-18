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
    var showContent = getFontSizeBefore()+'生而为人，必然于世界之上，完成必要的事业和成就，在此处开启你的事业之路,<--'+data+'-->将带给你新的力量'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'一，你想要完成<  '+data+'  >这件事，你必须清楚，欲成一事，必须苦其心智，练起体肤，请填写你将如何面对各项挑战？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'二，请回答关于<  '+data+'  >这件事，关于这件事，事件相关的SWOT属性分别是什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'三，请回答关于<  '+data+'  >这件事，关于这件事，事件相关的5W2H1E属性分别是什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'四，请回答关于<  '+data+'  >这件事，关于这件事，天时地利人和分别是什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'五，请回答关于<  '+data+'  >这件事，关于这件事，历史上，人们是怎么做的？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'六，请回答关于<  '+data+'  >这件事，关于这件事，你目前还需要准备什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'七，请回答关于<  '+data+'  >这件事，关于这件事，你是否询问了智者了，智者怎么说？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'八，请回答关于<  '+data+'  >这件事，关于这件事，你目前做到了什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'八，请回答关于<  '+data+'  >这件事，是否可以通过钱解决？'+getFontSizeAfter()+getNextLine()
    return showContent
}
function judgething_id(topic){
    var data = getValueById(topic.name);
    var showContent = getFontSizeBefore()+'如何审视<--'+data+'-->这件事'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'一，<  '+data+'  >影响力有多大？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'二，于<  '+data+'  >对于以后会产生什么样的影响？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'三，于<  '+data+'  >得与失之间是如何的？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'四，于<  '+data+'  >会对什么人产生什么影响？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'五，于<  '+data+'  >博弈的是什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'六，于<  '+data+'  >这件事主导的关键是什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'七，于<  '+data+'  >是否会更优？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'于<  '+data+'  >这件事，原理是什么？'+getFontSizeAfter()+getNextLine()
    return showContent
}

function gtd_id(topic){
    var data = getValueById(topic.name);
    var showContent = getFontSizeBefore()+'关于<--'+data+'-->的GTD审视'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >是什么样的事（人生意义/目标/愿景/各方面的责任）'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >现在可以行动？垃圾，就扔掉;酝酿，可能今后去做，指明特定日期;'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >下一步如何行动？如果2分钟内能够完成，立马去做'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >检查预先定义的工作：项目相关材料/我在特定日期要做的事/我需要尽快去做的事/保持联系，并且需要别人，委托给别人的事'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >场合：我能做什么？挑选出当前环境下我能够做的事'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >时间：我在有限的时间内能做什么？挑选出在我时间块内能够做的事情？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >资源：我在有限的时间精力下能做什么？选出我当前精力和注意力能够完成的事'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >未计划的工作：未计划的工作随时出现，也许需要立刻行动，也许并不需要，必须与所有要做的事，以及当前关注范围中的事情一起权衡'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >预定义的工作：所有未完成的行动与项目，随着进度的推移及时间的临近，综合思考，把控协商，履行承诺的能力会越来越强，用可行的方式记录可以将大脑从记忆与提醒的工作中解脱出来'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >确定中的工作：处理已有事务或新的输入，回顾当前排出的任务列表，将"事务"转变为行动或者项目，脑力工作者的重要思考和决策'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >关注里范围：能否完整全面的记录下可供选择的任务，以及能否关注好关注范围中的事务，决定了自己能否确信正在做的事就是最佳的选择，列表中的事只要一离开大脑就必须按其特有的周期去回顾'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >回顾：日历，当我需要知道今天“必须做”哪些事时；行动列表：当我有空闲，需要看看还能做什么时；项目：当我要回顾自己短期承诺时；各方面的责任：当我需要保持平衡时；目标：当我需要确保自己能得到自己预期的结果时；愿景：当我需要动力与长期的方向时；人生意义/原则：当我要做非常重要的决策时'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >希望自己是正确的：糟糕的实践：我被各种最新的或是最突出的事情所左右，我不知道自己在干什么。我意识不到手头之外还有什么事，我记录的行动列表不完整，或是已经过时，我很麻木'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >确信自己是正确的：最佳实践：我相信自己的判断，因为我记录下的待办列表是完整的，及时更新的，我专注范围内的事都被关注着，并采取有效行动。我的直觉敏锐，视野清晰，决策明确，精神放松'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >以上，还会带来更多的：活力，清晰，官渡，深度，表现'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >做一个很好的管理者'+getFontSizeAfter()+getNextLine()
    return showContent
}

function person_id(topic){
    var data = getValueById(topic.name);
    var showContent = getFontSizeBefore()+'如何与<--'+data+'-->开展社交'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'一，<  '+data+'  >与我的交集是什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'二，于<  '+data+'  >如何共事？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'三，于<  '+data+'  >是什么性格的人，应该注意些什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'四，于<  '+data+'  >什么才是有意义有价值的进行曲？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'于<  '+data+'  >共话？'+getFontSizeAfter()+getNextLine()
    return showContent
}

function schema_id(topic){
    var data = getValueById(topic.name);
    var showContent = getFontSizeBefore()+'<--'+data+'-->项目架构设计'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >设计概述'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >功能概述'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >非功能约束'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >系统部署图与整体设计'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >xxxx场景子系统序列图'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >xxx子系统设计'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >子系统组件图'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >场景A组件序列图'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >场景B组件活动图'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >组件I设计'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >组件I类图'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >场景A类序列图'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >场景I状态图'+getFontSizeAfter()+getNextLine()
    return showContent
}



function judgeperson_id(topic){
    var data = getValueById(topic.name);
    var showContent = getFontSizeBefore()+'该如何审视<--'+data+'-->'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'一，<  '+data+'  >拥有哪些资源？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'二，于<  '+data+'  >具备什么能力？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'三，于<  '+data+'  >对自己会造成什么威胁？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'四，于<  '+data+'  >彼此共赢的空间是什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'五，于<  '+data+'  >这个人之前做过什么事？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'六，于<  '+data+'  >这个人的经济来源是什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'>七，于<  '+data+'  >这个人结交的圈子都是些什么人？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'八，于<  '+data+'  >这个人会说什么话，做什么事，如何利用？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'于<  '+data+'  >这个人的价值选择是什么？'+getFontSizeAfter()+getNextLine()
    return showContent
}
function talk_id(topic){
    var data = getValueById(topic.name);
    var showContent = getFontSizeBefore()+'<--'+data+'-->此行的目的是为了达成一定的共识'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'一，<  '+data+'  >这场对话利益相关方有哪些，是否都在场了？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'二，于<  '+data+'  >这场对话，事先需要做什么铺垫？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'三，于<  '+data+'  >这场对话，如何开展整个谈判的过程？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'四，于<  '+data+'  >这场对话，如何抢夺对话过程中的引导权？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'五，于<  '+data+'  >这场对话，如何通过谈话的过程表明申明自己的立场以及自己想要传达什么样的意志？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'六，于<  '+data+'  >这场对话，如何营造一个利于自己的氛围？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'七，于<  '+data+'  >这场对话，如何引导谈话者的情绪过程？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'八，于<  '+data+'  >这场对话，如何奠定新的关系？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'于<  '+data+'  >这场对话，原理是什么？'+getFontSizeAfter()+getNextLine()
    return showContent
}
function bookread_id(topic){
    var data = getValueById(topic.name);
    var showContent = getFontSizeBefore()+'藉由<--'+data+'-->之书，发展相关技能，树立正确态度'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'一，<  '+data+'  >是在什么样的背景下提出来的，解决了什么样的问题？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'二，关于<  '+data+'  >提出来的问题，你自己的想象力空间是什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'三，<  '+data+'  >此书塑造的是什么样的领域空间？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'四，<  '+data+'  >能解决当下的什么问题，以及如何解决，最好先问一问“关我什么事”？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'五，关于<  '+data+'  >旧瓶装新酒，在当前的环境加持之下，此种解决方案还可以如何改变和加持？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'六，<  '+data+'  >不能解决什么问题？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'七，<  '+data+'  >在如何阅读一本书中，如何回答学会提问？'+getFontSizeAfter()+getNextLine()+ 
    getFontSizeBefore()+'《学会提问，批判性思维》，<  '+data+'  >论题和结论是什么'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'《学会提问，批判性思维》，<  '+data+'  >理由是什么，只有问一问别人为什么持有这样的观点，并得到一个明确的答复，才能公正地判断为什么应该同意它'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'《学会提问，批判性思维》，<  '+data+'  >哪些词语意思不明确，可惜的是，大多数词语都有不止一种含义。'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'《学会提问，批判性思维》，<  '+data+'  >什么是价值观假设和描述性假设，在所有的论证中，都有一些作者认为是理所当然的特定想法，但通常情况下他们却不会明说出来。就好像你眼看着魔术师把手帕放进了帽子里，出来的却是一只兔子，而你压根儿就不知道魔术师暗地里到底玩的什么把戏。'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'《学会提问，批判性思维》，<  '+data+'  >推理过程中有没有谬误   判断交流者的推理是不是以错误的假设为基础，是不是通过逻辑上的错误或带有欺骗性的推理来糊弄你，就要特别小心推理过程中的那些诡计花招。'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'《学会提问，批判性思维》，<  '+data+'  >证据的效力如何：直觉、个人经历、典型案例、当事人证词和专家意见    如果有人对出示证据这一简单要求的反应是怒火中烧或退避三舍，往往是因为他们觉得尴尬难为情，因为他们意识到，没有证据，他们对自己的看法本来不应该那样底气十足。'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'《学会提问，批判性思维》，<  '+data+'  > 证据的效力如何：个人观察，研究报告和类比    从某种意义上说，所有类比都是错误的，因为它们做出了错误的假设：因为两样东西在一两个方面有相似之处，它们在其他重要方面也必然会有相似之处。'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'《学会提问，批判性思维》，<  '+data+'  >有没有替代的原因    人类都有这种强烈的倾向，愿意相信如果两件事紧随前后发生，那么第一件事肯定导致了第二件事。比如你可能在写出一篇极出色的论文的同时戴了某一顶帽子，所以现在你一逢到写论文就坚持非要戴同一顶帽子不可。可能的原因不止一个'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'《学会提问，批判性思维》，<  '+data+'  >数据有没有欺骗性    当你遇到听起来让人动心的数字或者百分比，一定要当心！你可能需要其他信息来判定这些数字到底有多让人动心！'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'《学会提问，批判性思维》，<  '+data+'  >有什么重要信息被省略了    说服力不够强的推理，并不是因为说出来的不顶用，而是因为省略掉的太关键。就像马眼睛上所戴的一副眼罩，眼罩让马心无旁骛全神贯注于正前方的道路，但是眼罩同时也阻止它去关注某些特定的信息——也许是至关重要的信息。'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'《学会提问，批判性思维》，<  '+data+'  > 能得出哪些合理的结论    很少有重要的问题我们可以用简简单单的“是”或斩钉截铁的“不是”来回答。'+getFontSizeAfter()+getNextLine()
    return showContent
}


function getNextLine(N){
    return ''
}

function getFontSizeAfter(N){
    return '</h3>'
}
function getFontSizeBefore(N){
    return '<h3>'
}

function showif(innerHTMLContent){
    document.querySelector('.info').innerHTML = innerHTMLContent; //显示
}

function getValueById(topic){
    var data = document.getElementById(topic).value;
    document.getElementById(topic).value = '';
    return data;
}