class ItemsController < ApplicationController


  # def index
  #   @items = Items.sort_by_value_weight
  #   @items = Item.all
  # end

  def new
    @item = Item.new
  end



  def create
    @item = Item.create(item_params)
			redirect_to new_item_path(@item)
  end


  def show
  end

  def update
  end

  def destroy
  end

  private

  def before_item

  end

  def item_params
    params.require(:item).permit(:name, :item_weight, :value, :category_id)

  end

end
