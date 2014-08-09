#pragma strict
var gmobj=gameObject.Find("FinshPoint");
function Start () {
	gmobj.collider.isTrigger=false;
}

function Update () {
	if(playerHealth.leftTool==0)
	{
		gmobj.collider.isTrigger=true;
	}
}

function OnTriggerEnter(other:Collider)
{
   if(other.gameObject.name == "FinshPoint")
   {
      if(playerHealth.leftTool==0)
      {
      	levelControl.gameFinshed=true;
      	
      }
      
   }
}