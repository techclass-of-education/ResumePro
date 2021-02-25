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
        setLocalStorage("dsg", dsg)
        $(".designationSpan").html(dsg[0])



    });

    $("#father-name").keyup(function (e) {
        e.preventDefault();
        personalInfo[0] = $(this).val().trim()
        setLocalStorage("personalInfo", personalInfo)
        $(".father-name-span").html(personalInfo[0])

    });

    $("#mother-name").keyup(function (e) {
        e.preventDefault();
        personalInfo[1] = $(this).val().trim()
        setLocalStorage("personalInfo", personalInfo)
        $(".mother-name-span").html(personalInfo[1])

    });
    $("#personal-address-sel").change(function (e) {
        e.preventDefault();
        $(".address-personal-span-label").html($(this).val())

    });
    $("#personal-address-txt").keyup(function (e) {
        e.preventDefault();
        $(".address-personal-span").html($(this).val())

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


    $("#aboutMe").keyup(function (e) {
        e.preventDefault();
        $(".about-me-span").html($(this).val())

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

        function addNewProjectRows() {
            var projectNameTxt = $("#name-pro-inp").val()
            var projectLabelTxt = $("#pro-lable").val()
            var projectLabelAboutTxt = $("#lable-pro-about").val()
            var projectStartYearTxt = $("#date-pro-str-inp").val()
            var projectEndYearTxt = $("#date-pro-end-inp").val()
            var projectDetailsTxt = $("#exp-desc-pro-inp").val()


            var projectRows = $(".project-row");
            var addedProjectSel = $("#added-project-sel")
            var addedProjectOp = addedProjectSel.find("option")
            // //alert(addedEduOp.length)
            var opLength = addedProjectOp.length;
            if (opLength == 1) {

                var projectNameSpan = $(projectRows[0]).find(".project-name-span");
                var projectLabelSpan = $(projectRows[0]).find(".project-label-span");
                var projectLabelAboutSpan = $(projectRows[0]).find(".project-label-about-span");
                var projectStartYearSpan = $(projectRows[0]).find(".project-start-year-span");
                var projectEndYearSpan = $(projectRows[0]).find(".project-end-year-span");
                var projectDetailsSpan = $(projectRows[0]).find(".project-details-span");

                projectNameSpan.html(projectNameTxt)
                projectLabelSpan.html(projectLabelTxt)
                projectLabelAboutSpan.html(projectLabelAboutTxt)
                projectStartYearSpan.html(projectStartYearTxt)
                projectEndYearSpan.html(projectEndYearTxt)
                projectDetailsSpan.html(projectDetailsTxt)

                var addedProjectSel = $("#added-project-sel")
                var projectNameTxtDash = projectNameTxt.replace(" ", "-")
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
                var projectStartYearSpan = $(projectRows[opLength - 1]).find(".project-start-year-span");
                var projectEndYearSpan = $(projectRows[opLength - 1]).find(".project-end-year-span");
                var projectDetailsSpan = $(projectRows[opLength - 1]).find(".project-details-span");

                projectNameSpan.html(projectNameTxt)
                projectLabelSpan.html(projectLabelTxt)
                projectLabelAboutSpan.html(projectLabelAboutTxt)
                projectStartYearSpan.html(projectStartYearTxt)
                projectEndYearSpan.html(projectEndYearTxt)
                projectDetailsSpan.html(projectDetailsTxt)

                projectRows = $(".project-row");

                projectNameTxtDash = projectNameTxt.replace(" ", "-")
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
            var projectStartYearSpan = $(projectRow).find(".project-start-year-span");
            var projectEndYearSpan = $(projectRow).find(".project-end-year-span");
            var projectDetailsSpan = $(projectRow).find(".project-details-span");

            $("#pro-lable-edit").val($(projectLabelSpan).html())
            $("#lable-pro-about-edit").val($(projectLabelAboutSpan).html())
            $("#date-pro-str-inp-edit").val($(projectStartYearSpan).html())
            $("#date-pro-end-inp-edit").val($(projectEndYearSpan).html())
            $("#exp-desc-pro-inp-edit").val($(projectDetailsSpan).html())
        }


        function editProjectSelRow() {
            var rowProjectClass = projectEditRowOptionVal
            var projectRow = $("." + rowProjectClass)[0]


            var projectLabelSpan = $(projectRow).find(".project-label-span");
            var projectLabelAboutSpan = $(projectRow).find(".project-label-about-span");
            var projectStartYearSpan = $(projectRow).find(".project-start-year-span");
            var projectEndYearSpan = $(projectRow).find(".project-end-year-span");
            var projectDetailsSpan = $(projectRow).find(".project-details-span");




            projectLabelSpan.html($("#pro-lable-edit").val())
            projectLabelAboutSpan.html($("#lable-pro-about-edit").val())
            projectStartYearSpan.html($("#date-pro-str-inp-edit").val())
            projectEndYearSpan.html($("#date-pro-end-inp-edit").val())
            projectDetailsSpan.html($("#exp-desc-pro-inp-edit").val())



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
                var projectStartYearSpan = $(projectRow).find(".project-start-year-span");
                var projectEndYearSpan = $(projectRow).find(".project-end-year-span");
                var projectDetailsSpan = $(projectRow).find(".project-details-span");
                var projectNameSpan = $(projectRow).find(".project-name-span");


                projectLabelSpan.html("Add a Label")
                projectLabelAboutSpan.html("About Label")
                projectStartYearSpan.html("Start Date")
                projectEndYearSpan.html("End Date")
                projectDetailsSpan.html("Details")
                projectNameSpan.html("Project Name")
            }
            var projectEditSelOpLength = $("#added-project-sel option").length
            var selectProjectRemoveOp = $("#added-project-sel option[value='" + rowProjectClass + "']");
            selectProjectRemoveOp.remove()
            // $(selectSocialEditOp[socialSelIndex]).remove()

        }






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

        function addNewInternRows() {
            var companyInternNameTxt = $("#company-name-inp").val()
            var companyPosInternNameTxt = $("#company-pos-name-inp").val()
            var companyCityInternTxt = $("#city-intern-inp").val()
            var companyStateInternTxt = $("#state-intern-inp").val()
            var dateInternStrTxt = $("#date-intern-str-inp").val()
            var dateInternEndTxt = $("#date-intern-end-inp").val()
            var expDescInternTxt = $("#exp-desc-intern-inp").val()


            var internRows = $(".intern-row");
            var addedInternSel = $("#added-intern-sel")
            var addedInternOp = addedInternSel.find("option")
            // alert(addedEduOp.length)
            var opLength = addedInternOp.length;
            if (opLength == 1) {

                var internCpnyNameSpan = $(internRows[0]).find(".intern-company-name-span");
                var internStateNameSpan = $(internRows[0]).find(".intern-state-name-span");
                var internCityNameSpan = $(internRows[0]).find(".intern-city-name-span");
                var internStrDateSpan = $(internRows[0]).find(".intern-str-date-span");
                var internEndDateSpan = $(internRows[0]).find(".intern-end-date-span");
                var internDescSpan = $(internRows[0]).find(".intern-desc-span");
                var internPosSpan = $(internRows[0]).find(".intern-pos-name-span");

                internCpnyNameSpan.html(companyInternNameTxt)
                internStateNameSpan.html(companyStateInternTxt)
                internCityNameSpan.html(companyCityInternTxt)
                internStrDateSpan.html(dateInternStrTxt)
                internEndDateSpan.html(dateInternEndTxt)
                internDescSpan.html(expDescInternTxt)
                internPosSpan.html(companyPosInternNameTxt)

                var addedInternSel = $("#added-intern-sel")
                var companyInternNameTxtDash = companyInternNameTxt.replace(" ", "-")
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
                var internStrDateSpan = $(internRows[opLength - 1]).find(".intern-str-date-span");
                var internEndDateSpan = $(internRows[opLength - 1]).find(".intern-end-date-span");
                var internDescSpan = $(internRows[opLength - 1]).find(".intern-desc-span");
                var internPosSpan = $(internRows[opLength - 1]).find(".intern-pos-name-span");




                internCpnyNameSpan.html(companyInternNameTxt)
                internStateNameSpan.html(companyStateInternTxt)
                internCityNameSpan.html(companyCityInternTxt)
                internStrDateSpan.html(dateInternStrTxt)
                internEndDateSpan.html(dateInternEndTxt)
                internDescSpan.html(expDescInternTxt)
                internPosSpan.html(companyPosInternNameTxt)

                internRows = $(".intern-row")
                var companyInternNameTxtDash = companyInternNameTxt.replace(" ", "-")
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
            var internRow = $("." + rowInternClass)[0]

//            var internCpnyNameSpan = $(internRow).find(".intern-company-name-span");
            var internStateNameSpan = $(internRow).find(".intern-state-name-span");
            var internCityNameSpan = $(internRow).find(".intern-city-name-span");
            var internStrDateSpan = $(internRow).find(".intern-str-date-span");
            var internEndDateSpan = $(internRow).find(".intern-end-date-span");
            var internDescSpan = $(internRow).find(".intern-desc-span");
            var internPosSpan = $(internRow).find(".intern-pos-name-span");


            $("#state-intern-inp-edit").val(internStateNameSpan.html())
            $("#city-intern-inp-edit").val(internCityNameSpan.html())
            $("#date-intern-str-inp-edit").val(internStrDateSpan.html())
            $("#date-intern-end-inp-edit").val(internEndDateSpan.html())
            $("#exp-desc-intern-inp-edit").val(internDescSpan.html())
            $("#company-pos-name-inp-edit").val(internPosSpan.html())


        }


        function editInternSelRow() {
            var rowInternClass = internEditRowOptionVal
            var internRow = $("." + rowInternClass)[0]


            var internStateNameSpan = $(internRow).find(".intern-state-name-span");
            var internCityNameSpan = $(internRow).find(".intern-city-name-span");
            var internStrDateSpan = $(internRow).find(".intern-str-date-span");
            var internEndDateSpan = $(internRow).find(".intern-end-date-span");
            var internDescSpan = $(internRow).find(".intern-desc-span");
            var internPosSpan = $(internRow).find(".intern-pos-name-span");




            internStateNameSpan.html($("#state-intern-inp-edit").val())
            internCityNameSpan.html($("#city-intern-inp-edit").val())
            internStrDateSpan.html($("#date-intern-str-inp-edit").val())
            internEndDateSpan.html($("#date-intern-end-inp-edit").val())
            internDescSpan.html($("#exp-desc-intern-inp-edit").val())
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
                var internStrDateSpan = $(internRow).find(".intern-str-date-span");
                var internEndDateSpan = $(internRow).find(".intern-end-date-span");
                var internDescSpan = $(internRow).find(".intern-desc-span");
                var internPosSpan = $(internRow).find(".intern-pos-name-span");


                internCpnyNameSpan.html("Company / Institute Name")
                internStateNameSpan.html("State")
                internCityNameSpan.html("City")
                internStrDateSpan.html("Start Date")
                internEndDateSpan.html("End Date")
                internDescSpan.html("Experience")
                internPosSpan.html("Position")
            }
            var internEditSelOpLength = $("#added-intern-sel option").length
            var selectInternRemoveOp = $("#added-intern-sel option[value='" + rowInternClass + "']");
            selectInternRemoveOp.remove()
            // $(selectSocialEditOp[socialSelIndex]).remove()

        }






    });

//.......................Internship end....................

//.......................Education Code........................



    $(document).ready(function () {
        $("#add-edu-btn").click(function (e) {
            e.preventDefault();
            addNewEduRows()
        });



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

        function addNewEduRows() {
            var eduNameTxt = $("#edu-name").val()
            var eduAffilTxt = $("#edu-affil").val()
            var eduDegreeTxt = $("#edu-degree-type").val()
            var eduCityTxt = $("#edu-city").val()
            var eduStateTxt = $("#edu-state").val()
            var eduDegreeStatusTxt = $("#edu-degree-status").val()
            var eduMDateTxt = $("#edu-m-date").val()
            var eduYDateTxt = $("#edu-y-date").val()
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
                var eduYDateSpan = $(eduRows[0]).find(".edu-y-span");
                var eduMDateSpan = $(eduRows[0]).find(".edu-m-span");
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
                eduMDateSpan.html(eduMDateTxt)
                eduYDateSpan.html(eduYDateTxt)
                eduMarksSpan.html(eduMarksTxt)
                eduMarksImpSpan.html(eduMarksImpTxt)
                eduDivisionSpan.html(eduDivisionTxt)
                eduMarksSymSpan.html(eduMarksSym)

                var addedEduSel = $("#added-edu-sel")
                var eduNameTxtDash = eduNameTxt.replace(" ", "-")
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
                var eduYDateSpan = $(eduRows[opLength - 1]).find(".edu-y-span");
                var eduMDateSpan = $(eduRows[opLength - 1]).find(".edu-m-span");
                var eduMarksSpan = $(eduRows[opLength - 1]).find(".edu-marks-sel-span");
                var eduMarksImpSpan = $(eduRows[opLength - 1]).find(".edu-imp-span");
                var eduDivisionSpan = $(eduRows[opLength - 1]).find(".edu-division-sel-span");


                eduNameSpan.html(eduNameTxt)
                eduAffilSpan.html(eduAffilTxt)
                eduDegreeSpan.html(eduDegreeTxt)
                eduCitySpan.html(eduCityTxt)
                eduStateSpan.html(eduStateTxt)
                eduStatusSpan.html(eduDegreeStatusTxt)
                eduMDateSpan.html(eduMDateTxt)
                eduYDateSpan.html(eduYDateTxt)
                eduMarksSpan.html(eduMarksTxt)
                eduMarksImpSpan.html(eduMarksImpTxt)
                eduDivisionSpan.html(eduDivisionTxt)


                eduRows = $(".edu-row")
                var eduNameTxtDash = eduNameTxt.replace(" ", "-")
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
            var eduYDateSpan = $(eduRow).find(".edu-y-span");
            var eduMDateSpan = $(eduRow).find(".edu-m-span");
            var eduMarksSpan = $(eduRow).find(".edu-marks-sel-span");
            var eduMarksImpSpan = $(eduRow).find(".edu-imp-span");
            var eduMarksSymSpan = $(eduRow).find(".edu-marks-sym-span");
            var eduDivisionSpan = $(eduRow).find(".edu-division-sel-span");



            $("#edu-degree-type-edit").val(eduDegreeSpan.html())
            $("#edu-affil-edit").val(eduAffilSpan.html())
            $("#edu-city-edit").val(eduCitySpan.html())
            $("#edu-state-edit").val(eduStateSpan.html())
            $("#edu-degree-status-edit").val(eduStatusSpan.html())
            $("#edu-date-y-edit").val(eduYDateSpan.html())
            $("#edu-date-m-edit").val(eduMDateSpan.html())
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
            var eduYDateSpan = $(eduRow).find(".edu-y-span");
            var eduMDateSpan = $(eduRow).find(".edu-m-span");
            var eduMarksSpan = $(eduRow).find(".edu-marks-sel-span");
            var eduMarksImpSpan = $(eduRow).find(".edu-imp-span");
            var eduDivisionSpan = $(eduRow).find(".edu-division-sel-span");
            var eduMarksSymSpan = $(eduRow).find(".edu-marks-sym-span");

            eduAffilSpan.html($("#edu-affil-edit").val());
            eduDegreeSpan.html($("#edu-degree-type-edit").val());
            eduCitySpan.html($("#edu-city-edit").val());
            eduStateSpan.html($("#edu-state-edit").val());
            eduStatusSpan.html($("#edu-degree-status-edit").val());
            eduYDateSpan.html($("#edu-date-y-edit").val());
            eduMDateSpan.html($("#edu-date-m-edit").val());
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
                var eduYDateSpan = $(eduRow).find(".edu-y-span");
                var eduMDateSpan = $(eduRow).find(".edu-m-span");
                var eduMarksSpan = $(eduRow).find(".edu-marks-sel-span");
                var eduMarksImpSpan = $(eduRow).find(".edu-imp-span");
                var eduMarksSymSpan = $(eduRow).find(".edu-marks-sym-span");
                var eduDivisionSpan = $(eduRow).find(".edu-division-sel-span");


                eduNameSpan.html("Education Name");
                eduAffilSpan.html("Education Affiliation");
                eduDegreeSpan.html("Education Degree");
                eduCitySpan.html("Education City");
                eduStateSpan.html("Education State");
                eduStatusSpan.html("Education Status");
                eduYDateSpan.html("Education year");
                eduMDateSpan.html("Education Month");
                eduMarksSpan.html("Education Marks");
                eduMarksImpSpan.html("Education Imp");
                eduMarksSymSpan.html("Education Symbol");
                eduDivisionSpan.html("Education Division");
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


        var tcYearsSelEdit = document.getElementById("tc-year-sel-edit");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            tcYearsSelEdit.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }

        var tcYearsSel = document.getElementById("tc-year-sel");

        nowDate = new Date();
        // alert(nowEditDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            tcYearsSel.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }


        function addNewTCRows() {
//            alert("Add TC")
            var tcNameTxt = $("#tc-name-inp").val()
            var tcYearTxt = $("#tc-year-sel").val()
            var tcBostTxt = $("#tc-bost-inp").val()
            var tcStatusTxt = $("#tc-status-sel").val()



            var tcRows = $(".tc-row");
            var addedTCSel = $("#added-tc-sel")
            var addedTCOp = addedTCSel.find("option")
            // alert(addedEduOp.length)
            var opLength = addedTCOp.length;
            if (opLength == 1) {

                var tcNameSpan = $(tcRows[0]).find(".tc-name-span");
                var tcYearSpan = $(tcRows[0]).find(".tc-year-span");
                var tcBostSpan = $(tcRows[0]).find(".tc-bost-span");
                var tcStatusSpan = $(tcRows[0]).find(".tc-status-span");


                tcNameSpan.html(tcNameTxt)
                tcYearSpan.html(tcYearTxt)
                tcBostSpan.html(tcBostTxt)
                tcStatusSpan.html(tcStatusTxt)


                var addedTCSel = $("#added-tc-sel")
                var tcNameTxtDash = tcNameTxt.replace(" ", "-")
                addedTCSel.append("<option value='" + tcNameTxtDash + "-1'> " + tcNameTxt + "</option>")
                $(tcRows[0]).addClass(tcNameTxtDash + "-1")

            } else if (opLength > 1) {
//                alert("above 1")
                var internDiv = $(".tc-div");
                var row = $(".tc-div .tc-row:first-child");
                $(internDiv[0]).append(row.clone().wrap("<p>").parent().html())


                tcRows = $(".tc-row")
                var tcNameSpan = $(tcRows[opLength - 1]).find(".tc-name-span");
                var tcYearSpan = $(tcRows[opLength - 1]).find(".tc-year-span");
                var tcBostSpan = $(tcRows[opLength - 1]).find(".tc-bost-span");
                var tcStatusSpan = $(tcRows[opLength - 1]).find(".tc-status-span");


                tcNameSpan.html(tcNameTxt)
                tcYearSpan.html(tcYearTxt)
                tcBostSpan.html(tcBostTxt)
                tcStatusSpan.html(tcStatusTxt)

                tcRows = $(".tc-row")
                var tcNameTxtDash = tcNameTxt.replace(" ", "-")
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


            var tcYearSpan = $(tcRow).find(".tc-year-span");
            var tcBostSpan = $(tcRow).find(".tc-bost-span");
            var tcStatusSpan = $(tcRow).find(".tc-status-span");


            var tcYearTxt = $("#tc-year-sel").val()
            var tcBostTxt = $("#tc-bost-inp").val()
            var tcStatusTxt = $("#tc-status-sel").val()


            $("#tc-year-sel-edit").val(tcYearSpan.html())
            $("#tc-bost-inp-edit").val(tcBostSpan.html())
            $("#tc-status-sel-edit").val(tcStatusSpan.html())



        }


        function editTCSelRow() {
            var rowTCClass = tcEditRowOptionVal
            var tcRow = $("." + rowTCClass)[0]

            var tcYearSpan = $(tcRow).find(".tc-year-span");
            var tcBostSpan = $(tcRow).find(".tc-bost-span");
            var tcStatusSpan = $(tcRow).find(".tc-status-span");

            tcYearSpan.html($("#tc-year-sel-edit").val())
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
                var tcYearSpan = $(tcRow).find(".tc-year-span");
                var tcBostSpan = $(tcRow).find(".tc-bost-span");
                var tcStatusSpan = $(tcRow).find(".tc-status-span");




                tcNameSpan.html("Name")
                tcYearSpan.html("year")
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


        var wrkStartSelEdit = document.getElementById("wrk-start-edit");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            wrkStartSelEdit.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }

        var wrkEndSelEdit = document.getElementById("wrk-end-edit");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            wrkEndSelEdit.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }


        wrkStartSelEdit = document.getElementById("wrk-start-inp");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            wrkStartSelEdit.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }

        wrkEndSelEdit = document.getElementById("wrk-end-inp");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            wrkEndSelEdit.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }




        function addWrkRows() {
            var wrkNameTxt = $("#wrk-name-inp").val()
            var wrkJobTxt = $("#wrk-job-inp").val()
            var wrkCityTxt = $("#wrk-city-inp").val()
            var wrkStateTxt = $("#wrk-state-inp").val()
            var wrkStartTxt = $("#wrk-start-inp").val()
            var wrkEndTxt = $("#wrk-end-inp").val()
            var wrkDescTxt = $("#wrk-desc-inp").val()
            var wrkPhrsTxt = $("#wrk-phrs-inp").val()

            var wrkRows = $(".wrk-row");
            var addedWrkSel = $("#added-wrk-sel")
            var addedWrkOp = addedWrkSel.find("option")
            var opLength = addedWrkOp.length;
            if (opLength == 1) {

                var wrkNameSpan = $(wrkRows[0]).find(".wrk-name-span")
                var wrkJobSpan = $(wrkRows[0]).find(".wrk-job-span")
                var wrkCitySpan = $(wrkRows[0]).find(".wrk-city-span")
                var wrkStateSpan = $(wrkRows[0]).find(".wrk-state-span")
                var wrkStartSpan = $(wrkRows[0]).find(".wrk-start-span")
                var wrkEndSpan = $(wrkRows[0]).find(".wrk-end-span")
                var wrkDescSpan = $(wrkRows[0]).find(".wrk-desc-span")
                var wrkPhrsSpan = $(wrkRows[0]).find(".wrk-phrs-span")

                wrkNameSpan.html(wrkNameTxt)
                wrkJobSpan.html(wrkJobTxt)
                wrkCitySpan.html(wrkCityTxt)
                wrkStateSpan.html(wrkStateTxt)
                wrkStartSpan.html(wrkStartTxt)
                wrkEndSpan.html(wrkEndTxt)
                wrkDescSpan.html(wrkDescTxt)
                wrkPhrsSpan.html(wrkPhrsTxt)

                var addedWrkSel = $("#added-wrk-sel")
                var wrkNameTxtDash = wrkNameTxt.replace(" ", "-")
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
                var wrkStartSpan = $(wrkRows[opLength - 1]).find(".wrk-start-span")
                var wrkEndSpan = $(wrkRows[opLength - 1]).find(".wrk-end-span")
                var wrkDescSpan = $(wrkRows[opLength - 1]).find(".wrk-desc-span")
                var wrkPhrsSpan = $(wrkRows[opLength - 1]).find(".wrk-phrs-span")

                wrkNameSpan.html(wrkNameTxt)
                wrkJobSpan.html(wrkJobTxt)
                wrkCitySpan.html(wrkCityTxt)
                wrkStateSpan.html(wrkStateTxt)
                wrkStartSpan.html(wrkStartTxt)
                wrkEndSpan.html(wrkEndTxt)
                wrkDescSpan.html(wrkDescTxt)
                wrkPhrsSpan.html(wrkPhrsTxt)

                wrkRows = $(".wrk-row")
                var wrkNameTxtDash = wrkNameTxt.replace(" ", "-")
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
            var wrkStartSpan = $(wrkRow).find(".wrk-start-span")
            var wrkEndSpan = $(wrkRow).find(".wrk-end-span")
            var wrkDescSpan = $(wrkRow).find(".wrk-desc-span")
            var wrkPhrsSpan = $(wrkRow).find(".wrk-phrs-span")



            $("#wrk-job-edit").val(wrkJobSpan.html())
            $("#wrk-city-edit").val(wrkCitySpan.html())
            $("#wrk-state-edit").val(wrkStateSpan.html())
            $("#wrk-start-edit").val(wrkStartSpan.html())
            $("#wrk-end-edit").val(wrkEndSpan.html())
            $("#wrk-desc-edit").val(wrkDescSpan.html())
            $("#wrk-phrs-edit").val(wrkPhrsSpan.html())

        }


        function editWrkRow() {
            var rowWrkClass = wrkEditRowOptionVal
            var wrkRow = $("." + rowWrkClass)[0]


            var wrkJobSpan = $(wrkRow).find(".wrk-job-span")
            var wrkCitySpan = $(wrkRow).find(".wrk-city-span")
            var wrkStateSpan = $(wrkRow).find(".wrk-state-span")
            var wrkStartSpan = $(wrkRow).find(".wrk-start-span")
            var wrkEndSpan = $(wrkRow).find(".wrk-end-span")
            var wrkDescSpan = $(wrkRow).find(".wrk-desc-span")
            var wrkPhrsSpan = $(wrkRow).find(".wrk-phrs-span")

            wrkJobSpan.html($("#wrk-job-edit").val())
            wrkCitySpan.html($("#wrk-city-edit").val())
            wrkStateSpan.html($("#wrk-state-edit").val())
            wrkStartSpan.html($("#wrk-start-edit").val())
            wrkEndSpan.html($("#wrk-end-edit").val())
            wrkDescSpan.html($("#wrk-desc-edit").val())
            wrkPhrsSpan.html($("#wrk-phrs-edit").val())


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
                var wrkStartSpan = $(wrkRow).find(".wrk-start-span")
                var wrkEndSpan = $(wrkRow).find(".wrk-end-span")
                var wrkDescSpan = $(wrkRow).find(".wrk-desc-span")
                var wrkPhrsSpan = $(wrkRow).find(".wrk-phrs-span")

                wrkNameSpan.html("Name")
                wrkJobSpan.html("Job")
                wrkCitySpan.html("City")
                wrkStateSpan.html("State")
                wrkStartSpan.html("1950")
                wrkEndSpan.html("1970")
                wrkDescSpan.html("Description")
                wrkPhrsSpan.html("Phrsase")
            }
            var addedWrkSelOpLength = $("#added-wrk-sel option").length
            var selectWrkRemoveOp = $("#added-wrk-sel option[value='" + rowWrkClass + "']");
            selectWrkRemoveOp.remove()


        }






    });


