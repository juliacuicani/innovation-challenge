<?php
/* This script connects the app to the database */
    try {
        $dbh = new PDO(
            "mysql:host=localhost;dbname=innovation_challenge",
            "root", 
            ""
        );
    } catch (Exception $e) {
        die("ERROR: Could not connect. {$e->getMessage()}");
    }