#pragma strict
var detectObject:Transform;
var distanceAttack: float; 
var attackSpeed:float; 
var rotationSpeed:float;
static var spiderLife=1;

function Start () {

}

function Update () {
	
	var dist = Vector3.Distance(detectObject.position, transform.position);
	if(dist<distanceAttack)
    {
	   print("attack");
	   spiderMove();
    }
    

}

function spiderMove()
{
	var delta = detectObject.position - transform.position;
	delta.Normalize();
	//transform.rotation = Quaternion.Slerp(transform.rotation, 
       		//Quaternion.LookRotation(detectObject.position - transform.position), rotationSpeed * Time.deltaTime);
    transform.position = transform.position + (delta * attackSpeed*Time.deltaTime);

}

function OnTriggerEnter(other:Collider)
{
   if(other.gameObject.tag == "health")
   {
      Debug.Log("Dead");
      Destroy(other.transform.parent.gameObject);
      Application.LoadLevel(3);
   }
}