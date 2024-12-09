import Route from '@ioc:Adonis/Core/Route';
Route.group(()=>{
    Route.post(
        '/create-client', 'ClientController.createClient');
    Route.get(
        '/get-client', 'ClientController.getClientById');
    Route.post(
        '/update-client', 'ClientController.updateClient');


}).prefix('api')
.namespace('App/Controllers/Http/Client');