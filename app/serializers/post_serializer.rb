class PostSerializer < ActiveModel::Serializer 
    belongs_to :topic 
    attributes :id, :topic_id, :content, :created_at, :updated_at
end 