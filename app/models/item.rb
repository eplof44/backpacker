class Item < ApplicationRecord

belongs_to :category
has_many  :backpacks
has_many  :trips, through: :backpacks


 def self.sort_by_value
   joins(:backpack).order("items.value")
 end


end
