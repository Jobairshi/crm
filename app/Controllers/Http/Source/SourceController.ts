import SourceService from "./SourceService";

export default class SourceController {
  private sourceService: SourceService;
  constructor() {
    this.sourceService = new SourceService();
  }
  public async getSources({ request }) {
    const params = request.all();
    return await this.sourceService.getSources(params);
  }
  public async createSource({ request }) {
    const data = request.all();
    return await this.sourceService.createSource(data);
  }
  public async updateSource({ request }) {
    const data = request.all();
    return await this.sourceService.updateSource(data);
  }
}
