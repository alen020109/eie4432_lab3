
$(document).ready(function(){

    var selectedTable = "";
    
    var bookedTable = [];

    if(localStorage.getItem("bookedTable") != null) {
        bookedTable = JSON.parse(localStorage.getItem("bookedTable"));
    } else {
        bookedTable = [];
    }

    for (let i=0;i<bookedTable.length;i++){
        tableID = "#"+bookedTable[i];
        $(tableID).removeClass("table").addClass("booked");

    }


    $("#1").click(function(){
        selectedTable = "1";
        selectedTableID = "#1";
        if ($("#1").attr("class") == "table"){
            $("#selected-table").text("Do you want to book Table 1?")
            $("#confirm").removeClass("d-none");
            $("#dismiss").removeClass("d-none");
        } else if ($("#1").attr("class") == "booked"){
            alert("This table is already booked.")
        }
    });
    $("#2").click(function(){
        selectedTable = "2";
        selectedTableID = "#2";
        if ($("#2").attr("class") == "table"){
            $("#selected-table").text("Do you want to book Table 2?")
            $("#confirm").removeClass("d-none");
            $("#dismiss").removeClass("d-none");
        } else if ($("#2").attr("class") == "booked"){
            alert("This table is already booked.")
        }
    });
    $("#3").click(function(){
        selectedTable = "3";
        selectedTableID = "#3";
        if ($("#3").attr("class") == "table"){
            $("#selected-table").text("Do you want to book Table 3?")
            $("#confirm").removeClass("d-none");
            $("#dismiss").removeClass("d-none");
        } else if ($("#3").attr("class") == "booked"){
            alert("This table is already booked.")
        }
    });
    $("#4").click(function(){
        selectedTable = "4";
        selectedTableID = "#4";
        if ($("#4").attr("class") == "table"){
            $("#selected-table").text("Do you want to book Table 4?")
            $("#confirm").removeClass("d-none");
            $("#dismiss").removeClass("d-none");
        } else if ($("#4").attr("class") == "booked"){
            alert("This table is already booked.")
        }
    });
    $("#confirm").click(function(){
        bookedTable.push(selectedTable);
        localStorage.setItem("bookedTable",JSON.stringify(bookedTable));
        $(selectedTableID).removeClass("table").addClass("booked");
        bookedTable = JSON.parse(localStorage.getItem("bookedTable"));
        $("#selected-table").text("Click a Table to book")
        $("#confirm").addClass("d-none");
        $("#dismiss").addClass("d-none");
    });
    $("#dismiss").click(function(){
        $("#selected-table").text("Click a Table to book")
        $("#confirm").addClass("d-none");
        $("#dismiss").addClass("d-none");
    });
    

});

function clearstorage(){
    var bookedTable = [];
    localStorage.setItem("bookedTable",JSON.stringify(bookedTable));
}