$(function () {
    $("#accordion").accordion();
});






var contact = ["fname", "lname", "phone", "email", "address1",
    "address2", "city", "state", "country", "pincode"]

var personalInfo = ["father", "mother", "otherAddress", "dob",
    "dateFormat", "marital", "nationality"]

var aboutMe = [""]
var dsg = [""]

//persist data

//function setLocalStorage(key, value)
//{
//    localStorage.setItem(key, JSON.stringify(value))
//}
//
//function getLocalStorage(key)
//{
//    alert(JSON.parse(localStorage.getItem(key)));
//}
$(document).ready(function () {


    $("a.card-link").click(function (e) {
        e.preventDefault();
    })
    $("#lastName").keyup(function (e) {
        e.preventDefault();
        $(".lastNameSpan").html($(this).val().trim())
    });


//    getLocalStorage("dsg")
//    getLocalStorage("personalInfo")

    $("#designation").keyup(function (e) {
        e.preventDefault();
        dsg[0] = $(this).val().trim()
//        setLocalStorage("dsg", dsg)
        $(".designationSpan").html(dsg[0])



    });

    $("#father-name").keyup(function (e) {
        e.preventDefault();
        personalInfo[0] = $(this).val().trim()
//        setLocalStorage("personalInfo", personalInfo)
        $(".father-name-span").html(personalInfo[0])

    });

    $("#mother-name").keyup(function (e) {
        e.preventDefault();
        personalInfo[1] = $(this).val().trim()
//        setLocalStorage("personalInfo", personalInfo)
        $(".mother-name-span").html(personalInfo[1])

    });


     bkLib.onDomLoaded(function () {
        var myNicEditor = new nicEditor();
        myNicEditor.setPanel('personal-address-panel');
        myNicEditor.addInstance('personal-address-txt');
        $("#personal-address-txt").prop("contenteditable", false)
    });


    $("#personal-address-sel").change(function (e) {
        e.preventDefault();

        var selVal = $("#personal-address-sel").val()
        if (selVal == "per-add")
        {
            $("#personal-address-txt").prop("contenteditable", true)
            $(".address-name-row").css("display", "flex")
            $(".address-personal-span-label").html($("#personal-address-sel option[value='" + selVal + "']").text())
        } else if (selVal == "pre-add")
        {
            $("#personal-address-txt").prop("contenteditable", false)
            $(".address-name-row").css("display", "none")
        }

    });



//    


    $("#personal-address-sel").change(function (e) {
        e.preventDefault();
        $(".address-personal-span").html($(this).val())

    });
    $("#personal-address-txt").keyup(function (e) {
        e.preventDefault();
        $(".address-personal-span").html($(this).html())

    });
    $("#personal-address-txt").click(function (e) {
        
        e.preventDefault();
        $(".address-personal-span").html($("#personal-address-txt").html())
//        alert($(this).html())

    });
    $("#marital-status").keyup(function (e) {
        e.preventDefault();
        $(".marital-status-span").html($(this).val())

    });

    $("#nationality").keyup(function (e) {
        e.preventDefault();
        $(".nationality-span").html($(this).val())

    });

    $("#firstName").keyup(function (e) {
        e.preventDefault();
        $(".firstNameSpan").html($(this).val())

    });

    $("#dob").change(function (e) {
        e.preventDefault();
        $(".dob-span").html($(this).val())
    });

    $("#address1").keyup(function (e) {
        e.preventDefault();
        $(".address-span1").html($(this).val())

    });

    $("#address2").keyup(function (e) {
        e.preventDefault();
        $(".address-span2").html($(this).val())

    });

    $("#state").keyup(function (e) {
        e.preventDefault();
        $(".contact-state-span").html($(this).val())

    });

    $("#pincode").keyup(function (e) {
        e.preventDefault();
        $(".contact-pincode-span").html($(this).val())

    });

    $("#city").keyup(function (e) {
        e.preventDefault();
        $(".contact-city-span").html($(this).val())

    });

    $("#country").keyup(function (e) {
        e.preventDefault();
        $(".contact-country-span").html($(this).val())

    });


    $("#mobile").keyup(function (e) {
        e.preventDefault();
        $(".mobile-span").html($(this).val())


    });

    $("#email").keyup(function (e) {
        e.preventDefault();
        $(".email-span").html($(this).val())

    });


 bkLib.onDomLoaded(function () {
        var myNicEditor = new nicEditor();
        myNicEditor.setPanel('about-me-panel');
        myNicEditor.addInstance('about-me');
    });

    $("#about-me").keyup(function (e) {
        e.preventDefault();
        $(".about-me-span").html($(this).html())

    });

    $("#dobDate").change(function () {
        var selectDate = $(this).val();

        var splitDate = selectDate.split("-");
        var y = splitDate[0];
        var m = splitDate[1];
        var d = splitDate[2];

        var newDate = new Date(d, m, y);
        $(".dob-date-span").html((d + "-" + m + "-" + y));
    });



//........................Project code.........................


    $(document).ready(function () {
        $("#add-new-pro-btn").click(function (e) {
            e.preventDefault();
            addNewProjectRows()
        });

        $("#proj-skip-end-date").change(function () {
            if ($(this).prop("checked") == true)
            {
                $("#proj-end-m-date").prop("disabled", true)
                $("#proj-end-y-date").prop("disabled", true)
//                $(".wrk-end-span").text("Present")
            } else
            if ($(this).prop("checked") == false)
            {
                $("#proj-end-m-date").prop("disabled", false)
                $("#proj-end-y-date").prop("disabled", false)
//                $(".wrk-end-span").text("2006")
            }

        });

        //                ................. edit present............
        $("#proj-skip-end-date-edit").change(function () {
            if ($(this).prop("checked") == true)
            {
                $("#proj-end-m-date-edit").prop("disabled", true)
                $("#proj-end-y-date-edit").prop("disabled", true)
//                $(".wrk-end-span").text("Present")
            } else
            if ($(this).prop("checked") == false)
            {
                $("#proj-end-m-date-edit").prop("disabled", false)
                $("#proj-end-y-date-edit").prop("disabled", false)
//                $(".wrk-end-span").text("2006")
            }

        });



        $('#edit-pro-btn').click(function (e) {
            e.preventDefault();
            editProjectSelRow()
        });

        $('#remove-project-btn').click(function (e) {
            e.preventDefault();
            removeProjectRow()
        });

        var projectEditRowOptionVal = ""
        $("#added-project-sel").change(function (e) {
            e.preventDefault();
            projectEditRowOptionVal = $(this).val()
            //alert(projectEditRowOptionVal)
            setProjectRowEdit()
        });
        
        var projStartMonthsSel = document.getElementById("proj-start-m-date");
        var projStartMonthArr = ["JAN-", "FEB-", "MAR-", "APR-", "MAY-", "JUN-", "JUL-", "AUG-", "SEP-", "OCT-", "NOV-", "DEC-"];
        var projStartmonth = projStartMonthArr.length;
        for (i = 0; i < projStartmonth; i++) {
            projStartMonthsSel.innerHTML += "<option value='" + projStartMonthArr[i] + "'>" + projStartMonthArr[i] + "</option>"
        }

        var projStartYearSel = document.getElementById("proj-start-y-date");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            projStartYearSel.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }

        var projEndMonthsSel = document.getElementById("proj-end-m-date");
        var projEndMonthArr = ["JAN-", "FEB-", "MAR-", "APR-", "MAY-", "JUN-", "JUL-", "AUG-", "SEP-", "OCT-", "NOV-", "DEC-"];
        var projEndMonth = projEndMonthArr.length;
        for (i = 0; i < projEndMonth; i++) {
            projEndMonthsSel.innerHTML += "<option value='" + projEndMonthArr[i] + "'>" + projEndMonthArr[i] + "</option>"
        }

        var projEndYearSel = document.getElementById("proj-end-y-date");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            projEndYearSel.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }

//        ...................edit...........

        var projStartMonthsSelEdit = document.getElementById("proj-start-m-date-edit");
        var projStartMonthEditArr = ["JAN-", "FEB-", "MAR-", "APR-", "MAY-", "JUN-", "JUL-", "AUG-", "SEP-", "OCT-", "NOV-", "DEC-"];
        var projStartmonthEdit = projStartMonthEditArr.length;
        for (i = 0; i < projStartmonthEdit; i++) {
            projStartMonthsSelEdit.innerHTML += "<option value='" + projStartMonthEditArr[i] + "'>" + projStartMonthEditArr[i] + "</option>"
        }

        var projStartYearSelEdit = document.getElementById("proj-start-y-date-edit");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            projStartYearSelEdit.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }

        var projEndMonthsSelEdit = document.getElementById("proj-end-m-date-edit");
        var projEndMonthEditArr = ["JAN-", "FEB-", "MAR-", "APR-", "MAY-", "JUN-", "JUL-", "AUG-", "SEP-", "OCT-", "NOV-", "DEC-"];
        var projEndMonthEdit = projEndMonthEditArr.length;
        for (i = 0; i < projEndMonthEdit; i++) {
            projEndMonthsSelEdit.innerHTML += "<option value='" + projEndMonthEditArr[i] + "'>" + projEndMonthEditArr[i] + "</option>"
        }

        var projEndYearSelEdit = document.getElementById("proj-end-y-date-edit");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            projEndYearSelEdit.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }



        function addNewProjectRows() {
            var projectNameTxt = $("#name-pro-inp").val()
            var projectLabelTxt = $("#pro-lable").val()
            var projectLabelAboutTxt = $("#lable-pro-about").val()
            var projectStartMTxt = $("#proj-start-m-date").val()
            var projectStartYTxt = $("#proj-start-y-date").val()
            var projectEndMTxt = $("#proj-end-m-date").val()
            var projectEndYTxt = $("#proj-end-y-date").val()
            var projectDetailsTxt = $("#exp-desc-pro-inp").html()


            var projectRows = $(".project-row");
            var addedProjectSel = $("#added-project-sel")
            var addedProjectOp = addedProjectSel.find("option")
            // //alert(addedEduOp.length)
            var opLength = addedProjectOp.length;
            if (opLength == 1) {

                var projectNameSpan = $(projectRows[0]).find(".project-name-span");
                var projectLabelSpan = $(projectRows[0]).find(".project-label-span");
                var projectLabelAboutSpan = $(projectRows[0]).find(".project-label-about-span");
                var projectStartMSpan = $(projectRows[0]).find(".proj-start-m-span");
                var projectStartYSpan = $(projectRows[0]).find(".proj-start-y-span");
                var projectEndMSpan = $(projectRows[0]).find(".proj-end-m-span");
                var projectEndYSpan = $(projectRows[0]).find(".proj-end-y-span");
                var projectDetailsSpan = $(projectRows[0]).find(".project-details-span");

                projectNameSpan.html(projectNameTxt)
                projectLabelSpan.html(projectLabelTxt)
                projectLabelAboutSpan.html(projectLabelAboutTxt)
                projectStartMSpan.html(projectStartMTxt)
                projectStartYSpan.html(projectStartYTxt)
//                projectEndYearSpan.html(projectEndYearTxt)
                if ($("#proj-skip-end-date").prop("checked") == true)
                {
                    projectEndMSpan.html("")
                    projectEndYSpan.html("Present")
                } else
                {
                    projectEndMSpan.html(projectEndMTxt)
                    projectEndYSpan.html(projectEndYTxt)
                }
                projectDetailsSpan.html(projectDetailsTxt)

                var addedProjectSel = $("#added-project-sel")
                var projectNameTxtDash = projectNameTxt.replaceAll(" ", "-")
                addedProjectSel.append("<option value='" + projectNameTxtDash + "-1'> " + projectNameTxt + "</option>")
                $(projectRows[0]).addClass(projectNameTxtDash + "-1")

            } else if (opLength > 1) {
//                //alert("above 1")
                var projectDiv = $(".all-projects-div");
                var row = $(".all-projects-div .project-row:first-child");
                $(projectDiv[0]).append(row.clone().wrap("<p>").parent().html())


                projectRows = $(".project-row");

                var projectNameSpan = $(projectRows[opLength - 1]).find(".project-name-span");
                var projectLabelSpan = $(projectRows[opLength - 1]).find(".project-label-span");
                var projectLabelAboutSpan = $(projectRows[opLength - 1]).find(".project-label-about-span");
                var projectStartMSpan = $(projectRows[opLength - 1]).find(".proj-start-m-span");
                var projectStartYSpan = $(projectRows[opLength - 1]).find(".proj-start-y-span");
                var projectEndMSpan = $(projectRows[opLength - 1]).find(".proj-end-m-span");
                var projectEndYSpan = $(projectRows[opLength - 1]).find(".proj-end-y-span");
                var projectDetailsSpan = $(projectRows[opLength - 1]).find(".project-details-span");

                projectNameSpan.html(projectNameTxt)
                projectLabelSpan.html(projectLabelTxt)
                projectLabelAboutSpan.html(projectLabelAboutTxt)
                projectStartMSpan.html(projectStartMTxt)
                projectStartYSpan.html(projectStartYTxt)
//                projectEndYearSpan.html(projectEndYearTxt)
                if ($("#proj-skip-end-date").prop("checked") == true)
                {
                    projectEndMSpan.html("")
                    projectEndYSpan.html("Present")
                } else
                {
                    projectEndMSpan.html(projectEndMTxt)
                    projectEndYSpan.html(projectEndYTxt)
                }
                projectDetailsSpan.html(projectDetailsTxt)

                projectRows = $(".project-row");

                projectNameTxtDash = projectNameTxt.replaceAll(" ", "-")
                var addedProjectSelOpLength = $("#added-project-sel option").length
                $("#added-project-sel").append("<option value='" + projectNameTxtDash + "-" + addedProjectSelOpLength + "'> " + projectNameTxt + "</option>")
//                //alert(addedProjectSelOpLength - 1 + "after== before==" + addedProjectSelOpLength)
                $(projectRows[addedProjectSelOpLength - 1]).addClass(projectNameTxtDash + "-" + addedProjectSelOpLength)

            } else {
                alert("something wrong")
            }


        }

        function setProjectRowEdit() {
            var rowProjectClass = projectEditRowOptionVal
            var projectRow = $("." + rowProjectClass)[0]
            var projectNameSpan = $(projectRow).find(".project-name-span");
            var projectLabelSpan = $(projectRow).find(".project-label-span");
            var projectLabelAboutSpan = $(projectRow).find(".project-label-about-span");
            var projectStartMSpan = $(projectRow).find(".proj-start-m-span");
            var projectStartYSpan = $(projectRow).find(".proj-start-y-span");
            var projectEndMSpan = $(projectRow).find(".proj-end-m-span");
            var projectEndYSpan = $(projectRow).find(".proj-end-y-span");
            var projectDetailsSpan = $(projectRow).find(".project-details-span");

            $("#pro-lable-edit").val($(projectLabelSpan).html())
            $("#lable-pro-about-edit").val($(projectLabelAboutSpan).html())
            $("#proj-start-m-date-edit").val($(projectStartMSpan).html())
            $("#proj-start-y-date-edit").val($(projectStartYSpan).html())
//            $("#date-pro-end-inp-edit").val($(projectEndYearSpan).html())
            if (projectEndMSpan.html().trim() != "" || projectEndYSpan.html().trim() != "Project")
            {
                $("#proj-end-m-date-edit").val(projectEndMSpan.html())
                $("#proj-end-y-date-edit").val(projectEndYSpan.html())
            }
            $("#exp-desc-pro-inp-edit").html($(projectDetailsSpan).html())
        }


        function editProjectSelRow() {
            var rowProjectClass = projectEditRowOptionVal
            var projectRow = $("." + rowProjectClass)[0]


            var projectLabelSpan = $(projectRow).find(".project-label-span");
            var projectLabelAboutSpan = $(projectRow).find(".project-label-about-span");
            var projectStartMSpan = $(projectRow).find(".proj-start-m-span");
            var projectStartYSpan = $(projectRow).find(".proj-start-y-span");
            var projectEndMSpan = $(projectRow).find(".proj-end-m-span");
            var projectEndYSpan = $(projectRow).find(".proj-end-y-span");
            var projectDetailsSpan = $(projectRow).find(".project-details-span");




            projectLabelSpan.html($("#pro-lable-edit").val())
            projectLabelAboutSpan.html($("#lable-pro-about-edit").val())
            projectStartMSpan.html($("#proj-start-m-date-edit").val())
            projectStartYSpan.html($("#proj-start-y-date-edit").val())
//            projectEndYearSpan.html($("#date-pro-end-inp-edit").val())
            if ($("#proj-skip-end-date-edit").prop("checked") == true)
            {
                projectEndMSpan.html("")
                projectEndYSpan.html("Present")
            } else
            {
                projectEndMSpan.html($("#proj-end-m-date-edit").val())
                projectEndYSpan.html($("#proj-end-y-date-edit").val())
            }
            projectDetailsSpan.html($("#exp-desc-pro-inp-edit").html())



        }



        function removeProjectRow() {
            var rowProjectClass = projectEditRowOptionVal
            var projectRow = $("." + rowProjectClass)[0]


            var projectRows = $(".project-row");
            if (projectRows.length > 1) {


                var projectRowRemove = projectRow
                $(projectRowRemove).remove()
            } else if (projectRows.length == 1) {

                var projectLabelSpan = $(projectRow).find(".project-label-span");
                var projectLabelAboutSpan = $(projectRow).find(".project-label-about-span");
                var projectStartMSpan = $(projectRow).find(".proj-start-m-span");
                var projectStartYSpan = $(projectRow).find(".proj-start-y-span");
                var projectEndMSpan = $(projectRow).find(".proj-end-m-span");
                var projectEndYSpan = $(projectRow).find(".proj-end-y-span");
                var projectDetailsSpan = $(projectRow).find(".project-details-span");
                var projectNameSpan = $(projectRow).find(".project-name-span");


                projectLabelSpan.html("Add a Label")
                projectLabelAboutSpan.html("About Label")
                projectStartMSpan.html("Mon-")
                projectStartYSpan.html("Year")
                projectEndMSpan.html("Mon-")
                projectEndYSpan.html("year")
                projectDetailsSpan.html("Details")
                projectNameSpan.html("Project Name")
            }
            var projectEditSelOpLength = $("#added-project-sel option").length
            var selectProjectRemoveOp = $("#added-project-sel option[value='" + rowProjectClass + "']");
            selectProjectRemoveOp.remove()
            // $(selectSocialEditOp[socialSelIndex]).remove()

        }



