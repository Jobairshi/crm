import CustomAttribute from "App/Models/CustomAtribute";

export default class  CustomAttributeQuery {
    public async getCustomAttributes() {
       
        return await CustomAttribute.query().select('id','name','fieldType', 'options','default_value')
    }
    public async createCustomAttribute(data) {

        return await CustomAttribute.create(data);
    }

}