import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import SchoolService from "./SchoolService";
import SchoolValidator from "./SchoolValidator";

export default class SchoolController {
  private schoolService: SchoolService;
  private schoolValidator: SchoolValidator;
  constructor() {
    this.schoolService = new SchoolService();
    this.schoolValidator = new SchoolValidator();
  }

  public async createSchoolController(ctx: HttpContextContract) {
    const payload = await this.schoolValidator.validateCreateSiteSchema(ctx);
     await this.schoolService.createSchool(payload);
     return{
      message: 'School created Successfully'
     }
  }

  public async updateSchoolController(ctx:HttpContextContract){
    const payload = await this.schoolValidator.validateUpdateSiteSchema(ctx);
     await this.schoolService.updateSchool(ctx.params.schoolId,payload)
     return{
      message: 'School updated Successfully'
     }
  }

  public async getAllSchool(){
    return await this.schoolService.getAllSchool()
  }
  public async getSchoolBySchoolId(ctx:HttpContextContract){
    return await this.schoolService.getSchoolBySchoolId(ctx.params.schoolId)
  }
  public async getSchoolByIdOrName(ctx:HttpContextContract){
    return await this.schoolService.getSchoolByIdOrName(ctx.params.schoolIdOrName)
  }

  public async deleteASchool(ctx: HttpContextContract){
     await this.schoolService.deleteASchool(ctx.params.schoolId);
     return{
      message: 'School deleted Successfully'
     }
  }

}
