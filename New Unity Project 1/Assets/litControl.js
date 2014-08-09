#pragma strict

var theLight:GameObject;
var theAttackArea:GameObject;
static var isAttack:boolean=false;
var gmobj : GameObject;

function Start () {
	gmobj.GetComponent("CapsuleCollider").active=false;
}

function Update () {
	if(Input.GetKeyDown("l"))
	{
		theLight.light.range+=0.5;
		theAttackArea.transform.localScale.y+=2;
		playerHealth.playerHealthPercent-=theLight.light.range;
	}
	if(Input.GetKeyDown("o"))
	{
		if(theLight.light.range>0.5)
		{
		theLight.light.range-=0.5;
		theAttackArea.transform.localScale.y-=2;
		playerHealth.playerHealthPercent-=theLight.light.range;
		}
	}
	//attack
	if(Input.GetKeyDown("k"))
	{
		theLight.light.intensity+=5;
		isAttack=true;
		gmobj.GetComponent("CapsuleCollider").active=true;
		playerHealth.playerHealthPercent-=(theLight.light.range+0.5*theLight.light.intensity);
	}
	if(Input.GetKeyUp("k"))
	{
		theLight.light.intensity-=5;
		isAttack=false;
		gmobj.GetComponent("CapsuleCollider").active=false;
		playerHealth.playerHealthPercent-=(theLight.light.range+0.5*theLight.light.intensity);
	}
	
	
}