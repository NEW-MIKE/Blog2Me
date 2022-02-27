function openwebclick(url){
    if(url == "任阅"){
        
        window.open("https://github.com/smuyyh/BookReader/tree/master/app/src/main/java/com/justwayward/reader");  
        //window.open("https://sourcegraph.com/github.com/smuyyh/BookReader/-/tree/app/src/main/java/com/justwayward/reader");  
        console.log("任阅");
    }
    else if(url == "csAndroid"){
        window.open("https://cs.android.com/android/platform/superproject?hl=zh-cn");
    }
    else if(url == "AndroidCS"){
        window.open("https://cs.android.com/?hl=zh-cn");
    }
    else if(url == "AndroidGit"){
        window.open("https://github.com/aosp-mirror?q=apps&type=all");
    }
    else if(url == "Linux"){
        window.open("https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/drivers?h=v5.17-rc5");
    }
    else if(url == "Linux Mail"){
        window.open("https://marc.info/");
    }
    else if(url == "Flutter"){
        window.open("https://book.flutterchina.club/");
    }
    else if(url == "Telegram"){
        window.open("https://github.com/DrKLO/Telegram/tree/master/TMessagesProj/src/main/java/org/telegram");
    }
    else if(url == "Tomcat"){
        window.open("https://github.com/apache/tomcat/tree/main/java/org/apache/tomcat");
    }
    else if(url == "FFmpeg"){
        window.open("https://github.com/FFmpeg/FFmpeg");
    }
    else{
        console.log("unknow");
    }
}