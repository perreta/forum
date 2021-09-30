class CategoriesController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]

    # GET /categories
    def index
        categories = Category.all
        render json: categories
    end

    # GET /categories/1
    def show
        category = Category.find_by(id: params[:id])
        render json: category, status: :ok  
    end

    # POST /categories
    def create
        category = Category.create!(category_params)
        render json: category, status: :created
    end

    # DELETE /categories/1
    def destroy
        category = Category.find_by(id: params[:id])
        category.destroy
    end

    private

    def set_category
        category = Category.find_by(id: params[:id])
    end

    def category_params
        params.permit(:subject, :picture)
    end
end
