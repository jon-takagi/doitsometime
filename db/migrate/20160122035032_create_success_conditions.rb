class CreateSuccessConditions < ActiveRecord::Migration
  def change
    create_table :success_conditions do |t|
      t.string :description
      t.boolean :completed?

      t.timestamps null: false
    end
  end
end
