## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false, unique: true, index: true|
|email|string|null: false, unique:true|
|password|string|null: false|

### Association
- has_many :groups, through: :users_groups
- has_many :groups_users
- has_many :comments

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false |
|user_id|integer|null: false|

### Association
- has_many :users, through: :users_groups
- has_many :users_groups
- has_many :comments

## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|text|string||
|created_at|datetime|null: false|
|image|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

