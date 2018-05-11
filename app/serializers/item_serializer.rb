class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :item_weight, :value
  has_many :trips
end
