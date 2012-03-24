class UpdateEventWithRooms < ActiveRecord::Migration
  def self.up
    add_column("events","resource", :string)
  end

  def self.down
    remove_column("events","resource")
  end
end
