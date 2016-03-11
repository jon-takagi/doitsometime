Rails.application.routes.draw do
  #The site is oriented around Projects
  resources :projects do
    get "delete"
    get "add_tasks"
  end

  #These pages are necessary to sign in with Google account info
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'

  #This route allows users to sign out
  resources :sessions, only: [:create, :destroy]
  #This route prevents users from entering the site without signing in
  resource :home, only: [:show]
  #This route sets the home page
  root to: "home#show"
end
