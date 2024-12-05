import PhysicalProduct from "App/Models/PhysicalProduct";

export default class ProductQuery {
  public async getAllProductAccordingToSchoolQuery(school_id) {
    // product_name,price
    return await PhysicalProduct.query().where("school_id", school_id);
  }

  public async deleteAccordingToSchool(data) {
    return await PhysicalProduct.query()
      .where("school_id", data.school_id)
      .where("id", data.id)
      .delete()
  }
}