bkLib.onDomLoaded(function() {
          var myNicEditor = new nicEditor();
          myNicEditor.setPanel('exp-desc-pro-inp-panel');
          myNicEditor.addInstance('exp-desc-pro-inp');
     });
     
 bkLib.onDomLoaded(function() {
          var myNicEditor = new nicEditor();
          myNicEditor.setPanel('exp-desc-pro-inp-edit-panel');
          myNicEditor.addInstance('exp-desc-pro-inp-edit');
     });



    });

//........................Project code End.........................






//Skills Bar code


    var skillRatesArr = [];
    var folder = "type1"
    var skillRateImgAlt = ""
    $(document).ready(function () {
        $("#type1").click(function () {
            folder = $(this).attr("alt")
            var skillLen = skillRatesArr.length
            var finalPath = ""
            var skillRateImgSrc = ""
            var skillAddedImgTags = $(".skill-bar-img")

            var i = 0
            while (i < skillLen) {
                finalPath = (folder + "/r" + skillRatesArr[i] + ".png")
                skillRateImgSrc = "imgs/bars/" + finalPath
                skillRateImgAlt = folder
                skillAddedImgTags[i].src = skillRateImgSrc
                skillAddedImgTags[i].alt = skillRateImgAlt
                i++
            }


            // var skillRateImages = $(".skill-bar-img");
            // alert(skillRateImages.length + " " + folder)



        });
        $("#type2").click(function () {
            folder = $(this).attr("alt")
            var skillLen = skillRatesArr.length
            var finalPath = ""
            var skillRateImgSrc = ""
            var skillAddedImgTags = $(".skill-bar-img")

            var i = 0
            while (i < skillLen) {
                finalPath = (folder + "/r" + skillRatesArr[i] + ".png")
                skillRateImgSrc = "imgs/bars/" + finalPath
                skillRateImgAlt = folder
                skillAddedImgTags[i].src = skillRateImgSrc
                skillAddedImgTags[i].alt = skillRateImgAlt
                i++
            }



        });
        $("#add-skill-btn").click(function (e) {
            e.preventDefault();
            addNewSkillRows()
        });

        var selectedSkillOp = ""
        $("#added-skill-sel").change(function (e) {
            e.preventDefault();
            selectedSkillOp = $(this).find(":selected")
            setSkillRowEdit()

        });

        $('#edit-skill-btn').click(function (e) {
            e.preventDefault();
            editSkillSelRow()

        });

        $('#rmv-skill-btn').click(function (e) {
            e.preventDefault();
            removeSkillSelRow()

        });

        function addNewSkillRows() {
            var skillNameTxt = $("#skillName").val()
            var skillRateTxt = $("#skillRate").val()
            var skillRows = $(".skill-row");
            var addedSkillSel = $("#added-skill-sel")
            var addedSkillOp = addedSkillSel.find("option")
            // alert(addedSkillOp.length)
            var opLength = addedSkillOp.length;
            if (opLength == 1) {
                var skillNameSpan = $(skillRows[0]).find(".skill-name-span");
                var skillRateSpan = $(skillRows[0]).find(".skill-rate-span");

                var addedSkillSel = $("#added-skill-sel")
                addedSkillSel.append("  <option value='1'> " + skillNameTxt + "</option>")
                // alert(skillNameSpan.html() + skillRateSpan.html())
                var skillRateImgTag = "<img class='skill-bar-img' src='imgs/bars/" + folder + "/r" + skillRateTxt + ".png' alt='" + folder + "'>"
//                alert(skillRateImgTag)
                skillNameSpan.html(skillNameTxt)
                skillRateSpan.html(skillRateImgTag)
                skillRatesArr.push(parseInt(skillRateTxt.trim()))



            } else if (opLength > 1) {
                // alert($(skillRows[0]).html())
                var skillDiv = $(".skill-div");
                var row = $(".skill-div .skill-row:first-child");
                $(skillDiv[0]).append(row.clone().wrap("<p>").parent().html())

                skillRows = $(".skill-row")
                var skillNameSpan = $(skillRows[opLength - 1]).find(".skill-name-span");
                var skillRateSpan = $(skillRows[opLength - 1]).find(".skill-rate-span");
//                alert(skillNameSpan.html() + skillRateSpan.html())

                var addedSkillSel = $("#added-skill-sel")
                addedSkillSel.append("<option value='" + opLength + "'> " + skillNameTxt + "</option>")
                var skillRateImgTag = "<img class='skill-bar-img' src='imgs/bars/" + folder + "/r" + skillRateTxt + ".png' alt='" + folder + "'>"
//                alert(skillRateImgTag)
                skillNameSpan.html(skillNameTxt)
                skillRateSpan.html(skillRateImgTag)
                skillRatesArr.push(parseInt(skillRateTxt.trim()))

            } else {
                alert("something wrong")
            }


        }

        function setSkillRowEdit() {

            var skillSelVal = parseInt($("#added-skill-sel").val())

            var skillRows = $(".skill-row:nth-child(" + (skillSelVal) + ")")

            var skillNameSpan = $(skillRows).find(".skill-name-span");


            $("#skillNameEdit").val(skillNameSpan.html())
            $("#skillRateEdit").val(skillRatesArr[skillSelVal - 1])



        }


        function editSkillSelRow() {
            var skillNameEditTxt = $("#skillNameEdit").val()
            var skillRateEditTxt = $("#skillRateEdit").val()
            var skillRateImgTag = "<img class='skill-bar-img' src='imgs/bars/" + folder + "/r" + skillRateEditTxt + ".png' alt='" + folder + "'>"
            // alert(skillRateImgTag)
            var skillSelVal = parseInt($("#added-skill-sel").val())
            skillRatesArr[skillSelVal - 1] = parseInt(skillRateEditTxt.trim())
            var skillRows = $(".skill-row:nth-child(" + (skillSelVal) + ")")
            var skillNameSpan = $(skillRows).find(".skill-name-span");
            var skillRateSpan = $(skillRows).find(".skill-rate-span");

            skillNameSpan.html(skillNameEditTxt)
            skillRateSpan.html(skillRateImgTag)
        }

        function removeSkillSelRow() {
            var removeSkillOp = selectedSkillOp

            var addedSkillSel = $("#added-skill-sel")
            var addedSkillOp = addedSkillSel.find("option")
            var opLength = addedSkillOp.length;

            if (opLength > 2)
            {
                var iSkill = $(removeSkillOp).index()
//                alert($(removeSkillOp).index())
//                alert($(removeSkillOp).text())
                var skillRow = $(".skill-row:nth-child(" + (iSkill) + ")")
//                alert($(skillRow).html())
                $(skillRow).remove()
//            $(removeSkillOp).remove()
            } else if (opLength == 2)
            {
                var iSkill = $(removeSkillOp).index()
                var skillRow = $(".skill-row:nth-child(" + (iSkill) + ")")
                var skillNameSpan = $(skillRow).find(".skill-name-span");
                var skillRateSpan = $(skillRow).find(".skill-rate-span");
                skillNameSpan.html("Skill name")
                skillRateSpan.html("<img class='skill-bar-img' src='imgs/bars/type1/r1.png' alt='type1'>")
            }

            $(removeSkillOp).remove()
        }
    });






//...................end skills....................


    $("#add-social-btn").click(function (e) {
        e.preventDefault();
        addSocialRow()
    });

    $("#edit-social-btn").click(function (e) {
        e.preventDefault();
        editSocialRow()
    });

    $("#remove-social-btn").click(function (e) {
        e.preventDefault();

        removeSocialRow()

    });

    $("#select-social-edit").change(function (e) {
        e.preventDefault();
        setEditSocialSelect()
    });


    function removeSocialRow() {
        var socialRows = $(".social-row")
        var socialEditSelVal = "." + $("#select-social-edit").val()
        var socialSelIndex = socialEditSelVal.split("-")[1]
//        alert(socialSelIndex)
        socialSelIndex = parseInt(socialSelIndex.trim()) - 1
        if (socialRows.length > 1) {


            var socialRow = $(socialEditSelVal)[0]
            $(socialRow).remove()
        } else if (socialRows.length == 1) {
            var socialLinkImgSpan = $(socialRows[0]).find(".social-link-img-span");
            var socialLinkSpan = $(socialRows[0]).find(".social-link-span");
            socialLinkImgSpan.html("<img src='imgs/social/Facebook.png' height='100' width='100'>")
            socialLinkSpan.html("https://www.facebook.com");
        }
        var selectSocialEditOp = $("#select-social-edit option[value='" + $("#select-social-edit").val() + "']");
        selectSocialEditOp.remove()
        // $(selectSocialEditOp[socialSelIndex]).remove()

    }

    function setEditSocialSelect() {
        var socialSelArr = $("#select-social-edit").val().split("-")
        var socialSelIndex = socialSelArr[1]
        socialSelIndex = parseInt(socialSelIndex.trim()) - 1
        var socialRows = $(".social-row")
        var socialLinkSpan = $(socialRows[socialSelIndex]).find(".social-link-span");
        $("#edit-link-txt").val(socialLinkSpan.html())
    }


    function editSocialRow() {
        var socialSelArr = $("#select-social-edit").val().split("-")
        var socialSelIndex = socialSelArr[1]
        socialSelIndex = parseInt(socialSelIndex.trim()) - 1
        var socialRows = $(".social-row")
        var socialLinkSpan = $(socialRows[socialSelIndex]).find(".social-link-span");
        var linkText = $("#edit-link-txt").val()
        socialLinkSpan.html(linkText);
    }


    function addSocialRow() {
        var socialSel = $("#select-social").val();
        var socialFile = socialSel;
        var socialFinalPath = "imgs/social/" + socialFile + ".png";
        var linkText = $("#add-link-txt").val()
        var selectSocialEditOp = $("#select-social-edit option");
        var selectSocialEditOpLength = selectSocialEditOp.length;
        var socialRow = $(".social-row")
        if (selectSocialEditOpLength == 1) {
            var socialLinkImgSpan = $(socialRow[0]).find(".social-link-img-span");
            var socialLinkSpan = $(socialRow[0]).find(".social-link-span");
            socialLinkImgSpan.html("<img src='" + socialFinalPath + "' height='100' width='100'>")
            socialLinkSpan.html(linkText);
            $("#select-social-edit").append("<option value='" + $("#select-social").val() + "-1'> " + $("#select-social").val() + "</option>")
            $(socialRow[0]).addClass($("#select-social").val() + "-1")
        } else if (selectSocialEditOpLength > 1) {
            var socialSel = $("#select-social").val()
            var socialFile = socialSel;
            var socialFinalPath = "imgs/social/" + socialFile + ".png"
            var linkText = $("#add-link-txt").val()
            var socialDiv = $(".social-div")
            var row = $(".social-div .social-row:first-child")
            $(socialDiv[0]).append(row.clone().wrap("<p>").parent().html())
            socialRows = $(".social-row")
            var socialLinkImgSpan = $(socialRows[selectSocialEditOpLength - 1]).find(".social-link-img-span")
            var socialLinkSpan = $(socialRows[selectSocialEditOpLength - 1]).find(".social-link-span")
            // alert(socialLinkImgSpan.html() + " " + socialLinkSpan.html())
            $("#select-social-edit").append("<option value='" + $("#select-social").val() + "-" + selectSocialEditOpLength + "'> " + $("#select-social").val() + "</option>")
            socialLinkImgSpan.html("<img src='" + socialFinalPath + "' height='100' width='100'>")
            socialLinkSpan.html(linkText)
            $(socialRows[selectSocialEditOpLength - 1]).addClass($("#select-social").val() + "-" + selectSocialEditOpLength)
        }
    }

//....................................................Experties Code............................................

    var imgExp = "d1"
    var folderExp = "expert";

    function changeAllExpImgs(alt)
    {
        var expImg = $(".experties-row img")
        var expAddedImgTags = $(".exp-bar-img")

        var i = 0
        while (i < expImg.length) {
            finalPath = alt + ".png"
            expRateImgSrc = "imgs/expert/" + finalPath
            expImg[i].src = expRateImgSrc
            expImg[i].alt = alt
            i++
        }
    }
    $(document).ready(function () {
        $("#expert_d1").click(function () {

            imgExp = $(this).attr("alt")
            changeAllExpImgs(imgExp)

        });
        $("#expert_d2").click(function () {
            imgExp = $(this).attr("alt")
            changeAllExpImgs(imgExp)
        });
        $("#expert_r1").click(function () {
            imgExp = $(this).attr("alt")
            changeAllExpImgs(imgExp)
        });
        $("#expert_r2").click(function () {
            imgExp = $(this).attr("alt")
            changeAllExpImgs(imgExp)
        });

        $("#add-experties-btn").click(function (e) {
            e.preventDefault();
            addExpertiesRow()
        });



        $("#remove-experties-btn").click(function (e) {
            e.preventDefault();

            removeExpertiesRow()

        });


    });


    function removeExpertiesRow() {
        var expertiesRows = $(".experties-row")
        var expertiesEditSelVal = "." + $("#select-experties-remove").val()
        var expertiesSelIndex = expertiesEditSelVal.split("-")[1]
//        alert(expertiesSelIndex)
        expertiesSelIndex = parseInt(expertiesSelIndex.trim()) - 1
        if (expertiesRows.length > 1) {


            var expertiesRow = $(expertiesEditSelVal)[0]
            $(expertiesRow).remove()
        } else if (expertiesRows.length == 1) {
            var expertiesLinkImgSpan = $(expertiesRows[0]).find(".experties-img-span");
            var expertiesLinkSpan = $(expertiesRows[0]).find(".experties-txt-span");
            expertiesLinkImgSpan.html("<img src='imgs/expert/" + imgExp + ".png' height='10' width='10'>")
            expertiesLinkSpan.html("MS Word");
        }
        var selectExpertiesRemoveOp = $("#select-experties-remove option[value='" + $("#select-experties-remove").val() + "']");
        selectExpertiesRemoveOp.remove()


    }

    function addExpertiesRow() {


        var expertiesFinalPath = "imgs/expert/" + imgExp + ".png";
        var expertiesText = $("#add-experties-txt").val().trim()
        var selectExpertiesRemoveOp = $("#select-experties-remove option");
        var selectExpertiesRemoveOpLength = selectExpertiesRemoveOp.length;
        var expertiesRow = $(".experties-row")
        if (selectExpertiesRemoveOpLength == 1) {
            var expertiesLinkImgSpan = $(expertiesRow[0]).find(".experties-img-span");
            var expertiesLinkSpan = $(expertiesRow[0]).find(".experties-txt-span");
            expertiesLinkImgSpan.html("<img src='" + expertiesFinalPath + "' height='10' width='10'>")
            expertiesLinkSpan.html(expertiesText);
            $("#select-experties-remove").append("<option value='" + expertiesText + "-1'>" + expertiesText + "</option>")
            $(expertiesRow[0]).addClass(expertiesText + "-1")
        } else if (selectExpertiesRemoveOpLength > 1) {

            expertiesText = $("#add-experties-txt").val().trim()
            var expertiesDiv = $(".experties-div")
            var row = $(".experties-div .experties-row:first-child")
            $(expertiesDiv[0]).append(row.clone().wrap("<p>").parent().html())
            var expertiesRows = $(".experties-row")
            var expertiesLinkImgSpan = $(expertiesRows[selectExpertiesRemoveOpLength - 1]).find(".experties-img-span")
            expertiesLinkSpan = $(expertiesRows[selectExpertiesRemoveOpLength - 1]).find(".experties-txt-span")
            // alert(expertiesLinkImgSpan.html() + " " + expertiesLinkSpan.html())
            $("#select-experties-remove").append("<option value='" + expertiesText + "-" + selectExpertiesRemoveOpLength + "'>" + expertiesText + "</option>")
            expertiesLinkImgSpan.html("<img src='" + expertiesFinalPath + "' height='10' width='10'>")
            expertiesLinkSpan.html(expertiesText)
            $(expertiesRows[selectExpertiesRemoveOpLength - 1]).addClass(expertiesText + "-" + selectExpertiesRemoveOpLength)
        }
    }
//....................................................Experties Code End............................................




