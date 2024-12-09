import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StageValidator {
  public async getStageValidator(ctx: HttpContextContract) {
    const stageSchema = schema.create({
      pipeline_id: schema.number([
        rules.required(),
        rules.exists({ table: 'pipelines', column: 'id' }),
      ]),
      page: schema.number.optional([
        rules.unsigned(),
      ]),
      limit: schema.number.optional([
        rules.unsigned(),
      ]),
    })

    return await ctx.request.validate({
      schema: stageSchema,
      messages: {
        'pipeline_id.required': 'Pipeline ID is required',
        'pipeline_id.exists': 'Pipeline ID does not exist',
        'pipeline_id.number': 'Pipeline ID must be a number',
        'page.number': 'Page must be a number',
        'limit.number': 'Limit must be a number',
      },
    })
  }
}