# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Project.delete_all
SuccessCondition.delete_all
Task.delete_all
Project.create(:name => 'Memes')
SuccessCondition.create(:description => 'is dank', :completed? => 0, :project_id => Project.where(:name => 'Memes'))
Task.create!(:description => 'learn HIS NAME', :status => 0, :project_id => Project.where(:name => 'Memes').first.id, :user_id => User.where(:name => 'Jonathan TAKAGI').first.id)
Task.create!(:description => 'give monkey anxiety', :status => 0, :project_id => Project.where(:name => 'Memes').first.id, :user_id => User.where(:name => 'Jonathan TAKAGI').first.id)

Project.create(:name => 'STAR WARS')
SuccessCondition.create!(:description => 'blow up death ball', :completed? => 0, :project_id => Project.where(:name => 'STAR WARS'))
Task.create!(:description => 'pew pew pew', :status => 0, :project_id => Project.where(:name => 'STAR WARS').first.id, :user_id => User.where(:name => 'Jonathan TAKAGI').first.id)
Task.create!(:description => 'swoosh swoosh swoosh', :status => 0, :project_id => Project.where(:name => 'STAR WARS').first.id, :user_id => User.where(:name => 'Jack Kinghoff').first.id)
