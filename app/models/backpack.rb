class Backpack < ApplicationRecord

belongs_to  :trip, required: false
belongs_to  :item, required: false

def add_item(item)
   backpack = self.backpack.find_by(item_id: item)
   if backpack
     backpack.quantity +=1
     backpack.save
   else
     redirect_to item_path(@item)
   end
   backpack
 end
end
