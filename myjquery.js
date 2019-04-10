$(document).ready(function () {
    $("rect").click(function (event) {
        //alert( `Thanks for visiting! - mouse x,y (${event.clientX},${event.clientY})`);
        var msg = `Thanks for the click! - mouse x,y (${event.clientX},${event.clientY})`;
        $("text.msgBox").text(msg);
        $(this).css("fill", "yellow")
    });

    $("a").addClass("test");
    $("p.p2").hide();

    //click with animation
    $("p.p1").click(function (event) {
        $(this).hide("slow");
        $("p.p2").show("slow");
    });

    $("p.p2").click(function (event) {
        $(this).hide("slow");
        $("p.p1").show("slow");
    });

    //double click testing
    $("div.dblClick").dblclick(function () {
        var txt1 = "Double Click Me!";
        var txt2 = "Successful double click!";
        var currText = $(this).text();
        if (currText == txt1) {
            $(this).html(txt2);
        } else {
            $(this).html(txt1);
        }
    });

    //focus event on an input box
    $("input").focus(function () {
        $(this).css("background-color", "#cccccc");
    });

    $("input").blur(function () {
        $(this).css("background-color", "#ffffff");
    });

    //multipe event on an element
    $("#multipleEvent").on({
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function () {
            $(this).css("background-color", "white");
        },
        click: function () {
            $(this).css("background-color", "yellow");
        }
    });

    //slider
    $("p.up").dblclick(function () {
        $("div.down").slideToggle("slow", function() {
            $("p.up").html("I just did that. didn't I?");
        });
    });

});

