import Route from '@ioc:Adonis/Core/Route';
Route.group(() => {
    Route.get(
        '/source', 'SourceController.getSources');
    Route.post(
        '/create-source', 'SourceController.createSource');
    Route.post(
        '/update-source', 'SourceController.updateSource');
}
).prefix('api')
.namespace('App/Controllers/Http/Source');