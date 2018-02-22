class BackpacksController < ApplicationController

def index
  @items = Trip.where(user: current_user)
end

end
