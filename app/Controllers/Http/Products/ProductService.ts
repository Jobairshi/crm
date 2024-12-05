import ProductQuery from "./ProductQuery";



export default class ProductService {
  private productQuery: ProductQuery;

  constructor() {
    this.productQuery = new ProductQuery();
  }

  public async getAllProductAccordingToSchool(school_id) {
    return await this.productQuery.getAllProductAccordingToSchoolQuery(school_id);
  }

  public async deleteAccordingToSchool(data){
    return this.productQuery.deleteAccordingToSchool(data)
  }
}
