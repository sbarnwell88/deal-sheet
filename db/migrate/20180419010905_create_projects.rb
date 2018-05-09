class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :project_name
      t.string :start_date
      t.string :completion_date
      t.string :gross_fee
      t.references :client, foreign_key: true

      t.timestamps
    end
  end
end
