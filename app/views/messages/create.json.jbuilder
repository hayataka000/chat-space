json.content  @message.content
json.name  @message.user.name
json.time  @message.created_at.strftime("%Y/%m/%d %H:%M")
json.image @message.image.url
json.id @message.id
json.group
