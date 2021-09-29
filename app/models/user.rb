class User < ApplicationRecord
    has_secure_password

    has_many :topics
    has_many :posts, dependent: :destroy
    has_many :categories, through: :topics

    validates :name, presence: true
    validates :username, presence: true, uniqueness: :true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, presence: true, length: { in: 6..20 }
    validates :bio, length: {maximum: 140 }
end
