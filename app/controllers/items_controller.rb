class ItemsController < ApplicationController


  def new
    @item = Item.new
  end



  def create
    @item = Item.create(item_params)

      if @item.save
			redirect_to item_path(@item)

		else
			flash[:notice] = "The item couldn't be saved"
			redirect_to new_item_path(@item)
		end
	end



  def show
    @items = Item.find_by(params[:id])

  end

  def update
    @item = Item.find_by_id(params[:id])

  end

  def destroy
  end

  private

  def item_params
    params.require(:item).permit(:name, :item_weight, :value, :category_id)

  end

end
