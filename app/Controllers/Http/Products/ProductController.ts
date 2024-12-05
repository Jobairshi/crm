import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import ProductValidator from "./ProductValidator";
import ProductService from "./ProductService";


export default class ProductController {
  private productService: ProductService;
  private productValidator : ProductValidator

  constructor() {
    this.productService = new ProductService();
    this.productValidator = new ProductValidator();
  }

  public async getAllProductAccordingToSchool(ctx: HttpContextContract) {
   
    return await this.productService.getAllProductAccordingToSchool(
      ctx.params.schoolId, 
    );
  }
  public async deleteAccordingToSchool(ctx: HttpContextContract) {
    ctx.request.all().id = ctx.params.id;
    const payload = await this.productValidator.validateDelete(ctx);
    return await this.productService.deleteAccordingToSchool(payload);
  }
}
