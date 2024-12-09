import Client from "App/Models/Client";

export default class ClientQuery {
  public async insertClient(data) {
    const client = await Client.create(data);
    return client;
  }
  public async getClientById(client_id: number) {
    const client = await Client.query()
      .where("id", client_id)
      .preload("stage", (qu) => {
        qu.select("id", "title");
      })
      .preload("source", (qu) => {
        qu.select("id", "title");
      })
      .preload("clientCustomAttributes", (qu) => {
        qu.select("id", "value");
      })
      .first();
    return client;
  }
  public async updateClient(data) {
    console.log(data);
    const client = await Client.findOrFail(data.id);
    client.merge(data);
    await client.save();
    return client;
  }
}
