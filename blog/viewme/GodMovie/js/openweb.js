const sourceProjects = [
    ["任阅", "https://github.com/smuyyh/BookReader/tree/master/app/src/main/java/com/justwayward/reader"],
    ["csAndroid", "https://cs.android.com/androidx?hl=zh-cn"],
    ["AndroidCS", "https://cs.android.com/?hl=zh-cn"],
    ["AndroidGit", "https://github.com/aosp-mirror?q=apps&type=all"],
    ["Linux", "https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/drivers?h=v5.17-rc5"],
    ["Linux Mail","https://marc.info/" ],
    ["Flutter","https://book.flutterchina.club/" ],
    ["Telegram", "https://github.com/DrKLO/Telegram/tree/master/TMessagesProj/src/main/java/org/telegram"],
    ["Tomcat", "https://github.com/apache/tomcat/tree/main/java/org/apache/tomcat"],
    ["FFmpeg", "https://github.com/FFmpeg/FFmpeg"],
    ["CustomView", "https://github.com/xinghongfei/awesome-view"],
    ["AndroidProjects", "https://p.codekk.com/"],
    ["Android-Hot-Libraries", "https://github.com/SenhLinsh/Android-Hot-Libraries"],
    ["Awesome Android Open-Source Projects", "https://github.com/binaryshrey/Awesome-Android-Open-Source-Projects"],
    ["Awesome Android Apps", "https://github.com/LinuxCafeFederation/awesome-android"],
    ["Awesome Android Kotlin Apps", "https://github.com/androiddevnotes/awesome-android-kotlin-apps"],
    ["Eyepetizer", "https://github.com/VIPyinzhiwei/Eyepetizer/tree/master/app/src/main/java/com/eyepetizer/android"],
    ["JetUML", "https://github.com/prmr/JetUML/tree/master/src"],
    ["Solitaire", "https://github.com/prmr/Solitaire/tree/master/src"],
    ["Minesweeper", "https://github.com/prmr/Solitaire/tree/master/src"],
    ["designmodel", "https://refactoringguru.cn/design-patterns"],
    ["Wandroid", "https://github.com/iamyours/Wandroid/tree/master/app/src/main/java/io/github/iamyours/wandroid"],
    ["RxJava", "https://github.com/ReactiveX/RxJava/tree/3.x/src/jmh/java/io/reactivex/rxjava3"],
    ["OkHttp", "https://github.com/square/okhttp"],
    ["Glide", "https://github.com/bumptech/glide"],
    ["Picasso", "https://github.com/square/picasso"],
    ["Fresco", "https://github.com/facebook/fresco"],
    ["EventBus", "https://github.com/greenrobot/EventBus"],
    ["Retrofit", "https://github.com/square/retrofit"],
    ["Dagger", "https://github.com/google/dagger"],
    ["OkIO", "https://github.com/square/okio"],
    ["Butter Knife", "https://github.com/JakeWharton/butterknife"],
    ["leakcanary", "https://github.com/square/leakcanary"],
    ["tinker", "https://github.com/Tencent/tinker"],
    ["Android-CleanArchitecture", "https://github.com/android10/Android-CleanArchitecture"],
    ["greenDAO", "https://github.com/greenrobot/greenDAO"],
    ["IndicatorScrollView", "https://github.com/skydoves/IndicatorScrollView"],
    ["CalendarView", "https://github.com/kizitonwose/CalendarView/tree/master/library/src/main/java/com/kizitonwose/calendarview"],
    ["ARouter", "https://github.com/alibaba/ARouter"],
    ["Atlas", "https://github.com/alibaba/atlas"],
    ["flutter", "https://github.com/flutter/flutter/tree/master/packages/flutter/lib/src"],
    ["Kotlin", "https://github.com/JetBrains/kotlin"],
];

const techsources = [
    ["suanfaxiaochao", "https://github.com/labuladong/fucking-algorithm"],
    ["niukewang", "https://www.nowcoder.com/exam/oj"],
    ["leetcode", "https://leetcode-cn.com/problemset/all/"],
    ["euler", "https://pe-cn.github.io/problems/"],
    ["xxxx", "xxxx"],
    ["xxxx", "xxxx"],
    ["xxxx", "xxxx"],
];
function openwebclick(url){
    for(var i=0;i<sourceProjects.length;i++)
    {
        if(url == sourceProjects[i][0]){
            window.open(sourceProjects[i][1]);
            return;  
        }
    }
}

function opentechclick(url){
    var list = techsources;
    for(var i=0;i<list.length;i++)
    {
        if(url == list[i][0]){
            window.open(list[i][1]);
            return;  
        }
    }
}