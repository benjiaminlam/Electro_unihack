#pragma strict

var elec: Rigidbody;
function OnTriggerEnter(other:Collider)
{
   if(other.gameObject.tag == "enemy")
   {
      
      spiderAttack.spiderLife=0;
      var whoIm:GameObject = other.gameObject;
      if(whoIm.GetComponent("dropElec")!=null)
      {
      	Debug.Log("drop");
      	Instantiate(elec, other.transform.position,other.transform.rotation);
      	Debug.Log("Dead");
      	Destroy(other.gameObject);
      	
      }
      else{
      	//Debug.Log("drop");
      	//Instantiate(elec, other.transform.position,other.transform.rotation);
      	Debug.Log("Dead");
      	Destroy(other.gameObject);
      }
      
      
   }
}