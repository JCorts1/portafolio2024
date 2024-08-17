class MessagesController < ApplicationController
  before_action :set_message, only: [:show]

  def index
    @messages = Message.all
    render json: @messages
  end

  def new
    @message = Message.new
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      render json: { message: "success" }, status: :ok
    end
  end

  def show
    # Before actions is present
  end

  def update
    @message.update(message_params)
  end

  private

  def set_message
    @message = Message.find(params[:id])
  end

  def message_params
    params.require(:message).permit(:name, :email, :content)
  end
end
