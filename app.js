/**
 * Created by alexandr on 12.02.2016.
 */

"use strict";
function MyApp()


{
    var version = "v1.0";
    function setStatus(message)
    {
        $("#app>footer").text(message);
    }
    this.start = function()
    {
        $("#app>header").append(version);
        setStatus("ready");
    };
}