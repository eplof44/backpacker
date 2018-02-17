class AddItemIdToBackpacks < ActiveRecord::Migration[5.1]
  def change
    add_column :backpacks, :item_id, :integer

  end
end
