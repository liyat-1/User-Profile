<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// include database connection
include 'config/database.php';
 
// delete message prompt will be here
header("Content-type:application/json; charset=utf-8");
// select all data
$query = "SELECT  u_id, u_name, u_description,u_photo,u_cover, u_age,u_album_name,u_album_image FROM users ORDER BY u_id DESC";
$stmt = $con->prepare($query);
$stmt->execute();
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo $json;