class Api::ProjectsController < ApplicationController

    def index
        @client = Client.find(params[:client_id])
        @projects = @client.projects
        render json: @projects
    end

    def create 
        @project = Project.create!(project_params)

        render json: @project
    end

    def project_params
        params.require(:project).permit(:client_id, :project_name)
    end

end
