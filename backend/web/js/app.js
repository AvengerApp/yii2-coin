$(function() {
    "use strict";

    //Make the dashboard widgets sortable Using jquery UI
    $(".connectedSortable").sortable({
        placeholder: "sort-highlight",
        connectWith: ".connectedSortable",
        handle: ".box-header, .nav-tabs",
        forcePlaceholderSize: true,
        zIndex: 999999
    }).disableSelection();
    $(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");
    
    function updateAmount()
    {
        var type = $("#buyform-type").val();
        var rate;
        if(type == 1){
            rate = $("#rate-coin-btc").val();
        }else{
            rate = $("#rate-coin-eth").val();
        }
        var amount_coin = parseFloat($("#buyform-amount_coin").val());
        var data = rate * amount_coin;
        $( "#buyform-amount" ).val( data.toFixed(8) );
        
        // $.get( "/backend/web/ico/amount", {
        //             amount_coin: $(this).val(),
        //             type: $("#buyform-type").val()
        //         } ).done(function( data ) {
        //         $( "#buyform-amount" ).val( data );
        //     });
    }
    
            
    $(document).on("change, keyup", "#buyform-amount_coin", updateAmount);
})