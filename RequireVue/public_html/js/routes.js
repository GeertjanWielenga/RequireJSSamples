define([
  './viewModels/dashboard',
  './viewModels/customers'
  ], function(dashboard, customers){
    return [
      {
        path:'/',
        component: dashboard
      },
      {
        path:'/customers',
        component: customers
      }
    ]
  });