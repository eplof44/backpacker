class Trip < ApplicationRecord

belongs_to :user, required: false
has_many  :backpacks
has_many  :items, through: :backpacks

end
