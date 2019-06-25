json.array! @users do |user|
  json.id @users.id
  json.name @users.name
end