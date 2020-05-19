$(document).ready(function() {

    display();
    /**
     * This function employs an AJAX request to get the list of timeslots
     * and then calls the success function to display the list on the page.
     */
    function display() {
        fetch ("loadTimes.php", { credentials: 'include' })
        .then(response => response.json())
        .then(success)
    }

    /**
     * This function is called when the AJAX call is complete and the response
     * has been received.
     * @param {String} timeslot_table - a json encoded list of timeslots
     */
    function success(timeslot_table) {
        let timeslots = "";
        // iterate through the list
        for (let i = 0; i < timeslot_table.length; i++) {
            // append current timeslot to html list
            timeslots += timeslotToHtml(timeslot_table[i]);
        }
        // get target element and change contents to new timeslot list
        $("#timeslot_table").html("<table><tr><th>Time</th><th>Availability</th></tr>" + timeslots + "</table>");
        $(".available:contains(0)")
            .css("background-color", "rgb(202, 238, 250)")
            .html("Available").hover(function() {
                $(this).css("background-color", "rgb(177, 214, 250)");
            }, function() {
                $(this).css("background-color", "rgb(202, 238, 250)");
            });
        $(".available:contains(1)").css("background-color", "rgb(245, 248, 249)").html("Not Available");
        console.log(timeslot_table); // debug
    }

    /**
     * This function formats a timeslot string object to html
     * @param {String} timeslot 
     */
    function timeslotToHtml(timeslot) {
        let html = "";
        html += "<tr><td class='time'>" + timeslot.timeslot_time + "</td><td class='available'>" + timeslot.is_booked + "</td></tr>";
        return html;
    }

    // button that navigates to booking page
    $("#navigate-to-booking-page").click(function() {
        location.href = "booking-page.php";
    });

    // button that navigates to schedule page
    $("#view-availability").click(function() {
        location.href = "index.html";
    });

    // button that navigates back to booking page to edit or cancel a booking
    $("#confirmation-cancel").click(function() {
        location.href = "booking-page.php";
    });

    // button that books a time for the user
    $("#book-now").click(function() {
        
        let firstname = document.getElementById("first-name").value;
        let lastname = document.getElementById("last-name").value;
        let clientcard = document.getElementById("client-card-number").value;
        let bookingdate = document.getElementById("date-selected").value;
        let bookingtime = document.getElementById("time-selected").value;
        let branchlocation = document.getElementById("branch-selected").value;

        let params = "first-name=" + firstname + "&last-name=" + lastname + "&client-card-number=" + clientcard + "&date-selected=" + bookingdate + "&time-selected=" + bookingtime + "&branch-selected=" + branchlocation;
        
        fetch("addBooking.php", {
            method: 'POST',
            credentials: 'include',
            headers: { "Content-Type":"application/x-www-form-urlencoded" },
            body: params
        })
        .then(response => response.text())
        .then(function () {
            console.log("booking added");
        })

        location.href = "confirmation.php";
    });

});