import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CustomAttributeValidator {
  public async insertCustomAttributeValidator(ctx: HttpContextContract) {
    const customAttributeSchema = schema.create({
      name: schema.string({}, [
        rules.required(),
        rules.maxLength(255),
      ]),
      fieldType: schema.enum([
        'text', 'number', 'single_select', 'multi_select', 'radio', 'checkbox', 'textarea'
      ] as const, [
        rules.required(),
      ]),
      options: schema.string.optional({}, [
        rules.required(),
      ]),
      default_value: schema.string.optional({}, [
        rules.required(),
      ]),
      description: schema.string.optional({}, [
        rules.maxLength(255),
      ]),
      userId: schema.number([
        rules.required(),
        rules.exists({ table: 'users', column: 'id' }),
      ]),
      schoolId: schema.number([
        rules.required(),
        rules.exists({ table: 'schools', column: 'id' }),
      ]),
    });

    return await ctx.request.validate({
      schema: customAttributeSchema,
      messages: {
        "name.required": "Name is required",
        "name.maxLength": "Name must be at most 255 characters long",
        "fieldType.required": "Field type is required",
        "fieldType.enum": "Field type must be one of 'text', 'number', 'single_select', 'multi_select', 'radio', 'checkbox', 'textarea'",
        "description.maxLength": "Description must be at most 255 characters long",
        "userId.required": "User ID is required",
        "userId.exists": "User ID does not exist",
        "schoolId.required": "School ID is required",
        "schoolId.exists": "School ID does not exist",
      },
    });
  }
}