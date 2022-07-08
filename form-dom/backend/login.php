<?php

/*
   	Refactoring 5
	Example code for ISFT151
	Prácticas Profesionalizantes III

	Copyright 2022 mgsantiago <mgsantiago@protonmail.com>

	This program is free software; you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation; either version 2 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program; if not, write to the Free Software
	Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
	MA 02110-1301, USA.

*/

//----------------------------------------Request Process---------------------------------------

//Recepcionar el cuerpo de la petición bajo método POST
//Decodificar el cuerpo de la petición de origen como JSON
$input = json_decode( file_get_contents('php://input') );

//-----------------------------------------Model Functions--------------------------------------

//-------------------------------- Simulation of requested resource ----------------------------

/*$response = {};
$response->username = $input->username;
$response->password = $input->password;*/

//---------------------------------------------JSON Response ---------------------------------------
echo json_encode( 'Datos pasados!' );

?>
