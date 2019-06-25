// $(function(){
//   function buildHTML(message){
//     var html =


//     return html;
//   }
$(function() {
  $("#group-user-form").keypress(function() {
    isChange = true;
    var input = $("#group-user-form").val();
    console.log(input);

    $.ajax({
      type: 'GET',
      url: '/users/search',
      data: { keyword: input },
      dataType: 'json'
    })
  });
});

//   .done(function(message){
//     var html = buildHTML(message);
//     $('.comments').append(html)
//     $('.new_message')[0].reset();
//   })
// })
// })