
    $( document ).ready(function() {
        
        //Echtzeit Reiter

        var fahrten = $('.fahrten');

        var elements = fahrten.children('div.fahrten-content');
        elements.hide();

        fahrten.on('click', function (){
            elements.toggle();
        });


        //Haltestellen Reiter
        
        var haltestellen = $('.haltestellen');
        
        var content = haltestellen.children('div.haltestellen-content');
        content.hide();

        haltestellen.on('click', function (){
            content.toggle();
        });
    });

