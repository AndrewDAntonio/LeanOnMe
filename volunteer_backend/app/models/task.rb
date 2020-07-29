class Task < ApplicationRecord
    belongs_to :task_creator, class_name: "User"
    belongs_to :task_doer, class_name: "User", optional: true
    belongs_to :classification

    def statusUpdate
        oldStatus = self.status.to_i
        newStatus = (oldStatus + 1).to_s
        self.status = newStatus
    end

end