//.......................Work and Company End........................





//....................... Awards and Owners........................


    $(document).ready(function () {
        $("#add-new-aw-btn").click(function (e) {
            e.preventDefault();
            addNewAwRows()
        });



        $('#edit-aw-btn').click(function (e) {
            e.preventDefault();
            editAwSelRow()

        });

        $('#rmv-aw-btn').click(function (e) {
            e.preventDefault();
            removeAwRow()

        });
        var awEditRowOptionVal = ""
        $("#added-aw-sel").change(function (e) {
            e.preventDefault();
            awEditRowOptionVal = $(this).val()
            setAwRowEdit()
        });


        var awYearsSelEdit = document.getElementById("aw-year-edit");

        var nowDate = new Date();
        // alert(nowDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            awYearsSelEdit.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }

        var awYearsSel = document.getElementById("aw-year-sel");

        nowDate = new Date();
        // alert(nowEditDate.getFullYear())
        for (i = 1950; i <= nowDate.getFullYear(); i++) {
            awYearsSel.innerHTML += "<option value='" + i + "'>" + i + "</option>"
        }


        function addNewAwRows() {
            var awNameTxt = $("#aw-name-inp").val()
            var awYearTxt = $("#aw-year-sel").val()
            var awCmpTxt = $("#aw-cmp-inp").val()
            var awStatusTxt = $("#aw-status-inp").val()

            var awRows = $(".aw-row");
            var addedAwSel = $("#added-aw-sel")
            var addedAwOp = addedAwSel.find("option")
            // alert(addedEduOp.length)
            var opLength = addedAwOp.length;
            if (opLength == 1) {

                var awNameSpan = $(awRows[0]).find(".aw-name-span");
                var awYearSpan = $(awRows[0]).find(".aw-year-span");
                var awCmpSpan = $(awRows[0]).find(".aw-cmp-span");
                var awStatusSpan = $(awRows[0]).find(".aw-status-span");


                awNameSpan.html(awNameTxt)
                awYearSpan.html(awYearTxt)
                awCmpSpan.html(awCmpTxt)
                awStatusSpan.html(awStatusTxt)


                var addedAwSel = $("#added-aw-sel")
                var awNameTxtDash = awNameTxt.replace(" ", "-")
                addedAwSel.append("<option value='" + awNameTxtDash + "-1'> " + awNameTxt + "</option>")
                $(awRows[0]).addClass(awNameTxtDash + "-1")

            } else if (opLength > 1) {
//                alert("above 1")
                var awDiv = $(".aw-div");
                var row = $(".aw-div .aw-row:first-child");
                $(awDiv[0]).append(row.clone().wrap("<p>").parent().html())

                awRows = $(".aw-row")
//                alert(awRows)

                var awNameSpan = $(awRows[opLength - 1]).find(".aw-name-span");
                var awYearSpan = $(awRows[opLength - 1]).find(".aw-year-span");
                var awCmpSpan = $(awRows[opLength - 1]).find(".aw-cmp-span");
                var awStatusSpan = $(awRows[opLength - 1]).find(".aw-status-span");

                awNameSpan.html(awNameTxt)
                awYearSpan.html(awYearTxt)
                awCmpSpan.html(awCmpTxt)
                awStatusSpan.html(awStatusTxt)

                awRows = $(".aw-row")
                var awNameTxtDash = awNameTxt.replace(" ", "-")
                var addedAwSelOpLength = $("#added-aw-sel option").length
                $("#added-aw-sel").append("<option value='" + awNameTxtDash + "-" + addedAwSelOpLength + "'> " + awNameTxt + "</option>")
                $(awRows[addedAwSelOpLength - 1]).addClass(awNameTxtDash + "-" + addedAwSelOpLength)

            } else {
                alert("something wrong")
            }


        }

        function setAwRowEdit() {

            var rowAwClass = awEditRowOptionVal
            var awRow = $("." + rowAwClass)[0]

            var awYearSpan = $(awRow).find(".aw-year-span");
            var awCmpSpan = $(awRow).find(".aw-cmp-span");
            var awStatusSpan = $(awRow).find(".aw-status-span");

            $("#aw-year-edit").val(awYearSpan.html())
            $("#aw-cmp-edit").val(awCmpSpan.html())
            $("#aw-status-edit").val(awStatusSpan.html())

        }


        function editAwSelRow() {
            var rowAwClass = awEditRowOptionVal
            var awRow = $("." + rowAwClass)[0]

            var awYearSpan = $(awRow).find(".aw-year-span");
            var awCmpSpan = $(awRow).find(".aw-cmp-span");
            var awStatusSpan = $(awRow).find(".aw-status-span");

            awYearSpan.html($("#aw-year-edit").val())
            awCmpSpan.html($("#aw-cmp-edit").val())
            awStatusSpan.html($("#aw-status-edit").val())
        }



        function removeAwRow() {
            var rowAwClass = awEditRowOptionVal
            var awRow = $("." + rowAwClass)[0]

            var awRows = $(".aw-row")
            if (awRows.length > 1) {


                var awRowRemove = awRow
                $(awRowRemove).remove()
            } else if (awRows.length == 1) {

                var awNameSpan = $(awRow).find(".aw-name-span");
                var awYearSpan = $(awRow).find(".aw-year-span");
                var awCmpSpan = $(awRow).find(".aw-cmp-span");
                var awStatusSpan = $(awRow).find(".aw-status-span");

                awNameSpan.html("Name")
                awYearSpan.html("year")
                awCmpSpan.html("Bost")
                awStatusSpan.html("status")

            }
            var addedAwSelOpLength = $("#added-aw-sel option").length
            var selectAwRemoveOp = $("#added-aw-sel option[value='" + rowAwClass + "']");
            selectAwRemoveOp.remove()


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
        $("#added-language-sel").change(function (e) {
            e.preventDefault();
            setLanguageRowEdit()

        });
        $("#edit-language-btn").click(function (e) {
            e.preventDefault();
            editLanguageSelRow()

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