import ClientQuery from "./ClientQuery";

export default class ClientService {
    private clientQuery: ClientQuery;
    constructor()
    {
        this.clientQuery = new ClientQuery();
    }
    public async insertClient(data)
    {
        return await this.clientQuery.insertClient(data);
    }
    public async getClientById(client_id)
    {
        return await this.clientQuery.getClientById(client_id);
    }
    public async updateClient(data)
    {
        return await this.clientQuery.updateClient(data);
    }
}