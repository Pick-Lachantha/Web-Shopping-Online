<?php
    require_once('./db.php');

    try{
        if($_SERVER['REQUEST_METHOD']=='GET'){
            $object = new stdClass();

            $stmt = $db->prepare('selec * form sp_product order by id desc');

            if($stmt->execute()){
                $num = $stmt->rowCount();
                if ($num > 0) {
                    
                    $object->Result = array();
                    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                        extract($row);
                        $items = array(
                            "This is Name" => $name,
                            "This is price" => $price
                        );
                        array_push($object->Result, $items);
                    }
                    $object->RespCode = 200;
                    $object->RespMessage = 'success';
                    http_response_code(200);

                }else{
                    $object->RespCode = 400;
                    $object->Log = 0;
                    $object->RespMessage = 'Bad : Not Found Data';
                    http_response_code(400);

                }
            }else{
                $object->RespCode = 500;
                $object->Log = 1;
                $object->RespMessage = 'Bad : bad SQL';
                http_response_code(400);


            }
        }else{
            http_response_code(405);
        }
    }
    catch(PEOException  $e){
        http_response_code(500);
        echo $e->getMessage();
    }
?> 