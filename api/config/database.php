<?php
class Database{
    // specify your own database credentials
    private $host = "studmysql01.fhict.local";
    private $db_name = "dbi392854";
    private $username = "dbi392854";
    private $password = "1234";
    public $conn;
 
    // get the database connection
    public function getConnection(){
 
        $this->conn = null;
 
        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }
 
        return $this->conn;
    }
}
?>