<?php

include_once( "./database.php");


//$json_body = file_get_contents('php://input');
//$object = json_decode($json_body);

$password = '123456' // Hardcoded
$username = 'Luciano'; // Hardcoded

try
{
	//Any kind of info validation must be performed here, and nowhere else.
	//BEFORE sending the SQL command to the database engine.

	$SQLStatement = $connection->prepare("CALL `validateUser`(:username, :password)");
	$SQLStatement->bindParam( ':username', $username );
	$SQLStatement->bindParam( ':password', $password );
	$SQLStatement->execute();

	$status = array( status=>'ok', description=>'Usuario Conectado Exitosamente!' );
	$db_response = $SQLStatement->fetchAll(PDO::FETCH_ASSOC);
	$db_user = $db_response[1]["id"];


	$response_client = null; 

	if (count($db_response) != 0)
	{
		$id_user = $db_response[1]["id"];
		$response_client = ["status" => "OK", "response" => $id_user];
	}
	else
	{
		$response_client = ["status", "ERROR", "description" => "Usuario o contraseña erronea."];
	}


    echo json_encode($response_client);
}
catch( PDOException $connectionException )
{
    $status = array( status=>'db-error (login.php', description=>$connectionException->getMessage() );
    echo json_encode($status);
    die();
}

?>