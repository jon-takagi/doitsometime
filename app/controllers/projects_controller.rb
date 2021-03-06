class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]
  before_filter :define_user_projects
  # GET /projects
  # GET /projects.json
  def index
  end

  # GET /projects/1
  # GET /projects/1.json
  def show
  end

  # GET /projects/new
  def new
    @project = Project.new
    @project.tasks.build
    @project.success_conditions.build
  end

  # GET /projects/1/edit
  def edit
  end

  # POST /projects
  # POST /projects.json
  def create
    @project = Project.new(project_params)
    handle_tasks
    respond_to do |format|
      if @project.save
        format.html { redirect_to @project, notice: 'Project was successfully created.' }
        format.json { render :show, status: :created, location: @project }
      else
        format.html { render :new }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /projects/1
  # PATCH/PUT /projects/1.json
  def update
    handle_tasks
    respond_to do |format|
      if @project.update(project_params)
        format.html { redirect_to @project, notice: 'Project was successfully updated.' }
        format.json { render :show, status: :ok, location: @project }
      else
        format.html { render :edit }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  def handle_tasks
    user_ids = ""
    for task in @project.tasks
      if User.where(:email => task.email).first.nil?
        @project.errors.add(:email, "User not found")
      else
        task.user_id = User.where(:email => task.email).first.id
      end
      user_ids += task.user_id.to_s + ", "
    end
    puts user_ids
  end
  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
    @project.destroy
    respond_to do |format|
      format.html { redirect_to projects_url, notice: 'Project was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
  def define_user_projects
    admins = File.read("app/assets/admins.txt")
    if admins.include? current_user.email
      @isAdmin = true
      @projects = Project.all
    else
      @isAdmin = false
      allowed_tasks = Task.includes(:project).where(:user_id => current_user)
      project_ids = ""
      for allowed_task in allowed_tasks
        project_ids += allowed_task.project_id.to_s + ","
      end
      project_ids = project_ids[0..project_ids.length - 2]
      project_ids = project_ids.split(",")
      @projects = Project.find(project_ids)
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_project
    @project = Project.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def project_params
    params.require(:project).permit(:name, :id, :success_conditions_attributes => [:id, :project_id, :description, :completed?, :_destroy], :tasks_attributes => [:id, :description, :status, :project_id, :email, :_destroy])
  end
end
