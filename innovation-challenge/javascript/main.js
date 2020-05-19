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
            // append current stock to html list
            timeslots += timeslotToHtml(timeslot_table[i]);
        }
        // get target element and change contents to new stock list
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

    // $("#search-availability").click(function() {
    //     let branch_location = document.getElementById("branch-inquire").value;
    //     let booking_date = document.getElementById("date-inquire").value;
    //     let booking_time = document.getElementById("time-inquire").value;
    //     let params = "branch-inquire=" + branch_location + "&date-inquire=" + booking_date + "&time-inquire=" + booking_time;

    //     fetch("showTimes.php", {
    //         method: 'POST',
    //         credentials: 'include',
    //         headers: { "Content-Type":"application/x-www-form-urlencoded" },
    //         body: params
    //     })
    //     .then(response => response.text())
    //     .then(success)
    // });

    // $("#branch-inquire").change(function() {
    //     let x = $("#branch-inquire").val();
    //     alert("Branch has been changed to " + x);
    //     display();
    // });

    $("#navigate-to-booking-page").click(function() {
        location.href = "booking-page.php";
    });

    $("#view-availability").click(function() {
        location.href = "index.html";
    });

    $("#confirmation-cancel").click(function() {
        location.href = "booking-page.php";
    });

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