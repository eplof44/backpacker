class Trip < ApplicationRecord

belongs_to :user
has_many  :backpacks
has_many  :items, through: :backpacks



end
