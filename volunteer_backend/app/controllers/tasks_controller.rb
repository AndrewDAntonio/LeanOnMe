class TasksController < ApplicationController

    def index
        tasks = Task.all 

        render json: tasks
    end

    def create
        
        task_creator = User.find_by(id: session[:user_id])
        classification = Classification.find_by(id: params[:classification_id])
        task = Task.create(

            description: params[:description],
            task_creator_id: task_creator.id,
            classification_id: classification.id,
            state: params[:state],
            city: params[:city]


        )

        render json: task
    end

    def show

        task = Task.find_by(id: params[:id])

        render json: task
    end

    def update
        
        message = 'Your task has been updated'
        task = Task.find_by(id: params[:id])
        current_user = User.find_by(id: session[:user_id])
        
        if task.task_doer_id == nil
            task.update(task_doer_id: current_user.id, status: task.statusUpdate)
            notify(message)
            
        else
            task.update(status: task.statusUpdate)
            notify(message)
        end

        render json: task
    end

    private

    def notify(message)
        MessageSender.send_message('+15163985669', message)
    end

end
