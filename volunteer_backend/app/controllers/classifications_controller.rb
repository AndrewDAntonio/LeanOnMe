class ClassificationsController < ApplicationController

    def index
        classifications = Classification.all 
        render json: classifications
    end

end
