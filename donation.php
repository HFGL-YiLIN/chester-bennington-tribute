<?php

$name = '';

$number = 0; 

$okMessage = '';

$errorMessage = 'Oops! Some error occurred. Please try again :-)'; 

try
{
    if(count($_POST) == 0) throw new \Exception('Form is empty'); 

    $name = $_POST["subName"];
    $number = $_POST["subNum"];

    $messageArray = array('$name' => $name, '$number' => $number); 

    $template = 'Dear $name, thank you very much for your $number LOVE(s)!'; 
    
    $okMessage = strtr($template, $messageArray); 

    $replyArray = array('type' => 'success', 'message' => $okMessage); 

}
catch (\Exception $e) 
{
    $replyArray = array('type' => 'danger', 'message' => $errorMessage); 
}


// if requested by AJAX request return JSON response
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($replyArray);

    header('Content-Type: application/json');

    echo $encoded;
}
// else just display the message
else {
    echo $replyArray['message'];
}





?> 