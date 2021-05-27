class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.integer :topic_id
      t.text :content, :limit => 175
      t.datetime :created_at, precision: 6, null: false
      t.datetime :updated_at, precision: 6, null: false
    end
  end
end
