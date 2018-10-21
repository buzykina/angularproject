<?php
class Task{
 
    // database connection and table name
    private $conn;
    private $table_name = "tasks";
 
    // object properties
    public $id;
    public $depID;
    public $employeeID;
    public $name;
    public $deadline; 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
function read(){
 
    // select all query
    $query = "SELECT
                 d.name as department_name,e.last_name as employee_name,t.id,t.depID, t.name, t.deadline
            FROM
                " . $this->table_name . " t
                LEFT JOIN
                    department d
                        ON t.depID = d.id
                LEFT JOIN
                    employee e
                        ON t.employeeID = e.id
            ORDER BY
                t.id";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // execute query
    $stmt->execute();
 
    return $stmt;
}
// create employee
function create(){
 
    // query to insert record
    $query = "INSERT INTO
                " . $this->table_name . "
            (`depID`,`employeeID`,`name`,`deadline`)
            values (?, ?, ?, ?)";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
    if(!$stmt)
    {
        return false;
    }
    // sanitize
    $this->depID=htmlspecialchars(strip_tags($this->depID));
    $this->employeeID=htmlspecialchars(strip_tags($this->employeeID));
    $this->name=htmlspecialchars(strip_tags($this->name));
    $this->deadline= $this->deadline == null ? null : htmlspecialchars(strip_tags($this->deadline));
    // bind values
    $stmt->bindParam(1, $this->depID);
    $stmt->bindParam(2, $this->employeeID);
    $stmt->bindParam(3, $this->name);
    $stmt->bindParam(4, $this->deadline);
 
    // execute query
    return $stmt->execute();

     
}
// used when filling up the update employee form
function readOne(){
 
    // query to read single record
    $query = $query = "SELECT
                 d.name as department_name,e.last_name as employee_name,t.id,t.depID, t.name, t.deadline
            FROM
                " . $this->table_name . " t
                LEFT JOIN
                    department d
                        ON t.depID = d.id
                LEFT JOIN
                    employee e
                        ON t.employeeID = e.id
            WHERE
                t.id = ?
            LIMIT
                0,1";
 
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
 
    // bind id of employee to be updated
    $stmt->bindParam(1, $this->id);
 
    // execute query
    $stmt->execute();
 
    // get retrieved row
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
    // set values to object properties
    $this->depID = $row['depID'];
    $this->department_name = $row['department_name'];
    $this->employee_name = $row['employee_name'];
    $this->id = $row['id'];
    $this->deadline = $row['deadline'];
    $this->name = $row['name'];
}
// update the employee
function update(){
 
    // update query
    $query = "UPDATE
                " . $this->table_name . "
            SET
                depID = ?, 
                employeeID = ?,
                name = ?,
                deadline = ?
            WHERE
                id = ?";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->depID=htmlspecialchars(strip_tags($this->depID));
    $this->employeeID=htmlspecialchars(strip_tags($this->employeeID));
    $this->name=htmlspecialchars(strip_tags($this->name));
    $this->deadline=htmlspecialchars(strip_tags($this->deadline));
    $this->id=htmlspecialchars(strip_tags($this->id));
    // bind values
    $stmt->bindParam("1", $this->department_id);
    $stmt->bindParam("2", $this->first_name);
    $stmt->bindParam("3", $this->last_name);
    $stmt->bindParam("4", $this->birth_date);
     $stmt->bindParam("5", $this->id);
 
    // execute the query
    if($stmt->execute()){
        return true;
    }
 
    return false;
}
// delete the product
function delete(){
 
    // delete query
    $query = "DELETE FROM " . $this->table_name . " WHERE id = ?";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->id=htmlspecialchars(strip_tags($this->id));
 
    // bind id of record to delete
    $stmt->bindParam(1, $this->id);
 
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}
}