<?php

include_once( "./database.php");


$json_body = file_get_contents('php://input');
$object = json_decode($json_body);

$id = $object->id;
$name = $object->new_name;
$password = $object->new_password;
$role = $object->new_role;

try
{
	//Any kind of info validation must be performed here, and nowhere else.
	//BEFORE sending the SQL command to the database engine.

	$SQLStatement = $connection->prepare("CALL `updateUser`(:id, :new_name, :new_password, :new_role)");
	$SQLStatement->bindParam( ':id', $id );
    $SQLStatement->bindParam (':new_name', $name);
    $SQLStatement->bindParam (':new_password', $password);
    $SQLStatement->bindParam (':new_role', $role);
	$SQLStatement->execute();

	$status = array( status=>'ok', description=>'Usuario actualizado satisfactoriamente!' );

    echo json_encode($status);
}
catch( PDOException $connectionException )
{
    $status = array( status=>'db-error (update_user.php', description=>$connectionException->getMessage() );
    echo json_encode($status);
    die();
}
