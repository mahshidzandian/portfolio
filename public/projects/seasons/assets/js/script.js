$(".btn-color").click(function () {

    $('.season').addClass('d-none');
    $(".btn-color").removeClass('active-season');
    $(this).addClass('active-season');
    var season_id = $(this).data('season');
    $("#" + season_id).removeClass('d-none');
    $("." + season_id).removeClass('d-none');

});

$(document).ready(function () {
    $(".btn-color").click(function () {
        var season_id = $(this).data('season');
        if (season_id == "spring") {
            $("footer").css("background-color", "#9ac091");
        } else if (season_id == "summer") {
            $("footer").css("background-color", "#92ca84");
        } else if (season_id == "autumn") {
            $("footer").css("background-color", "#efcf79");
        } else if (season_id == "winter") {
            $("footer").css("background-color", "#d2e7f4");
        }
    });
});

$(".hook").click(function (e) {

    document.querySelector($(this).attr('href')).scrollIntoView({
        behavior: 'smooth'
    });

    e.preventDefault();
});

$(document).ready(function () {
    $(".btn-color").click(function () {
        var season_id = $(this).data('season');
        if (season_id == "spring") {
            $('.txtcolor').css("color", "lightgreen");
        } else if (season_id == "summer") {
            $('.txtcolor').css("color", "green");
        } else if (season_id == "autumn") {
            $('.txtcolor').css("color", "orange");
        } else if (season_id == "winter") {
            $('.txtcolor').css("color", "lightblue");
        }
    });
});