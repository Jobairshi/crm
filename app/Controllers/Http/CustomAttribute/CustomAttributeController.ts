import CustomAttributeService from "./CustomAttributeService";
import CustomAttributeValidator from './CustomAttributeValidator';

export default class CustomAttributeController {
    private customAttributeService: CustomAttributeService;
    private customAttributeValidator: CustomAttributeValidator;
    constructor()
    {
        this.customAttributeService = new CustomAttributeService();
        this.customAttributeValidator = new CustomAttributeValidator();
    }
    public async getCustomAttributes() {
        return await this.customAttributeService.getCustomAttributes();
    }
    public async createCustomAttribute(data) {
        const payload = await this.customAttributeValidator.insertCustomAttributeValidator(data);
        return await this.customAttributeService.createCustomAttribute(payload);
    }
}