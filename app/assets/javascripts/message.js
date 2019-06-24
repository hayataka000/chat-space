$(function(){
  function buildHTML(message){
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

  $('.new_message').on('submit', function(e){
    e.preventDefault();    
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
    $('.comments').append(html)
    $('.comments').animate({scrollTop:$('.comments')[0].scrollHeight});
    $("#submit-btn").prop("disabled", false);
    $('.form__message').val('')
  })
  .fail(function(){
    alert('error');
  })
})
})
