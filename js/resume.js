var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
            .when("/", {
                templateUrl: "./resume_templates/template1/template1.html",
                controller: 'Temp1Controller'
            })
            .when("/template199-classic", {
                templateUrl: "./resume_templates/template199-classic/resumeClassic.html",
                controller: 'Temp199-classicController'
            })
            .when("/template3", {
                templateUrl: "./resume_templates/template3/template3.html",
                controller: 'Temp3Controller'
            })
            .when("/template29920", {
                templateUrl: "./resume_templates/template299-20/resume20.html",
                controller: 'Temp29920Controller'
            })
            .when("/template29918", {
                templateUrl: "./resume_templates/template299-18/resume18.html",
                controller: 'Temp29918Controller'
            })
            .when("/template29987", {
                templateUrl: "./resume_templates/template299-87/resume87.html",
                controller: 'Temp29987Controller'
            })
            .when("/template2993", {
                templateUrl: "./resume_templates/template299-3/Template299-3.html",
                controller: 'Temp2993Controller'
            })
            .when("/template29967", {
                templateUrl: "./resume_templates/template299-67/resume67.html",
                controller: 'Temp29967Controller'
            })
            .when("/template29928", {
                templateUrl: "./resume_templates/template299-28/resume28.html",
                controller: 'Temp29928Controller'
            })
            .when("/template29946", {
                templateUrl: "./resume_templates/template299-46/resume46.html",
                controller: 'Temp29946Controller'
            });
});


app.controller('Temp1Controller', function ($scope, $http) {
    $(document).ready(function () {
        $(".resume-main").sortable({});
    });

    $scope.downloadResume = function () {


        var pageData = $('#resume').html();

        $.post("savePage.php", {
            pData: pageData
        },
                function (data, status) {
                    window.location.href = "downloadResume.html";

                });

    }




    if (localStorage.getItem("persistData")) {
        $result = $('#result');
        var imageData = localStorage.getItem("persistData");
        $result.empty();
        $result.append($('<img>').attr('src', imageData));
    }

});


//Remove seperator

function removePageSep() {
    $(".page-sep").remove()
}


app.controller('Temp1Controller', function ($scope, $http) {
    $(document).ready(function () {
        $(".resume-main").sortable({});
    });

    $scope.downloadResume = function () {
        removePageSep()

        var pageData = $('#resume').html();

        $.post("savePage.php", {
            pData: pageData
        },
                function (data, status) {
                    window.location.href = "downloadResume.html";

                });




    }

    // if (localStorage) {
    //     return localStorage.getItem(key);
    // } else {
    //     return $.cookies.get(key);
    // }

    if (localStorage.getItem("persistData")) {
        // alert("Find Local");
        $result = $('#result');

        var imageData = localStorage.getItem("persistData");
        // alert(imageData);
        $result.empty();
        $result.append($('<img>').attr('src', imageData));
    }

});

app.controller('Temp199-classicController', function ($scope, $http) {
   

    // alert("Hello")
    $(document).ready(function () {
        $(".resume-main").sortable({});
    });

    $scope.downloadResume = function () {
            removePageSep()


        var pageData = $('#resume').html();

        $.post("savePage.php", {
            pData: pageData
        },
                function (data, status) {
                    window.location.href = "downloadResume.html";

                });
    }


    if (localStorage.getItem("persistData")) {
        $result = $('#result');
        var imageData = localStorage.getItem("persistData");
        $result.empty();
        $result.append($('<img>').attr('src', imageData));
    }

});


app.controller('Temp3Controller', function ($scope, $http) {
    // alert("Hello")
    $(document).ready(function () {
        $(".resume-main").sortable({});
    });

    $scope.downloadResume = function () {
        removePageSep()

        var pageData = $('#resume').html();

        $.post("savePage.php", {
            pData: pageData
        },
                function (data, status) {
                    window.location.href = "downloadResume.html";

                });




    }



    if (localStorage.getItem("persistData")) {
        $result = $('#result');
        var imageData = localStorage.getItem("persistData");
        $result.empty();
        $result.append($('<img>').attr('src', imageData));
    }

});

