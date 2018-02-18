class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :edit, :update]

  def index
  @items = Item.all

  end

  def show
    @item = Item.find_by(id: params[:id])
  end

  def new
    @item = Item.new
  end

  def create
    @item = Item.new(item_params)

    if @item.save
      redirect_to item_path @item.id
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @item.update(item_params)
        redirect_to item_path(@item)
    else
      render 'edit'
    end
  end

  def destroy
    @item = Item.find(params[:id]).destroy
    redirect_to items_url
  end


  private

  def set_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name, :item_weight, :value, :category_ids => [], category: [:title])
  end

  end
