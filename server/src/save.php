<?php

session_start();
require('db_config.php');

$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);

$uniqId = time().'_'. sprintf('%010u', rand() );
$img_id = 0;
foreach ($data->images as $img) {
    if (preg_match('/^data:image\/(\w+);base64,/', $img, $type)) {
        $img = substr($img, strpos($img, ',') + 1);
        $type = strtolower($type[1]); // jpg
    
        if (!in_array($type, [ 'jpg', 'jpeg'])) {
            throw new \Exception('invalid image type: '. $type);
        }
        $img = str_replace( ' ', '+', $img );
        print($img);
        print("-------------------");
        $img = base64_decode($img);
    
        if ($img === false) {
            throw new \Exception('base64_decode failed');
        }
        $file_name = $uniqId . sprintf('_%02u', $img_id ) . '.jpg';
        file_put_contents('images/' . $file_name, $img);
        $img_id += 1;
    } else {
        throw new \Exception('did not match data URI with image data');
    }
}


$client = $_SERVER["REMOTE_ADDR"];
$sql = "INSERT INTO entries ";
$sql .= "(`id`, `title`, `author`, `email`, `text`, `created_at`, `num_imgs`, `client`)";
$sql .=  "VALUES (";
$sql .= "'".$uniqId."',";
$sql .= "'".$data->title."',";
$sql .= "'".$data->author."',";
$sql .= "'".$data->email."',";
$sql .= "'".$data->text."',";
$sql .= "now(),";
$sql .= $img_id . ",";
$sql .= "'".$client."')";
$mysqli->query($sql);


$mysqli->close();
?>