//.........................Hobby Code......................................................
    var selectedSymbolObj = ""
    var selectedSymbolImgFile = ""
    var editSelectedSymbolObj = ""
    var editSelectedSymbolImgFile = ""
    var svgColor = "b";
    var userEditRowOptionVal = ""
    $(document).ready(function () {
        $("#add-hobby-btn").click(function (e) {
            e.preventDefault();
            addHobbyRow()
        });

        $("#svg-color").change(function () {
            svgColor = $(this).val()
        });

        var oldSelectedSymbolObj = ""

        var selectedSymbol = false
        $(".row .h-span img").click(function () {
            var classes = ""
            if (selectedSymbol)
            {
                $(oldSelectedSymbolObj).removeClass("selected-symbol")
                selectedSymbol = false
            }
            classes = $(this).attr("alt").split(/\s+/);
            selectedSymbolImgFile = classes[0]
            var sel = $(this);
            $(sel).addClass("selected-symbol");
            selectedSymbol = true
            oldSelectedSymbolObj = sel;
            selectedSymbolObj = sel
        });


        $("#edit-hobby-btn").click(function () {
            editSocialRow();

        });

        $("#remove-hobby-btn").click(function () {
            removeHobbyRow()
        });


        $("#hobbyEditSel").change(function () {
            userEditRowOptionVal = $(this).val()
        });


        var oldEditSelectedSymbolObj = ""
        var editSelectedSymbol = false
        $(".row .h-span-edit img").click(function () {
            var classes = ""
            if (editSelectedSymbol)
            {
                $(oldEditSelectedSymbolObj).removeClass("selected-symbol")
                editSelectedSymbol = false
            }
            classes = $(this).attr("alt").split(/\s+/);
            editSelectedSymbolImgFile = classes[0]
            var sel = $(this);
            $(sel).addClass("selected-symbol");
            editSelectedSymbol = true
            oldEditSelectedSymbolObj = sel;
            editSelectedSymbolObj = sel
        });
    });


    function editSocialRow() {
        var editRowClass = userEditRowOptionVal
        var hobbyEditRow = $("." + editRowClass)
        var hobbySvgEditSpan = $(hobbyEditRow[0]).find(".hobby-svg-span");

        var hobbySymbol = editSelectedSymbolObj;
        var srcImg = $(hobbySymbol).attr("src")
        var index = srcImg.indexOf("type")
        var folder = srcImg.substring(index, index + 5)
        var file = editSelectedSymbolImgFile
        var hobbyImgFinalPath = "imgs/hobby/" + folder + "/" + svgColor + "/" + file + ".png";
        hobbySvgEditSpan.html("<img src='" + hobbyImgFinalPath + "' height='100' width='100'>")

    }
    function addHobbyRow() {
        var hobbyEditSelOp = $("#hobbyEditSel option");
        var hobbyEditSelOpLength = hobbyEditSelOp.length;

        if (hobbyEditSelOpLength == 1) {
            var hobbyText = $("#hobby-text").val();
            var hobbySymbol = selectedSymbolObj;
            var srcImg = $(hobbySymbol).attr("src")
            var index = srcImg.indexOf("type")
            var folder = srcImg.substring(index, index + 5)
            var file = selectedSymbolImgFile
            var hobbyImgFinalPath = "imgs/hobby/" + folder + "/" + svgColor + "/" + file + ".png";
            var hobbyRow = $(".hobby-row")
            var hobbyNameSpan = $(hobbyRow[0]).find(".hobby-name-span");
            var hobbySvgSpan = $(hobbyRow[0]).find(".hobby-svg-span");

            hobbySvgSpan.html("<img src='" + hobbyImgFinalPath + "' height='100' width='100'>")
            hobbyNameSpan.html(hobbyText);
            $("#hobbyEditSel").append("<option value='" + hobbyText + "-1'> " + hobbyText + "</option>")
            $(hobbyRow[0]).addClass(hobbyText + "-1")
        } else if (hobbyEditSelOpLength > 1) {

            hobbyText = $("#hobby-text").val();
            hobbySymbol = selectedSymbolObj;
            srcImg = $(hobbySymbol).attr("src")
            index = srcImg.indexOf("type")
            folder = srcImg.substring(index, index + 5)
            file = selectedSymbolImgFile
            hobbyImgFinalPath = "imgs/hobby/" + folder + "/" + svgColor + "/" + file + ".png";
            hobbyEditSelOpLength = hobbyEditSelOp.length;
            allHobbyDiv = $(".all-hobby-div")
            row = $(".all-hobby-div .hobby-row:first-child")
            $(allHobbyDiv[0]).append(row.clone().wrap("<p>").parent().html())
            hobbyRow = $(".hobby-row")
            hobbyNameSpan = $(hobbyRow[hobbyEditSelOpLength - 1]).find(".hobby-name-span");
            hobbySvgSpan = $(hobbyRow[hobbyEditSelOpLength - 1]).find(".hobby-svg-span");
            hobbySvgSpan.html("<img src='" + hobbyImgFinalPath + "' height='100' width='100'>")
            hobbyNameSpan.html(hobbyText);
            $("#hobbyEditSel").append("<option value='" + hobbyText + "-" + hobbyEditSelOpLength + "'> " + hobbyText + "</option>")
            $(hobbyRow[hobbyEditSelOpLength - 1]).addClass(hobbyText + "-" + hobbyEditSelOpLength)

        }
    }

    function removeHobbyRow() {
        var removeRowClass = userEditRowOptionVal
        var hobbyRemoveRow = $("." + removeRowClass)
        hobbyRow = $(".hobby-row")
        if (hobbyRow.length > 1) {


            var hobbyRowRemove = $(hobbyRemoveRow)[0]
            $(hobbyRowRemove).remove()
        } else if (hobbyRow.length == 1) {
            var hobbyNameSpan = $(hobbyRow[0]).find(".hobby-name-span");
            var hobbySvgSpan = $(hobbyRow[0]).find(".hobby-svg-span");

            hobbySvgSpan.html("<img src='imgs/hobby/type1/b/h2.png' height='100' width='100'>")
            hobbyNameSpan.html("Your Hobby Name");
        }
        var selectHobbtRemoveOp = $("#hobbyEditSel option[value='" + removeRowClass + "']");
        selectHobbtRemoveOp.remove()
        // $(selectSocialEditOp[socialSelIndex]).remove()

    }

//    ............................Hobby End.......................................
//    ............................Internship code.......................................


    $(document).ready(function () {
        $("#add-new-int-btn").click(function (e) {
            e.preventDefault();
            addNewInternRows()
        });

        $("#intern-skip-end-date").change(function () {
            if ($(this).prop("checked") == true)
            {
                $("#intern-end-m-date").prop("disabled", true)
                $("#intern-end-y-date").prop("disabled", true)

            } else
            if ($(this).prop("checked") == false)
            {
                $("#intern-end-m-date").prop("disabled", false)
                $("#intern-end-y-date").prop("disabled", false)

            }

        });

        //                ................. edit present............
        $("#intern-skip-end-date-edit").change(function () {
            if ($(this).prop("checked") == true)
            {
                $("#intern-end-m-date-edit").prop("disabled", true)
                $("#intern-end-y-date-edit").prop("disabled", true)

            } else
            if ($(this).prop("checked") == false)
            {
                $("#intern-end-m-date-edit").prop("disabled", false)
                $("#intern-end-y-date-edit").prop("disabled", false)

            }

        });



        $('#edit-intern-btn').click(function (e) {
            e.preventDefault();
            editInternSelRow()

        });

        $('#remove-intern-btn').click(function (e) {
            e.preventDefault();
            removeInternRow()

        });
        var internEditRowOptionVal = ""
        $("#added-intern-sel").change(function (e) {
            e.preventDefault();
            internEditRowOptionVal = $(this).val()
            setInternRowEdit()
        });
        
        var internStartMonthsSel = document.getElementById("intern-start-m-date");
        var internStartMonthArr = ["JAN-", "FEB-", "MAR-", "APR-", "MAY-", "JUN-", "JUL-", "AUG-", "SEP-", "OCT-", "NOV-", "DEC-"];
        var internStartmonth = internStartMonthArr.length;
        for (i = 0; i < internStartmonth; i++) {
            internStartMonthsSel.innerHTML += "<option value='" + internStartMonthArr[i] + "'>" + internStartMonthArr[i] + "</option>"
        }

        var internStartYearSel = document.getElementById("intern-start-y-date");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            internStartYearSel.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }

        var internEndMonthsSel = document.getElementById("intern-end-m-date");
        var internEndMonthArr = ["JAN-", "FEB-", "MAR-", "APR-", "MAY-", "JUN-", "JUL-", "AUG-", "SEP-", "OCT-", "NOV-", "DEC-"];
        var internEndMonth = internEndMonthArr.length;
        for (i = 0; i < internEndMonth; i++) {
            internEndMonthsSel.innerHTML += "<option value='" + internEndMonthArr[i] + "'>" + internEndMonthArr[i] + "</option>"
        }

        var internEndYearSel = document.getElementById("intern-end-y-date");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            internEndYearSel.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }

//        ...................edit...........

        var internStartMonthsSelEdit = document.getElementById("intern-start-m-date-edit");
        var internStartMonthEditArr = ["JAN-", "FEB-", "MAR-", "APR-", "MAY-", "JUN-", "JUL-", "AUG-", "SEP-", "OCT-", "NOV-", "DEC-"];
        var internStartmonthEdit = internStartMonthEditArr.length;
        for (i = 0; i < internStartmonthEdit; i++) {
            internStartMonthsSelEdit.innerHTML += "<option value='" + internStartMonthEditArr[i] + "'>" + internStartMonthEditArr[i] + "</option>"
        }

        var internStartYearSelEdit = document.getElementById("intern-start-y-date-edit");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            internStartYearSelEdit.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }

        var internEndMonthsSelEdit = document.getElementById("intern-end-m-date-edit");
        var internEndMonthEditArr = ["JAN-", "FEB-", "MAR-", "APR-", "MAY-", "JUN-", "JUL-", "AUG-", "SEP-", "OCT-", "NOV-", "DEC-"];
        var internEndMonthEdit = internEndMonthEditArr.length;
        for (i = 0; i < internEndMonthEdit; i++) {
            internEndMonthsSelEdit.innerHTML += "<option value='" + internEndMonthEditArr[i] + "'>" + internEndMonthEditArr[i] + "</option>"
        }

        var internEndYearSelEdit = document.getElementById("intern-end-y-date-edit");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            internEndYearSelEdit.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }

        function addNewInternRows() {
            var companyInternNameTxt = $("#company-name-inp").val()
            var companyPosInternNameTxt = $("#company-pos-name-inp").val()
            var companyCityInternTxt = $("#city-intern-inp").val()
            var companyStateInternTxt = $("#state-intern-inp").val()
            var internStartMTxt = $("#intern-start-m-date").val()
            var internStartYTxt = $("#intern-start-y-date").val()
            var internEndMTxt = $("#intern-end-m-date").val()
            var internEndYTxt = $("#intern-end-y-date").val()
            var expDescInternTxt = $("#exp-desc-intern-inp").html()


            var internRows = $(".intern-row");
            var addedInternSel = $("#added-intern-sel")
            var addedInternOp = addedInternSel.find("option")
            // alert(addedEduOp.length)
            var opLength = addedInternOp.length;
            if (opLength == 1) {

                var internCpnyNameSpan = $(internRows[0]).find(".intern-company-name-span");
                var internStateNameSpan = $(internRows[0]).find(".intern-state-name-span");
                var internCityNameSpan = $(internRows[0]).find(".intern-city-name-span");
                var internStrMDateSpan = $(internRows[0]).find(".intern-start-m-span");
                var internStrYDateSpan = $(internRows[0]).find(".intern-start-y-span");
                var internEndMDateSpan = $(internRows[0]).find(".intern-end-m-span");
                var internEndYDateSpan = $(internRows[0]).find(".intern-end-y-span");
                var internDescSpan = $(internRows[0]).find(".intern-desc-span");
                var internPosSpan = $(internRows[0]).find(".intern-pos-name-span");

                internCpnyNameSpan.html(companyInternNameTxt)
                internStateNameSpan.html(companyStateInternTxt)
                internCityNameSpan.html(companyCityInternTxt)
                internStrMDateSpan.html(internStartMTxt)
                internStrYDateSpan.html(internStartYTxt)
//                internEndDateSpan.html(dateInternEndTxt)
                if ($("#intern-skip-end-date").prop("checked") == true)
                {
                    internEndMDateSpan.html("")
                    internEndYDateSpan.html("Present")
                } else
                {
                    internEndMDateSpan.html(internEndMTxt)
                    internEndYDateSpan.html(internEndYTxt)
                }
                internDescSpan.html(expDescInternTxt)
                internPosSpan.html(companyPosInternNameTxt)

                var addedInternSel = $("#added-intern-sel")
                var companyInternNameTxtDash = companyInternNameTxt.replaceAll(" ", "-")
                addedInternSel.append("<option value='" + companyInternNameTxtDash + "-1'> " + companyInternNameTxt + "</option>")
                $(internRows[0]).addClass(companyInternNameTxtDash + "-1")

            } else if (opLength > 1) {
//                alert("above 1")
                var internDiv = $(".internship-div");
                var row = $(".internship-div .intern-row:first-child");
                $(internDiv[0]).append(row.clone().wrap("<p>").parent().html())


                internRows = $(".intern-row")

                var internCpnyNameSpan = $(internRows[opLength - 1]).find(".intern-company-name-span");
                var internStateNameSpan = $(internRows[opLength - 1]).find(".intern-state-name-span");
                var internCityNameSpan = $(internRows[opLength - 1]).find(".intern-city-name-span");
                var internStrMDateSpan = $(internRows[opLength - 1]).find(".intern-start-m-span");
                var internStrYDateSpan = $(internRows[opLength - 1]).find(".intern-start-y-span");
                var internEndMDateSpan = $(internRows[opLength - 1]).find(".intern-end-m-span");
                var internEndYDateSpan = $(internRows[opLength - 1]).find(".intern-end-y-span");
                var internDescSpan = $(internRows[opLength - 1]).find(".intern-desc-span");
                var internPosSpan = $(internRows[opLength - 1]).find(".intern-pos-name-span");




                internCpnyNameSpan.html(companyInternNameTxt)
                internStateNameSpan.html(companyStateInternTxt)
                internCityNameSpan.html(companyCityInternTxt)
                internStrMDateSpan.html(internStartMTxt)
                internStrYDateSpan.html(internStartYTxt)
//                internEndDateSpan.html(dateInternEndTxt)
                if ($("#intern-skip-end-date").prop("checked") == true)
                {
                    internEndMDateSpan.html("")
                    internEndYDateSpan.html("Present")
                } else
                {
                    internEndMDateSpan.html(internEndMTxt)
                    internEndYDateSpan.html(internEndYTxt)
                }
                internDescSpan.html(expDescInternTxt)
                internPosSpan.html(companyPosInternNameTxt)

                internRows = $(".intern-row")
                var companyInternNameTxtDash = companyInternNameTxt.replaceAll(" ", "-")
                var internEditSelOpLength = $("#added-intern-sel option").length
                $("#added-intern-sel").append("<option value='" + companyInternNameTxtDash + "-" + internEditSelOpLength + "'> " + companyInternNameTxt + "</option>")
//                alert(internEditSelOpLength - 1 + "after== before==" + internEditSelOpLength)
                $(internRows[internEditSelOpLength - 1]).addClass(companyInternNameTxtDash + "-" + internEditSelOpLength)
//                $(internRows[0]).addClass(companyInternNameTxt + "-1")

            } else {
                alert("something wrong")
            }


        }

        function setInternRowEdit() {
            var rowInternClass = internEditRowOptionVal
//            alert(internEditRowOptionVal)
            var internRow = $("." + rowInternClass)[0]

//            var internCpnyNameSpan = $(internRow).find(".intern-company-name-span");
            var internStateNameSpan = $(internRow).find(".intern-state-name-span");
            var internCityNameSpan = $(internRow).find(".intern-city-name-span");
            var internStrMDateSpan = $(internRow).find(".intern-start-m-span");
            var internStrYDateSpan = $(internRow).find(".intern-start-y-span");
            var internEndMDateSpan = $(internRow).find(".intern-end-m-span");
            var internEndYDateSpan = $(internRow).find(".intern-end-y-span");
            var internDescSpan = $(internRow).find(".intern-desc-span");
            var internPosSpan = $(internRow).find(".intern-pos-name-span");


            $("#state-intern-inp-edit").val(internStateNameSpan.html())
            $("#city-intern-inp-edit").val(internCityNameSpan.html())
            $("#intern-start-m-date-edit").val(internStrMDateSpan.html())
            $("#intern-start-y-date-edit").val(internStrYDateSpan.html())
//            $("#date-intern-end-inp-edit").val(internEndDateSpan.html())
            if (internEndMDateSpan.html().trim() != "" || internEndYDateSpan.html().trim() != "Present")
            {
                $("#intern-end-m-date-edit").val(internEndMDateSpan.html())
                $("#intern-end-y-date-edit").val(internEndYDateSpan.html())
            }
            $("#exp-desc-intern-inp-edit").html(internDescSpan.html())
            $("#company-pos-name-inp-edit").val(internPosSpan.html())


        }


        function editInternSelRow() {
            var rowInternClass = internEditRowOptionVal
            var internRow = $("." + rowInternClass)[0]


            var internStateNameSpan = $(internRow).find(".intern-state-name-span");
            var internCityNameSpan = $(internRow).find(".intern-city-name-span");
            var internStrMDateSpan = $(internRow).find(".intern-start-m-span");
            var internStrYDateSpan = $(internRow).find(".intern-start-y-span");
            var internEndMDateSpan = $(internRow).find(".intern-end-m-span");
            var internEndYDateSpan = $(internRow).find(".intern-end-y-span");
            var internDescSpan = $(internRow).find(".intern-desc-span");
            var internPosSpan = $(internRow).find(".intern-pos-name-span");




            internStateNameSpan.html($("#state-intern-inp-edit").val())
            internCityNameSpan.html($("#city-intern-inp-edit").val())
            internStrMDateSpan.html($("#intern-start-m-date-edit").val())
            internStrYDateSpan.html($("#intern-start-y-date-edit").val())
//            internEndDateSpan.html($("#date-intern-end-inp-edit").val())
            if ($("#intern-skip-end-date-edit").prop("checked") == true)
            {
                internEndMDateSpan.html("")
                internEndYDateSpan.html("Present")
            } else
            {
                internEndMDateSpan.html($("#intern-end-m-date-edit").val())
                internEndYDateSpan.html($("#intern-end-y-date-edit").val())
            }
            internDescSpan.html($("#exp-desc-intern-inp-edit").html())
            internPosSpan.html($("#company-pos-name-inp-edit").val())



        }



        function removeInternRow() {
            var rowInternClass = internEditRowOptionVal
            var internRow = $("." + rowInternClass)[0]


            var internRows = $(".intern-row")
            if (internRows.length > 1) {


                var internRowRemove = internRow
                $(internRowRemove).remove()
            } else if (internRows.length == 1) {
                var internCpnyNameSpan = $(internRow).find(".intern-company-name-span");
                var internStateNameSpan = $(internRow).find(".intern-state-name-span");
                var internCityNameSpan = $(internRow).find(".intern-city-name-span");
                var internStrMDateSpan = $(internRow).find(".intern-start-m-span");
                var internStrYDateSpan = $(internRow).find(".intern-start-y-span");
                var internEndMDateSpan = $(internRow).find(".intern-end-m-span");
                var internEndYDateSpan = $(internRow).find(".intern-end-y-span");
                var internDescSpan = $(internRow).find(".intern-desc-span");
                var internPosSpan = $(internRow).find(".intern-pos-name-span");


                internCpnyNameSpan.html("Company / Institute Name")
                internStateNameSpan.html("State")
                internCityNameSpan.html("City")
                internStrMDateSpan.html("Mon-")
                internStrYDateSpan.html("Year")
                internEndMDateSpan.html("Mon-")
                internEndYDateSpan.html("Year")
                internDescSpan.html("Experience")
                internPosSpan.html("Position")
            }
            var internEditSelOpLength = $("#added-intern-sel option").length
            var selectInternRemoveOp = $("#added-intern-sel option[value='" + rowInternClass + "']");
            selectInternRemoveOp.remove()
            // $(selectSocialEditOp[socialSelIndex]).remove()

        }

 bkLib.onDomLoaded(function() {
          var myNicEditor = new nicEditor();
          myNicEditor.setPanel('exp-desc-intern-inp-panel');
          myNicEditor.addInstance('exp-desc-intern-inp');
     });
     
 bkLib.onDomLoaded(function() {
          var myNicEditor = new nicEditor();
          myNicEditor.setPanel('exp-desc-intern-inp-edit-panel');
          myNicEditor.addInstance('exp-desc-intern-inp-edit');
     });




    });

