import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PipelineValidator {
  public async createPipelineValidator(ctx: HttpContextContract) {
    const pipelineSchema = schema.create({
      user_id: schema.number([
        rules.required(),
        rules.exists({ table: 'users', column: 'id' }),
      ]),
      title: schema.string({}, [
        rules.required(),
        rules.maxLength(20),
      ]),
      client_count: schema.number([
        rules.required(),
        rules.unsigned(),
      ]),
      school_id: schema.number([
        rules.required(),
        rules.exists({ table: 'schools', column: 'id' }),
      ]),
    })

    return await ctx.request.validate({
      schema: pipelineSchema,
      messages: {
        'user_id.required': 'User ID is required',
        'user_id.exists': 'User ID does not exist',
        'title.required': 'Title is required',
        'title.maxLength': 'Title must be at most 20 characters long',
        'client_count.required': 'Clients count is required',
        'client_count.unsigned': 'Clients count must be a positive number',
        'school_id.required': 'School ID is required',
        'school_id.exists': 'School ID does not exist',
      },
    })
  }
}