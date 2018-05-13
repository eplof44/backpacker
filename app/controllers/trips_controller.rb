class TripsController < ApplicationController
  before_action :set_trip, only: [:show, :edit, :update]

def index
  @trips = Trip.all.where(user: current_user)
  respond_to do |format|
    format.html { render :index }
    format.json {render json: @trips }
  end
end

  def show
    @trip = Trip.find(params[:id])
     respond_to do |format|
       format.html { render :show }
       format.json { render json: @trip }
       format.json { render json: @items }

     end
 end

  def new
    @trip = Trip.new
  end

  def create
    @trip = Trip.new(trip_params)
    @trip.user = current_user
    if @trip.save
      redirect_to trip_path @trip.id
    else
      flash[:notice] = "The trip couldn't be saved"
      render 'new'
    end
  end


  def edit
  end

  def update
    if @trip.update(trip_params)
      redirect_to trip_path(@trip)
    else
      flash[:notice] = "The trip couldn't be saved"
      render 'edit'
    end
  end

  def destroy
    @trip = Trip.find(params[:id]).destroy
    redirect_to users_url
  end


  private

  def set_trip
    @trip = Trip.find(params[:id])
  end

  def trip_params
    params.require(:trip).permit(:date, :location, :duration, :backpack_size, :camping_type, :weather, :item_ids => [], items_attributes: [:user_id, :name, :item_weight, :value])
  end

end
