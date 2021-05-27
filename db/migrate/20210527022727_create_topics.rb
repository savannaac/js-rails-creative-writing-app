class CreateTopics < ActiveRecord::Migration[6.1]
  def change
    create_table :topics do |t|
      t.string :description, :limit => 20
      t.datetime :created_at, precision: 6, null: false
      t.datetime :updated_at, precision: 6, null: false
    end
  end
end
