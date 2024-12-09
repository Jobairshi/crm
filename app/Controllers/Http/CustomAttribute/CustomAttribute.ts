import Route from '@ioc:Adonis/Core/Route';
Route.group(() => {
    Route.get(
        '/get-attribute', 'CustomAttributeController.getCustomAttributes');
    Route.post(
        '/create-attribute', 'CustomAttributeController.createCustomAttribute');
        
}).prefix('api')
.namespace('App/Controllers/Http/CustomAttribute');