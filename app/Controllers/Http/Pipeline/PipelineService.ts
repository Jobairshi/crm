import PipelineQuery from "./PipelineQuery";

export default class PipelineService {
    private pipelineQuery: PipelineQuery;
    constructor()
    {
        this.pipelineQuery = new PipelineQuery();
    }
    public async getPipeline(params) {
        return await this.pipelineQuery.getPipeline(params);
    }
    public async createPipeline(data) {
        return await this.pipelineQuery.createPipeline(data);
    }
   
}