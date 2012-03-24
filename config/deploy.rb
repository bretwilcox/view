#---
# Excerpted from "Deploying Rails",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material, 
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose. 
# Visit http://www.pragmaticprogrammer.com/titles/cbdepra for more book information.
#---
require 'bundler/capistrano'
set :application, "view"
set :scm, :git
set :repository, "git://github.com/deployingrails/massiveapp.git"
server "localhost", :app, :db, :primary => true
ssh_options[:port] = 2222
ssh_options[:keys] = "/Users/bret/Dropbox/ssh"
set :user, "vagrant"
set :group, "vagrant"
set :deploy_to, "/var/view"
set :use_sudo, false
set :deploy_via, :copy
set :copy_strategy, :export
namespace :deploy do
  task :start do ; end
  task :stop do ; end
  desc "Restart the application"
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
  end
end