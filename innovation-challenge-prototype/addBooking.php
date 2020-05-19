<?php
/*  Adds a booking entry to the bookings table and updates 
    availability table to show that the timeslot has been booked.
*/

// connect to database
include "connect.php";

$first_name = filter_input(INPUT_POST, 'first-name', FILTER_SANITIZE_STRING);
$last_name = filter_input(INPUT_POST, 'last-name', FILTER_SANITIZE_STRING);
$client_card = filter_input(INPUT_POST, 'client-card-number', FILTER_VALIDATE_INT);
$booking_date = filter_input(INPUT_POST, 'date-selected', FILTER_SANITIZE_STRING);
$booking_time = filter_input(INPUT_POST, 'time-selected', FILTER_SANITIZE_STRING);
$branch_location = filter_input(INPUT_POST, 'branch-selected', FILTER_SANITIZE_STRING);

// add new booking to bookings table
if ($first_name !== null && $last_name !== null && $booking_time !== null && $booking_date !== null && $branch_location !== null) {
    $command = "INSERT INTO bookings (first_name, last_name, client_card, booking_date, booking_time, branch_location) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $dbh->prepare($command);
    $params = [$first_name, $last_name, $client_card, $booking_date, $booking_time, $branch_location];
    $success = $stmt->execute($params);
}

// update availability table to set timeslot to 'is_booked'
$command = "UPDATE availability SET is_booked = 1, client_card = ? WHERE timeslot_time = ?";
$stmt = $dbh->prepare($command);
$params = [$client_card, $booking_time];
$success = $stmt->execute($params);

echo $first_name . $last_name . $client_card . $booking_date . $booking_time . $branch_location;