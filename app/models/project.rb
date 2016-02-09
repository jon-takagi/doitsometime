class Project < ActiveRecord::Base
  has_many :tasks, :dependent => :destroy
  has_many :success_conditions, :dependent => :destroy
  has_many :users, through: :tasks
  accepts_nested_attributes_for :success_conditions, :allow_destroy => true
  accepts_nested_attributes_for :tasks, :allow_destroy => true
end
