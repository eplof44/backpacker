class CreateTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :trips do |t|
         t.date :date
         t.string :location
         t.integer :duration
         t.integer :backpack_size
         t.string :camping_type
         t.string :weather
         t.boolean :completed
         t.integer :user_id 
      t.timestamps
    end
  end
end
