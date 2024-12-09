import PipelineService from "./PipelineService";
import PipelineValidator from "./PipelineValidator";
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class PipelineController {
    private pipelineService: PipelineService;
    private pipelineValidator: PipelineValidator;
    constructor()
    {
        this.pipelineService = new PipelineService();
        this.pipelineValidator = new PipelineValidator();
    }
    public async getPipeline({request, response}) {
        const {page, limit} = request.all();
        const pipeline = await this.pipelineService.getPipeline({page, limit});
        return response.json(pipeline);
    }
    public async createPipeline(ctx:HttpContextContract) {
        const data = await this.pipelineValidator.createPipelineValidator(ctx);

        return await this.pipelineService.createPipeline(data);
    }
}