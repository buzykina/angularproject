<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/tasks.php';
 
// instantiate database and task object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$task = new Task($db);
 
// query tasks
$stmt = $task->read();
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // tasks array
    $tasks_arr=array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
 
        $task_item=array(
            "id" => $id,
            "depID" => $depID,
            "department_name" => $department_name,
            "employeeID" => $employeeID,
            "employee_name" => $employee_name,
            "deadline" => $deadline,
            "name" => $name
        );
 
        array_push($tasks_arr, $task_item);
    }
 
    echo json_encode($tasks_arr);
}
 
else{
    echo json_encode(
        array("message" => "No tasks found.")
    );
}
?>