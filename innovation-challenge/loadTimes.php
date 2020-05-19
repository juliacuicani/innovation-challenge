<?php

include "connect.php";
include "timeslot.php";

$command = "SELECT * FROM availability ORDER BY timeslot_id ASC";
$stmt = $dbh->prepare($command);
$success = $stmt->execute();

$timesList = [];
while ($row = $stmt->fetch()) {
    $timeslot = new Timeslot($row["timeslot_id"], $row["timeslot_time"], $row["client_card"], $row["is_booked"]);
    array_push($timesList, $timeslot);
}

echo json_encode($timesList);
