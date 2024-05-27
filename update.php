<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Include database connection
include 'config/database.php';

// Check if the form was submitted
if ($_POST) {
    try {
        // Write the update query
        $query = "UPDATE users 
                    SET u_name=:name, u_description=:description, u_age=:age, u_album_name=:album_name";

        // Handle file uploads and update the query accordingly
        $photo = '';
        $cover = '';
        $album_image ='';

        if (isset($_FILES['photo']['name']) && !empty($_FILES['photo']['name'])) {
            $photo = $_FILES['photo']['name'];
            move_uploaded_file($_FILES['photo']['tmp_name'], 'uploads/' . $photo);
            $query .= ", u_photo=:photo ";
        }

        if (isset($_FILES['cover']['name']) && !empty($_FILES['cover']['name'])) {
            $cover = $_FILES['cover']['name'];
            move_uploaded_file($_FILES['cover']['tmp_name'], 'uploads/' . $cover);
            $query .= ", u_cover=:cover ";
        }
        if (isset($_FILES['album_image']['name']) && !empty($_FILES['album_image']['name'])) {
            $album_image = $_FILES['album_image']['name'];
            move_uploaded_file($_FILES['album_image']['tmp_name'], 'uploads/' . $album_image);
            $query .= ", u_album_image=:album_image ";
        }

        $query .= " WHERE u_id = :id";

        // Prepare the query for execution
        $stmt = $con->prepare($query);

        // Posted values
        $id = $_POST['id'];
        $name = $_POST['name'];
        $description = $_POST['description'];
        $age = $_POST['age'];
        $album_name = $_POST['album_name'];

        // Bind the parameters
        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':description', $description);
        $stmt->bindParam(':age', $age);
        $stmt->bindParam(':album_name', $album_name);

        // Bind photo and cover parameters only if they are set
        if (!empty($photo)) {
            $stmt->bindParam(':photo', $photo);
        }

        if (!empty($cover)) {
            $stmt->bindParam(':cover', $cover);
        }

        if (!empty($album_image)) {
            $stmt->bindParam(':album_image', $album_image);
        }

        // Execute the query
        if ($stmt->execute()) {
            echo json_encode(array('result' => 'success'));
        } else {
            echo json_encode(array('result' => 'fail'));
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