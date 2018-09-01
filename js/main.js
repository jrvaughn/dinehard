$(document).ready(function(){
  $('.nav-link').on('click', function(e){
    e.preventDefault();
    var pageRef = $(this).attr('href');

    callPage(pageRef);
  });
});


  function callPage(pageRefInput){
    $.ajax({
      url: pageRefInput,

      type:"GET",

      dataType: "text",

      success: function(response){
        $('.content').html(response);
         window.location.hash = "!/" + pageRefInput;
      },

      error: function(error){
        console.log('failed to retrieve page ' + error.statusText , error);
      },

      complete: function(xhr, status){
        //console.log('grats');
      }
    });
  }
