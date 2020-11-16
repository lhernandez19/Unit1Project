var sizePrice = 0;
var meatTotal = 0;
var veggieTotal = 0;


$(document).ready(function () {
    //events

    $(".nav-link").click(showTab);
    $("input[name=size]").change(displaySize).first().change(); 
    $("input[name=crust]").change(displayCrust).first().change();   
    $("input[name=meats]").change(displayMeats);
    $("input[name=veggies]").change(displayVeggies);
    $("input[name=deliveryInfo]").change(displayDelivery);
    $(".nav-link").click(calculation);

    //functions

    function showTab(event) {
        event.preventDefault();
        $(this).tab("show");
    }

    function displaySize(){
        var checkedBoxSize = $("input[name=size]:checked").val();
        sizePrice = $(this).data("price");

        // Ouputs
        $("#sizeNameOutput").text(checkedBoxSize);
        $("#sizePriceOutput").text(sizePrice.toFixed(2));
    }

    function displayCrust(){
        var checkedCrustName = $("input[name=crust]:checked").val();
          
        // Ouput
        $("#crustNameOutput").text(checkedCrustName);
    }

    function displayMeats() 
    {
        var meatNames = "";
        meatTotal = 0;

        // find the checked boxes
        var checkedMeat = $("input[name=meats]:checked");
        
        // add up their data-price
        checkedMeat.each(function(){
            meatTotal += $(this).data("price");
            meatNames += $(this).val();
            meatNames += ", ";
        })

        // Ouputs
        $("#meatsOutput").html(meatNames);
        $("#meatsPriceOutput").text(meatTotal.toFixed(2));
    }

    function displayVeggies() 
    {
        var veggieNames = "";
        veggieTotal = 0;

        // find the checked boxes
        var checkedVeggie = $("input[name=veggies]:checked");
        
        // add up their data-price
        checkedVeggie.each(function(){
            veggieTotal += $(this).data("price");
            veggieNames += $(this).val();
            veggieNames += ", ";
        })

        // Ouputs
        $("#veggiesOutput").text(veggieNames);
        $("#veggiesNameOutput").text(veggieTotal.toFixed(2));
    }

    
    function displayDelivery() 
    {
        var deliveryInfo = "";

        // find the checked boxes
        var checkedDelivery = $("input[name=deliveryInfo]");
        
        // add up their data-price
        checkedDelivery.each(function(){
            deliveryInfo += $(this).val();
            deliveryInfo += "<br>";
        })

        // Ouputs
        $("#deliveryOutputs").html(deliveryInfo);
    }


    function calculation(){

        //Calculations
        var subTotal = sizePrice + meatTotal + veggieTotal;
        var saleTax = subTotal * 0.051;
        var deliveryFee = 2;
        var total = subTotal + saleTax + deliveryFee;

        //Outputs
        $("#subTotalOutput").text(subTotal.toFixed(2));
        $("#saleTaxOutput").text(saleTax.toFixed(2));
        $("#deliveryFeeOutput").text(deliveryFee.toFixed(2));
        $("#totalOutput").text(total.toFixed(2));

    }



    
});