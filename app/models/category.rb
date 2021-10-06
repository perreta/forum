class Category < ApplicationRecord
    has_many :topics, dependent: :destroy
    has_many :posts, through: :topics
    has_many :users, through: :posts

    def created
        self.created_at.localtime.strftime("%b %e,  %l:%M %p")
    end

    def updated
        if self.posts.exists?
            self.posts.last.created_at.localtime.strftime("%b %e,  %l:%M %p")
        end
    end
end
