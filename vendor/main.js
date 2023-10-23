$("document").ready(function () {
    $("#navbar-btn").click(() => {
        $("#navbar-btn").toggleClass("show");
        if ($("#navbar-btn").hasClass("show")) {
            // console.log(document.querySelectorAll("#doc"));
            document.querySelectorAll("#doc").forEach((element) => {
                element.addEventListener("click", () => {
                    $("#navbar-btn").removeClass("show");
                });
            });
        }
    });

    $("#navbar-close").click(() => {
        $("#navbar-btn").removeClass("show");
    });

    $(window).on("scroll", () => {
        let off = document.getElementById("doc").offsetTop;
        let offScrool = window.pageYOffset;
        if (offScrool > off) {
            $("#navbar-nya").addClass("fix");
        } else {
            $("#navbar-nya").removeClass("fix");
        }
    });
});
