<?php

include_once( "./database.php");


$json_body = file_get_contents('php://input');
$object = json_decode($json_body);

$password = $object->password;
$username = $object->name;

try
{
	//Any kind of info validation must be performed here, and nowhere else.
	//BEFORE sending the SQL command to the database engine.

	$SQLStatement = $connection->prepare("CALL `createUser`(:name, :password)");
	$SQLStatement->bindParam( ':name', $username );
	$SQLStatement->bindParam( ':password', $password );
	$SQLStatement->execute();

	$status = array( status=>'ok', description=>'Usuario creado satisfactoriamente!' );

    echo json_encode($status);
}
catch( PDOException $connectionException )
{
    $status = array( status=>'db-error (create_user.php', description=>$connectionException->getMessage() );
    echo json_encode($status);
    die();
}
