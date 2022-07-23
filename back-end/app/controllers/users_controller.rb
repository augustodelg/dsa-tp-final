class UsersController < ApplicationController
  # GET /users
  def index
    if params[:username]
      sql = "Select username, first_name, last_name, age  from users where username = '#{params[:username]}'"
    else
      sql = "Select username, first_name, last_name, age  from users"
    end
    users = ActiveRecord::Base.connection.execute(sql)
    render json: users
  end


  private
    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username)
    end
end
