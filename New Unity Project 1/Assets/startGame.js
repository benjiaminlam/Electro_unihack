#pragma strict
public var guiSkin : GUISkin;

var a2:float;

var a4:float;
function OnGUI () {
    // Make a background box
    GUI.skin = guiSkin;
    GUI.Box (Rect (Screen.width/3,Screen.height/3,Screen.width/3,2*Screen.height/3), "ELETRO");

    // Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
    if (GUI.Button (Rect (2*Screen.width/3,Screen.height/2,Screen.width/3,Screen.height/6),"Start")) {
        Application.LoadLevel (1);
    }

    // Make the second button.
    if (GUI.Button (Rect (2*Screen.width/3,2*Screen.height/3+30,Screen.width/3,Screen.height/6),"Help")) {
        Application.LoadLevel (2);
    }
}

function Start()
{
	playerHealth.playerHealthPercent=50;
	playerHealth.leftTool=3;
	playerHealth.info=null;
}