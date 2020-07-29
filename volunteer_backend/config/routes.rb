Rails.application.routes.draw do
  resources :classifications
  resources :users
  resources :tasks

  post "/login", to: "auth#login"
  post "/logout", to: "auth#logout"
  get "/autologin", to: "auth#autologin"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
