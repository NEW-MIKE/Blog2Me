const sourceProjects = [
    ["任阅", "https://github.com/smuyyh/BookReader/tree/master/app/src/main/java/com/justwayward/reader"],
    ["csAndroid", "https://cs.android.com/android/platform/superproject?hl=zh-cn"],
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