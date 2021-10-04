class Category < ApplicationRecord
    has_many :topics, dependent: :destroy
    has_many :posts, through: :topics

    def created
        self.created_at.localtime.strftime("%b %e,  %l:%M %p")
    end

    def updated
        if self.posts.exists?
            self.posts.last.created_at.localtime.strftime("%b %e,  %l:%M %p")
        end
    end
end
