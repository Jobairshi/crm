import ClientService from "./ClientService";
import ClientValidator from "./ClientValdator";
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class ClientController {
    
    private clientService: ClientService;
    private clientValidator: ClientValidator;

    constructor()
    {
        this.clientService = new ClientService();
        this.clientValidator = new ClientValidator();
    }   
    public async createClient(ctx:HttpContextContract)
    {
        const payload = await this.clientValidator.insertClientValidator(ctx);
        await this.clientService.insertClient(payload);
        return {
            message: 'Client created Successfully'
        }
    }
    public async getClientById(ctx:HttpContextContract)
    {
        const client_id = ctx.request.all().client_id;
        return await this.clientService.getClientById(client_id);
    }
    public async updateClient(ctx:HttpContextContract)
    {
        const payload = await this.clientValidator.updateClientValidator(ctx);
        // console.log(payload);
        await this.clientService.updateClient(payload);
        return {
            message: 'Client updated Successfully'
        }
    }

}
