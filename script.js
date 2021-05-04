function compute()
{
    //Get elements from DOM
    var elem_principal = document.getElementById("principal");
    var elem_rate = document.getElementById("rate");
    var elem_years = document.getElementById("years");

    //Get values
    principal = elem_principal.value;
    rate = elem_rate.value;
    years = elem_years.value;

    //Validate if principal > 0
    if (principal <= 0 || principal.lengh < 1) {
        alert("Enter a positive number");
        elem_principal.focus()
    } else {

        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
    
        document.getElementById("result").innerHTML="If you deposit <span class='highlight'>"+principal+"</span>,\<br\>at an interest rate of <span class='highlight'>"+rate+"%</span>\<br\>You will receive an amount of <span class='highlight'>"+interest+"</span>,\<br\>in the year <span class='highlight'>"+year+"</span>\<br\>"
    }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+'%';
}