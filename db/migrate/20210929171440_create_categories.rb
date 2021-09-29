class CreateCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :categories do |t|
      t.string :subject
      t.string :picture

      t.timestamps
    end
  end
end
