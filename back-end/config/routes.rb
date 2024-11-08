Rails.application.routes.draw do
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  scope "stepper" do
    post "xss" => "stepper#xss"
    post "flag/:step" => "stepper#validate_flag"
    put "flag/:step/" => "stepper#validate_flag"
    get "noVasADeducirNadaConLaUrl" => "stepper#cookie_flag"
  end
end
