import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Pipeline from './Pipeline'

export default class Stage extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public pipelineId: number

  @column()
  public schoolId: number

  @column()
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Pipeline)
  public pipeline: BelongsTo<typeof Pipeline>
}
