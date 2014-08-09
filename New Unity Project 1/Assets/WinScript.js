#pragma strict

function Start () {

}

function Update () {
	guiText.pixelOffset = Vector2 (-(Screen.width/2), Screen.height/3);
	guiText.text="Finally I fixed my spacecraft with your help\n\n Thank you\n=3=";
	if(Input.GetKeyDown("return"))
	{
		Application.LoadLevel (0);
	}
	if(Input.GetKeyDown("esc"))
	{
		Application.Quit();
	}
}