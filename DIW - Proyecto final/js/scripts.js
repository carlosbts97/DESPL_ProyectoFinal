$(document).ready(function () {
    function compra() {
        var cantidad = $("body > .container > #main > .product").length;
        $("header .user-utils #shopping-cart > span").text(cantidad);
        if (cantidad == 0) {
            $("#main").text("No hay ningún producto en el carrito");
        }
    }
    function sumar() {
        var suma = 0;
        $(".preciobotella").each(function () {
            suma += parseFloat($(this).text());
            $(".preciototal").text(suma);

        })
    }
    compra();
    sumar();
    $("#eliminar1").on("click", function () {
        $("#botella1").remove();
        compra();
        sumar();
    });
    $("#eliminar2").on("click", function () {
        $("#botella2").remove();
        compra();
        sumar();
    });

    $(document).scroll(function () {

        if ($(this).scrollTop() > 30) {
            $('#totop').fadeIn(500);

        } else {
            $('#totop').fadeOut(500);
        }
    });

    $('#totop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });


});