import Route from '@ioc:Adonis/Core/Route';
Route.group(() => {
    Route.get(
        '/stages', 'StagesController.getStages');
    Route.get(
        '/stages/clients', 'StagesController.getPerStageClients');
    Route.post(
        '/stages/filter-clients', 'StagesController.filterClients');
    Route.get(
        '/stages/get-revenue', 'StagesController.getRevenue')
}).prefix('api')
.namespace('App/Controllers/Http/Stages');