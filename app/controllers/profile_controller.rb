class ProfileController < ApplicationController
  before_action :authenticate_user!

  def index
    @user = current_user
  end

  def update
    if current_user.update(user_params)
      redirect_to :back, notice: 'successfully update profile'
    else
      redirect_to :back, alert: 'error updating profile'
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name)
  end
end
