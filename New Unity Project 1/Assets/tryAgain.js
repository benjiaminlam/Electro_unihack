#pragma strict


function Update () {
	guiText.pixelOffset = Vector2 (-(Screen.width/2), Screen.height/3);
	guiText.text="\n\n"+"Press ENTER to try again\n\n"+"(๑و•̀Δ•́)و";
	if(Input.GetKeyDown("return"))
	{
	
		Application.LoadLevel (0);
	}
}