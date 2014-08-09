#pragma strict

var separated = false;
var playerController:ThirdPersonController;
var petController:ThirdPersonController;
var petFollow:followPlayer;
var petEnable:boolean;
var petLight:GameObject;

function Start () {
   playerController = gameObject.Find("player1").GetComponent("ThirdPersonController");
   petController = gameObject.Find("player2").GetComponent("ThirdPersonController");
   petFollow = gameObject.Find("player2").GetComponent("followPlayer");
   for (var o : GameObject in GameObject.FindGameObjectsWithTag("tool"))
      {
         o.GetComponent(MeshRenderer).enabled=false;
         petLight.active=false;
      }
      
   petEnable=false;
}


function Update () {
	if(Input.GetKeyDown("p"))
	{
		petEnable=!petEnable;
	}
	
	if(petEnable == true)
	{
		petActive();
		
		
	}
	else
	{
		petDisactive();
	}
}

function petActive()
{
		playerController.enabled=false;
		petController.enabled=true;
		petFollow.enabled=false;
		for (var o : GameObject in GameObject.FindGameObjectsWithTag("tool"))
      	{
         o.GetComponent(MeshRenderer).enabled=true;
      	}
      
      	petLight.active=true;
}

function petDisactive()
{
		playerController.enabled=true;
		petController.enabled=false;
		petFollow.enabled=true;
		for (var o : GameObject in GameObject.FindGameObjectsWithTag("tool"))
      	{
         o.GetComponent(MeshRenderer).enabled=false;
      	}
      	petLight.active=false;
}

