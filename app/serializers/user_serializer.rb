class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :username, :email, :profile_picture, :bio, :admin, :password, :categories, :userCategories
    
    has_many :posts
    has_many :topics
    has_many :categories, through: :topics

    def userCategories
        object.categories.uniq
    end
end
