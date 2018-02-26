class Item < ApplicationRecord


belongs_to :backpack, required: false
has_many  :trips, through: :backpacks
belongs_to :user, required: false

validates :name, presence: true
validates :item_weight, numericality: true
validates :value, inclusion: { in: 1..5 }

def self.too_heavy?
  Item.where("item_weight > 10 AND value < 3")
end

end
