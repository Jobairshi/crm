import Client from "App/Models/Client";
import Stage from "App/Models/Stage";

export default class StageQuery {
  public async getStages(params) {
    console.log(params);
    const { pipeline_id, page, limit } = params;
    return await Stage.query()
      .select("id", "title")
      .where("pipeline_id", pipeline_id)
      .paginate(page, limit);
  }
  public async getPerStageClients(stage_id) {
    const stage = await Stage.query()
      .where("id", stage_id)
      .preload("clients", (qu) => {
        qu.select("id", "name", "email", "created_at")
          .withCount("comments")
          .withCount("notes");
      });
    return stage;
  }
  public async filterClient(
    status?: string,
    source_id?: number,
    attributes?: Array<{ id: number; value: string }>
  ) {
    const query = Client.query();
    if (status !== undefined) {
      console.log("status", status);
      query.where("status", status);
    }

    if (source_id !== undefined) {
      query.andWhere("source_id", source_id);
    }

    if (attributes && attributes.length > 0) {
      query.whereHas("clientCustomAttributes", (qu) => {
        attributes.forEach((attribute) => {
          qu.orWhere("id", attribute.id).andWhere("value", attribute.value);
        });
      });
    }

    query
      .select("id", "name", "email", "created_at")
      .withCount("comments")
      .withCount("notes");
    const clients = await query;
    return clients;
  }
  public async getRevenue(params) {
    const { pipeline_id } = params;
    return await Stage.query()
      .where("pipeline_id", pipeline_id)
      .preload("clients", (clientQuery) => {
        clientQuery
          .select("status")
          .sum("expected_amount as total_expected_amount")
          .groupBy("status");
      });
  }
}
