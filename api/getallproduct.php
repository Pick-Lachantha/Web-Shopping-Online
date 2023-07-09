<?php
    require_once('./db.php');

    try{
        if($_SERVER['REQUEST_METHOD']=='GET'){
            $object = new stdClass();

            $stmt = $db->prepare('selec * form sp_product order by id desc');

            if($stmt->execute()){
                $num = $stmt->rowCount();
                if ($num > 0) {
                    
                }else{

                }
            }else{

            }
        }else{

        }
    }
    catch(PEOException  $e){
        echo $e->getMessage();
    }
?> 