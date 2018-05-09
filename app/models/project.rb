class Project < ApplicationRecord
  belongs_to :client
  has_many :partners, dependent: :destroy
end