app.controller('Temp29920Controller', function ($scope, $http) {
    // alert("Hello")
    $(document).ready(function () {
        $(".resume-main").sortable({});
    });

    $scope.downloadResume = function () {
        removePageSep()

        var pageData = $('#resume').html();

        $.post("savePage.php", {
            pData: pageData
        },
                function (data, status) {
                    window.location.href = "downloadResume.html";

                });




    }



    if (localStorage.getItem("persistData")) {
        $result = $('#result');
        var imageData = localStorage.getItem("persistData");
        $result.empty();
        $result.append($('<img>').attr('src', imageData));
    }

});



app.controller('Temp29918Controller', function ($scope, $http) {
   

    // alert("Hello")
    $(document).ready(function () {
        $(".resume-main").sortable({});
    });

    $scope.downloadResume = function () {
            removePageSep()


        var pageData = $('#resume').html();

        $.post("savePage.php", {
            pData: pageData
        },
                function (data, status) {
                    window.location.href = "downloadResume.html";

                });
    }


    if (localStorage.getItem("persistData")) {
        $result = $('#result');
        var imageData = localStorage.getItem("persistData");
        $result.empty();
        $result.append($('<img>').attr('src', imageData));
    }

});

app.controller('Temp29987Controller', function ($scope, $http) {
   

    // alert("Hello")
    $(document).ready(function () {
        $(".resume-main").sortable({});
    });

    $scope.downloadResume = function () {
            removePageSep()


        var pageData = $('#resume').html();

        $.post("savePage.php", {
            pData: pageData
        },
                function (data, status) {
                    window.location.href = "downloadResume.html";

                });
    }


    if (localStorage.getItem("persistData")) {
        $result = $('#result');
        var imageData = localStorage.getItem("persistData");
        $result.empty();
        $result.append($('<img>').attr('src', imageData));
    }

});

app.controller('Temp2993Controller', function ($scope, $http) {
    
    
    // alert("Hello")
    $(document).ready(function () {
        
        $(".resume-main").sortable({});
    });

    $scope.downloadResume = function () {
        removePageSep()

        var pageData = $('#resume').html();

        $.post("savePage.php", {
            pData: pageData
        },
                function (data, status) {
                    window.location.href = "downloadResume.html";

                });
    }


    if (localStorage.getItem("persistData")) {
        $result = $('#result');
        var imageData = localStorage.getItem("persistData");
        $result.empty();
        $result.append($('<img>').attr('src', imageData));
    }

});




app.controller('Temp29967Controller', function ($scope, $http) {
   

    // alert("Hello")
    $(document).ready(function () {
        $(".resume-main").sortable({});
    });

    $scope.downloadResume = function () {
            removePageSep()


        var pageData = $('#resume').html();

        $.post("savePage.php", {
            pData: pageData
        },
                function (data, status) {
                    window.location.href = "downloadResume.html";

                });
    }


    if (localStorage.getItem("persistData")) {
        $result = $('#result');
        var imageData = localStorage.getItem("persistData");
        $result.empty();
        $result.append($('<img>').attr('src', imageData));
    }

});

app.controller('Temp29928Controller', function ($scope, $http) {
   

    // alert("Hello")
    $(document).ready(function () {
        $(".resume-main").sortable({});
    });

    $scope.downloadResume = function () {
            removePageSep()


        var pageData = $('#resume').html();

        $.post("savePage.php", {
            pData: pageData
        },
                function (data, status) {
                    window.location.href = "downloadResume.html";

                });
    }


    if (localStorage.getItem("persistData")) {
        $result = $('#result');
        var imageData = localStorage.getItem("persistData");
        $result.empty();
        $result.append($('<img>').attr('src', imageData));
    }

});

