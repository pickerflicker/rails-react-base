class TweetsController < ApplicationController
  def index
    render json: Tweet.stream_for(current_user.id)
  end

  def create
    tweet = Tweet.create(user: current_user, body: params[:body])
    render json: tweet
  end
end
