class Topic < ApplicationRecord
    has_many :posts, dependent: :destroy
    validates :description, presence: true
end
