class User < ApplicationRecord
    has_secure_password
    has_many :tasks
    has_many :task_doers, through: :tasks

    validates :username, presence: true, uniqueness: { case_sensitive: false }

end
