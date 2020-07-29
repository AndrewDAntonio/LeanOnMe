class UsersController < ApplicationController

    def index
        users = User.all 
        render json: users
    end

    def create
        user = User.create(username: params[:username], password: params[:password], state: params[:state], city: params[:city])
        session[:user_id] = user.id

        render json: user
    end

end
