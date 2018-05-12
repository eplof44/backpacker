class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :edit, :update]

  def index
    @items = Item.all.where(user: current_user)

       respond_to do |format|
         format.html {render :index}
         format.json {render json: @items}
       end
     end

  def show
    @item = Item.find(params[:id])
     respond_to do |format|
       format.html { render :show }
       format.json { render json: @item}
     end
  end

  def new
    @item = Item.new
  end

  def create
    @item = Item.create(item_params)
     render json: @item, status: 201
    # @item = Item.new(item_params)
    # @item.user = current_user
    # if @item.save
    #   redirect_to item_path @item.id
    # else
    #   flash[:notice] = "The item couldn't be saved"
    #   render 'new'
    # end
  end

  def edit
  end

  def update
    if @item.update(item_params)
      @items = Item.all.where(user: current_user)

      redirect_to item_path(@item)
    else
      flash[:notice] = "The item couldn't be saved"

      render 'edit'
    end
  end

  def destroy
    @item = Item.find(params[:id]).destroy
    redirect_to users_url
  end


  private

  def set_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name, :item_weight, :value)
  end

end
