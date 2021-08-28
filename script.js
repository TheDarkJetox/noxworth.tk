function exit()
{
    document.getElementById("worldMap").style.zIndex = "+2";
}
function zIndex()
{
    document.getElementById("worldMap").style.zIndex = "-2";
}
function hide()
{
    document.getElementById("zoneTitle").style.color = "transparent";
}
function zoneName()
{
    document.getElementById("zoneTitle").innerHTML = event.currentTarget.id;
    document.getElementById("zoneTitle").style.color = "rgb(110, 110, 110)";
}

//WANTED FEATURES
//Feature: Load .txt to zoneInfo when the relevant object is clicked.