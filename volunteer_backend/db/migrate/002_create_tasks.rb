class CreateTasks < ActiveRecord::Migration[6.0]
    def change
      create_table :tasks do |t|
        t.string :description
        t.integer :task_creator_id
        t.integer :task_doer_id
        t.integer :classification_id
        t.string :state
        t.string :city
        t.integer :status, default: 1
  
        t.timestamps
      end
    end
  end