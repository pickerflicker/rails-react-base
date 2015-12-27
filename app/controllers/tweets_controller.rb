class TweetsController < ApplicationController
  def index
    render json: Tweet.includes(:user).order(id: :desc).all
  end

  def create
    tweet = Tweet.create(user: current_user, body: params[:tweet])
    render json: tweet
  end
end
