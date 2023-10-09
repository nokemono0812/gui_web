let mv = 0, hour = 5, min = 0, fps = 1000 / 40;


const hourd = document.getElementById("hour"),
mind = document.getElementById("minute"),
title = document.getElementById("title"),
title_text = document.getElementById("title_text"),
right = document.getElementById("right_content"),
clock = document.getElementById("clock");
text = document.getElementById("text"),
btn1 = document.getElementById("btn_up"),
btn2 = document.getElementById("btn_down"),
img = document.getElementById("image");


window.onload = function(){
    hourd.textContent = "0" + hour;
    mind.textContent = "0" + min;
}


function up(){
    if(mv == 0){
        mv = 1;
        del_elem();
        auto_up();
    }
}


function down(){
    if(mv == 0){
        mv = 1;
        del_elem();
        auto_down();
    }
}


function auto_up(){
    min ++;
    if(min == 60){
        min = 0;
        hour ++;
    }
    if(hour == 24){
        hour = 0;
    }
    let hd, md;
    if(hour < 10){
        hd = "0" + hour;
    }
    else{
        hd = hour;
    }
    if(min < 10){
        md = "0" + min;
    }
    else{
        md = min;
    }
    hourd.textContent = hd;
    mind.textContent = md;
    let check = checkTime();
    if(check == 0){
        setTimeout(auto_up, fps);
    }
}


function auto_down(){
    min --;
    if(min == -1){
        min = 59;
        hour --;
    }
    if(hour == -1){
        hour = 23;
    }
    let hd, md;
    if(hour < 10){
        hd = "0" + hour;
    }
    else{
        hd = hour;
    }
    if(min < 10){
        md = "0" + min;
    }
    else{
        md = min;
    }
    hourd.textContent = hd;
    mind.textContent = md;
    let check = checkTime();
    if(check == 0){
        setTimeout(auto_down, fps);
    }
}


function checkTime(){
    if((hour == 7) && (min == 0)){
        text.textContent = "もうだるい";
        title_text.textContent = "起床";
        img.innerHTML = "<img src='images/IMG_0298.PNG'>"
        fix_elem();
        return 1;
    }
    else if((hour == 8) && (min == 40)){
        text.textContent = "終わってる";
        title_text.textContent = "電車";
        img.innerHTML = "<img src='images/IMG_0299.PNG'>"
        fix_elem();
        return 1;
    }
    else if((hour == 9) && (min == 50)){
        text.textContent = "ここまで来れば勝ち";
        title_text.textContent = "学校まで歩き";
        img.innerHTML = "<img src='images/IMG_0300.PNG'>"
        fix_elem();
        return 1;
    }
    else if((hour == 10) && (min == 30)){
        text.textContent = "眠すぎて悟りを開く";
        title_text.textContent = "授業";
        img.innerHTML = "<img src='images/IMG_0301.PNG'>"
        fix_elem();
        return 1;
    }
    else if((hour == 12) && (min == 0)){
        text.textContent = "勝ち組";
        title_text.textContent = "昼休み";
        img.innerHTML = "<img src='images/IMG_0302.PNG'>"
        fix_elem();
        return 1;
    }
    else if((hour == 13) && (min == 20)){
        text.textContent = "今までありがとう";
        title_text.textContent = "授業Act2";
        img.innerHTML = "<img src='images/IMG_0303.PNG'>"
        fix_elem();
        return 1;
    }
    else if((hour == 15) && (min == 0)){
        text.textContent = "いや長いて";
        title_text.textContent = "授業Act3";
        img.innerHTML = "<img src='images/IMG_0309.PNG'>"
        fix_elem();
        return 1;
    }
    else if((hour == 16) && (min == 40)){
        text.textContent = "生を実感";
        title_text.textContent = "駅まで歩き";
        img.innerHTML = "<img src='images/IMG_0308.PNG'>"
        fix_elem();
        return 1;
    }
    else if((hour == 17) && (min == 15)){
        text.innerHTML = "さよならは悲しい<br>言葉じゃない";
        title_text.textContent = "電車";
        img.innerHTML = "<img src='images/IMG_0304.PNG'>"
        fix_elem();
        return 1;
    }
    else if((hour == 19) && (min == 30)){
        text.innerHTML = "もはや娯楽<br>（当社比）<br>（感覚麻痺）";
        title_text.textContent = "バイト";
        img.innerHTML = "<img src='images/IMG_0305.PNG'>"
        fix_elem();
        return 1;
    }
    else if((hour == 22) && (min == 30)){
        text.innerHTML = "制作・著作<br>━━━━━<br>ⓃⒽⓀ";
        title_text.textContent = "課題";
        img.innerHTML = "<img src='images/IMG_0306.PNG'>"
        fix_elem();
        return 1;
    }
    else if((hour == 1) && (min == 30)){
        text.textContent = "おやすみなさい";
        title_text.textContent = "就寝";
        img.innerHTML = "<img src='images/IMG_0307.PNG'>"
        fix_elem();
        return 1;
    }
    else{
        return 0;
    }
}


function del_elem(){
    title.style.animation = "zoomOut .7s";
    title.style.fontSize = "0";
    btn1.style.animation = "zoomOut .7s";
    btn1.style.fontSize = "0";
    btn1.style.height = "0";
    btn1.style.width = "0";
    btn1.style.opacity = "0";
    btn2.style.animation = "zoomOut .7s";
    btn2.style.fontSize = "0";
    btn2.style.height = "0";
    btn2.style.width = "0";
    btn2.style.opacity = "0";
    clock.style.animation = "big 1s";
    clock.style.fontSize = "120px";
    right.style.animation = "fadeOut .7s";
    right.style.opacity = "0";
}


function fix_elem(){
    title.style.animation = "zoomIn .7s";
    title.style.fontSize = "45px";
    setTimeout(function(){
        mv = 0;
        btn1.style.animation = "fadeIn 1.5s, up 1.5s infinite";
        btn2.style.animation = "fadeIn 1.5s, down 1.5s infinite";
        btn1.style.fontSize = "";
        btn1.style.height = "";
        btn1.style.width = "";
        btn1.style.opacity = "";
        btn2.style.fontSize = "";
        btn2.style.height = "";
        btn2.style.width = "";
        btn2.style.opacity = "";
    }, 400);
    clock.style.animation = "small .7s";
    clock.style.fontSize = "90px";
    right.style.animation = "fadeIn 1s";
    right.style.opacity = "1";
}