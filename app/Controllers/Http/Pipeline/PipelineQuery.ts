import Pipeline from "App/Models/Pipeline";


export default class PipelineQuery {
    public async getPipeline(params) {
        // console.log(params);
        const {page, limit} = params;
        return await Pipeline.query().select('id','title','client_count','created_at', 'updated_at').withCount('stages').paginate(page, limit);
    }
    public async createPipeline(data) {
        return await Pipeline.create(data);
    }
    
    
}