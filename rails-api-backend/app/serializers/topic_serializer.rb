class TopicSerializer < ActiveModel::Serializer 
    has_many :posts
    attributes :id, :description
end 