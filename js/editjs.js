/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//hide show resume blocker
$(document).ready(function () {
    $("#projectBtnHideShow").click(function () {
        $("#project-hide-show").toggle("fast");
        if ($("#projectBtnHideShow").text() == "HIDE THIS SECTION") {
            $("#projectBtnHideShow").text("SHOW THIS SECTION");
        } else {
            $("#projectBtnHideShow").text("HIDE THIS SECTION");
        }
    });

    $("#internBtnHideShow").click(function () {
        $("#intern-hide-show").toggle("fast");
        if ($("#internBtnHideShow").text() == "HIDE THIS SECTION") {
            $("#internBtnHideShow").text("SHOW THIS SECTION");
        } else {
            $("#internBtnHideShow").text("HIDE THIS SECTION");
        }
    });

    $("#workExpBtnHideShow").click(function () {
        $("#work-exp-hide-show").toggle("fast");
        if ($("#workExpBtnHideShow").text() == "HIDE THIS SECTION") {
            $("#workExpBtnHideShow").text("SHOW THIS SECTION");
        } else {
            $("#workExpBtnHideShow").text("HIDE THIS SECTION");
        }
    });

    $("#clgBtnHideShow").click(function () {
        $("#clg-hide-show").toggle("fast");
        if ($("#clgBtnHideShow").text() == "HIDE THIS SECTION") {
            $("#clgBtnHideShow").text("SHOW THIS SECTION");
        } else {
            $("#clgBtnHideShow").text("HIDE THIS SECTION");
        }
    });

    $("#offBtnHideShow").click(function () {
        $("#off-hide-show").toggle("fast");
        if ($("#offBtnHideShow").text() == "HIDE THIS SECTION") {
            $("#offBtnHideShow").text("SHOW THIS SECTION");
        } else {
            $("#offBtnHideShow").text("HIDE THIS SECTION");
        }
    });

    $("#proBtnHideShow").click(function () {
        $("#pro-hide-show").toggle("fast");
        if ($("#proBtnHideShow").text() == "HIDE THIS SECTION") {
            $("#proBtnHideShow").text("SHOW THIS SECTION");
        } else {
            $("#proBtnHideShow").text("HIDE THIS SECTION");
        }
    });

    //    Accrodian new
    var acc = document.getElementsByClassName("ac-accordion");
    var i;

    var handler = function ac_collapse() {
        this.classList.toggle("ac-active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            $(this).find(".edit-head").css("display", "none")

        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            $(this).find(".edit-head").css("display", "block")
        }
    }

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", handler);
    }
    //    accrodian end




//    contact head edit
    $("#btn-contact-edit").click(function () {
        if ($("#contact-h-edit").attr("contenteditable") == "false")
        {

            var f = $("#contact-h-edit")
            $(f).attr("contenteditable", "true")

            f.focus()
            $(".ac-active").bind("click", handler)



        } else
        {
            $("#contact-h-edit").attr("contenteditable", "false")
            $(".ac-active").off("click");

        }
    })

    $("body").on('DOMSubtreeModified', "#contact-h-edit", function () {
        $("#contact-head").html($("#contact-h-edit").html())
    });
//    contact head edit End

//    education head edit
    $("#btn-edu-edit").click(function () {
        if ($("#edu-h-edit").attr("contenteditable") == "false")
        {

            var f = $("#edu-h-edit")
            $(f).attr("contenteditable", "true")

            f.focus()
            $(".ac-active").bind("click", handler)



        } else
        {
            $("#edu-h-edit").attr("contenteditable", "false")
            $(".ac-active").off("click");

        }
    })

    $("body").on('DOMSubtreeModified', "#edu-h-edit", function () {
        $("#edu-head").html($("#edu-h-edit").html())
    });
//    education head edit End

//    about me edit
    $("#btn-abt-me-edit").click(function () {
        if ($("#abt-me-h-edit").attr("contenteditable") == "false")
        {

            var f = $("#abt-me-h-edit")
            $(f).attr("contenteditable", "true")

            f.focus()
            $(".ac-active").bind("click", handler)



        } else
        {
            $("#abt-me-h-edit").attr("contenteditable", "false")
            $(".ac-active").off("click");

        }
    })

    $("body").on('DOMSubtreeModified', "#abt-me-h-edit", function () {
        $("#abt-me-head").html($("#abt-me-h-edit").html())
    });
//    about edit End

//    work exp edit
    $("#btn-work-edit").click(function () {
        if ($("#work-h-edit").attr("contenteditable") == "false")
        {

            var f = $("#work-h-edit")
            $(f).attr("contenteditable", "true")

            f.focus()
            $(".ac-active").bind("click", handler)



        } else
        {
            $("#work-h-edit").attr("contenteditable", "false")
            $(".ac-active").off("click");

        }
    })

    $("body").on('DOMSubtreeModified', "#work-h-edit", function () {
        $("#work-head").html($("#work-h-edit").html())
    });
//    work exp edit End

//    hobby edit
    $("#btn-hobby-edit").click(function () {
        if ($("#hobby-h-edit").attr("contenteditable") == "false")
        {

            var f = $("#hobby-h-edit")
            $(f).attr("contenteditable", "true")

            f.focus()
            $(".ac-active").bind("click", handler)



        } else
        {
            $("#hobby-h-edit").attr("contenteditable", "false")
            $(".ac-active").off("click");

        }
    })

    $("body").on('DOMSubtreeModified', "#hobby-h-edit", function () {
        $("#hobby-head").html($("#hobby-h-edit").html())
    });
//    hobby edit End

//    skill edit
    $("#btn-skill-edit").click(function () {
        if ($("#skill-h-edit").attr("contenteditable") == "false")
        {

            var f = $("#skill-h-edit")
            $(f).attr("contenteditable", "true")

            f.focus()
            $(".ac-active").bind("click", handler)



        } else
        {
            $("#skill-h-edit").attr("contenteditable", "false")
            $(".ac-active").off("click");

        }
    })

    $("body").on('DOMSubtreeModified', "#skill-h-edit", function () {
        $("#skill-head").html($("#skill-h-edit").html())
    });
//    skill edit End

//    expertise edit
    $("#btn-expert-edit").click(function () {
        if ($("#expert-h-edit").attr("contenteditable") == "false")
        {

            var f = $("#expert-h-edit")
            $(f).attr("contenteditable", "true")

            f.focus()
            $(".ac-active").bind("click", handler)



        } else
        {
            $("#expert-h-edit").attr("contenteditable", "false")
            $(".ac-active").off("click");

        }
    })

    $("body").on('DOMSubtreeModified', "#expert-h-edit", function () {
        $("#expert-head").html($("#expert-h-edit").html())
    });
//    expertisse edit End

//    social edit
    $("#btn-social-edit").click(function () {
        if ($("#social-h-edit").attr("contenteditable") == "false")
        {

            var f = $("#social-h-edit")
            $(f).attr("contenteditable", "true")

            f.focus()
            $(".ac-active").bind("click", handler)



        } else
        {
            $("#social-h-edit").attr("contenteditable", "false")
            $(".ac-active").off("click");

        }
    })

    $("body").on('DOMSubtreeModified', "#social-h-edit", function () {
        $("#social-head").html($("#social-h-edit").html())
    });
//    social edit End

//    training and certifiacation edit
    $("#btn-training-edit").click(function () {
        if ($("#training-h-edit").attr("contenteditable") == "false")
        {

            var f = $("#training-h-edit")
            $(f).attr("contenteditable", "true")

            f.focus()
            $(".ac-active").bind("click", handler)



        } else
        {
            $("#training-h-edit").attr("contenteditable", "false")
            $(".ac-active").off("click");

        }
    })

    $("body").on('DOMSubtreeModified', "#training-h-edit", function () {
        $("#training-head").html($("#training-h-edit").html())
    });
//    training and certifiacation edit End


//   Awards and Achievements edit
    $("#btn-award-edit").click(function () {
        if ($("#award-h-edit").attr("contenteditable") == "false")
        {

            var f = $("#award-h-edit")
            $(f).attr("contenteditable", "true")

            f.focus()
            $(".ac-active").bind("click", handler)



        } else
        {
            $("#award-h-edit").attr("contenteditable", "false")
            $(".ac-active").off("click");

        }
    })

    $("body").on('DOMSubtreeModified', "#award-h-edit", function () {
        $("#award-head").html($("#award-h-edit").html())
    });
//    Awards and Achievements edit End

//   Internship edit
    $("#btn-intern-edit").click(function () {
        if ($("#intern-h-edit").attr("contenteditable") == "false")
        {

            var f = $("#intern-h-edit")
            $(f).attr("contenteditable", "true")

            f.focus()
            $(".ac-active").bind("click", handler)



        } else
        {
            $("#intern-h-edit").attr("contenteditable", "false")
            $(".ac-active").off("click");

        }
    })

    $("body").on('DOMSubtreeModified', "#intern-h-edit", function () {
        $("#intern-head").html($("#intern-h-edit").html())
    });
//    Internship edit End

//   Project edit
    $("#btn-project-edit").click(function () {
        if ($("#project-h-edit").attr("contenteditable") == "false")
        {

            var f = $("#project-h-edit")
            $(f).attr("contenteditable", "true")

            f.focus()
            $(".ac-active").bind("click", handler)



        } else
        {
            $("#project-h-edit").attr("contenteditable", "false")
            $(".ac-active").off("click");

        }
    })

    $("body").on('DOMSubtreeModified', "#project-h-edit", function () {
        $("#project-head").html($("#project-h-edit").html())
    });

//    project edit End

//   collage involvement edit
    $("#btn-clg-inv-edit").click(function () {
        if ($("#clg-inv-h-edit").attr("contenteditable") == "false")
        {

            var f = $("#clg-inv-h-edit")
            $(f).attr("contenteditable", "true")

            f.focus()
            $(".ac-active").bind("click", handler)



        } else
        {
            $("#clg-inv-h-edit").attr("contenteditable", "false")
            $(".ac-active").off("click");

        }
    })

    $("body").on('DOMSubtreeModified', "#clg-inv-h-edit", function () {
        $("#clg-inv-head").html($("#clg-inv-h-edit").html())
    });

//    collage involvement edit End

//   office involvement edit
    $("#btn-off-inv-edit").click(function () {
        if ($("#off-inv-h-edit").attr("contenteditable") == "false")
        {

            var f = $("#off-inv-h-edit")
            $(f).attr("contenteditable", "true")

            f.focus()
            $(".ac-active").bind("click", handler)



        } else
        {
            $("#off-inv-h-edit").attr("contenteditable", "false")
            $(".ac-active").off("click");

        }
    })

    $("body").on('DOMSubtreeModified', "#off-inv-h-edit", function () {
        $("#off-inv-head").html($("#off-inv-h-edit").html())
    });

//    office involvement edit End

//   Professional Affiliation edit
    $("#btn-pro-affi-edit").click(function () {
        if ($("#pro-affi-h-edit").attr("contenteditable") == "false")
        {

            var f = $("#pro-affi-h-edit")
            $(f).attr("contenteditable", "true")

            f.focus()
            $(".ac-active").bind("click", handler)



        } else
        {
            $("#pro-affi-h-edit").attr("contenteditable", "false")
            $(".ac-active").off("click");

        }
    })

    $("body").on('DOMSubtreeModified', "#pro-affi-h-edit", function () {
        $("#pro-affi-head").html($("#pro-affi-h-edit").html())
    });

//    Professional Affiliation edit End

//    Add skill edit
    $("#btn-add-skill-edit").click(function () {
        if ($("#add-skill-h-edit").attr("contenteditable") == "false")
        {

            var f = $("#add-skill-h-edit")
            $(f).attr("contenteditable", "true")

            f.focus()
            $(".ac-active").bind("click", handler)



        } else
        {
            $("#add-skill-h-edit").attr("contenteditable", "false")
            $(".ac-active").off("click");

        }
    })

    $("body").on('DOMSubtreeModified', "#add-skill-h-edit", function () {
        $("#add-skill-head").html($("#add-skill-h-edit").html())
    });
//    Add skill edit End
})



$(document).ready(function () {

    $("#contact-h-edit").focus(function ()
    {
        document.execCommand('selectAll', false, null);
    });

    $("#df1 , #df2 , #df3").change(function ()
    {
        var footTxt = $("#footer-txt")
        if (this.value.trim() == "do-not")
        {
            footTxt.disabled = true
            $(footTxt).css("display", "none")
            $(".foot-data").css("display", "none")
        } else if (this.value.trim() == "cu-da")
        {
            $(footTxt).css("display", "block")
            $("#footer-txt").prop('disabled', true);
            footTxt.val("I agree that my personal data \n\
will be processed in order to recruit for the position I \n\
am applying for.")
            $(".foot-data").css("display", "block")
            $(".foot-data").html($("#footer-txt").val())

        } else if (this.value.trim() == "cus-da")
        {
            $(footTxt).css("display", "block")

            $("#footer-txt").prop('disabled', false);

            $(".foot-data").css("display", "inline-block")
        }

    });

    $("#footer-txt").keyup(function ()
    {
        $(".foot-data").html($("#footer-txt").val())
    });

    $("body").on('DOMSubtreeModified', "#contact-h-edit", function () {
        $("#contact-head").html($("#contact-h-edit").html())
    });

});




