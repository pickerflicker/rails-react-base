class Tweet < ActiveRecord::Base
  belongs_to :user

  def as_json(options={})
    super(methods: [:name])
  end

  def name
    user.display_name
  end

  def self.stream_for(user_id)
    joins(:user)
    .where(["users.id = :current_user OR users.id in (
      select user_id from followers
      where(followed_by = :current_user)
      )", {current_user: user_id}])
    .order(id: :desc)
  end
end
