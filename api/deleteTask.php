<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header('Access-Control-Allow-Origin: http://localhost:4200');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: http://localhost:4200');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS,DELETE'); // Add the allowed HTTP methods
    header('Access-Control-Allow-Headers: Content-Type'); // Add the allowed headers
    exit;
}
// Data connection MYSQL BD
$host = '127.0.0.1:3308';
$user = 'root';
$password = '';
$database = 'api';

$conn = mysqli_connect($host, $user, $password, $database);

// Verify the connection
if ($conn->connect_error) {
  die("Error en la conexión: " . $conn->connect_error);
}

 $taskId = $_GET['id'];


// Insertar la tarea en la base de datos
mysqli_query($conn, "DELETE FROM tasks WHERE id = '$taskId'");

$conn->close();
