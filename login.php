


<?php

// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    // Get the form data
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];

    // Validate the form data
    if (empty($username)) {
        echo "Please enter a username.";
    } else if (empty($password)) {
        echo "Please enter a password.";
    } else if (empty($email)) {
        echo "Please enter an email address.";
    } else {

        // Check if the username already exists
        $file = fopen('users.txt', 'r');
        while (($line = fgets($file)) !== false) {
            $parts = explode(':', $line);
            if ($parts[0] == $username) {
                echo "The username already exists.";
                fclose($file);
                exit;
            }
        }
        fclose($file);

        // Create a new user and store the data in the text file
        $file = fopen('users.txt', 'a');
        fwrite($file, "$username:$password\n");
        fclose($file);

        // Login the user
        echo "Login successful.";
    }

}

?>



