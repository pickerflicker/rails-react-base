class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :tweets
  has_many :followers

  def as_json(options={})
    super.merge({name: display_name})
  end

  def display_name
    first_name.present? ? "#{first_name} #{last_name}" : email
  end

  def self.who_to_follow(user_id)
    where(["id != :user_id and not exists (
        select 1 from followers
        where user_id = users.id
        and followed_by = :user_id
      )", user_id: user_id])
    .order("random()").all
  end

end
