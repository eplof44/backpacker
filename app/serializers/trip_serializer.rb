class TripSerializer < ActiveModel::Serializer
  attributes :id, :date, :location, :duration, :backpack_size, :camping_type, :weather, :completed
  belongs_to :user
  has_many :items
end
