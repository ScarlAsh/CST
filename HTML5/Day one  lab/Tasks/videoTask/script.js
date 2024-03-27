var playbtn = document.getElementById("play");
var vid = document.getElementById("video");
var stopbtn = document.getElementById("stop");
var mutebtn = document.getElementById("mute");
var volbtn = document.getElementById("vol");
var speedbtn = document.getElementById("speed");
var resetbtn = document.getElementById("reset");
var endbtn = document.getElementById("end");
var backbtn = document.getElementById("back");
var forbtn = document.getElementById("forward");
var durrange = document.getElementById("durationRange");
var durspan = document.getElementById("duration");
var currentspan = document.getElementById("current");

playbtn.onclick = function()
{
    vid.play();
}
stopbtn.onclick = function()
{
    vid.pause();
}
mutebtn.onclick = function()
{
    vid.muted = true;
    volbtn.value = 0;
}
volbtn.oninput = function()
{
    if(parseFloat(volbtn.value) > 0)
    {
        vid.muted = false;
    }
    vid.volume = parseFloat(volbtn.value) ;
}
speedbtn.oninput = function()
{
    vid.playbackRate = parseFloat(event.target.value);
}
resetbtn.onclick = function()
{
    vid.currentTime = 0;
    vid.play();
}
endbtn.onclick = function()
{
    vid.currentTime = vid.duration;
}
backbtn.onclick = function()
{
    vid.currentTime -=10;
}
forbtn.onclick = function()
{
    vid.currentTime +=10;
}
vid.ondurationchange = function()
{
    durspan.textContent = Math.floor(vid.duration);
}
vid.ontimeupdate = function()
{
    durrange.value = vid.currentTime;
}
durrange.oninput = function()
{
    vid.currentTime = parseFloat(event.target.value);
}
vid.ontimeupdate = function()
{
    currentspan.textContent = Math.floor(vid.currentTime);
}
vid.onplay = function()
{
    if(vid.muted == false)
        volbtn.value = vid.volume;
}
