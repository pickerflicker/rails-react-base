class FollowersController < ApplicationController
  def random
    render json: User.who_to_follow(current_user.id)
  end

  def create
    follower = Follower.create(followed_by: current_user.id, user_id: params[:user_id])
    render json: follower
  end

end
