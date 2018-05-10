class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :item_weight, :value
  belongs_to :trip
end
