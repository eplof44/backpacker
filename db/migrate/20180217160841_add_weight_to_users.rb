class AddWeightToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :weight, :integer
  end
end
