#pragma strict
static var levelFinshed:boolean=false;
static var gameFinshed:boolean= false;
function Start () {
	playerHealth.info="Help me find my tools";
}

function Update () {
	if(levelFinshed==true&&gameFinshed==false)
	{
		
		playerHealth.info="I can feel my spacecraft nearby!\n Help me find another 3 tools";
		
	}
	if(gameFinshed==true)
	{
		Application.LoadLevel (4);
	}
}