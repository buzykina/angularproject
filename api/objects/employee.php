<?php
class Employee{
 
    // database connection and table name
    private $conn;
    private $table_name = "employee";
 
    // object properties
    public $id;
    public $department_id;
    public $department_name;
    public $first_name;
    public $last_name;
    public $birth_date;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
function read(){
 
    // select all query
    $query = "SELECT
                 d.name as department_name,e.department_id,e.id, e.first_name, e.last_name, e.birth_date
            FROM
                " . $this->table_name . " e
                LEFT JOIN
                    department d
                        ON e.department_id = d.id
            ORDER BY
                e.id";
 
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
            (`department_id`,`first_name`,`last_name`,`birth_date`)
            values (?, ?, ?, ?)";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
    if(!$stmt)
    {
        return false;
    }
    // sanitize
    $this->department_id=htmlspecialchars(strip_tags($this->department_id));
    $this->first_name=htmlspecialchars(strip_tags($this->first_name));
    $this->last_name=htmlspecialchars(strip_tags($this->last_name));
    $this->birth_date= $this->birth_date == null ? null : htmlspecialchars(strip_tags($this->birth_date));
    // bind values
    $stmt->bindParam(1, $this->department_id);
    $stmt->bindParam(2, $this->first_name);
    $stmt->bindParam(3, $this->last_name);
    $stmt->bindParam(4, $this->birth_date);
 
    // execute query
    return $stmt->execute();

     
}
// used when filling up the update employee form
function readOne(){
 
    // query to read single record
    $query = "SELECT
                 d.name as department_name, e.id,e.department_id, e.first_name, e.last_name, e.birth_date
            FROM
                " . $this->table_name . " e
                LEFT JOIN
                    department d
                        ON e.department_id = d.id
            WHERE
                e.id = ?
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
    $this->department_id = $row['department_id'];
    $this->department_name = $row['department_name'];
    $this->first_name = $row['first_name'];
    $this->last_name = $row['last_name'];
    $this->birth_date = $row['birth_date'];
}
// update the employee
function update(){
 
    // update query
    $query = "UPDATE
                " . $this->table_name . "
            SET
                department_id = ?, 
                first_name = ?,
                last_name = ?,
                birth_date = ?
            WHERE
                id = ?";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->department_id=htmlspecialchars(strip_tags($this->department_id));
    $this->first_name=htmlspecialchars(strip_tags($this->first_name));
    $this->last_name=htmlspecialchars(strip_tags($this->last_name));
    $this->birth_date=htmlspecialchars(strip_tags($this->birth_date));
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