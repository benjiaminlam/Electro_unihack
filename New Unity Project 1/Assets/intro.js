#pragma strict

function Start () {

}

function Update () {
	guiText.text=" Use WASD to control\n  character movement\n Press K to lit on my\n  flashlight\n Press L to turn up\n Press O to turn down \n Press P to control\n  my pet";
	if(Input.GetKeyDown("enter"))
	{
		Application.LoadLevel (1);
	}
}