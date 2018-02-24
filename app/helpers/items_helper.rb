module ItemsHelper

  def too_heavy?(item)
    Item.where("item_weight > 10")
  end
end
