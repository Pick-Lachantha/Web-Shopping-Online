<?php 
    require_once('./db.php');
   
    try{
      if($_SERVER['REQUEST_METHOD']=='GET') {
        $object = new stdClass;

        $stmt =$db->prepare('selec * from sp_product order by id desc');

        if($stmt->execute()){
            $num = $stmt->rowCount();
            if($num > 0){

                $object->Result = array();
                while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                    extract($row);
                    $items = array(
                        "thisisname" => $name,
                        "thisisname" => $price,
                    );
                    array_push($object->Result, $items);

                }
                $object->RespCode = 200;
                $object->RespCode = 'success';
                http_response_code(200)
            }
            else{

            }

        }
        else{

        }
      }
      else{

      }
    }
    catch(PEOException $e){
        echo $e->getMessage();
    }
?>