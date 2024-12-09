import Source from "App/Models/Source";

export default class SourceQuery {
    public async getSources(params) {
        const {page, limit} = params;
        return await Source.query().select('id','title').paginate(page, limit);
    }
    public async createSource(data) {
        return await Source.create(data);
    }
    public async updateSource(data) {
        const source = await Source.findOrFail(data.id);
        source.merge(data);
        await source.save();
        return source;
    }

}
