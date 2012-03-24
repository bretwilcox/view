Calendar::Application.routes.draw do
  match "events/fishbowl", :to => "events#fishbowl"
  match "events/bricks", :to => "events#bricks"
  match "events/holodeck", :to => "events#holodeck"
  match "events/pod_bay", :to => "events#pod_bay"
  match "events/twenty_one_fifty", :to => "events#twenty_one_fifty"
  match "events/loft", :to => "events#loft"
  match "events/upstairs_whiteboard_1", :to => "events#upstairs_whiteboard_1"
  match "events/upstairs_whiteboard_2", :to => "events#upstairs_whiteboard_2"
  match "events/upstairs_whiteboard_3", :to => "events#upstairs_whiteboard_3"
  match "events/upstairs_whiteboard_4", :to => "events#upstairs_whiteboard_4"
  match "events/upstairs_whiteboard_5", :to => "events#upstairs_whiteboard_5"
  match "events/visitor_parking_space_3", :to => "events#visitor_parking_space_3"
  

  
  resources :events

  match "fishbowl", :to => "calendar#fishbowl"
  match "bricks", :to => "calendar#bricks"
  match "holodeck", :to => "calendar#holodeck"
  match "pod_bay", :to => "calendar#pod_bay"
  match "twenty_one_fifty", :to => "calendar#twenty_one_fifty"
  match "loft", :to => "calendar#loft"
  match "upstairs_whiteboard_1", :to => "calendar#upstairs_whiteboard_1"
  match "upstairs_whiteboard_2", :to => "calendar#upstairs_whiteboard_2"
  match "upstairs_whiteboard_3", :to => "calendar#upstairs_whiteboard_3"
  match "upstairs_whiteboard_4", :to => "calendar#upstairs_whiteboard_4"
  match "upstairs_whiteboard_5", :to => "calendar#upstairs_whiteboard_5"
  match "visitor_parking_space_3", :to => "calendar#visitor_parking_space_3"
  
  # get "calendar/index"

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action
  # match "events/fishbowl", :to => "events#fishbowl"

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => "welcome#index"

  root :to => "calendar#index"

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'
end
