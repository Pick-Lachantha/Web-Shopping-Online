<?php
    require_once('./db.php');

    try{
        if($_SERVER['REQUEST_METHOD']=='GET'){
            $object = new stdClass();

            $stmt = $db->prepare('');
        }
        else{

        }
    }
    catch(PEOException  $e){
        echo $e->getMessage();
    }
?> 