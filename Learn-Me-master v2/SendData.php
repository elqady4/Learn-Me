<?php


	$conn = new mysqli("localhost", "root", "", "testd");
	if($conn->connect_error){
		die($conn->connect_error);
	}
	
if(isset($_POST['reco'])){
	
	
	$myRec=json_decode($_POST['reco'],true);
	print_r($myRec);
	for($i = 0; $i < count($myRec); $i++){
		 $target='';
		 $type='';
		 $date='';
       foreach ($myRec[$i] as $key => $value) {
		    if($key=='target')
				$target=$value;
			if($key=='type' )
				$type=$value;
			if($key=='date')
				$date=$value;
		//unset ($myRec[$value]);
       }
		
		$sql = "Insert Into events values('$target', '$type', '$date')";
		$conn->query($sql);
	 }
	
	//echo $name.' '.$age.' '.$address;
	//echo count($myRec);
	 
	
}



?>