//.......................Internship end....................

//.......................Education Code........................



    $(document).ready(function () {
        $("#add-edu-btn").click(function (e) {
            e.preventDefault();
            addNewEduRows()
        });

        $("#edu-skip-end-date").change(function () {
            if ($(this).prop("checked") == true)
            {
                $("#edu-end-m-date").prop("disabled", true)
                $("#edu-end-y-date").prop("disabled", true)
//                $(".wrk-end-span").text("Present")
            } else
            if ($(this).prop("checked") == false)
            {
                $("#edu-end-m-date").prop("disabled", false)
                $("#edu-end-y-date").prop("disabled", false)
//                $(".wrk-end-span").text("2006")
            }

        });

        //                ................. edit present............
        $("#edu-skip-end-date-edit").change(function () {
            if ($(this).prop("checked") == true)
            {
                $("#edu-end-m-date-edit").prop("disabled", true)
                $("#edu-end-y-date-edit").prop("disabled", true)
//                $(".wrk-end-span").text("Present")
            } else
            if ($(this).prop("checked") == false)
            {
                $("#edu-end-m-date-edit").prop("disabled", false)
                $("#edu-end-y-date-edit").prop("disabled", false)
//                $(".wrk-end-span").text("2006")
            }

        });

        $("#edu-marks-sel , #edu-marks-sel-edit").change(function (e) {
            e.preventDefault();
            if ($(this).val() == "Percentage")
            {
                $("#edu-marks-sym").html("%")
            } else
            {
                $("#edu-marks-sym").html("(CGPA)")

            }
        });

        $("#edu-marks-sel-edit").change(function (e) {
            e.preventDefault();
            if ($(this).val() == "Percentage")
            {
                $("#edu-marks-sym-edit").html("%")
            } else
            {
                $("#edu-marks-sym-edit").html("(CGPA)")

            }

        });

        $("#edu-marks-imp").keyup(function ()
        {
            var v = parseFloat($(this).val().trim())
            v = v.toFixed(2)
            switch ($("#edu-marks-sel").val().trim())
            {
                case "Percentage":
                    checkDivision(v)
                    break;
                case "CGPA":
                    v = v * 10.0;
                    checkDivision(v)
                    break;
            }



        });

        $("#edu-marks-imp-edit").keyup(function ()
        {
//            alert("hello")
            var v = parseFloat($(this).val().trim())
            v = v.toFixed(2)
            switch ($("#edu-marks-sel-edit").val().trim())
            {
                case "Percentage":
                    checkDivisionEdit(v)
                    break;
                case "CGPA":
                    v = v * 10.0;
                    checkDivisionEdit(v)
                    break;
            }



        });

        function checkDivision(imp)
        {
            if (imp >= 75.00 && imp <= 100.00)
            {
                $("#edu-division-sel :nth-child(2)").prop('selected', true);
            } else if (imp >= 60.00 && imp <= 74.99)
            {
                $("#edu-division-sel :nth-child(3)").prop('selected', true);

            } else if (imp >= 45.00 && imp <= 59.99)
            {
                $("#edu-division-sel :nth-child(4)").prop('selected', true);

            } else if (imp >= 35.00)
            {
                $("#edu-division-sel :nth-child(5)").prop('selected', true);
            } else
            {
                $("#edu-division-sel :nth-child(6)").prop('selected', true);

            }
        }




        function checkDivisionEdit(imp)
        {
            if (imp >= 75.00 && imp <= 100.00)
            {
                $("#edu-division-sel-edit :nth-child(2)").prop('selected', true);
            } else if (imp >= 60.00 && imp <= 74.99)
            {
                $("#edu-division-sel-edit :nth-child(3)").prop('selected', true);

            } else if (imp >= 45.00 && imp <= 59.99)
            {
                $("#edu-division-sel-edit :nth-child(4)").prop('selected', true);

            } else if (imp >= 35.00)
            {
                $("#edu-division-sel-edit :nth-child(5)").prop('selected', true);
            } else
            {
                $("#edu-division-sel-edit :nth-child(6)").prop('selected', true);

            }
        }


        $('#edit-edu-btn').click(function (e) {
            e.preventDefault();
            editEduSelRow()

        });

        $('#remove-edu-btn').click(function (e) {
            e.preventDefault();
            removeEduRow()

        });
        var eduEditRowOptionVal = ""
        $("#added-edu-sel").change(function (e) {
            e.preventDefault();
            eduEditRowOptionVal = $(this).val()
            setEduRowEdit()
        });


        var eduStartMonthsSel = document.getElementById("edu-start-m-date");
        var startMonthArr = ["JAN-", "FEB-", "MAR-", "APR-", "MAY-", "JUN-", "JUL-", "AUG-", "SEP-", "OCT-", "NOV-", "DEC-"];
        var eduStartmonth = startMonthArr.length;
        for (i = 0; i < eduStartmonth; i++) {
            eduStartMonthsSel.innerHTML += "<option value='" + startMonthArr[i] + "'>" + startMonthArr[i] + "</option>"
        }

        var eduStartYearSel = document.getElementById("edu-start-y-date");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            eduStartYearSel.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }

        var eduEndMonthsSel = document.getElementById("edu-end-m-date");
        var endMonthArr = ["JAN-", "FEB-", "MAR-", "APR-", "MAY-", "JUN-", "JUL-", "AUG-", "SEP-", "OCT-", "NOV-", "DEC-"];
        var eduEndMonth = endMonthArr.length;
        for (i = 0; i < eduEndMonth; i++) {
            eduEndMonthsSel.innerHTML += "<option value='" + endMonthArr[i] + "'>" + endMonthArr[i] + "</option>"
        }

        var eduEndYearSel = document.getElementById("edu-end-y-date");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            eduEndYearSel.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }

//        ...................edit...........

        var eduStartMonthsSelEdit = document.getElementById("edu-start-m-date-edit");
        var startMonthEditArr = ["JAN-", "FEB-", "MAR-", "APR-", "MAY-", "JUN-", "JUL-", "AUG-", "SEP-", "OCT-", "NOV-", "DEC-"];
        var eduStartmonthEdit = startMonthEditArr.length;
        for (i = 0; i < eduStartmonthEdit; i++) {
            eduStartMonthsSelEdit.innerHTML += "<option value='" + startMonthEditArr[i] + "'>" + startMonthEditArr[i] + "</option>"
        }

        var eduStartYearSelEdit = document.getElementById("edu-start-y-date-edit");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            eduStartYearSelEdit.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }

        var eduEndMonthsSelEdit = document.getElementById("edu-end-m-date-edit");
        var endMonthEditArr = ["JAN-", "FEB-", "MAR-", "APR-", "MAY-", "JUN-", "JUL-", "AUG-", "SEP-", "OCT-", "NOV-", "DEC-"];
        var eduEndMonthEdit = endMonthEditArr.length;
        for (i = 0; i < eduEndMonthEdit; i++) {
            eduEndMonthsSelEdit.innerHTML += "<option value='" + endMonthEditArr[i] + "'>" + endMonthEditArr[i] + "</option>"
        }

        var eduEndYearSelEdit = document.getElementById("edu-end-y-date-edit");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            eduEndYearSelEdit.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }

        function addNewEduRows() {
            var eduNameTxt = $("#edu-name").val()
            var eduAffilTxt = $("#edu-affil").val()
            var eduDegreeTxt = $("#edu-degree-type").val()
            var eduCityTxt = $("#edu-city").val()
            var eduStateTxt = $("#edu-state").val()
            var eduDegreeStatusTxt = $("#edu-degree-status").val()
            var eduStartMDateTxt = $("#edu-start-m-date").val()
            var eduStartYDateTxt = $("#edu-start-y-date").val()
            var eduEndMDateTxt = $("#edu-end-m-date").val()
            var eduEndYDateTxt = $("#edu-end-y-date").val()
            var eduMarksTxt = $("#edu-marks-sel").val()
            var eduMarksImpTxt = $("#edu-marks-imp").val()
            var eduDivisionTxt = $("#edu-division-sel").val()
            var eduMarksSym = $("#edu-marks-sym").html()


            var eduRows = $(".edu-row");
            var addedEduSel = $("#added-edu-sel")
            var addedEduOp = addedEduSel.find("option")
            // alert(addedEduOp.length)
            var opLength = addedEduOp.length;
            if (opLength == 1) {




                var eduNameSpan = $(eduRows[0]).find(".edu-name-span");
                var eduAffilSpan = $(eduRows[0]).find(".edu-affil-span");
                var eduDegreeSpan = $(eduRows[0]).find(".edu-degree-span");
                var eduCitySpan = $(eduRows[0]).find(".edu-city-span");
                var eduStateSpan = $(eduRows[0]).find(".edu-state-span");
                var eduStatusSpan = $(eduRows[0]).find(".edu-status-span");
                var eduStartMDateSpan = $(eduRows[0]).find(".edu-start-m-span");
                var eduStartYDateSpan = $(eduRows[0]).find(".edu-start-y-span");
                var eduEndMDateSpan = $(eduRows[0]).find(".edu-end-m-span");
                var eduEndYDateSpan = $(eduRows[0]).find(".edu-end-y-span");
                var eduMarksSpan = $(eduRows[0]).find(".edu-marks-sel-span");
                var eduMarksImpSpan = $(eduRows[0]).find(".edu-imp-span");
                var eduDivisionSpan = $(eduRows[0]).find(".edu-division-sel-span");
                var eduMarksSymSpan = $(eduRows[0]).find(".edu-marks-sym-span");

                eduNameSpan.html(eduNameTxt)
                eduAffilSpan.html(eduAffilTxt)
                eduDegreeSpan.html(eduDegreeTxt)
                eduCitySpan.html(eduCityTxt)
                eduStateSpan.html(eduStateTxt)
                eduStatusSpan.html(eduDegreeStatusTxt)
                eduStartMDateSpan.html(eduStartMDateTxt)
                eduStartYDateSpan.html(eduStartYDateTxt)
                if ($("#edu-skip-end-date").prop("checked") == true)
                {
                    eduEndMDateSpan.html("")
                    eduEndYDateSpan.html("Present")
                } else
                {
                    eduEndMDateSpan.html(eduEndMDateTxt)
                    eduEndYDateSpan.html(eduEndYDateTxt)
                }
                eduMarksSpan.html(eduMarksTxt)
                eduMarksImpSpan.html(eduMarksImpTxt)
                eduDivisionSpan.html(eduDivisionTxt)
                eduMarksSymSpan.html(eduMarksSym)

                var addedEduSel = $("#added-edu-sel")
                var eduNameTxtDash = eduNameTxt.replaceAll(" ", "-")
                addedEduSel.append("<option value='" + eduNameTxtDash + "-1'> " + eduNameTxt + "</option>")
                $(eduRows[0]).addClass(eduNameTxtDash + "-1")

            } else if (opLength > 1) {
//                alert("above 1")
                var internDiv = $(".edu-div");
                var row = $(".edu-div .edu-row:first-child");
                $(internDiv[0]).append(row.clone().wrap("<p>").parent().html())

                eduRows = $(".edu-row")

                var eduNameSpan = $(eduRows[opLength - 1]).find(".edu-name-span");
                var eduAffilSpan = $(eduRows[opLength - 1]).find(".edu-affil-span");
                var eduDegreeSpan = $(eduRows[opLength - 1]).find(".edu-degree-span");
                var eduCitySpan = $(eduRows[opLength - 1]).find(".edu-city-span");
                var eduStateSpan = $(eduRows[opLength - 1]).find(".edu-state-span");
                var eduStatusSpan = $(eduRows[opLength - 1]).find(".edu-status-span");
                var eduStartMDateSpan = $(eduRows[opLength - 1]).find(".edu-start-m-span");
                var eduStartYDateSpan = $(eduRows[opLength - 1]).find(".edu-start-y-span");
                var eduEndMDateSpan = $(eduRows[opLength - 1]).find(".edu-end-m-span");
                var eduEndYDateSpan = $(eduRows[opLength - 1]).find(".edu-end-y-span");
                var eduMarksSpan = $(eduRows[opLength - 1]).find(".edu-marks-sel-span");
                var eduMarksImpSpan = $(eduRows[opLength - 1]).find(".edu-imp-span");
                var eduDivisionSpan = $(eduRows[opLength - 1]).find(".edu-division-sel-span");


                eduNameSpan.html(eduNameTxt)
                eduAffilSpan.html(eduAffilTxt)
                eduDegreeSpan.html(eduDegreeTxt)
                eduCitySpan.html(eduCityTxt)
                eduStateSpan.html(eduStateTxt)
                eduStatusSpan.html(eduDegreeStatusTxt)
                eduStartMDateSpan.html(eduStartMDateTxt)
                eduStartYDateSpan.html(eduStartYDateTxt)
                if ($("#edu-skip-end-date").prop("checked") == true)
                {
                    eduEndMDateSpan.html("")
                    eduEndYDateSpan.html("Present")
                } else
                {
                    eduEndMDateSpan.html(eduEndMDateTxt)
                    eduEndYDateSpan.html(eduEndYDateTxt)
                }
                eduMarksSpan.html(eduMarksTxt)
                eduMarksImpSpan.html(eduMarksImpTxt)
                eduDivisionSpan.html(eduDivisionTxt)


                eduRows = $(".edu-row")
                var eduNameTxtDash = eduNameTxt.replaceAll(" ", "-")
                var eduEditSelOpLength = $("#added-edu-sel option").length
                $("#added-edu-sel").append("<option value='" + eduNameTxtDash + "-" + eduEditSelOpLength + "'> " + eduNameTxt + "</option>")
//                alert(eduEditSelOpLength - 1 + "after== before==" + eduEditSelOpLength)
                $(eduRows[eduEditSelOpLength - 1]).addClass(eduNameTxtDash + "-" + eduEditSelOpLength)

            } else {
                alert("something wrong")
            }


        }

        function setEduRowEdit() {

            var rowEduClass = eduEditRowOptionVal
            var eduRow = $("." + rowEduClass)[0]

            var eduDegreeSpan = $(eduRow).find(".edu-degree-span");
            var eduAffilSpan = $(eduRow).find(".edu-affil-span");
            var eduCitySpan = $(eduRow).find(".edu-city-span");
            var eduStateSpan = $(eduRow).find(".edu-state-span");
            var eduStatusSpan = $(eduRow).find(".edu-status-span");
            var eduStartMDateSpan = $(eduRow).find(".edu-start-m-span");
            var eduStartYDateSpan = $(eduRow).find(".edu-start-y-span");
            var eduEndMDateSpan = $(eduRow).find(".edu-end-m-span");
            var eduEndYDateSpan = $(eduRow).find(".edu-end-y-span");
            var eduMarksSpan = $(eduRow).find(".edu-marks-sel-span");
            var eduMarksImpSpan = $(eduRow).find(".edu-imp-span");
            var eduMarksSymSpan = $(eduRow).find(".edu-marks-sym-span");
            var eduDivisionSpan = $(eduRow).find(".edu-division-sel-span");



            $("#edu-degree-type-edit").val(eduDegreeSpan.html())
            $("#edu-affil-edit").val(eduAffilSpan.html())
            $("#edu-city-edit").val(eduCitySpan.html())
            $("#edu-state-edit").val(eduStateSpan.html())
            $("#edu-degree-status-edit").val(eduStatusSpan.html())
            $("#edu-start-m-date-edit").val(eduStartMDateSpan.html())
            $("#edu-start-y-date-edit").val(eduStartYDateSpan.html())
            if (eduEndMDateSpan.html().trim() != "" || eduEndYDateSpan.html().trim() != "Present")
            {
                $("#edu-end-m-date-edit").val(eduEndMDateSpan.html())
                $("#edu-end-y-date-edit").val(eduEndYDateSpan.html())
            }
            $("#edu-marks-sel-edit").val(eduMarksSpan.html())
            $("#edu-marks-imp-edit").val(eduMarksImpSpan.html())
            $("#edu-division-sel-edit").val(eduDivisionSpan.html())
            $("#edu-marks-sym-edit").html(eduMarksSymSpan.html())


        }


        function editEduSelRow() {
            var rowEduClass = eduEditRowOptionVal
            var eduRow = $("." + rowEduClass)[0]

            var eduAffilSpan = $(eduRow).find(".edu-affil-span");
            var eduDegreeSpan = $(eduRow).find(".edu-degree-span");
            var eduCitySpan = $(eduRow).find(".edu-city-span");
            var eduStateSpan = $(eduRow).find(".edu-state-span");
            var eduStatusSpan = $(eduRow).find(".edu-status-span");
            var eduStartMDateSpan = $(eduRow).find(".edu-start-m-span");
            var eduStartYDateSpan = $(eduRow).find(".edu-start-y-span");
            var eduEndMDateSpan = $(eduRow).find(".edu-end-m-span");
            var eduEndYDateSpan = $(eduRow).find(".edu-end-y-span");
            var eduMarksSpan = $(eduRow).find(".edu-marks-sel-span");
            var eduMarksImpSpan = $(eduRow).find(".edu-imp-span");
            var eduDivisionSpan = $(eduRow).find(".edu-division-sel-span");
            var eduMarksSymSpan = $(eduRow).find(".edu-marks-sym-span");

            eduAffilSpan.html($("#edu-affil-edit").val());
            eduDegreeSpan.html($("#edu-degree-type-edit").val());
            eduCitySpan.html($("#edu-city-edit").val());
            eduStateSpan.html($("#edu-state-edit").val());
            eduStatusSpan.html($("#edu-degree-status-edit").val());
            eduStartMDateSpan.html($("#edu-start-m-date-edit").val());
            eduStartYDateSpan.html($("#edu-start-y-date-edit").val());
            if ($("#edu-skip-end-date-edit").prop("checked") == true)
            {
                eduEndMDateSpan.html("")
                eduEndYDateSpan.html("Present")
            } else
            {
                eduEndMDateSpan.html($("#edu-end-m-date-edit").val())
                eduEndYDateSpan.html($("#edu-end-y-date-edit").val())
            }
            eduMarksSpan.html($("#edu-marks-sel-edit").val());
            eduMarksImpSpan.html($("#edu-marks-imp-edit").val());
            eduDivisionSpan.html($("#edu-division-sel-edit").val());
            eduMarksSymSpan.html($("#edu-marks-sym-edit").html());

        }



        function removeEduRow() {
            var rowEduClass = eduEditRowOptionVal
            var eduRow = $("." + rowEduClass)[0]


            var eduRows = $(".edu-row")
            if (eduRows.length > 1) {


                var eduRowRemove = eduRow
                $(eduRowRemove).remove()
            } else if (eduRows.length == 1) {
                var eduNameSpan = $(eduRow).find(".edu-name-span");
                var eduAffilSpan = $(eduRow).find(".edu-affil-span");
                var eduDegreeSpan = $(eduRow).find(".edu-degree-span");
                var eduCitySpan = $(eduRow).find(".edu-city-span");
                var eduStateSpan = $(eduRow).find(".edu-state-span");
                var eduStatusSpan = $(eduRow).find(".edu-status-span");
                var eduStartMDateSpan = $(eduRow).find(".edu-start-m-span");
                var eduStartYDateSpan = $(eduRow).find(".edu-start-y-span");
                var eduEndMDateSpan = $(eduRow).find(".edu-end-m-span");
                var eduEndYDateSpan = $(eduRow).find(".edu-end-y-span");
                var eduMarksSpan = $(eduRow).find(".edu-marks-sel-span");
                var eduMarksImpSpan = $(eduRow).find(".edu-imp-span");
                var eduMarksSymSpan = $(eduRow).find(".edu-marks-sym-span");
                var eduDivisionSpan = $(eduRow).find(".edu-division-sel-span");


                eduNameSpan.html("Education Name");
                eduAffilSpan.html("Education Affiliation");
                eduDegreeSpan.html("Degree Type");
                eduCitySpan.html("City");
                eduStateSpan.html("State");
                eduStatusSpan.html("Status");
                eduStartMDateSpan.html("Mon-");
                eduStartYDateSpan.html("Year");
                eduEndMDateSpan.html("Mon-");
                eduEndYDateSpan.html("Year");
                eduMarksSpan.html("Marks");
                eduMarksImpSpan.html("Imp");
                eduMarksSymSpan.html("Symbol");
                eduDivisionSpan.html("Division");
            }
            var eduEditSelOpLength = $("#added-edu-sel option").length
            var selectEduRemoveOp = $("#added-edu-sel option[value='" + rowEduClass + "']");
            selectEduRemoveOp.remove()

        }






    });


