$(document).ready(function(){
  $('.nav-link').on('click', function(e){
    e.preventDefault();
    var pageRef = $(this).attr('href');
    var targetTitle = $(this).attr('title');

  callPage(pageRef, targetTitle);
  });

  window.onpopstate = function(e) {
      //$(".nav-link").fadeTo('fast', 1.0);
      callPage(e.state ? e.state.url : null);
  };
});


  function callPage(pageRefInput, targetTitleInput){
    $.ajax({
      url: pageRefInput,

      type:"GET",

      dataType: "text",

      success: function(response){
        $('.content').html(response);
         window.history.pushState({url: "" + pageRefInput + ""}, targetTitleInput, pageRefInput);
      },

      error: function(error){
        console.log('failed to retrieve page ' + error.statusText , error);
      },

      complete: function(xhr, status){
        //console.log('grats');
      }
    });
  }
