class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :item_weight
      t.integer :value
      t.integer :category_id
      t.timestamps
    end
  end
end
