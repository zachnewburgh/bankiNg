Rails.application.routes.draw do  
  get 'home/index'

  resources :home, only: [:index]
  root 'home#index'  
end  