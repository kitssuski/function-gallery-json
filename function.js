$(function() {
  var i = 0;
  var index = 0;
  var item = "";
  $.getJSON('data.json', function (data) {
    $.each( data.images, function( key, val ) {
      console.log(index)
      if (i < 2) {
        item += '<div><img src="'+ val.url +'" alt="" /></div>';
        if (index === 1) {
          $('body').append('<li class="two">'+ item +'</li>');
          item = "";
        }
        index++;
        i++;
      }else{
          index = 0;
          i = 0;
          $('body').append('<li class="one"><div><img src="'+ val.url +'" alt="" /></div></li>');
      }
      });
  });

})