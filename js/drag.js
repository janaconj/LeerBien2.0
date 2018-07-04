$(function(){
    
    $("#drag").draggable({start: function(){}});
    $("#dragva").draggable({start: function(){
        $("#audioa")[0].play();
    }}, {helper: 'clone'});
    $("#dragva1").draggable({start: function(){
        $("#audioa")[0].play();
    }}, {helper: 'clone'});
    $("#dragva2").draggable({start: function(){
        $("#audioa")[0].play();
    }}, {helper: 'clone'});
    $("#dragve").draggable({start: function(){
        $("#audioe")[0].play();
    }}, {helper: 'clone'});
    $("#dragvi").draggable({start: function(){
        $("#audioi")[0].play();
    }}, {helper: 'clone'});
    $("#dragvo").draggable({start: function(){
        $("#audioo")[0].play();
    }}, {helper: 'clone'});
    $("#dragvu").draggable({start: function(){
        $("#audiou")[0].play();
    }}, {helper: 'clone'});
    
    $("#dragf1").draggable({start: function(){
        $("#audio1")[0].play();
    }}, {helper: 'clone'});
    $("#dragf2").draggable({start: function(){
        $("#audio2")[0].play();
    }}, {helper: 'clone'});
    $("#dragf3").draggable({start: function(){
        $("#audio3")[0].play();
    }}, {helper: 'clone'});
    $("#dragf4").draggable({start: function(){
        $("#audio4")[0].play();
    }}, {helper: 'clone'});
    $("#dragf5").draggable({start: function(){
        $("#audio5")[0].play();
    }}, {helper: 'clone'});
    $("#dragf6").draggable({start: function(){
        $("#audio6")[0].play();
    }}, {helper: 'clone'});
    $("#dragf7").draggable({start: function(){
        $("#audio7")[0].play();
    }}, {helper: 'clone'});
    $("#dragf8").draggable({start: function(){
        $("#audio8")[0].play();
    }}, {helper: 'clone'});
    
    $("#drop").droppable({
        drop: function(event, ui){
            $("#audio")[0].play();
        }
    });
    
    $("#dropva").droppable({
        drop: function(event, ui){
            var id = $(ui.draggable).attr("id");
            if (id == 'dragva' ){
                /*$("#audioa")[0].play();*/
                $("#dropva").html("<div class='peloto a'>A</div>");
                $("#dragva").hide();
                /*if ( $("#dropve").is(':empty') == 'false' && $("#dropva1").is(':empty') == 'false'){
                    $("#audiocom")[0].play();
                }*/
            }
        }
    });
    
    $("#dropve").droppable({
        drop: function(event, ui){
            var id = $(ui.draggable).attr("id");
            if (id == 'dragve' ){
                /*$("#audioe")[0].play();*/
                $("#dropve").html("<div class='peloto e'>E</div>");
                $("#dragve").hide();
                
                if ( $("#dropva").is(':empty') == false && $("#dropva1").is(':empty') == false){
                    $("#audiocom")[0].play();
                }
            }
        }
    });
    
    $("#dropva1").droppable({
        drop: function(event, ui){
            var id = $(ui.draggable).attr("id");
            if (id == 'dragva1' ){
                /*$("#audioa")[0].play();*/
                $("#dropva1").html("<div class='peloto a'>A</div>");
                $("#dragva1").hide();
                
                if ( $("#dropve").is(':empty') == false && $("#dropva1").is(':empty') == false){
                    $("#audiocom")[0].play();
                }
            }
        }
    });
    
    $("#dropf1").droppable({
        drop: function(event, ui){
            var id = $(ui.draggable).attr("id");
            if ($("#dropf1").is(':empty')){
                if (id == 'dragf1' || id == 'dragf4' || id == 'dragf6'){
                    switch(id){
                    case 'dragf1':
                        $("#dropf1").html("<img class='foto' src='images/abeja.png'>");
                        $("#dragf1").hide();
                        break;
                    case 'dragf4':
                        $("#dropf1").html("<img class='foto' src='images/aguila.png'>");
                        $("#dragf4").hide();
                        break; 
                    case 'dragf6':
                        $("#dropf1").html("<img class='foto' src='images/araña.png'>");
                        $("#dragf6").hide();
                        break; 
                    }
                }
            }  
        }
    });
    
    $("#dropf2").droppable({
        drop: function(event, ui){
            var id = $(ui.draggable).attr("id");
            if ($("#dropf2").is(':empty')){
                if (id == 'dragf1' || id == 'dragf4' || id == 'dragf6'){
                    switch(id){
                    case 'dragf1':
                        $("#dropf2").html("<img class='foto' src='images/abeja.png'>");
                        $("#dragf1").hide();
                        break;
                    case 'dragf4':
                        $("#dropf2").html("<img class='foto' src='images/aguila.png'>");
                        $("#dragf4").hide();
                        break; 
                    case 'dragf6':
                        $("#dropf2").html("<img class='foto' src='images/araña.png'>");
                        $("#dragf6").hide();
                        break; 
                    }
                }
            }  
        }
    });
    
    $("#dropf3").droppable({
        drop: function(event, ui){
            var id = $(ui.draggable).attr("id");
            if ($("#dropf3").is(':empty')){
                if (id == 'dragf1' || id == 'dragf4' || id == 'dragf6'){
                    switch(id){
                    case 'dragf1':
                        $("#dropf3").html("<img class='foto' src='images/abeja.png'>");
                        $("#dragf1").hide();
                        break;
                    case 'dragf4':
                        $("#dropf3").html("<img class='foto' src='images/aguila.png'>");
                        $("#dragf4").hide();
                        break; 
                    case 'dragf6':
                        $("#dropf3").html("<img class='foto' src='images/araña.png'>");
                        $("#dragf6").hide();
                        break; 
                    }
                }
            }  
        }
    });
    
    $("#abeja").click(function() {
        $("#audiocom")[0].play();
    });
});