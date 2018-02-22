class WelcomeController < ActionController::Base

  def home
    render :layout => 'homepage'
  end

end
