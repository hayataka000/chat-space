## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true, index: true|

### Association
- has_many :groups, through: :users_groups
- has_many :groups_users
- has_many :comments

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false |

### Association
- has_many :users, through: :users_groups
- has_many :users_groups
- has_many :comments

## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|text|text||
|created_at|datetime|null: false|
|image|text||
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

