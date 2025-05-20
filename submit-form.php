<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
    $company = filter_var(trim($_POST['company']), FILTER_SANITIZE_STRING);
    $country_code = filter_var(trim($_POST['country-code']), FILTER_SANITIZE_STRING);
    $phone = filter_var(trim($_POST['phone']), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $requirement = filter_var(trim($_POST['requirement']), FILTER_SANITIZE_STRING);
    $message = filter_var(trim($_POST['message']), FILTER_SANITIZE_STRING);

    // Validate required fields
    if (empty($name) || empty($phone) || empty($email) || empty($requirement)) {
        header("Location: contact.html?status=error&message=Please fill all required fields");
        exit;
    }

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: contact.html?status=error&message=Invalid email address");
        exit;
    }

    // Prepare email
    $to = "wassem.abbas@xpertonehealth.com";
    $subject = "New Contact Form Submission from Xpertone Creative";
    $body = "Name: $name\n";
    $body .= "Company: " . ($company ? $company : "Not provided") . "\n";
    $body .= "Phone: $country_code $phone\n";
    $body .= "Email: $email\n";
    $body .= "Requirement: $requirement\n";
    $body .= "Message: " . ($message ? $message : "Not provided") . "\n";
    $headers = "From: no-reply@xpertonecreative.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        header("Location: contact.html?status=success&message=Your inquiry has been sent successfully");
        exit;
    } else {
        header("Location: contact.html?status=error&message=Failed to send your inquiry. Please try again");
        exit;
    }
} else {
    header("Location: contact.html?status=error&message=Invalid request");
    exit;
}
?>