class Item < ApplicationRecord

belongs_to :category
has_many  :backpacks
has_many  :trips, through: :backpacks


 def self.sort_by_value_weight
   items.sort_by{ |i| [t.item_weight, t.value] }  
 end


end
