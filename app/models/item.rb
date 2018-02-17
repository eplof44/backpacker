class Item < ApplicationRecord

belongs_to :category
has_many  :backpacks
has_many  :trips, through: :backpacks

end
