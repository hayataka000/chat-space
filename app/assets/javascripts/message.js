$(function(){
  function buildHTML(message){
    console.log(message);
    var html = `<p>
                  <div class="comment">
                    <div class="comment__info">
                      <div class="comment__info--name">
                      ${message.name}
                      </div>
                      <div class="comment__info--date">
                      ${message.time}
                      </div>
                    </div>
                    <div class="comment__text">
                    ${message.content}
                    </div>
                    <div class="comment__img">
                      <img src=${message.image} alt="" width="400" height="400">
                    </div>
                  </div>
                </p>`
    return html;
  }

//   function scroll() {
//     $('.main__middle').animate({scroll: $('form__message')[0].scrollHeight});
// }
  $('.new_message').on('submit', function(e){
    e.preventDefault();
    console.log(this)      
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
  })
  .done(function(message){
    var html = buildHTML(message);
    $('.main__middle').append(html)
    $('.form__message').val('')
    scroll()    
  })
  .fail(function(){
    alert('error');
  })
})
})
