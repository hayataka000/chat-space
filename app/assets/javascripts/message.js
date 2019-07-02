$(document).on('turbolinks:load', function() {
  function buildHTML(message){
      var html = `<p>
                  <div class="comment", data-message-id='${message.id}'>
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
    $('.comments').animate({scrollTop:$('.comments')[0].scrollHeight}, 'fast');
    $("#submit-btn").prop("disabled", false);
    $('.new_message')[0].reset();
  })
  .fail(function(){
    alert('error');
  })
})


$(function(){
  setInterval(reloadMessages, 5000)
});
    function reloadMessages(){
      if (window.location.href.match(/\/groups\/\d+\/messages/))
        var last_message_id = $('.comment:last').data('message-id');
      $.ajax({
        url: 'api/messages',
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id},
      })
      .done(function(messages) {
       
        var insertHTML = '';
        messages.forEach(function (message) {
          insertHTML = buildHTML(message);
        })
        if (messages.length !== 0) {
          $('.comments').append(insertHTML);
       
        $('.comments').animate({scrollTop:$('.comments')[0].scrollHeight}, 'fast');   
      } 
    })
        .fail(function() {
          alert('自動更新に失敗しました');
        })
  }
});