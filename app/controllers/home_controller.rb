class HomeController < ApplicationController
  def show
    if current_user
      redirect_to(projects_path)
    end
  end
end