//.......................Education End........................



//.......................Training and Certification........................


    $(document).ready(function () {
        $("#add-new-tc-btn").click(function (e) {
            e.preventDefault();
            addNewTCRows()
        });

        $("#training-skip-end-date").change(function () {
            if ($(this).prop("checked") == true)
            {
                $("#training-end-m-date").prop("disabled", true)
                $("#training-end-y-date").prop("disabled", true)
//                $(".wrk-end-span").text("Present")
            } else
            if ($(this).prop("checked") == false)
            {
                $("#training-end-m-date").prop("disabled", false)
                $("#training-end-y-date").prop("disabled", false)
//                $(".wrk-end-span").text("2006")
            }

        });
//                ................. edit present............
        $("#training-skip-end-date-edit").change(function () {
            if ($(this).prop("checked") == true)
            {
                $("#training-end-m-date-edit").prop("disabled", true)
                $("#training-end-y-date-edit").prop("disabled", true)
//                $(".wrk-end-span").text("Present")
            } else
            if ($(this).prop("checked") == false)
            {
                $("#training-end-m-date-edit").prop("disabled", false)
                $("#training-end-y-date-edit").prop("disabled", false)
//                $(".wrk-end-span").text("2006")
            }

        });


        $('#edit-tc-btn').click(function (e) {
            e.preventDefault();
            editTCSelRow()

        });

        $('#remove-tc-btn').click(function (e) {
            e.preventDefault();
            removeTCRow()

        });
        var tcEditRowOptionVal = ""
        $("#added-tc-sel").change(function (e) {
            e.preventDefault();
            tcEditRowOptionVal = $(this).val()
            setTCRowEdit()
        });


        var trainingStartMonthsSel = document.getElementById("training-start-m-date");
        var trainingStartMonthArr = ["JAN-", "FEB-", "MAR-", "APR-", "MAY-", "JUN-", "JUL-", "AUG-", "SEP-", "OCT-", "NOV-", "DEC-"];
        var trainingStartmonth = trainingStartMonthArr.length;
        for (i = 0; i < trainingStartmonth; i++) {
            trainingStartMonthsSel.innerHTML += "<option value='" + trainingStartMonthArr[i] + "'>" + trainingStartMonthArr[i] + "</option>"
        }

        var trainingStartYearSel = document.getElementById("training-start-y-date");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            trainingStartYearSel.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }

        var trainingEndMonthsSel = document.getElementById("training-end-m-date");
        var trainingEndMonthArr = ["JAN-", "FEB-", "MAR-", "APR-", "MAY-", "JUN-", "JUL-", "AUG-", "SEP-", "OCT-", "NOV-", "DEC-"];
        var trainingEndMonth = trainingEndMonthArr.length;
        for (i = 0; i < trainingEndMonth; i++) {
            trainingEndMonthsSel.innerHTML += "<option value='" + trainingEndMonthArr[i] + "'>" + trainingEndMonthArr[i] + "</option>"
        }

        var trainingEndYearSel = document.getElementById("training-end-y-date");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            trainingEndYearSel.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }

//        ...................edit...........

        var trainingStartMonthsSelEdit = document.getElementById("training-start-m-date-edit");
        var trainingStartMonthEditArr = ["JAN-", "FEB-", "MAR-", "APR-", "MAY-", "JUN-", "JUL-", "AUG-", "SEP-", "OCT-", "NOV-", "DEC-"];
        var trainingStartmonthEdit = trainingStartMonthEditArr.length;
        for (i = 0; i < trainingStartmonthEdit; i++) {
            trainingStartMonthsSelEdit.innerHTML += "<option value='" + trainingStartMonthEditArr[i] + "'>" + trainingStartMonthEditArr[i] + "</option>"
        }

        var trainingStartYearSelEdit = document.getElementById("training-start-y-date-edit");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            trainingStartYearSelEdit.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }

        var trainingEndMonthsSelEdit = document.getElementById("training-end-m-date-edit");
        var trainingEndMonthEditArr = ["JAN-", "FEB-", "MAR-", "APR-", "MAY-", "JUN-", "JUL-", "AUG-", "SEP-", "OCT-", "NOV-", "DEC-"];
        var trainingEndMonthEdit = trainingEndMonthEditArr.length;
        for (i = 0; i < trainingEndMonthEdit; i++) {
            trainingEndMonthsSelEdit.innerHTML += "<option value='" + trainingEndMonthEditArr[i] + "'>" + trainingEndMonthEditArr[i] + "</option>"
        }

        var trainingEndYearSelEdit = document.getElementById("training-end-y-date-edit");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            trainingEndYearSelEdit.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }


        function addNewTCRows() {
//            alert("Add TC")
            var tcNameTxt = $("#tc-name-inp").val()
            var tcStartMTxt = $("#training-start-m-date").val()
            var tcStartYTxt = $("#training-start-y-date").val()
            var tcEndMTxt = $("#training-end-m-date").val()
            var tcEndYTxt = $("#training-end-y-date").val()
            var tcBostTxt = $("#tc-bost-inp").val()
            var tcStatusTxt = $("#tc-status-sel").val()



            var tcRows = $(".tc-row");
            var addedTCSel = $("#added-tc-sel")
            var addedTCOp = addedTCSel.find("option")
            // alert(addedEduOp.length)
            var opLength = addedTCOp.length;
            if (opLength == 1) {

                var tcNameSpan = $(tcRows[0]).find(".tc-name-span");
                var tcStartMSpan = $(tcRows[0]).find(".training-start-m-span");
                var tcStartYSpan = $(tcRows[0]).find(".training-start-y-span");
                var tcEndMSpan = $(tcRows[0]).find(".training-end-m-span");
                var tcEndYSpan = $(tcRows[0]).find(".training-end-y-span");
                var tcBostSpan = $(tcRows[0]).find(".tc-bost-span");
                var tcStatusSpan = $(tcRows[0]).find(".tc-status-span");


                tcNameSpan.html(tcNameTxt)
                tcStartMSpan.html(tcStartMTxt)
                tcStartYSpan.html(tcStartYTxt)
//                tcEndMSpan.html(tcEndMTxt)
//                tcEndYSpan.html(tcEndYTxt)
                if ($("#training-skip-end-date").prop("checked") == true)
                {
                    tcEndMSpan.html("")
                    tcEndYSpan.html("Present")
                } else
                {
                    tcEndMSpan.html(tcEndMTxt)
                    tcEndYSpan.html(tcEndYTxt)
                }
                tcBostSpan.html(tcBostTxt)
                tcStatusSpan.html(tcStatusTxt)


                var addedTCSel = $("#added-tc-sel")
                var tcNameTxtDash = tcNameTxt.replaceAll(" ", "-")
                addedTCSel.append("<option value='" + tcNameTxtDash + "-1'> " + tcNameTxt + "</option>")
                $(tcRows[0]).addClass(tcNameTxtDash + "-1")

            } else if (opLength > 1) {
//                alert("above 1")
                var internDiv = $(".tc-div");
                var row = $(".tc-div .tc-row:first-child");
                $(internDiv[0]).append(row.clone().wrap("<p>").parent().html())


                tcRows = $(".tc-row")
                var tcNameSpan = $(tcRows[opLength - 1]).find(".tc-name-span");
                var tcStartMSpan = $(tcRows[opLength - 1]).find(".training-start-m-span");
                var tcStartYSpan = $(tcRows[opLength - 1]).find(".training-start-y-span");
                var tcEndMSpan = $(tcRows[opLength - 1]).find(".training-end-m-span");
                var tcEndYSpan = $(tcRows[opLength - 1]).find(".training-end-y-span");
                var tcBostSpan = $(tcRows[opLength - 1]).find(".tc-bost-span");
                var tcStatusSpan = $(tcRows[opLength - 1]).find(".tc-status-span");


                tcNameSpan.html(tcNameTxt)
                tcStartMSpan.html(tcStartMTxt)
                tcStartYSpan.html(tcStartYTxt)
                if ($("#training-skip-end-date").prop("checked") == true)
                {
                    tcEndMSpan.html("")
                    tcEndYSpan.html("Present")
                } else
                {
                    tcEndMSpan.html(tcEndMTxt)
                    tcEndYSpan.html(tcEndYTxt)
                }
                tcBostSpan.html(tcBostTxt)
                tcStatusSpan.html(tcStatusTxt)

                tcRows = $(".tc-row")
                var tcNameTxtDash = tcNameTxt.replaceAll(" ", "-")
                var addedTCSelOpLength = $("#added-tc-sel option").length
                $("#added-tc-sel").append("<option value='" + tcNameTxtDash + "-" + addedTCSelOpLength + "'> " + tcNameTxt + "</option>")
//                alert(addedTCSelOpLength - 1 + "after== before==" + addedTCSelOpLength)
                $(tcRows[addedTCSelOpLength - 1]).addClass(tcNameTxtDash + "-" + addedTCSelOpLength)
//                $(internRows[0]).addClass(companyInternNameTxt + "-1")

            } else {
                alert("something wrong")
            }


        }

        function setTCRowEdit() {

            var rowTCClass = tcEditRowOptionVal
            var tcRow = $("." + rowTCClass)[0]


            var tcStartMSpan = $(tcRow).find(".training-start-m-span");
            var tcStartYSpan = $(tcRow).find(".training-start-y-span");
            var tcEndMSpan = $(tcRow).find(".training-end-m-span");
            var tcEndYSpan = $(tcRow).find(".training-end-y-span");
            var tcBostSpan = $(tcRow).find(".tc-bost-span");
            var tcStatusSpan = $(tcRow).find(".tc-status-span");


//            var tcYearTxt = $("#tc-year-sel").val()
//            var tcBostTxt = $("#tc-bost-inp").val()
//            var tcStatusTxt = $("#tc-status-sel").val()


            $("#training-start-m-date-edit").val(tcStartMSpan.html())
            $("#training-start-y-date-edit").val(tcStartYSpan.html())
            if (tcEndMSpan.html().trim() != "" || tcEndYSpan.html().trim() != "Present")
            {
                $("#training-end-m-date-edit").val(tcEndMSpan.html())
                $("#training-end-y-date-edit").val(tcEndYSpan.html())
            }
            $("#tc-bost-inp-edit").val(tcBostSpan.html())
            $("#tc-status-sel-edit").val(tcStatusSpan.html())



        }


        function editTCSelRow() {
            var rowTCClass = tcEditRowOptionVal
            var tcRow = $("." + rowTCClass)[0]

            var tcStartMSpan = $(tcRow).find(".training-start-m-span");
            var tcStartYSpan = $(tcRow).find(".training-start-y-span");
            var tcEndMSpan = $(tcRow).find(".training-end-m-span");
            var tcEndYSpan = $(tcRow).find(".training-end-y-span");
            var tcBostSpan = $(tcRow).find(".tc-bost-span");
            var tcStatusSpan = $(tcRow).find(".tc-status-span");

            tcStartMSpan.html($("#training-start-m-date-edit").val())
            tcStartYSpan.html($("#training-start-y-date-edit").val())
            if ($("#training-skip-end-date-edit").prop("checked") == true)
            {
                tcEndMSpan.html("")
                tcEndYSpan.html("Present")
            } else
            {
                tcEndMSpan.html($("#training-end-m-date-edit").val())
                tcEndYSpan.html($("#training-end-y-date-edit").val())
            }
            tcBostSpan.html($("#tc-bost-inp-edit").val())
            tcStatusSpan.html($("#tc-status-sel-edit").val())
        }



        function removeTCRow() {
            var rowTCClass = tcEditRowOptionVal
            var tcRow = $("." + rowTCClass)[0]

            var tcRows = $(".tc-row")
            if (tcRows.length > 1) {


                var tcRowRemove = tcRow
                $(tcRowRemove).remove()
            } else if (tcRows.length == 1) {
//                alert("remove 1")
                var tcNameSpan = $(tcRow).find(".tc-name-span");
                var tcStartMSpan = $(tcRow).find(".training-start-m-date-span");
                var tcStartYSpan = $(tcRow).find(".training-start-y-date-span");
                var tcEndMSpan = $(tcRow).find(".training-end-m-date-span");
                var tcEndYSpan = $(tcRow).find(".training-end-y-date-span");
                var tcBostSpan = $(tcRow).find(".tc-bost-span");
                var tcStatusSpan = $(tcRow).find(".tc-status-span");




                tcNameSpan.html("Name")
                tcStartMSpan.html("Mon-")
                tcStartYSpan.html("year")
                tcEndMSpan.html("Mon-")
                tcEndYSpan.html("year")
                tcBostSpan.html("Bost")
                tcStatusSpan.html("status")

            }
            var addedTCSelOpLength = $("#added-tc-sel option").length
            var selectTCRemoveOp = $("#added-tc-sel option[value='" + rowTCClass + "']");
            selectTCRemoveOp.remove()


        }






    });


//.......................Training and Certification End........................




