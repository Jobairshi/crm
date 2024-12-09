import Route from '@ioc:Adonis/Core/Route';
Route.group(() => {
    Route.get(
        '/get-pipeline', 'PipelineController.getPipeline');
    Route.post(
        '/create-pipeline', 'PipelineController.createPipeline');
        
}).prefix('api')
.namespace('App/Controllers/Http/Pipeline');