class CreateBackpacks < ActiveRecord::Migration[5.1]
  def change
    create_table :backpacks do |t|
      t.integer :trip_id
      t.integer :user_id 
      t.timestamps
    end
  end
end
