class Item < ApplicationRecord

belongs_to :category, required: false
belongs_to :backpack, required: false
has_many  :trips, through: :backpacks

validates :name, presence: true
validates :name, uniqueness: true
validates :item_weight, numericality: true
validates :value, inclusion: { in: 1..5 }


def too_heavy
  if item.item_weight = 10 && item.value <=3
    return 'you might want to remove this item. seems heavy'
end
end

end
