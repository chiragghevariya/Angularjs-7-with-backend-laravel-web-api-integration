
1)
ng generate component navbar --spec false

2) removed package

 npm prune

3) generate module 

 ng generate module app-routing --spec false --flat

4) 

this.router.navigate(['/home']); Or
Router.navigate(['/home']);

5) create services

 ng g service services/information --spec

 6) third party package for nonblocking other request

 composer require barryvdh/laravel-cors
