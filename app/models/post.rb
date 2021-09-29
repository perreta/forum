class Post < ApplicationRecord
    belongs_to :user
    belongs_to :topic

    def created
        self.created_at.localtime.strftime("%b %e,  %l:%M %p")
    end

    def updated
        self.updated_at.localtime.strftime("%b %e,  %l:%M %p")
    end
end
