<?php 
    $db_host = 'localhost';
    $db_name = 'shoping';
    $db_user = 'root';
    $db_pass = '';

    header('Content-Type: application/json');

    try{
        $db = new PDO("mysql:host=${db_host}; dbname=${dbname}", $db_user, $db_pass);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        //echo"database is cinnected";
    }
    catch(PEOException  $e){
        echo $e->getMessage();
    }
?>