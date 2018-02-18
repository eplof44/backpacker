class Trip < ApplicationRecord

belongs_to :user, required: false
has_many  :backpacks
has_many  :items, through: :backpacks

accepts_nested_attributes_for :items, reject_if: proc {|attributes| attributes['name'].blank?}, allow_destroy: true

def items_attributes=(item_attributes)
  item_attributes.values.each do |item_attribute|
    if !item_attribute.empty?
      new_item = Item.find_or_create_by(item_attribute)
      self.items << new_item
    end
  end
end


end