//.......................Work and Company........................


    $(document).ready(function () {
        $("#add-wrk-btn").click(function (e) {
            e.preventDefault();
            addWrkRows()
        });

        $("#work-skip-end-date").change(function () {
            if ($(this).prop("checked") == true)
            {
                $("#work-end-m-date").prop("disabled", true)
                $("#work-end-y-date").prop("disabled", true)
//                $(".wrk-end-span").text("Present")
            } else
            if ($(this).prop("checked") == false)
            {
                $("#work-end-m-date").prop("disabled", false)
                $("#work-end-y-date").prop("disabled", false)
//                $(".wrk-end-span").text("2006")
            }

        });
//                ................. edit present............
        $("#work-skip-end-date-edit").change(function () {
            if ($(this).prop("checked") == true)
            {
                $("#work-end-m-date-edit").prop("disabled", true)
                $("#work-end-y-date-edit").prop("disabled", true)
//                $(".wrk-end-span").text("Present")
            } else
            if ($(this).prop("checked") == false)
            {
                $("#work-end-m-date-edit").prop("disabled", false)
                $("#work-end-y-date-edit").prop("disabled", false)
//                $(".wrk-end-span").text("2006")
            }

        });

        $("#edit-wrk-btn").click(function (e) {
            e.preventDefault();
            editWrkRow()

        });

        $("#rmv-wrk-btn").click(function (e) {
            e.preventDefault();
            removeWrkRow()

        });
        var wrkEditRowOptionVal = ""
        $("#added-wrk-sel").change(function (e) {
            e.preventDefault();
            wrkEditRowOptionVal = $(this).val()
            setWrkEdit()
        });


        var workStartMonthsSel = document.getElementById("work-start-m-date");
        var workStartMonthArr = ["JAN-", "FEB-", "MAR-", "APR-", "MAY-", "JUN-", "JUL-", "AUG-", "SEP-", "OCT-", "NOV-", "DEC-"];
        var workStartmonth = workStartMonthArr.length;
        for (i = 0; i < workStartmonth; i++) {
            workStartMonthsSel.innerHTML += "<option value='" + workStartMonthArr[i] + "'>" + workStartMonthArr[i] + "</option>"
        }

        var workStartYearSel = document.getElementById("work-start-y-date");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            workStartYearSel.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }

        var workEndMonthsSel = document.getElementById("work-end-m-date");
        var workEndMonthArr = ["JAN-", "FEB-", "MAR-", "APR-", "MAY-", "JUN-", "JUL-", "AUG-", "SEP-", "OCT-", "NOV-", "DEC-"];
        var workEndMonth = workEndMonthArr.length;
        for (i = 0; i < workEndMonth; i++) {
            workEndMonthsSel.innerHTML += "<option value='" + workEndMonthArr[i] + "'>" + workEndMonthArr[i] + "</option>"
        }

        var workEndYearSel = document.getElementById("work-end-y-date");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            workEndYearSel.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }

//        ...................edit...........

        var workStartMonthsSelEdit = document.getElementById("work-start-m-date-edit");
        var workStartMonthEditArr = ["JAN-", "FEB-", "MAR-", "APR-", "MAY-", "JUN-", "JUL-", "AUG-", "SEP-", "OCT-", "NOV-", "DEC-"];
        var workStartmonthEdit = workStartMonthEditArr.length;
        for (i = 0; i < workStartmonthEdit; i++) {
            workStartMonthsSelEdit.innerHTML += "<option value='" + workStartMonthEditArr[i] + "'>" + workStartMonthEditArr[i] + "</option>"
        }

        var workStartYearSelEdit = document.getElementById("work-start-y-date-edit");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            workStartYearSelEdit.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }

        var workEndMonthsSelEdit = document.getElementById("work-end-m-date-edit");
        var workEndMonthEditArr = ["JAN-", "FEB-", "MAR-", "APR-", "MAY-", "JUN-", "JUL-", "AUG-", "SEP-", "OCT-", "NOV-", "DEC-"];
        var workEndMonthEdit = workEndMonthEditArr.length;
        for (i = 0; i < workEndMonthEdit; i++) {
            workEndMonthsSelEdit.innerHTML += "<option value='" + workEndMonthEditArr[i] + "'>" + workEndMonthEditArr[i] + "</option>"
        }

        var workEndYearSelEdit = document.getElementById("work-end-y-date-edit");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            workEndYearSelEdit.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }




        function addWrkRows() {
            var wrkNameTxt = $("#wrk-name-inp").val()
            var wrkJobTxt = $("#wrk-job-inp").val()
            var wrkCityTxt = $("#wrk-city-inp").val()
            var wrkStateTxt = $("#wrk-state-inp").val()
            var wrkStartMTxt = $("#work-start-m-date").val()
            var wrkStartYTxt = $("#work-start-y-date").val()
            var wrkEndMTxt = $("#work-end-m-date").val()
            var wrkEndYTxt = $("#work-end-y-date").val()
            var wrkDescTxt = $("#wrk-desc-inp").html()
            var wrkPhrsTxt = $("#wrk-phrs-inp").html()

            var wrkRows = $(".wrk-row");
            var addedWrkSel = $("#added-wrk-sel")
            var addedWrkOp = addedWrkSel.find("option")
            var opLength = addedWrkOp.length;
            if (opLength == 1) {

                var wrkNameSpan = $(wrkRows[0]).find(".wrk-name-span")
                var wrkJobSpan = $(wrkRows[0]).find(".wrk-job-span")
                var wrkCitySpan = $(wrkRows[0]).find(".wrk-city-span")
                var wrkStateSpan = $(wrkRows[0]).find(".wrk-state-span")
                var wrkStartMSpan = $(wrkRows[0]).find(".work-start-m-span")
                var wrkStartYSpan = $(wrkRows[0]).find(".work-start-y-span")
                var wrkEndMSpan = $(wrkRows[0]).find(".work-end-m-span")
                var wrkEndYSpan = $(wrkRows[0]).find(".work-end-y-span")
                var wrkDescSpan = $(wrkRows[0]).find(".wrk-desc-span")
                var wrkPhrsSpan = $(wrkRows[0]).find(".wrk-phrs-span")

                wrkNameSpan.html(wrkNameTxt)
                wrkJobSpan.html(wrkJobTxt)
                wrkCitySpan.html(wrkCityTxt)
                wrkStateSpan.html(wrkStateTxt)
                wrkStartMSpan.html(wrkStartMTxt)
                wrkStartYSpan.html(wrkStartYTxt)
                if ($("#work-skip-end-date").prop("checked") == true)
                {
                    wrkEndMSpan.html("")
                    wrkEndYSpan.html("Present")
                } else
                {
                    wrkEndMSpan.html(wrkEndMTxt)
                    wrkEndYSpan.html(wrkEndYTxt)
                }
                wrkDescSpan.html(wrkDescTxt)
                wrkPhrsSpan.html(wrkPhrsTxt)

                var addedWrkSel = $("#added-wrk-sel")
                var wrkNameTxtDash = wrkNameTxt.replaceAll(" ", "-")
                addedWrkSel.append("<option value='" + wrkNameTxtDash + "-1'> " + wrkNameTxt + "</option>")
                $(wrkRows[0]).addClass(wrkNameTxtDash + "-1")

            } else if (opLength > 1) {
                var wrkDiv = $(".wrk-div");
                var row = $(".wrk-div .wrk-row:first-child");
                $(wrkDiv[0]).append(row.clone().wrap("<p>").parent().html())


                wrkRows = $(".wrk-row")
                var wrkNameSpan = $(wrkRows[opLength - 1]).find(".wrk-name-span")
                var wrkJobSpan = $(wrkRows[opLength - 1]).find(".wrk-job-span")
                var wrkCitySpan = $(wrkRows[opLength - 1]).find(".wrk-city-span")
                var wrkStateSpan = $(wrkRows[opLength - 1]).find(".wrk-state-span")
                var wrkStartMSpan = $(wrkRows[opLength - 1]).find(".work-start-m-span")
                var wrkStartYSpan = $(wrkRows[opLength - 1]).find(".work-start-y-span")
                var wrkEndMSpan = $(wrkRows[opLength - 1]).find(".work-end-m-span")
                var wrkEndYSpan = $(wrkRows[opLength - 1]).find(".work-end-y-span")
                var wrkDescSpan = $(wrkRows[opLength - 1]).find(".wrk-desc-span")
                var wrkPhrsSpan = $(wrkRows[opLength - 1]).find(".wrk-phrs-span")

                wrkNameSpan.html(wrkNameTxt)
                wrkJobSpan.html(wrkJobTxt)
                wrkCitySpan.html(wrkCityTxt)
                wrkStateSpan.html(wrkStateTxt)
                wrkStartMSpan.html(wrkStartMTxt)
                wrkStartYSpan.html(wrkStartYTxt)
                if ($("#work-skip-end-date").prop("checked") == true)
                {
                    wrkEndMSpan.html("")
                    wrkEndYSpan.html("Present")
                } else
                {
                    wrkEndMSpan.html(wrkEndMTxt)
                    wrkEndYSpan.html(wrkEndYTxt)
                }
                wrkDescSpan.html(wrkDescTxt)
                wrkPhrsSpan.html(wrkPhrsTxt)

                wrkRows = $(".wrk-row")
                var wrkNameTxtDash = wrkNameTxt.replaceAll(" ", "-")
                var addedWrkSelOpLength = $("#added-wrk-sel option").length
                $("#added-wrk-sel").append("<option value='" + wrkNameTxtDash + "-" + addedWrkSelOpLength + "'> " + wrkNameTxt + "</option>")
                $(wrkRows[addedWrkSelOpLength - 1]).addClass(wrkNameTxtDash + "-" + addedWrkSelOpLength)

            } else {
                alert("something wrong")
            }


        }

        function setWrkEdit() {

            var rowWrkClass = wrkEditRowOptionVal
            var wrkRow = $("." + rowWrkClass)[0]

            var wrkJobSpan = $(wrkRow).find(".wrk-job-span")
            var wrkCitySpan = $(wrkRow).find(".wrk-city-span")
            var wrkStateSpan = $(wrkRow).find(".wrk-state-span")
            var wrkStartMSpan = $(wrkRow).find(".work-start-m-span")
            var wrkStartYSpan = $(wrkRow).find(".work-start-y-span")
            var wrkEndMSpan = $(wrkRow).find(".work-end-m-span")
            var wrkEndYSpan = $(wrkRow).find(".work-end-y-span")
            var wrkDescSpan = $(wrkRow).find(".wrk-desc-span")
            var wrkPhrsSpan = $(wrkRow).find(".wrk-phrs-span")



            $("#wrk-job-edit").val(wrkJobSpan.html())
            $("#wrk-city-edit").val(wrkCitySpan.html())
            $("#wrk-state-edit").val(wrkStateSpan.html())
            $("#work-start-m-date-edit").val(wrkStartMSpan.html())
            $("#work-start-y-date-edit").val(wrkStartYSpan.html())
            if (wrkEndMSpan.html().trim() != "" || wrkEndYSpan.html().trim() != "Present")
            {
                $("#work-end-m-date-edit").val(wrkEndMSpan.html())
                $("#work-end-y-date-edit").val(wrkEndYSpan.html())
            }
            $("#wrk-desc-edit").html(wrkDescSpan.html())
            $("#wrk-phrs-edit").html(wrkPhrsSpan.html())

        }


        function editWrkRow() {
            var rowWrkClass = wrkEditRowOptionVal
            var wrkRow = $("." + rowWrkClass)[0]


            var wrkJobSpan = $(wrkRow).find(".wrk-job-span")
            var wrkCitySpan = $(wrkRow).find(".wrk-city-span")
            var wrkStateSpan = $(wrkRow).find(".wrk-state-span")
            var wrkStartMSpan = $(wrkRow).find(".work-start-m-span")
            var wrkStartYSpan = $(wrkRow).find(".work-start-y-span")
            var wrkEndMSpan = $(wrkRow).find(".work-end-m-span")
            var wrkEndYSpan = $(wrkRow).find(".work-end-y-span")
            var wrkDescSpan = $(wrkRow).find(".wrk-desc-span")
            var wrkPhrsSpan = $(wrkRow).find(".wrk-phrs-span")

            wrkJobSpan.html($("#wrk-job-edit").val())
            wrkCitySpan.html($("#wrk-city-edit").val())
            wrkStateSpan.html($("#wrk-state-edit").val())
            wrkStartMSpan.html($("#work-start-m-date-edit").val())
            wrkStartYSpan.html($("#work-start-y-date-edit").val())

            if ($("#work-skip-end-date-edit").prop("checked") == true)
            {
                wrkEndMSpan.html("")
                wrkEndYSpan.html("Present")
            } else
            {
                wrkEndMSpan.html($("#work-end-m-date-edit").val())
                wrkEndYSpan.html($("#work-end-y-date-edit").val())
            }
            wrkDescSpan.html($("#wrk-desc-edit").html())
            wrkPhrsSpan.html($("#wrk-phrs-edit").html())


        }



        function removeWrkRow() {
            var rowWrkClass = wrkEditRowOptionVal
            var wrkRow = $("." + rowWrkClass)[0]

            var wrkRows = $(".wrk-row")
            if (wrkRows.length > 1) {


                var wrkRowRemove = wrkRow
                $(wrkRowRemove).remove()
            } else if (wrkRows.length == 1) {
//                alert("remove 1")
                var wrkNameSpan = $(wrkRow).find(".wrk-name-span")
                var wrkJobSpan = $(wrkRow).find(".wrk-job-span")
                var wrkCitySpan = $(wrkRow).find(".wrk-city-span")
                var wrkStateSpan = $(wrkRow).find(".wrk-state-span")
                var wrkStartMSpan = $(wrkRow).find(".work-start-m-span")
                var wrkStartYSpan = $(wrkRow).find(".work-start-y-span")
                var wrkEndMSpan = $(wrkRow).find(".work-end-m-span")
                var wrkEndYSpan = $(wrkRow).find(".work-end-y-span")
                var wrkDescSpan = $(wrkRow).find(".wrk-desc-span")
                var wrkPhrsSpan = $(wrkRow).find(".wrk-phrs-span")

                wrkNameSpan.html("Name")
                wrkJobSpan.html("Job")
                wrkCitySpan.html("City")
                wrkStateSpan.html("State")
                wrkStartMSpan.html("Mon-")
                wrkStartYSpan.html("Year")
                wrkEndMSpan.html("Mon-")
                wrkEndYSpan.html("Year")
                wrkDescSpan.html("Description")
                wrkPhrsSpan.html("Phrsase")
            }
            var addedWrkSelOpLength = $("#added-wrk-sel option").length
            var selectWrkRemoveOp = $("#added-wrk-sel option[value='" + rowWrkClass + "']");
            selectWrkRemoveOp.remove()


        }



 bkLib.onDomLoaded(function () {
        var myNicEditor = new nicEditor();
        myNicEditor.setPanel('wrk-desc-inp-panel');
        myNicEditor.addInstance('wrk-desc-inp');
      
    });
    
 bkLib.onDomLoaded(function () {
        var myNicEditor = new nicEditor();
        myNicEditor.setPanel('wrk-phrs-edit-panel');
        myNicEditor.addInstance('wrk-phrs-edit');
       
    });
 bkLib.onDomLoaded(function () {
        var myNicEditor = new nicEditor();
        myNicEditor.setPanel('wrk-phrs-inp-panel');
        myNicEditor.addInstance('wrk-phrs-inp');
       
    });
 bkLib.onDomLoaded(function () {
        var myNicEditor = new nicEditor();
        myNicEditor.setPanel('wrk-desc-edit-panel');
        myNicEditor.addInstance('wrk-desc-edit');
       
    });


    });

//.......................Work and Company End........................





//....................... Awards and Owners........................


    var imgAward = "d1"
    var folderAwd = "awards";

    function changeAllAwardImgs(alt)
    {
        var awardImg = $(".award-row img")
        var awardAddedImgTags = $(".award-bar-img")

        var i = 0
        while (i < awardImg.length) {
            finalPath = alt + ".png"
            awardRateImgSrc = "imgs/awards/" + finalPath
            awardImg[i].src = awardRateImgSrc
            awardImg[i].alt = alt
            i++
        }
    }

    $(document).ready(function () {

        $("#award_d1").click(function () {

            imgAward = $(this).attr("alt")
            changeAllAwardImgs(imgAward)

        });
        $("#award_d2").click(function () {
            imgAward = $(this).attr("alt")
            changeAllAwardImgs(imgAward)
        });
        $("#award_r1").click(function () {
            imgAward = $(this).attr("alt")
            changeAllAwardImgs(imgAward)
        });
        $("#award_r2").click(function () {
            imgAward = $(this).attr("alt")
            changeAllAwardImgs(imgAward)
        });

        $("#add-award-btn").click(function (e) {
            e.preventDefault();
            addAwardsRow()
        });
        $("#remove-award-btn").click(function (e) {
            e.preventDefault();
            removeAwardsRow()
        });

        function removeAwardsRow() {
            var addAwardsRows = $(".award-row")
            var addAwardsEditSelVal = "." + $("#select-award-remove").val()
            var addAwardsSelIndex = addAwardsEditSelVal.split("-")[1]
//        alert(addClgInvsSelIndex)
            addAwardsSelIndex = parseInt(addAwardsSelIndex.trim()) - 1
            if (addAwardsRows.length > 1) {


                var addAwardsRow = $(addAwardsEditSelVal)[0]
                $(addAwardsRow).remove()
            } else if (addAwardsRows.length == 1) {
                var addAwardsLinkImgSpan = $(addAwardsRows[0]).find(".award-img-span");
                var addAwardsLinkSpan = $(addAwardsRows[0]).find(".award-txt-span");
                addAwardsLinkImgSpan.html("<img src='imgs/awards/" + imgAward + ".png' height='10' width='10'>")
                addAwardsLinkSpan.html("Awards and Achievements details");
            }
            var selectAwardsRemoveOp = $("#select-award-remove option[value='" + $("#select-award-remove").val() + "']");
            selectAwardsRemoveOp.remove()


        }

        function addAwardsRow() {


            var addAwardsFinalPath = "imgs/awards/" + imgAward + ".png";
            var addAwardsText = $("#name-award-inp").val().trim()
            var selectAwardsRemoveOp = $("#select-award-remove option");
            var selectAwardsRemoveOpLength = selectAwardsRemoveOp.length;
            var addAwardsRow = $(".award-row")
            if (selectAwardsRemoveOpLength == 1) {
                var addAwardsLinkImgSpan = $(addAwardsRow[0]).find(".award-img-span");
                var addAwardsLinkSpan = $(addAwardsRow[0]).find(".award-txt-span");
                addAwardsLinkImgSpan.html("<img src='" + addAwardsFinalPath + "' height='10' width='10'>")
                addAwardsLinkSpan.html(addAwardsText);
                $("#select-award-remove").append("<option value='" + addAwardsText + "-1'>" + addAwardsText + "</option>")
                $(addAwardsRow[0]).addClass(addAwardsText + "-1")
            } else if (selectAwardsRemoveOpLength > 1) {

                addAwardsText = $("#name-award-inp").val().trim()
                var addAwardsDiv = $(".award-div")
                var row = $(".award-div .award-row:first-child")
                $(addAwardsDiv[0]).append(row.clone().wrap("<p>").parent().html())
                var addAwardsRows = $(".award-row")
                var addAwardsLinkImgSpan = $(addAwardsRows[selectAwardsRemoveOpLength - 1]).find(".award-img-span")
                addAwardsLinkSpan = $(addAwardsRows[selectAwardsRemoveOpLength - 1]).find(".award-txt-span")
                // alert(expertiesLinkImgSpan.html() + " " + expertiesLinkSpan.html())
                $("#select-award-remove").append("<option value='" + addAwardsText + "-" + selectAwardsRemoveOpLength + "'>" + addAwardsText + "</option>")
                addAwardsLinkImgSpan.html("<img src='" + addAwardsFinalPath + "' height='10' width='10'>")
                addAwardsLinkSpan.html(addAwardsText)
                $(addAwardsRows[selectAwardsRemoveOpLength - 1]).addClass(addAwardsText + "-" + selectAwardsRemoveOpLength)
            }
        }
    });

