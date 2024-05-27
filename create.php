<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Include database connection
include 'config/database.php';

// Check if the request contains POST data
if ($_POST) {
    try {
        // Directory for file uploads
        $target_dir = 'uploads/';

        // File paths for uploaded files
        $target_file_photo = $target_dir . basename($_FILES['photo']['name']);
        $target_file_cover = $target_dir . basename($_FILES['cover']['name']);
        $target_file_album_image = $target_dir . basename($_FILES['album_image']['name']);

        // Move uploaded files to the target directory
        if (move_uploaded_file($_FILES['photo']['tmp_name'], $target_file_photo) && move_uploaded_file($_FILES['cover']['tmp_name'], $target_file_cover)  && move_uploaded_file($_FILES['album_image']['tmp_name'], $target_file_album_image)) {
            // Prepare the SQL insert query
            $query = "INSERT INTO users (u_name, u_description, u_photo, u_cover, u_age,u_album_name,u_album_image) VALUES (:name, :description, :photo, :cover,:age,:album_name,:album_image)";
            $stmt = $con->prepare($query);

            // Bind parameters
            $name = $_POST['name'];
            $description = $_POST['description'];
            $photo = $_FILES['photo']['name'];
            $cover = $_FILES['cover']['name'];
            $age = $_POST['age'];
            $album_name = $_POST['album_name'];
            $album_image = $_FILES['album_image']['name'];

            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':description', $description);
            $stmt->bindParam(':photo', $photo);
            $stmt->bindParam(':cover', $cover);
            $stmt->bindParam(':age', $age);
            $stmt->bindParam(':album_name', $album_name);
            $stmt->bindParam(':album_image', $album_image);

            // Execute the query
            if ($stmt->execute()) {
                // Return success response as JSON
                echo json_encode(array('result' => 'success'));
            } else {
                // Return failure response as JSON
                echo json_encode(array('result' => 'fail'));
            }
        } else {
            echo json_encode(array('error' => 'Failed to move uploaded files.'));
        }
    } catch (PDOException $exception) {
        // Return error message as JSON
        echo json_encode(array('error' => 'An error occurred: ' . $exception->getMessage()));
    }
} else {
    // Return error message as JSON if no POST data is present
    echo json_encode(array('error' => 'No data received.'));
}
?>