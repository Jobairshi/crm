import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";

export default class ProductValidator {
  public async validateDelete(ctx: HttpContextContract) {
    const vSchema = schema.create({
      school_id: schema.number(),
      id: schema.number(),
    });

    return await ctx.request.validate({
      schema: vSchema,
      messages: {
        "school_id.required": "School id is required",
        "id.required": "Id is required",
        "school_id.number": "School id must be number",
        "id.number": "Id must be number",
      },
    });
  }
}