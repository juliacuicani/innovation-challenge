<?php
/*  This class represents a timeslot object in the availability table. 
    This class is ultimately used to show the time availability schedule
    on the index page.
*/

class Timeslot implements JsonSerializable{
    private $timeslot_id;
    private $timeslot_time;
    private $client_card;
    private $is_booked;

    public function __construct($timeslot_id, $timeslot_time, $client_card, $is_booked) {
        $this->timeslot_id = $timeslot_id;
        $this->timeslot_time = $timeslot_time;
        $this->client_card = $client_card;
        $this->is_booked = $is_booked;
    }
   
    public function get_id() {
        return $this->timeslot_id;
    }

    public function get_time() {
        return $this->timeslot_time;
    }

    public function get_client_card() {
        return $this->client_card;
    }

    public function get_is_booked() {
        return $this->is_booked;
    }

    public function toListItem() {
        return "<li>$this->timeslot_id / $this->timeslot_time / $this->client_card / $this->is_booked</li>";
    }

    public function jsonSerialize() {
        return get_object_vars($this);
    }
}