import StagesService from "./StagesService";
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import StageValidator from "./StageValidator";

export default class StagesController {
    private stagesService: StagesService;
    private stageValidator: StageValidator;
    constructor()
    {
        this.stagesService = new StagesService();
        this.stageValidator = new StageValidator();
    }
    

    public async getStages(ctx: HttpContextContract) {
        const params =  await this.stageValidator.getStageValidator(ctx);
        console.log(params);
        return await this.stagesService.getStages(params);
    }
    public async getPerStageClients(ctx: HttpContextContract) {
        const stage_id = ctx.request.all().stage_id;
        return await this.stagesService.getPerStageClients(stage_id);
    }
    public async filterClients(ctx: HttpContextContract) {
        const {status, source_id, attributes} = ctx.request.all();
        return await this.stagesService.filterClient(status, source_id, attributes);
    }
    public async getRevenue(ctx: HttpContextContract)
    {
        const params = ctx.request.all();
        return await this.stagesService.getRevenue(params);
    }
}