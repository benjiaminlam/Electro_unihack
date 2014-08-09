#pragma strict
static var playerHealthPercent=50;
static var leftTool=3;
static var info;
function Start () {
	

}

function Update () {
	gameObject.Find("electroMonitor").guiText.pixelOffset = Vector2 (-(Screen.width/2), Screen.height/2);
	gameObject.Find("electroMonitor").guiText.text="Power:"+playerHealthPercent.ToString()+"%\n\n\nTool:"+leftTool.ToString()+"left \n\n\n";
	
	gameObject.Find("info").guiText.pixelOffset = Vector2 (-(Screen.width/2), -Screen.height/3);
	gameObject.Find("info").guiText.text = info;
	if(playerHealthPercent<=0)
	{
		Debug.Log("player died");
		Destroy(gameObject);
		Application.LoadLevel(3);
	}
}