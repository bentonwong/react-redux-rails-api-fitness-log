class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.date :date
      t.text :context
      t.text :food
      t.text :workout
      t.integer :weight
    end
  end
end
