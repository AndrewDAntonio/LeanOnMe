class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :state, :city, :profile_pic, :phone_number
end
