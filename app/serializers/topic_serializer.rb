class TopicSerializer < ActiveModel::Serializer
    attributes :id, :title, :created_at, :updated_at, :created, :updated, :posts, :category
    has_one :user
    has_one :category
    has_many :posts

    def created
        object.created_at.localtime.strftime("%b %e,  %l:%M %p")
    end

    def updated
        if object.posts.exists?
            object.posts.last.created_at.localtime.strftime("%b %e,  %l:%M %p")
        end
    end
end
