$(document).ready(function(){
  $("#lap").mouseover(function(){
      $("#laps").show();
      $("#laptops,#Dell_big,#Del_laptop_big,#DELL_big,#slidelap_big,#Intel_big").hide();
    });
  $("#laptop").mouseover(function(){
    $("#laptops").show();
    $("#laps,#Dell_big,#Del_laptop_big,#DELL_big,#slidelap_big,#Intel_big").hide();
  });
  $("#Dell").mouseover(function(){
    $("#Dell_big").show();
    $("#laps,#laptops,#Del_laptop_big,#DELL_big,#slidelap_big,#Intel_big").hide();
  });
  $("#Del_laptop").mouseover(function(){
    $("#Del_laptop_big").show();
    $("#laps,#Dell_big,#laptops,#DELL_big,#slidelap_big,#Intel_big").hide();
  });
  $("#DELL").mouseover(function(){
    $("#DELL_big").show();
    $("#laps,#Dell_big,#Del_laptop_big,#laptops,#slidelap_big,#Intel_big").hide();
  });
  $("#slidelap").mouseover(function(){
    $("#slidelap_big").show();
    $("#laps,#Dell_big,#Del_laptop_big,#laptops,#DELL_big,#Intel_big").hide();
  });
  $("#Intel").mouseover(function(){
    $("#Intel_big").show();
    $("#laps,#Dell_big,#Del_laptop_big,#laptops,#DELL_big,#slidelap_big").hide();
  });
  // modal start
    $("#laps").click(function(){
       $("#myModal").modal();
       $("#lap_set").addClass("border");
       $("#laptop_set,#Dell_set,#Del_laptop_set,#DELL_set,#slidelap_set,#Intel_set").removeClass("border");
       $("#modal_laps").show();
       $("#modal_laptops,#modal_Dell_big,#modal_Del_laptop_big,#modal_DELL_big,#modal_slidelap_big,#modal_Intel_big").hide();
     });
    $("#laptops").click(function(){
       $("#myModal").modal();
       $("#laptop_set").addClass("border");
       $("#lap_set,#Dell_set,#Del_laptop_set,#DELL_set,#slidelap_set,#Intel_set").removeClass("border");
       $("#modal_laptops").show();
       $("#modal_laps,#modal_Dell_big,#modal_Del_laptop_big,#modal_DELL_big,#modal_slidelap_big,#modal_Intel_big").hide();
      });
    $("#Dell_big").click(function(){
       $("#myModal").modal();
       $("#Dell_set").addClass("border");
       $("#lap_set,#laptop_set,#Del_laptop_set,#DELL_set,#slidelap_set,#Intel_set").removeClass("border");
       $("#modal_Dell_big").show();
       $("#modal_laps,#modal_laptops,#modal_Del_laptop_big,#modal_DELL_big,#modal_slidelap_big,#modal_Intel_big").hide();
    });
    $("#Del_laptop_big").click(function(){
       $("#myModal").modal();
       $("#Del_laptop_set").addClass("border");
       $("#lap_set,#laptop_set,#Dell_set,#DELL_set,#slidelap_set,#Intel_set").removeClass("border");
       $("#modal_Del_laptop_big").show();
       $("#modal_laps,#modal_Dell_big,#modal_laptops,#modal_DELL_big,#modal_slidelap_big,#modal_Intel_big").hide();
     });
    $("#DELL_big").click(function(){
       $("#myModal").modal();
       $("#DELL_set").addClass("border");
       $("#lap_set,#laptop_set,#Dell_set,#Del_laptop_set,#slidelap_set,#Intel_set").removeClass("border");
       $("#modal_DELL_big").show();
       $("#modal_laps,#modal_Dell_big,#modal_Del_laptop_big,#modal_laptops,#modal_slidelap_big,#modal_Intel_big").hide();
    });
    $("#slidelap_big").click(function(){
       $("#myModal").modal();
       $("#slidelap_set").addClass("border");
       $("#lap_set,#laptop_set,#Dell_set,#Del_laptop_set,#DELL_set,#Intel_set").removeClass("border");
       $("#modal_slidelap_big").show();
       $("#modal_laps,#modal_Dell_big,#modal_Del_laptop_big,#modal_laptops,#modal_DELL_big,#modal_Intel_big").hide();
    });
    $("#Intel_big").click(function(){
       $("#myModal").modal();
       $("#Intel_set").addClass("border");
       $("#lap_set,#laptop_set,#Dell_set,#Del_laptop_set,#DELL_set,#slidelap_set").removeClass("border");
       $("#modal_Intel_big").show();
       $("#modal_laps,#modal_Dell_big,#modal_Del_laptop_big,#modal_laptops,#modal_DELL_big,#modal_slidelap_big").hide();
    });
// modal small block images starting
    $("#lap_set").click(function(){
   	   $("#lap_set").addClass("border");
   	   $("#laptop_set,#Dell_set,#Del_laptop_set,#DELL_set,#slidelap_set,#Intel_set").removeClass("border");
       $("#modal_laps").show();
       $("#modal_laptops,#modal_Dell_big,#modal_Del_laptop_big,#modal_DELL_big,#modal_slidelap_big,#modal_Intel_big").hide();
    });
    $("#laptop_set").click(function(){
   	   $("#laptop_set").addClass("border");
   	   $("#lap_set,#Dell_set,#Del_laptop_set,#DELL_set,#slidelap_set,#Intel_set").removeClass("border");
       $("#modal_laptops").show();
       $("#modal_laps,#modal_Dell_big,#modal_Del_laptop_big,#modal_DELL_big,#modal_slidelap_big,#modal_Intel_big").hide();
    });
    $("#Dell_set").click(function(){
   	   $("#Dell_set").addClass("border");
   	   $("#lap_set,#laptop_set,#Del_laptop_set,#DELL_set,#slidelap_set,#Intel_set").removeClass("border");
       $("#modal_Dell_big").show();
       $("#modal_laps,#modal_laptops,#modal_Del_laptop_big,#modal_DELL_big,#modal_slidelap_big,#modal_Intel_big").hide();
    });
    $("#Del_laptop_set").click(function(){
   	   $("#Del_laptop_set").addClass("border");
   	   $("#lap_set,#laptop_set,#Dell_set,#DELL_set,#slidelap_set,#Intel_set").removeClass("border");
       $("#modal_Del_laptop_big").show();
       $("#modal_laps,#modal_laptops,#modal_Dell_big,#modal_DELL_big,#modal_slidelap_big,#modal_Intel_big").hide();
    });
    $("#DELL_set").click(function(){
   	   $("#DELL_set").addClass("border");
   	   $("#lap_set,#laptop_set,#Dell_set,#Del_laptop_set,#slidelap_set,#Intel_set").removeClass("border");
       $("#modal_DELL_big").show();
       $("#modal_laps,#modal_laptops,#modal_Dell_big,#modal_Del_laptop_big,#modal_slidelap_big,#modal_Intel_big").hide();
    });
    $("#slidelap_set").click(function(){
   	   $("#slidelap_set").addClass("border");
   	   $("#lap_set,#laptop_set,#Dell_set,#Del_laptop_set,#DELL_set,#Intel_set").removeClass("border");
       $("#modal_slidelap_big").show();
       $("#modal_laps,#modal_laptops,#modal_Dell_big,#modal_Del_laptop_big,#modal_DELL_big,#modal_Intel_big").hide();
    });
    $("#Intel_set").click(function(){
   	   $("#Intel_set").addClass("border");
   	   $("#lap_set,#laptop_set,#Dell_set,#Del_laptop_set,#DELL_set,#slidelap_set").removeClass("border");
       $("#modal_Intel_big").show();
       $("#modal_laps,#modal_laptops,#modal_Dell_big,#modal_Del_laptop_big,#modal_DELL_big,#modal_slidelap_big").hide();
    });
// modal end
// slider starting
    var click=0;
   $(".glyphicon-chevron-right").click(function(){
      click +=1;
	   if(click==0)
	   {
		 $("#slider1").show();
		 $("#slider2,#slider3").hide();
	   }
	   else if(click==1)
	   {
	     $("#slider2").show();
	     $("#slider1,#slider3").hide();
	   }
	   else if(click==2)
	   {
	     $("#slider3").show();
		 $("#slider1,#slider2").hide();
	   }
	   else if(click==3)
	   {
	     $("#slider1").show();
	     $("#slider2,#slider3").hide();
	       click=0;
	   }
    });
  $(".glyphicon-chevron-left").click(function(){
	   click +=1;
	   if(click == 1)
	    {
	      $("#slider1,#slider2").hide();
		  $("#slider3").show();
	    }
	    else if(click ==2)
	    {
	      $("#slider1,#slider3").hide();
		  $("#slider2").show();
	    }
	    else if(click ==3)
	    {
	      $("#slider1").show();
		  $("#slider2,#slider3").hide();
	      click =0;
	    }
   });
// slider ending
});

