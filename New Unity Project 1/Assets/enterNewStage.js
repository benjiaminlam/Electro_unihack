#pragma strict
var gmobj=gameObject.Find("enterLevel2");
function Start () {
	gmobj.collider.isTrigger=false;
}

function Update () {
	if(playerHealth.leftTool==0)
	{
		gmobj.collider.isTrigger=true;
	}
}

function OnTriggerStay(other:Collider)
{
   if(other.gameObject.name == "enterLevel2")
   {
      levelControl.levelFinshed=true;
      playerHealth.leftTool=3;
      Destroy(other.gameObject);
   }
}