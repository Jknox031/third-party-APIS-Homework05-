$(document).ready(function () {    

    $(".saveBtn").on("click",function(){   
        
        var calenderInput = $(this).siblings(".description").val() 
        
        var selectedTime = $(this).parent().attr("id") 
        
        localStorage.setItem(selectedTime, calenderInput) 
        console.log("this is logged")
    })
    //load any saved data from LocalStorage .
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));
    


    function updateTimeBlock() {
        
        var currentHour = moment().hour();

       
        $(".time-block").each(function () {
            var calenderTime = parseInt($(this).attr("id").split("hour")[1]);
           

            
            if (calenderTime < currentHour) {
                $(this).addClass("past");
               
            }
            else if (calenderTime === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                
            }
            else {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
                
            }
        })
    }
    updateTimeBlock();
})

$("#currentDay").text(moment().format("MMMM Do YYYY"));