//....................... Awards and Owners End........................


// ......languages...............................................

    var languageRatesArr = [];
    var folder = "type1"
    $(document).ready(function () {
        $("#typel1").click(function () {
            folder = $(this).attr("alt")
            var languageLen = languageRatesArr.length
            var finalPath = ""
            var languageRateImgSrc = ""
            var languageAddedImgTags = $(".language-bar-img")

            var i = 0
            while (i < languageLen) {
                finalPath = (folder + "/r" + languageRatesArr[i] + ".png")
                languageRateImgSrc = "imgs/bars/" + finalPath
                languageRateImgAlt = folder
                languageAddedImgTags[i].src = languageRateImgSrc
                languageAddedImgTags[i].alt = languageRateImgAlt
                i++
            }
        });
        $("#typel2").click(function () {
            folder = $(this).attr("alt")
            var languageLen = languageRatesArr.length
            var finalPath = ""
            var languageRateImgSrc = ""
            var languageAddedImgTags = $(".language-bar-img")

            var i = 0
            while (i < languageLen) {
                finalPath = (folder + "/r" + languageRatesArr[i] + ".png")
                languageRateImgSrc = "imgs/bars/" + finalPath
                languageRateImgAlt = folder
                languageAddedImgTags[i].src = languageRateImgSrc
                languageAddedImgTags[i].alt = languageRateImgAlt
                i++
            }
        });


        $("#add-language-btn").click(function (e) {
            e.preventDefault();
            addNewLanguageRows()
        });

        var selectedLanguageOp = ""
        $("#added-language-sel").change(function (e) {
            e.preventDefault();
            selectedLanguageOp = $(this).find(":selected")
            setSkillRowEdit()

        });

        $("#added-language-sel").change(function (e) {
            e.preventDefault();
            setLanguageRowEdit()

        });
        $("#edit-language-btn").click(function (e) {
            e.preventDefault();
            editLanguageSelRow()

        });
        $('#rmv-language-btn').click(function (e) {
            e.preventDefault();
            removeLanguageSelRow()

        });
        function addNewLanguageRows() {
            var languageNameTxt = $("#languageName").val()
            var languageRateTxt = $("#languageRate").val()
            var languageRows = $(".languages-row");
            var addedLanguageSel = $("#added-language-sel")
            var addedLanguageOp = addedLanguageSel.find("option")
            // alert(addedSkillOp.length)
            var opLength = addedLanguageOp.length;
            if (opLength == 1) {
                var languageNameSpan = $(languageRows[0]).find(".languages-name-span");
                var languageRateSpan = $(languageRows[0]).find(".languages-rate-span");
                var addedLanguageSel = $("#added-language-sel")
                addedLanguageSel.append("  <option value='1'> " + languageNameTxt + "</option>")
                // alert(skillNameSpan.html() + skillRateSpan.html())
                var languageRateImgTag = "<img class='language-bar-img' src='imgs/bars/" + folder + "/r" + languageRateTxt + ".png' alt='" + folder + "'>"
//                alert(languageRateImgTag)
                languageNameSpan.html(languageNameTxt)
                languageRateSpan.html(languageRateImgTag)
                languageRatesArr.push(parseInt(languageRateTxt.trim()))



            } else if (opLength > 1) {
                // alert($(skillRows[0]).html())
                var languageDiv = $(".languages-div");
                var row = $(".languages-div .languages-row:first-child");
                // alert("Row=" + row.length);
                // alert(row.clone().wrap("<p>").parent().html())
                // console.log("Parent=" + row.parent().length)
                $(languageDiv[0]).append(row.clone().wrap("<p>").parent().html())


                languageRows = $(".languages-row")
                // alert("Edu rows=" + eduRows.length)
                var languageNameSpan = $(languageRows[opLength - 1]).find(".languages-name-span");
                var languageRateSpan = $(languageRows[opLength - 1]).find(".languages-rate-span");
//                alert(languageNameSpan.html() + languageRateSpan.html())

                // var nameEduSpan = $(eduRows[]).find(".skill-name-span");
                // var ageEduSpan = $(eduRows[]).find(".skill-rate-span");

                var addedLanguageSel = $("#added-language-sel")
                addedLanguageSel.append("<option value='" + opLength + "'>" + languageNameTxt + "</option>")
                // alert(nameEduSpan + ageEduSpan + mobileEduSpan.length)
                var languageRateImgTag = "<img class='language-bar-img' src='imgs/bars/" + folder + "/r" + languageRateTxt + ".png' alt='" + folder + "'>"
//                alert(languageRateImgTag)
                languageNameSpan.html(languageNameTxt)
                languageRateSpan.html(languageRateImgTag)
                languageRatesArr.push(parseInt(languageRateTxt.trim()))

            } else {
                alert("something wrong")
            }


        }

        function setLanguageRowEdit() {

            var languageSelVal = parseInt($("#added-language-sel").val())

            var languagesRows = $(".languages-row:nth-child(" + (languageSelVal) + ")")

            var languageNameSpan = $(languagesRows).find(".languages-name-span");
//            alert(languageNameSpan.html())
            // var langRateSpan = $(langRows).find(".languages-rate-span");


            $("#languageNameEdit").val(languageNameSpan.html())
            $("#languageRateEdit").val(languageRatesArr[languageSelVal - 1])



        }


        function editLanguageSelRow() {
            var languageNameEditTxt = $("#languageNameEdit").val()
            var languageRateEditTxt = $("#languageRateEdit").val()
            var languageRateImgTag = "<img class='language-bar-img' src='imgs/bars/" + folder + "/r" + languageRateEditTxt + ".png' alt='" + folder + "'>"
            // alert(skillRateImgTag)
            var languageSelVal = parseInt($("#added-language-sel").val())
            languageRatesArr[languageSelVal - 1] = parseInt(languageRateEditTxt.trim())
            var languageRows = $(".languages-row:nth-child(" + (languageSelVal) + ")")
            var languageNameSpan = $(languageRows).find(".languages-name-span");
            var languageRateSpan = $(languageRows).find(".languages-rate-span");
            languageNameSpan.html(languageNameEditTxt)
            languageRateSpan.html(languageRateImgTag)
        }

        function removeLanguageSelRow() {
            var removeLanguageOp = selectedLanguageOp

            var addedLanguageSel = $("#added-language-sel")
            var addedLanguageOp = addedLanguageSel.find("option")
            var opLength = addedLanguageOp.length;

            if (opLength > 2)
            {
                var iLanguage = $(removeLanguageOp).index()
//                alert($(removeSkillOp).index())
//                alert($(removeSkillOp).text())
                var languageRow = $(".languages-row:nth-child(" + (iLanguage) + ")")
//                alert($(skillRow).html())
                $(languageRow).remove()
//            $(removeSkillOp).remove()
            } else if (opLength == 2)
            {
                var iLanguage = $(removeLanguageOp).index()
                var languageRow = $(".languages-row:nth-child(" + (iLanguage) + ")")
                var languageNameSpan = $(languageRow).find(".languages-name-span");
                var languageRateSpan = $(languageRow).find(".languages-rate-span");
                languageNameSpan.html("Language name")
                languageRateSpan.html("<img class='language-bar-img' src='imgs/bars/type1/r1.png' alt='type1'>")
            }

            $(removeLanguageOp).remove()
        }


    });
    // ......languages end...............................................


    // ..........add skils.................................................

    var imgAdSkill = "d1"
    var folderAS = "add_skills";

    function changeAllAdSkillImgs(alt)
    {
        var addSkillImg = $(".addSkills-row img")
        var addSkillAddedImgTags = $(".add-skill-bar-img")

        var i = 0
        while (i < addSkillImg.length) {
            finalPath = alt + ".png"
            addSkillRateImgSrc = "imgs/add_skills/" + finalPath
            addSkillImg[i].src = addSkillRateImgSrc
            addSkillImg[i].alt = alt
            i++
        }
    }

    $(document).ready(function () {

        $("#add_skills_d1").click(function () {

            imgAdSkill = $(this).attr("alt")
            changeAllAdSkillImgs(imgAdSkill)

        });
        $("#add_skills_d2").click(function () {
            imgAdSkill = $(this).attr("alt")
            changeAllAdSkillImgs(imgAdSkill)
        });
        $("#add_skills_r1").click(function () {
            imgAdSkill = $(this).attr("alt")
            changeAllAdSkillImgs(imgAdSkill)
        });
        $("#add_skills_r2").click(function () {
            imgAdSkill = $(this).attr("alt")
            changeAllAdSkillImgs(imgAdSkill)
        });

        $("#add-skills-btn").click(function (e) {
            e.preventDefault();
            addSkillsRow()
        });
        $("#remove-add-skills-btn").click(function (e) {
            e.preventDefault();
            removeAddSkillsRow()
        });

        function removeAddSkillsRow() {
            var addSkillsRows = $(".addSkills-row")
            var addSkillsEditSelVal = "." + $("#select-add-skills-remove").val()
            var addSkillsSelIndex = addSkillsEditSelVal.split("-")[1]
//        alert(addSkillsSelIndex)
            addSkillsSelIndex = parseInt(addSkillsSelIndex.trim()) - 1
            if (addSkillsRows.length > 1) {


                var addSkillsRow = $(addSkillsEditSelVal)[0]
                $(addSkillsRow).remove()
            } else if (addSkillsRows.length == 1) {
                var addSkillsLinkImgSpan = $(addSkillsRows[0]).find(".add-skills-img-span");
                var addSkillsLinkSpan = $(addSkillsRows[0]).find(".add-skills-txt-span");
                addSkillsLinkImgSpan.html("<img src='imgs/add_skills/" + imgAdSkill + ".png' height='10' width='10'>")
                addSkillsLinkSpan.html("MS Word");
            }
            var selectAddSkillsRemoveOp = $("#select-add-skills-remove option[value='" + $("#select-add-skills-remove").val() + "']");
            selectAddSkillsRemoveOp.remove()


        }

        function addSkillsRow() {


            var addSkillsFinalPath = "imgs/add_skills/" + imgAdSkill + ".png";
            var addSkillsText = $("#add-skills-txt").val().trim()
            var selectAddSkillsRemoveOp = $("#select-add-skills-remove option");
            var selectAddSkillsRemoveOpLength = selectAddSkillsRemoveOp.length;
            var addSkillsRow = $(".addSkills-row")
            if (selectAddSkillsRemoveOpLength == 1) {
                var addSkillsLinkImgSpan = $(addSkillsRow[0]).find(".add-skills-img-span");
                var addSkillsLinkSpan = $(addSkillsRow[0]).find(".add-skills-txt-span");
                addSkillsLinkImgSpan.html("<img src='" + addSkillsFinalPath + "' height='10' width='10'>")
                addSkillsLinkSpan.html(addSkillsText);
                $("#select-add-skills-remove").append("<option value='" + addSkillsText + "-1'>" + addSkillsText + "</option>")
                $(addSkillsRow[0]).addClass(addSkillsText + "-1")
            } else if (selectAddSkillsRemoveOpLength > 1) {

                addSkillsText = $("#add-skills-txt").val().trim()
                var addSkillsDiv = $(".addSkills-div")
                var row = $(".addSkills-div .addSkills-row:first-child")
                $(addSkillsDiv[0]).append(row.clone().wrap("<p>").parent().html())
                var addSkillsRows = $(".addSkills-row")
                var addSkillsLinkImgSpan = $(addSkillsRows[selectAddSkillsRemoveOpLength - 1]).find(".add-skills-img-span")
                addSkillsLinkSpan = $(addSkillsRows[selectAddSkillsRemoveOpLength - 1]).find(".add-skills-txt-span")
                // alert(expertiesLinkImgSpan.html() + " " + expertiesLinkSpan.html())
                $("#select-add-skills-remove").append("<option value='" + addSkillsText + "-" + selectAddSkillsRemoveOpLength + "'>" + addSkillsText + "</option>")
                addSkillsLinkImgSpan.html("<img src='" + addSkillsFinalPath + "' height='10' width='10'>")
                addSkillsLinkSpan.html(addSkillsText)
                $(addSkillsRows[selectAddSkillsRemoveOpLength - 1]).addClass(addSkillsText + "-" + selectAddSkillsRemoveOpLength)
            }
        }
    });
// ..........add skils end.................................................


// ..........collage involvement.................................................

    var imgClgInv = "d1"
    var folderCI = "clg-inv";

    function changeAllClgInvImgs(alt)
    {
        var clgInvImg = $(".clg-inv-row img")
        var clgInvAddedImgTags = $(".clg-inv-bar-img")

        var i = 0
        while (i < clgInvImg.length) {
            finalPath = alt + ".png"
            clgInvRateImgSrc = "imgs/clg-inv/" + finalPath
            clgInvImg[i].src = clgInvRateImgSrc
            clgInvImg[i].alt = alt
            i++
        }
    }

    $(document).ready(function () {

        $("#clg_inv_d1").click(function () {

            imgClgInv = $(this).attr("alt")
            changeAllClgInvImgs(imgClgInv)

        });
        $("#clg_inv_d2").click(function () {
            imgClgInv = $(this).attr("alt")
            changeAllClgInvImgs(imgClgInv)
        });
        $("#clg_inv_r1").click(function () {
            imgClgInv = $(this).attr("alt")
            changeAllClgInvImgs(imgClgInv)
        });
        $("#clg_inv_r2").click(function () {
            imgClgInv = $(this).attr("alt")
            changeAllClgInvImgs(imgClgInv)
        });

        $("#add-clg-inv-btn").click(function (e) {
            e.preventDefault();
            addClgInvsRow()
        });
        $("#remove-clg-inv-btn").click(function (e) {
            e.preventDefault();
            removeClgInvsRow()
        });

        function removeClgInvsRow() {
            var addClgInvsRows = $(".clg-inv-row")
            var addClgInvsEditSelVal = "." + $("#select-clg-inv-remove").val()
            var addClgInvsSelIndex = addClgInvsEditSelVal.split("-")[1]
//        alert(addClgInvsSelIndex)
            addClgInvsSelIndex = parseInt(addClgInvsSelIndex.trim()) - 1
            if (addClgInvsRows.length > 1) {


                var addClgInvsRow = $(addClgInvsEditSelVal)[0]
                $(addClgInvsRow).remove()
            } else if (addClgInvsRows.length == 1) {
                var addClgInvsLinkImgSpan = $(addClgInvsRows[0]).find(".clg-inv-img-span");
                var addClgInvsLinkSpan = $(addClgInvsRows[0]).find(".clg-inv-txt-span");
                addClgInvsLinkImgSpan.html("<img src='imgs/clg-inv/" + imgClgInv + ".png' height='10' width='10'>")
                addClgInvsLinkSpan.html("Collage involvement details");
            }
            var selectClgInvsRemoveOp = $("#select-clg-inv-remove option[value='" + $("#select-clg-inv-remove").val() + "']");
            selectClgInvsRemoveOp.remove()


        }

        function addClgInvsRow() {


            var addClgInvsFinalPath = "imgs/clg-inv/" + imgClgInv + ".png";
            var addClgInvsText = $("#name-clg-inv-inp").val().trim()
            var selectClgInvsRemoveOp = $("#select-clg-inv-remove option");
            var selectClgInvsRemoveOpLength = selectClgInvsRemoveOp.length;
            var addClgInvsRow = $(".clg-inv-row")
            if (selectClgInvsRemoveOpLength == 1) {
                var addClgInvsLinkImgSpan = $(addClgInvsRow[0]).find(".clg-inv-img-span");
                var addClgInvsLinkSpan = $(addClgInvsRow[0]).find(".clg-inv-txt-span");
                addClgInvsLinkImgSpan.html("<img src='" + addClgInvsFinalPath + "' height='10' width='10'>")
                addClgInvsLinkSpan.html(addClgInvsText);
                $("#select-clg-inv-remove").append("<option value='" + addClgInvsText + "-1'>" + addClgInvsText + "</option>")
                $(addClgInvsRow[0]).addClass(addClgInvsText + "-1")
            } else if (selectClgInvsRemoveOpLength > 1) {

                addClgInvsText = $("#name-clg-inv-inp").val().trim()
                var addClgInvsDiv = $(".clg-inv-div")
                var row = $(".clg-inv-div .clg-inv-row:first-child")
                $(addClgInvsDiv[0]).append(row.clone().wrap("<p>").parent().html())
                var addClgInvsRows = $(".clg-inv-row")
                var addClgInvsLinkImgSpan = $(addClgInvsRows[selectClgInvsRemoveOpLength - 1]).find(".clg-inv-img-span")
                addClgInvsLinkSpan = $(addClgInvsRows[selectClgInvsRemoveOpLength - 1]).find(".clg-inv-txt-span")
                // alert(expertiesLinkImgSpan.html() + " " + expertiesLinkSpan.html())
                $("#select-clg-inv-remove").append("<option value='" + addClgInvsText + "-" + selectClgInvsRemoveOpLength + "'>" + addClgInvsText + "</option>")
                addClgInvsLinkImgSpan.html("<img src='" + addClgInvsFinalPath + "' height='10' width='10'>")
                addClgInvsLinkSpan.html(addClgInvsText)
                $(addClgInvsRows[selectClgInvsRemoveOpLength - 1]).addClass(addClgInvsText + "-" + selectClgInvsRemoveOpLength)
            }
        }
    });
