class Api::V1::TopicsController < ApplicationController
  before_action :set_topic, only: %i[ show edit update destroy ]

  # GET /topics or /topics.json
  def index
    @topics = Topic.all

    render json: @topics, status: 200
  end

  # GET /topics/1 or /topics/1.json
  def show
  end

  # GET /topics/new
  def new
    @topic = Topic.new
  end

  # GET /topics/1/edit
  def edit
  end

  # POST /topics or /topics.json
  def create
    @topic = Topic.new(topic_params)

      if @topic.save
        render json: @topic
      else
        render json: { errors:@topic.errors.full_messages.join(" ") }
      end
  end

  # PATCH/PUT /topics/1 or /topics/1.json
  def update
      if @topic.update(topic_params)
        render json: @topic
      else
        render json: @topic.errors, status: :unprocessable_entity
      end
    end
  end

  # DELETE /topics/1 or /topics/1.json
  def destroy
    @topic.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_topic
      @topic = Topic.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def topic_params
      params.require(:topic).permit(:description, :body)
    end
end
