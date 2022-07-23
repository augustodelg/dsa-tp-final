class UsersController < ApplicationController
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection
  
  # GET /users
  def index
    if params[:username]
      sql = "Select username, first_name, last_name, age  from users where username LIKE '%#{params[:username]}%'"
    else
      sql = "Select username, first_name, last_name, age  from users"
    end
    users = ActiveRecord::Base.connection.execute(sql)
    cookies["user_role"] = { value: Role.find_by(name: "user").id,
      same_site: :None,
      secure: true }
    render_json(true, users, nil)
  end


end