// ..........collage involvement end.................................................


// ..........professional affiliation.................................................

    var imgProAffi = "d1"
    var folderPA = "pro-affi";

    function changeAllProAffiImgs(alt)
    {
        var proAffiImg = $(".pro-affi-row img")
        var proAffiAddedImgTags = $(".pro-affi-bar-img")

        var i = 0
        while (i < proAffiImg.length) {
            finalPath = alt + ".png"
            proAffiRateImgSrc = "imgs/pro-affi/" + finalPath
            proAffiImg[i].src = proAffiRateImgSrc
            proAffiImg[i].alt = alt
            i++
        }
    }

    $(document).ready(function () {

        $("#pro_affi_d1").click(function () {

            imgProAffi = $(this).attr("alt")
            changeAllProAffiImgs(imgProAffi)

        });
        $("#pro_affi_d2").click(function () {
            imgProAffi = $(this).attr("alt")
            changeAllProAffiImgs(imgProAffi)
        });
        $("#pro_affi_r1").click(function () {
            imgProAffi = $(this).attr("alt")
            changeAllProAffiImgs(imgProAffi)
        });
        $("#pro_affi_r2").click(function () {
            imgProAffi = $(this).attr("alt")
            changeAllProAffiImgs(imgProAffi)
        });

        $("#add-pro-affi-btn").click(function (e) {
            e.preventDefault();
            addProAffisRow()
        });
        $("#remove-prof-aff-btn").click(function (e) {
            e.preventDefault();
            removeProAffisRow()
        });

        function removeProAffisRow() {
            var addProAffisRows = $(".pro-affi-row")
            var addProAffisEditSelVal = "." + $("#select-pro-affi-remove").val()
            var addProAffisSelIndex = addProAffisEditSelVal.split("-")[1]
//        alert(addProAffisSelIndex)
            addProAffisSelIndex = parseInt(addProAffisSelIndex.trim()) - 1
            if (addProAffisRows.length > 1) {


                var addProAffisRow = $(addProAffisEditSelVal)[0]
                $(addProAffisRow).remove()
            } else if (addProAffisRows.length == 1) {
                var addProAffisLinkImgSpan = $(addProAffisRows[0]).find(".pro-affi-img-span");
                var addProAffisLinkSpan = $(addProAffisRows[0]).find(".pro-affi-txt-span");
                addProAffisLinkImgSpan.html("<img src='imgs/pro-affi/" + imgProAffi + ".png' height='10' width='10'>")
                addProAffisLinkSpan.html("Proffesional Affiliation details");
            }
            var selectClgInvsRemoveOp = $("#select-pro-affi-remove option[value='" + $("#select-pro-affi-remove").val() + "']");
            selectClgInvsRemoveOp.remove()


        }

        function addProAffisRow() {


            var addProAffisFinalPath = "imgs/pro-affi/" + imgProAffi + ".png";
            var addProAffisText = $("#name-pro-affi-inp").val().trim()
            var selectProAffisRemoveOp = $("#select-pro-affi-remove option");
            var selectProAffisRemoveOpLength = selectProAffisRemoveOp.length;
            var addProAffisRow = $(".pro-affi-row")
            if (selectProAffisRemoveOpLength == 1) {
                var addProAffisLinkImgSpan = $(addProAffisRow[0]).find(".pro-affi-img-span");
                var addProAffisLinkSpan = $(addProAffisRow[0]).find(".pro-affi-txt-span");
                addProAffisLinkImgSpan.html("<img src='" + addProAffisFinalPath + "' height='10' width='10'>")
                addProAffisLinkSpan.html(addProAffisText);
                $("#select-pro-affi-remove").append("<option value='" + addProAffisText + "-1'>" + addProAffisText + "</option>")
                $(addProAffisRow[0]).addClass(addProAffisText + "-1")
            } else if (selectProAffisRemoveOpLength > 1) {

                addProAffisText = $("#name-pro-affi-inp").val().trim()
                var addProAffisDiv = $(".pro-affi-div")
                var row = $(".pro-affi-div .pro-affi-row:first-child")
                $(addProAffisDiv[0]).append(row.clone().wrap("<p>").parent().html())
                var addProAffisRows = $(".pro-affi-row")
                var addProAffisLinkImgSpan = $(addProAffisRows[selectProAffisRemoveOpLength - 1]).find(".pro-affi-img-span")
                addProAffisLinkSpan = $(addProAffisRows[selectProAffisRemoveOpLength - 1]).find(".pro-affi-txt-span")
                // alert(expertiesLinkImgSpan.html() + " " + expertiesLinkSpan.html())
                $("#select-pro-affi-remove").append("<option value='" + addProAffisText + "-" + selectProAffisRemoveOpLength + "'>" + addProAffisText + "</option>")
                addProAffisLinkImgSpan.html("<img src='" + addProAffisFinalPath + "' height='10' width='10'>")
                addProAffisLinkSpan.html(addProAffisText)
                $(addProAffisRows[selectProAffisRemoveOpLength - 1]).addClass(addProAffisText + "-" + selectProAffisRemoveOpLength)
            }
        }
    });
// ..........professional affiliation end.................................................


// ..........office involvement.................................................

    var imgOffInv = "d1"
    var folderOI = "off-inv";

    function changeAllOffInvImgs(alt)
    {
        var offInvImg = $(".off-inv-row img")
        var offInvAddedImgTags = $(".off-inv-bar-img")

        var i = 0
        while (i < offInvImg.length) {
            finalPath = alt + ".png"
            offInvRateImgSrc = "imgs/off-inv/" + finalPath
            offInvImg[i].src = offInvRateImgSrc
            offInvImg[i].alt = alt
            i++
        }
    }

    $(document).ready(function () {

        $("#off_inv_d1").click(function () {

            imgOffInv = $(this).attr("alt")
            changeAllOffInvImgs(imgOffInv)

        });
        $("#off_inv_d2").click(function () {
            imgOffInv = $(this).attr("alt")
            changeAllOffInvImgs(imgOffInv)
        });
        $("#off_inv_r1").click(function () {
            imgOffInv = $(this).attr("alt")
            changeAllOffInvImgs(imgOffInv)
        });
        $("#off_inv_r2").click(function () {
            imgOffInv = $(this).attr("alt")
            changeAllOffInvImgs(imgOffInv)
        });

        $("#add-off-inv-btn").click(function (e) {
            e.preventDefault();
            addOffInvsRow()
        });
        $("#remove-off-inv-btn").click(function (e) {
            e.preventDefault();
            removeOffInvsRow()
        });

        function removeOffInvsRow() {
            var addOffInvsRows = $(".off-inv-row")
            var addOffInvsEditSelVal = "." + $("#select-off-inv-remove").val()
            var addOffInvsSelIndex = addOffInvsEditSelVal.split("-")[1]
//        alert(addOffInvsSelIndex)
            addOffInvsSelIndex = parseInt(addOffInvsSelIndex.trim()) - 1
            if (addOffInvsRows.length > 1) {


                var addOffInvsRow = $(addOffInvsEditSelVal)[0]
                $(addOffInvsRow).remove()
            } else if (addOffInvsRows.length == 1) {
                var addOffInvsLinkImgSpan = $(addOffInvsRows[0]).find(".off-inv-img-span");
                var addOffInvsLinkSpan = $(addOffInvsRows[0]).find(".off-inv-txt-span");
                addOffInvsLinkImgSpan.html("<img src='imgs/off-inv/" + imgOffInv + ".png' height='10' width='10'>")
                addOffInvsLinkSpan.html("Office involvement details");
            }
            var selectOffInvsRemoveOp = $("#select-off-inv-remove option[value='" + $("#select-off-inv-remove").val() + "']");
            selectOffInvsRemoveOp.remove()


        }

        function addOffInvsRow() {


            var addOffInvsFinalPath = "imgs/off-inv/" + imgOffInv + ".png";
            var addOffInvsText = $("#name-off-inv-inp").val().trim()
            var selectOffInvsRemoveOp = $("#select-off-inv-remove option");
            var selectOffInvsRemoveOpLength = selectOffInvsRemoveOp.length;
            var addOffInvsRow = $(".off-inv-row")
            if (selectOffInvsRemoveOpLength == 1) {
                var addOffInvsLinkImgSpan = $(addOffInvsRow[0]).find(".off-inv-img-span");
                var addOffInvsLinkSpan = $(addOffInvsRow[0]).find(".off-inv-txt-span");
                addOffInvsLinkImgSpan.html("<img src='" + addOffInvsFinalPath + "' height='10' width='10'>")
                addOffInvsLinkSpan.html(addOffInvsText);
                $("#select-off-inv-remove").append("<option value='" + addOffInvsText + "-1'>" + addOffInvsText + "</option>")
                $(addOffInvsRow[0]).addClass(addOffInvsText + "-1")
            } else if (selectOffInvsRemoveOpLength > 1) {

                addOffInvsText = $("#name-off-inv-inp").val().trim()
                var addOffInvsDiv = $(".off-inv-div")
                var row = $(".off-inv-div .off-inv-row:first-child")
                $(addOffInvsDiv[0]).append(row.clone().wrap("<p>").parent().html())
                var addOffInvsRows = $(".off-inv-row")
                var addOffInvsLinkImgSpan = $(addOffInvsRows[selectOffInvsRemoveOpLength - 1]).find(".off-inv-img-span")
                addOffInvsLinkSpan = $(addOffInvsRows[selectOffInvsRemoveOpLength - 1]).find(".off-inv-txt-span")
                // alert(expertiesLinkImgSpan.html() + " " + expertiesLinkSpan.html())
                $("#select-off-inv-remove").append("<option value='" + addOffInvsText + "-" + selectOffInvsRemoveOpLength + "'>" + addOffInvsText + "</option>")
                addOffInvsLinkImgSpan.html("<img src='" + addOffInvsFinalPath + "' height='10' width='10'>")
                addOffInvsLinkSpan.html(addOffInvsText)
                $(addOffInvsRows[selectOffInvsRemoveOpLength - 1]).addClass(addOffInvsText + "-" + selectOffInvsRemoveOpLength)
            }
        }
    });
// ..........office involvement end.................................................



});

// additional block code.................................................
$(document).ready(function () {

    $("#add-adddi-btn").click(function () {

        addAddiRow()

    });
    $("#remove-adddi-btn").click(function () {

        removeAddiRow()

    });

    function addAddiRow() {

        var addiSecNameText = $("#addi-sec-name").val().trim()
        var addiDetailsText = $("#addi-sec-details").html().trim()
        var addedAddiNameOp = $("#added-addi-name option");
        var addedAddiNameOpLength = addedAddiNameOp.length;
        var addiRows = $(".addi-row")
        if (addedAddiNameOpLength == 1) {
            var addiHeadingSpan = $(addiRows[0]).find(".addi-heading");
            var addiDetailsSpan = $(addiRows[0]).find(".addi-details");
            addiHeadingSpan.html(addiSecNameText)
            addiDetailsSpan.html(addiDetailsText)
            $("#added-addi-name").append("<option value='" + addiSecNameText.trim() + "-1'>" + addiSecNameText + "</option>")
            $(addiRows[0]).addClass(addiSecNameText + "-1")
        } else if (addedAddiNameOpLength > 1) {

//                addOffInvsText = $("#name-off-inv-inp").val().trim()
            var addiDiv = $(".addi-div")
            var row = $(".addi-div .addi-row:first-child")
            $(addiDiv[0]).append(row.clone().wrap("<p>").parent().html())
            addiRows = $(".addi-row")
            var addiHeadingSpan = $(addiRows[addedAddiNameOpLength - 1]).find(".addi-heading");
            var addiDetailsSpan = $(addiRows[addedAddiNameOpLength - 1]).find(".addi-details");
            addiHeadingSpan.html(addiSecNameText)
            addiDetailsSpan.html(addiDetailsText)
            var addiSecNameTextDash = addiSecNameText.replaceAll(" ", "-")
            $("#added-addi-name").append("<option value='" + addiSecNameTextDash + "-" + addedAddiNameOpLength + "'>" + addiSecNameText + "</option>")
            $(addiRows[addedAddiNameOpLength - 1]).addClass(addiSecNameTextDash + "-" + addedAddiNameOpLength)
        }
    }



    function removeAddiRow() {
        var addiRows = $(".addi-row")
        var addedAddiSelVal = "." + $("#added-addi-name").val()
        var addedAddiSelIndex = addedAddiSelVal.split("-")[1]
        addedAddiSelIndex = parseInt(addedAddiSelIndex.trim()) - 1
        if (addiRows.length > 1) {


            var addiRow = $(addedAddiSelVal)[0]
            $(addiRow).remove()
        } else if (addiRows.length == 1) {
            var addiHeadingSpan = $(addiRows[0]).find(".addi-heading");
            var addiDetailsSpan = $(addiRows[0]).find(".addi-details");
            addiHeadingSpan.html("Additional Section")
            addiDetailsSpan.html("Additional Section text")

        }
//            var addedAddiSelOp = $("#added-addi-name option[value='" + addedAddiSelVal + "']");
//            var sel = $("#added-addi-name")

        var selRemoveOp = $("#added-addi-name option[value='" + $("#added-addi-name").val() + "']");

        selRemoveOp.remove()


    }
    
    bkLib.onDomLoaded(function() {
          var myNicEditor = new nicEditor();
          myNicEditor.setPanel('addi-sec-details-panel');
          myNicEditor.addInstance('addi-sec-details');
     });

});

var addedHFont = ""
var addedTFont = ""
function  setHeadFonts(obj)
{

    if ($(".head-font").hasClass(addedHFont))
    {
        $(".head-font").removeClass(addedHFont)
    }

    $(".head-font").addClass($(obj).prop("value"));
    addedHFont = $(obj).prop("value")

}

function  setTextFonts(obj)
{

    if ($(".text-font").hasClass(addedTFont))
    {
        $(".text-font").removeClass(addedTFont)
    }

    $(".text-font").addClass($(obj).prop("value"));
    addedTFont = $(obj).prop("value")

}
function  setDfTextFonts()
{

    if ($(".text-font").hasClass(addedTFont))
    {
        $(".text-font").removeClass(addedTFont)
    }


}
function  setDfHeadTextFonts()
{

    if ($(".head-font").hasClass(addedHFont))
    {
        $(".head-font").removeClass(addedHFont)
    }


}

$(document).ready(function () {

    $(".set-df-hfont-btn").click(function () {
        setDfHeadTextFonts()
    });

    $(".set-df-tfont-btn").click(function () {
        setDfTextFonts()
    });


    $(".set-hfont-btn").click(function () {
        setHeadFonts(this)
    });


    $(".set-tfont-btn").click(function () {
        setTextFonts(this)
    });

})

$(document).ready(function () {
    $(".set-hsize-btn").click(function () {
        $(".head-font").css("font-size", $(this).prop("value") + "px")
    });


    $(".set-tsize-btn").click(function () {
        $(".text-font").css("font-size", $(this).prop("value") + "px")
    });

    $(".set-df-hsize-btn").click(function () {
        $(".head-font").css("font-size", "")
    });


    $(".set-df-tsize-btn").click(function () {
        $(".text-font").css("font-size", "")
    });

})

$(document).ready(function () {
    $(".set-hspace-btn").click(function () {
        $(".head-space").css("margin-top", $(this).prop("value") + "px")
    });


    $(".set-tspace-btn").click(function () {
        $(".text-font").css("line-height", $(this).prop("value"))
    });

    $(".set-df-hspace-btn").click(function () {
        $(".head-space").css("margin-top", "")
    });


    $(".set-df-tspace-btn").click(function () {
        $(".text-font").css("line-height", "")
    });

})


$(document).ready(function () {
    $("#color1").click(function () {
        $(".col-5-back").css("background-color", "red")
        $(".col-7-back").css("background-color", "blue")
        $(".text-font").css("color", "green")
        $(".head-font").css("color", "pink")
    });


    $("#color2").click(function () {
        $(".col-5-back").css("background-color", "orange")
        $(".col-7-back").css("background-color", "navyblue")
        $(".text-font").css("color", "lightgreen")
        $(".head-font").css("color", "grey")

    });


    $("#default-color").click(function () {
        $(".col-5-back").css("background-color", "")
        $(".col-7-back").css("background-color", "")
        $(".text-font").css("color", "")
        $(".head-font").css("color", "")
    });

})



