<?php

include_once( "./database.php");


$json_body = file_get_contents('php://input');
$object = json_decode($json_body);

$id = $object->id;

try
{
	//Any kind of info validation must be performed here, and nowhere else.
	//BEFORE sending the SQL command to the database engine.

	$SQLStatement = $connection->prepare("CALL `readUser`(:id)");
	$SQLStatement->bindParam( ':id', $id );
	$SQLStatement->execute();

	$status = array( status=>'ok', description=>'Usuario leido satisfactoriamente!' );

    echo json_encode($status);
}
catch( PDOException $connectionException )
{
    $status = array( status=>'db-error (read_user.php', description=>$connectionException->getMessage() );
    echo json_encode($status);
    die();
}
