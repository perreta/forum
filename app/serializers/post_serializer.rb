class PostSerializer < ActiveModel::Serializer
    attributes :id, :content, :postCategory, :created_at, :updated_at, :created, :updated
    has_one :user
    has_one :topic

    def created
        object.created_at.localtime.strftime("%b %e,  %l:%M %p")
    end

    def updated
        object.updated_at.localtime.strftime("%b %e,  %l:%M %p")
    end

    def postCategory
        object.topic.category.subject
    end

end
