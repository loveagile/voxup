$(window).on("load", function () {
    $(".loading").stop().animate({ opacity: 1 }, {
        "duration": 1500, complete: function () {
            $(this).remove();
        }
    });
});

$(document).ready(function () {
    $("#msgInput").on("input", function () {
        if ($(this).val().length) {
            // $("#msgBtn svg path").css("stroke", "#00B1E7");
        } else {
            // $("#msgBtn svg path").css("stroke", "#D6D6D6");
        }
    });
    $("#startBtn").click(function () {
        $("#msgForm").css("display", "block");
        $(".evaluation").css("display", "flex");
        $(".content").hide();
    });
    $("#msgBtn").click(function() {
        $(".voxup").hide();
        $(".finishPage").css("display", "flex");
    })
    $("#finishBtn").click(function() {
        $(".voxup").show();
        $(".finishPage").css("display", "none");
        $("#msgInput").val("");
    })
});