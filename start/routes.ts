/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/


import Route from '@ioc:Adonis/Core/Route'
import 'App/Controllers/Http/School/school';
import 'App/Controllers/Http/Products/products';
import 'App/Controllers/Http/Client/Client';
import 'App/Controllers/Http/Stages/Stages';
import 'App/Controllers/Http/Pipeline/Pipeline';
import 'App/Controllers/Http/Source/Source';
import 'App/Controllers/Http/CustomAttribute/CustomAttribute'
Route.get("/", () => {
  return { message: "You have landed in empty ocean!!!!... ❤️" };
});
