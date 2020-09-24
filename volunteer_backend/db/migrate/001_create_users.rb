class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :state
      t.string :city
      t.string :profile_pic
      t.string :phone_number, :default

      t.timestamps
    end
  end
end
