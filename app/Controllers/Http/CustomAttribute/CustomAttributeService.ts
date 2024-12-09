import CustomAttributeQuery from "./CustomAttributeQuery";

export default class CustomAttributeService {
    private customAttributeQuery: CustomAttributeQuery;
    constructor()
    {
        this.customAttributeQuery = new CustomAttributeQuery();
    }
    public async getCustomAttributes() {
        return await this.customAttributeQuery.getCustomAttributes();
    }
    public async createCustomAttribute(data) {
        return await this.customAttributeQuery.createCustomAttribute(data);
    }
}