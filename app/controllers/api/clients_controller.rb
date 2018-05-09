class Api::ClientsController < ApplicationController
    def index
        @clients = Client.all
        render json: @clients
    end

    def create
        @client = Client.create!(client_params)
        # redirect_to client_path(@client)
    end

    def show
        @client = Client.find(params[:id])
        render json: @client
    end

    def update
        @client = Client.find(params[:id])
        @client.update!(client_params)
        # redirect_to client_path(@client)
    end

    def destroy
        @client = Client.find(params[:id])
        @client.destroy
        # redirect_to client_path
    end

    private
    
    def client_params
        params.require(:client).permit(:name, :id)
    end
end
