module Api
  module V1
    class PostsController < ApplicationController
      before_action :set_post, only: [:show, :update, :destroy]

      def index
        @posts = Post.all
        render json: @posts.to_json, :layout => false
      end

      def create
        @post = Post.create(post_params)
        render json: @post.to_json, :layout => false
      end

      def show
        render json: @post.to_json, :layout => false
      end

      def update
        @post.update(post_params)
        render json: @post.to_json, :layout => false;
      end

      def destroy
        @post.destroy
      end

      private

        def post_params
          params.require(:post).permit(:date, :context, :food, :workout, :weight, :likes)
        end

        def set_post
          @post = Post.find_by(id: params[:id])
        end

    end
  end
end
