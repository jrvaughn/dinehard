$(document).ready(function(){
  $('a').on('click', function(e){
    e.preventDefault();
    var pageRef = $(this).attr('href');

    callPage(pageRef);
  })


  function callPage(pageRefInput){
    $.ajax({
      url: pageRefInput,

      type:"GET",

      dataType: "text/html",

      success: function(response){
        $('.about')
      }

      error: function(error){
        console.log('failed to retrieve page ', error);
      }


    });



})}