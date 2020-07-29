class TaskSerializer < ActiveModel::Serializer
  attributes :id, :description, :state, :city, :status
  belongs_to :task_creator, class_name: "User"
  belongs_to :task_doer, class_name: "User", optional: true
  belongs_to :classification
end
