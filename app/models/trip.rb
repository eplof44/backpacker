class Trip < ApplicationRecord

belongs_to :user, required: false
has_many  :backpacks
has_many  :items, through: :backpacks

validates :date, presence: true
validates :location, presence: true
validates :duration, numericality: true
validates :backpack_size, numericality: true
validates :camping_type, inclusion: { in: %w(hike drive) }
validates :weather, presence: true

accepts_nested_attributes_for :items, reject_if: proc {|attributes| attributes['name'].blank?}, allow_destroy: true

def items_attributes=(item_attributes)
  item_attributes.values.each do |item_attribute|
    if !item_attribute[:name].empty?
      new_item = Item.find_or_create_by(item_attribute)
      self.items << new_item
    end
  end
end


  def self.completed
    where("date <?", Date.current)
  end

  def self.upcoming
    where("date >?", Date.current)
  end



end
