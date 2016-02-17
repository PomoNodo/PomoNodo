/**
 * Created by alexandr on 12.02.2016.
 */

"use strict";
function PomodoApp() {
    var version = "v1.0";


    $(function () {
        window.app = new PomodoApp();
        window.app.start();
    });

    this.start = function ()
    {
        $("#new-task-name").keypress(function (e) {
                if (e.which == 13) //enter key
                {
                    addTask();
                    return false;
                }
            })
            .focus();

            $("#app>header").append(version);
            setStatus("ready");
    };


    function addTask()
    {
        var taskName = $("#new-task-name").val();
        if (taskName)
        {
            addTaskElement(taskName);
            //reset text field
            $("#new-task-name").val("").focus();
        }
    }

    function addTaskElement(taskName)
    {
        var $task = $("<li></li>");
        $task.text(taskName);
        $("#task-list").append($task);

    }
}