class Api::V1::PostsController < ApplicationController
    before_action :set_post, only: [:show, :edit, :update, :destroy]

    def index
        @posts = Post.all.order("updated_at DESC")

        render json: @posts
    end

    def show
    end

    def create
        @post = Post.create(post_params)

        render json: @post
    end

    def edit
    end

    def update
        @post.update(post_params)

        if @post.save 
            render json: @post
        else 
            render json: @topic.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @post.destroy

        head :no_content
    end

    private

    def set_post
        @post = Post.find(params[:id])
    end

    def post_params
        params.require(:post).permit(:topic_id, :content)
    end
end