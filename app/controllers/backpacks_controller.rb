class BackpacksController < ApplicationController


  def create
    item = Item.find(params[:item_id])
    backpack = current_user.current_trip || current_user.backpack.create
    backpack.add_item(item.id)
    if backpack.save
      redirect_to backpack_path(backpack)
    else
      redirect_to item_path
    end
  end

  def index
  end

  def show
    @backpack = Backpacj.find_by(id: params[:id])

  end

  def backpack_params
    params.require(:backpack)
  end

end
