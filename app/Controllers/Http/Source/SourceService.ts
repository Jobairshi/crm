import SourceQuery from "./SourceQuery";

export default class SourceService {
    private sourceQuery: SourceQuery;
    constructor()
    {
        this.sourceQuery = new SourceQuery();
    }
    public async getSources(params) {
        return await this.sourceQuery.getSources(params);
    }
    public async createSource(data) {
        return await this.sourceQuery.createSource(data);
    }
    public async updateSource(data) {
        return await this.sourceQuery.updateSource(data);
    }
}