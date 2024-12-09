import StageQuery from "./StageQuery";

export default class StagesService {
    private stageQuery: StageQuery;
    constructor()
    {
        this.stageQuery = new StageQuery();
    }
    public async getStages(params) {
        return await this.stageQuery.getStages(params);
    }
    public async getPerStageClients(stage_id) {
        return await this.stageQuery.getPerStageClients(stage_id);
    }
    public async filterClient(status: string, source_id?: number, attributes?: Array<{ id: number, value: string }>) {
        return await this.stageQuery.filterClient(status, source_id, attributes);
    }
    public async getRevenue(params)
    {
        return await this.stageQuery.getRevenue(params)
    }
}