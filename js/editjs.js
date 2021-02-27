/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//hide show resume blocker
 $(document).ready(function() {
        $("#socialBtnHideShow").click(function() {
            $("#social-hide-show").toggle("fast");
            if ($("#socialBtnHideShow").text() == "HIDE THIS SECTION") {
                $("#socialBtnHideShow").text("SHOW THIS SECTION");
            } else {
                $("#socialBtnHideShow").text("HIDE THIS SECTION");
            }

        });

    });


$(document).ready(function () {

    $("#btn-contact-edit").click(function () {
        if ($("#contact-h-edit").attr("contenteditable") == "false")
        {
          
            var f = $("#contact-h-edit")
            $(f).attr("contenteditable", "true")
            f.focus()

        } else
        {
            $("#contact-h-edit").attr("contenteditable", "false")

        }

    })

    $("body").on('DOMSubtreeModified', "#contact-h-edit", function () {
        $("#contact-head").html($("#contact-h-edit").html())
    });


})




