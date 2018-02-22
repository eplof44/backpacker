class Item < ApplicationRecord

belongs_to :category, required: false
belongs_to :backpack, required: false
has_many  :trips, through: :backpacks

validates :name, presence: true
validates :name, uniqueness: true
validates :item_weight, numericality: true
validates :value, inclusion: { in: 1..5 }


 # def self.sort_by_value_weight
 #   items.sort_by{ |i| [t.item_weight, t.value] }
 # end


end
