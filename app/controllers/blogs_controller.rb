class BlogsController < ApplicationController
  before_action :set_blog, only: [:show]

  def index
    @blogs = Blog.all
    render json: @blogs
  end

  def new
    @blog = Blog.new
  end

  def create
    @blog = Blog.new(blog_params)
    if @blog.save
      render json: { message: "success" }, status: :ok
    end
  end

  def show
    # Before actions is present
  end

  def update
    @blog.update(blog_params)
  end

  private

  def set_message
    @blog = Blog.find(params[:id])
  end

  def blog_params
    params.require(:blog).permit(:title, :content)
  end
end
