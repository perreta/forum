class CategorySerializer < ActiveModel::Serializer
    attributes :id, :subject, :picture, :created_at, :updated_at, :created, :updated, :topics, :posts, :users
    has_many :topics
    has_many :posts, through: :topics
    has_many :users, through: :topics

    def created
        object.created_at.localtime.strftime("%b %e,  %l:%M %p")
    end

    def updated
        if object.posts.exists?
            object.posts.last.created_at.localtime.strftime("%b %e,  %l:%M %p")
        end
    end
end