app.controller('Temp29946Controller', function ($scope, $http) {
   

    // alert("Hello")
    $(document).ready(function () {
        $(".resume-main").sortable({});
    });

    $scope.downloadResume = function () {
            removePageSep()


        var pageData = $('#resume').html();

        $.post("savePage.php", {
            pData: pageData
        },
                function (data, status) {
                    window.location.href = "downloadResume.html";

                });
    }


    if (localStorage.getItem("persistData")) {
        $result = $('#result');
        var imageData = localStorage.getItem("persistData");
        $result.empty();
        $result.append($('<img>').attr('src', imageData));
    }

});



function downloadPdf() {
    $.get("./getResume.php", function (data, status) {
        html2pdf(data, {
            margin: 0,
            filename: 'myfile.pdf',
            image: {
                type: 'jpeg',
                quality: 2
            },
            html2canvas: {
                dpi: 192,
                scale: 4,
                letterRendering: true,
                useCORS: true

            },
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait'
            }
        });
    });




}


function checkHeight(divOut, divIn)
{
    if (divOut == "page1")
    {
        var cHeightOut = document.getElementById(divOut).clientHeight;
        var cHeightIn = document.getElementById(divIn).clientHeight;

        if (cHeightIn >= (cHeightOut - 20))
        {
            $("#info-p1").html("Page 1 Height is Going Out");
        } else
        {
            $("#info-p1").html("");

        }
    } else if (divOut == "page2")
    {
        var cHeightOut = document.getElementById(divOut).clientHeight;
        var cHeightIn = document.getElementById(divIn).clientHeight;

        if (cHeightIn >= (cHeightOut - 20))
        {
            $("#info-p2").html("Page 2 Height is Going Out");
        } else
        {
            $("#info-p2").html("");

        }
    }

}




$(document).ready(function () {


    $(".edit-cv-options button").click(function () {
        checkHeight("page1", "page-in1")
        checkHeight("page2", "page-in2")
    });


    $("#myModal").on('show.bs.modal', function () {

        var canvas = $("#canvas");
        context = canvas.get(0).getContext("2d");
        $result = $('#result');

        $('#fileInput').on('change', function (evt) {
            var files = evt.target.files;
            var file = files[0];
            if (files && file) {

                if (file.type.match(/^image\//)) {
                    var reader = new FileReader();

                    reader.readAsDataURL(file);
                    reader.onload = function (evt) {



                        var img = new Image();
                        img.src = evt.target.result;


                        img.onload = function () {


                            context.canvas.height = img.height;
                            context.canvas.width = img.width;

                            context.drawImage(img, 0, 0);
                            canvas.cropper('destroy');
                            canvas.cropper({
                                aspectRatio: 1 / 1
                            });
                            $('#btnCrop').click(function () {

                                var croppedImageDataURL = canvas.cropper('getCroppedCanvas').toDataURL("image/png");


                                if (localStorage) {
                                    localStorage.setItem("persistData", croppedImageDataURL);
                                    localStorage.setItem("storage", "local");

                                } else {

                                    $.cookies.set("persistData", proImageData);
                                    localStorage.setItem("storage", "cookie");


                                }




                                $result.empty();
                                $result.append($('<img>').attr('src', croppedImageDataURL));


                            });
                            $('#btnRestore').click(function () {
                                canvas.cropper('reset');
                                $result.empty();
                            });

                        };

                    };


                } else {
                    alert("Invalid file type! Please select an image file.");
                }
            } else {
            }
        });
    });
});


$(document).ready(function () {

    var dateDOB = "<option>Date</option>";
    var monthDOB = "<option>Month</option>";
    var yearDOB = "<datalist id='yearDOBList'><option value='Year'/>";
    var d = new Date();
    for (i = 1; i <= 31; i++) {
        dateDOB += "<option value='" + i + "'>" + i + "</option>";
    }
    $("#dateDOB").html(dateDOB);

    for (i = 1; i <= 12; i++) {
        monthDOB += "<option value='" + i + "'>" + i + "</option>";
    }
    $("#monthDOB").html(monthDOB);

    for (i = 1950; i <= d.getFullYear(); i++) {
        yearDOB += "<option  value='" + i + "'/>";
    }
    yearDOB += "</datalist>";
    $("#datalistYearDOB").html(yearDOB);

});