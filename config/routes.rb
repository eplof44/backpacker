Rails.application.routes.draw do

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  root 'welcome#home'

  resources :items
  resources :backpacks
  resources :categories
  resources :trips
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


end
