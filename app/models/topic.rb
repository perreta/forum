class Topic < ApplicationRecord
    belongs_to :user
    belongs_to :category
    has_many :posts, dependent: :destroy

    def created
        self.created_at.localtime.strftime("%b %e,  %l:%M %p")
    end

    def updated
        if self.posts.exists?
            self.posts.last.created_at.localtime.strftime("%b %e,  %l:%M %p")
        end
    end
end
