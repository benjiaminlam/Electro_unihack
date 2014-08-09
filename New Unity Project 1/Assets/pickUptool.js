#pragma strict

function OnTriggerEnter (other : Collider) {
		if(other.gameObject.tag =="tool"){
			
				Destroy(other.gameObject);
				playerHealth.leftTool-=1;
		Debug.Log("On Hit");
		}
	}