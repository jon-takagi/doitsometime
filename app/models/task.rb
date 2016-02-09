class Task < ActiveRecord::Base
  before_save :assign_users
  enum status: [:not_started, :in_progress, :need_help, :finished]
  belongs_to :user
  belongs_to :project
  def self.status_attributes_for_select
    statuses.map do |status, _ |
      [I18n.t("activerecord.attributes.#{model_name.i18n_key}.statuses.#{status}"), status]
    end
  end
  def assign_users
    self.user_id = 1;
  end
end
