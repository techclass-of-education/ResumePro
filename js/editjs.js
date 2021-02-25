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
            $("#contact-h-edit").attr("contenteditable", "true")
        } else
        {
            $("#contact-h-edit").attr("contenteditable", "false")

        }
//        $('#contact-h-edit').trigger('contentchanged');
    })

    $("body").on('DOMSubtreeModified', "#contact-h-edit", function () {
        $("#contact-head").html($("#contact-h-edit").html())
    });

//$('#contact-h-edit').bind('contentchanged', function() {
//  // do something after the div content has changed
//  alert('woo contentchanged');
//});
//    $("#contact-h-edit").change(function () {
//        alert("hello")
//       
//    })
})





