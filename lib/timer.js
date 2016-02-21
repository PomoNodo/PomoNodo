/**
 * Created by alexandr on 19.02.2016.
 */
$(document).ready(function() {
    var breaktime = 5,
        sessiontime = 25,
        isTimerClicked = false,
        pause = false,
        seconds = 60,
        minutes = 0,
        intervalType = 0,
        startTime = 0,
        secondsStr = "",
        minutesStr = "",
        myVar ="";
    $("#type").text("Session");
    $('#breakbtnminus').click(function(){
        breaktime-=1;
        if (breaktime < 1) {
            breaktime = 1;
        };
        $('#breaktime').text(breaktime);
    });

    $('#breakbtnplus').click(function(){
        breaktime+=1;
        $('#breaktime').text(breaktime);
    });

    $('#sessionbtnminus').click(function(){
        sessiontime-=1;
        if (sessiontime < 1) {
            sessiontime = 1;
        };
        $('#sessiontime').text(sessiontime);
        $('#timer').text(sessiontime+" : 00");
    });

    $('#sessionbtnplus').click(function(){
        sessiontime+=1;
        $('#sessiontime').text(sessiontime);
        $('#timer').text(sessiontime+" : 00");
    });

    function updateTimer(sessionType){

        seconds = 60;
        minutes = 0;

        if (sessionType) {
            console.log("mmm");
            $("#type").text("Session");
            intervalType = sessiontime;
        } else {

            $("#type").text("Break");
            intervalType = breaktime;
            console.log("mm"+intervalType);
        }
        if (myVar) {
            clearInterval(myVar);
        }

        myVar = setInterval(function(){


            console.log(intervalType);
            if (seconds == 0) {
                seconds = 60;
            };
            if (seconds%60 == 0) {
                minutes += 1;
            };

            seconds -= 1;
            secondsStr = 0;
            secondsStr = seconds;
            if (secondsStr < 10) {
                secondsStr = "0"+secondsStr;
            } else {
                secondsStr = secondsStr;
            }
            minutesStr = intervalType - minutes;



            if (parseInt(minutesStr) == 0 && parseInt(secondsStr) == 0) {

                if (sessionType) {
                    sessionType = false;
                } else {
                    sessionType = true;
                }

                updateTimer(sessionType);
            };
            $('#timer').text(minutesStr+" : "+secondsStr);
            if (pause) {
                clearInterval(myVar);
            };
        },1000);

    }

    $('#timerbtn').click(function(){
        isTimerClicked = !isTimerClicked;

        if (isTimerClicked) {
            $("#sessionbtnplus").attr("disabled", true);
            $("#sessionbtnminus").attr("disabled", true);
            $("#breakbtnminus").attr("disabled", true);
            $("#breakbtnplus").attr("disabled", true);
            pause = false;
            updateTimer(true);
        } else {
            $("#sessionbtnplus").attr("disabled", false);
            $("#sessionbtnminus").attr("disabled", false);
            $("#breakbtnminus").attr("disabled", false);
            $("#breakbtnplus").attr("disabled", false);
            pause = true;
        }





    });
});
