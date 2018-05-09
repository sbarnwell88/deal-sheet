class CreatePartners < ActiveRecord::Migration[5.1]
  def change
    create_table :partners do |t|
      t.string :name
      t.string :percent
      t.string :signature
      t.references :project, foreign_key: true

      t.timestamps
    end
  end
end
