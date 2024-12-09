import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { rules, schema } from "@ioc:Adonis/Core/Validator";

export default class ClientValidator {
  public async insertClientValidator(ctx: HttpContextContract) {
    const Userschema = schema.create({
      name: schema.string({}, [rules.required(), rules.maxLength(255)]),
      email: schema.string({}, [rules.required(), rules.email()]),
      siteUrl: schema.string.optional({}, [rules.url()]),
      siteUrlOptional: schema.string.optional({}, [rules.url()]),
      crispChatUrl: schema.string.optional({}, [rules.url()]),
      sourceId: schema.number([
        rules.required(),
        rules.exists({ table: "sources", column: "id" }),
      ]),
      stageId: schema.number([
        rules.required(),
        rules.exists({ table: "stages", column: "id" }),
      ]),
      schoolId: schema.number([rules.required()]),
      userId: schema.number([
        rules.required(),
        rules.exists({ table: "users", column: "id" }),
      ]),
      status: schema.enum(["Expected", "Won", "Lost"] as const),
      statusReason: schema.string.optional({}, [rules.maxLength(255)]),
      expectedAmount: schema.number.optional(),
      isReminder: schema.boolean.optional(),
      reminderTime: schema.date.optional(),
      customAttributes: schema.array.optional().members(
        schema.object().members({
          attributeId: schema.number([
            rules.required(),
            rules.exists({ table: "custom_attributes", column: "id" }),
          ]),
          value: schema.string({}, [rules.required()]),
        })
      ),
    });

    return await ctx.request.validate({
      schema: Userschema,
      messages: {
        "name.required": "Name is required",
        "name.maxLength": "Name must be at most 255 characters long",
        "email.required": "Email is required",
        "email.email": "Invalid email address",
        "siteUrl.url": "Invalid site URL",
        "siteUrlOptional.url": "Invalid optional site URL",
        "crispChatUrl.url": "Invalid Crisp chat URL",
        "sourceId.required": "Source ID is required",
        "sourceId.exists": "Source ID does not exist",
        "stageId.required": "Stage ID is required",
        "stageId.exists": "Stage ID does not exist",
        "schoolId.required": "School ID is required",
        "userId.required": "User ID is required",
        "userId.exists": "User ID does not exist",
        "status.enum": "Status must be either Expected, Won, or Lost",
        "statusReason.maxLength":
          "Status reason must be at most 255 characters long",
        "expectedAmount.number": "Expected amount must be a number",
        "isReminder.boolean": "Is reminder must be a boolean",
        "reminderTime.date": "Reminder time must be a valid date",
        "customAttributes.*.attributeId.required": "Attribute ID is required",
        "customAttributes.*.attributeId.exists": "Attribute ID does not exist",
        "customAttributes.*.value.required": "Value is required",
      },
    });
  }
  public async updateClientValidator(ctx: HttpContextContract) {
    const Userschema = schema.create({
      id: schema.number([rules.exists({ table: "clients", column: "id" })]),
      name: schema.string.optional({}, [rules.maxLength(255)]),
      email: schema.string.optional({}, [rules.email()]),
      siteUrl: schema.string.optional({}, [rules.url()]),
      siteUrlOptional: schema.string.optional({}, [rules.url()]),
      crispChatUrl: schema.string.optional({}, [rules.url()]),
      sourceId: schema.number.optional([
        rules.exists({ table: "sources", column: "id" }),
      ]),
      stageId: schema.number.optional([
        rules.exists({ table: "stages", column: "id" }),
      ]),
      schoolId: schema.number.optional(),
      userId: schema.number.optional([
        rules.exists({ table: "users", column: "id" }),
      ]),
      status: schema.enum.optional(["Expected", "Won", "Lost"] as const),
      statusReason: schema.string.optional({}, [rules.maxLength(255)]),
      expectedAmount: schema.number.optional(),
      isReminder: schema.boolean.optional(),
      reminderTime: schema.date.optional(),
    });

    return await ctx.request.validate({
      schema: Userschema,
      messages: {
        "name.maxLength": "Name must be at most 255 characters long",
        "email.email": "Invalid email address",
        "siteUrl.url": "Invalid site URL",
        "siteUrlOptional.url": "Invalid optional site URL",
        "crispChatUrl.url": "Invalid Crisp chat URL",
        "sourceId.exists": "Source ID does not exist",
        "stageId.exists": "Stage ID does not exist",
        "userId.exists": "User ID does not exist",
        "status.enum": "Status must be either Expected, Won, or Lost",
        "statusReason.maxLength":
          "Status reason must be at most 255 characters long",
        "expectedAmount.number": "Expected amount must be a number",
        "isReminder.boolean": "Is reminder must be a boolean",
        "reminderTime.date": "Reminder time must be a valid date",
      },
    });
  }
}
