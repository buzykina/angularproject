<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/employee.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare employee object
$employee = new Employee($db);
 
// set ID property of employee to be edited
$employee->id = isset($_GET['id']) ? $_GET['id'] : die();
 
// read the details of employee to be edited
$employee->readOne();
 
// create array
$employee_arr = array(
    "id" =>  $employee->id,
    "department_id" => $employee->department_id,
    "department_name" => $employee->department_name,
    "first_name" => $employee->first_name,
    "last_name" => $employee->last_name,
    "birth_date" => $employee->birth_date
 
);
 
// make it json format
print_r(json_encode($employee_arr));
?>