Rails.application.routes.draw do
  resources :messages
  resources :blogs

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
  get '/resume', to: redirect('/JuanCortes_Resume.pdf')

  # Defines the root path route ("/")
  # root "posts#index"
end
