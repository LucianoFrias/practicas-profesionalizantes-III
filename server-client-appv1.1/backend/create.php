<?php

include_once( "./database.php");


//$json_body = file_get_contents('php://input');
//$object = json_decode($json_body);

$password = '123456'
$username = 'Luciano';

try
{
	//Any kind of info validation must be performed here, and nowhere else.
	//BEFORE sending the SQL command to the database engine.

	$SQLStatement = $connection->prepare("CALL `createUser`(:username, :password)");
	$SQLStatement->bindParam( ':username', $username );
	$SQLStatement->bindParam( ':password', $password );
	$SQLStatement->execute();

	$status = array( status=>'ok', description=>'Usuario Creado Satisfactoriamente!' );

    echo json_encode($status);
}
catch( PDOException $connectionException )
{
    $status = array( status=>'db-error (create.php', description=>$connectionException->getMessage() );
    echo json_encode($status);
    die();
}

?>