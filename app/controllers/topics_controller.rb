class TopicsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show] 

    # GET /topics
    def index
        topics = Topic.all.sort_by(&:updated_at)
        render json: topics
    end

    # GET /topics/1
    def show
        topic = Topic.find_by(id: params[:id])
        render json: topic, status: :ok
    end

    # POST /topics
    def create
        topic = @current_user.topics.create!(topic_params)
        render json: topic, status: :created
    end

    # PATCH/PUT /topics/1
    def update
        topic = Topic.find_by(id: params[:id])
        topic.update!(topic_params)
        render json: topic, status: :accepted
    end

    # DELETE /topics/1
    def destroy
        topic = Topic.find_by(id: params[:id])
        topic.destroy
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_topic
        topic = Topic.find_by(id: params[:id])
    end

    def topic_params
        params.permit(:title, :user_id, :category_id)
    end

end
