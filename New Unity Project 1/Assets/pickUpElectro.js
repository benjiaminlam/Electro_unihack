#pragma strict

function OnTriggerEnter (other : Collider) {
		if(other.gameObject.tag =="electro"){
			if(playerHealth.playerHealthPercent<100)
			{
				playerHealth.playerHealthPercent+=10;
				Destroy(other.gameObject);
			}
		Debug.Log("On Hit");
		}
	}