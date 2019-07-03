$(document).on('turbolinks:load', function() {

var search_list = $("#user-search-result");
var group_users = $("#chat-group-users")

function appendUserToSearchList(user){
  var html = `<div class="chat-group-user clearfix">
              <p class="chat-group-user__name">${user.name}</p>
              <div id="test"class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
              </div>`
  search_list.append(html);
}

function appendErrMsgToHTML(msg) {
  var html = `<div class="chat-group-user clearfix">
              <p class="chat-group-user__name">${ msg }</p>
              </div>`
  search_list.append(html);
}

function appendUserToGroup(user_id, user_name){
  var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user'>
              <input name='group[user_ids][]' type='hidden' value='${user_id}'>
              <p class='chat-group-user__name'>${user_name}</p>
              <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
              </div>`
  group_users.append(html);
}

$(function() { 
    $("#group-user-form").on('keyup',function() {
      isChange = true;
      var input = $("#group-user-form").val();
      var user_ids = []
      $.ajax({
        type: 'GET',
        url: '/users',
        data: { keyword: input, id: user_ids},
        dataType: 'json'
      })

      .done(function(users) {
        search_list.empty();
          if (users.length !== 0) {
            users.forEach(function(user){
              appendUserToSearchList(user);
            });
        }
        else {
          appendErrMsgToHTML("一致するユーザーが見つかりません");
        }
      })
        .fail(function() {
          alert('ユーザー検索に失敗しました');
        });
      });
  });

  $(function() { 
    $(document).on("click", ".user-search-add", function(){
      var user_id = $(this).attr("data-user-id");
      var user_name = $(this).attr("data-user-name");
      appendUserToGroup(user_id, user_name);
      $(this).parent().remove();
    });
    $(document).on("click", ".user-search-remove", function() {
      $(this).parent().prev().remove();
      $(this).parent().remove();

    });
  });
});