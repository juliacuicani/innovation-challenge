<?php

include "connect.php";
include "timeslot.php";

$booking_date = filter_input(INPUT_POST, 'date-inquire', FILTER_SANITIZE_STRING);
$booking_time = filter_input(INPUT_POST, 'time-inquire', FILTER_SANITIZE_STRING);
$branch_location = filter_input(INPUT_POST, 'branch-inquire', FILTER_SANITIZE_STRING);

// $command = "SELECT * FROM availability ORDER BY timeslot_id ASC";
// $stmt = $dbh->prepare($command);
// $success = $stmt->execute();
echo $branch_location;

$timesList = [];

if ($branch_location == "Branch 1") {
    $command = "SELECT * FROM availability ORDER BY timeslot_id ASC";
    $stmt = $dbh->prepare($command);
    $success = $stmt->execute();
        while ($row = $stmt->fetch()) {
            $timeslot = new Timeslot($row["timeslot_id"], $row["timeslot_time"], $row["client_card"], $row["is_booked"]);
            array_push($timesList, $timeslot);
            return $timesList;
        }
}
// $timesList = [];
// while ($row = $stmt->fetch()) {
//     $timeslot = new Timeslot($row["timeslot_id"], $row["timeslot_time"], $row["client_card"], $row["is_booked"]);
//     array_push($timesList, $timeslot);
// }

echo json_encode($timesList);
