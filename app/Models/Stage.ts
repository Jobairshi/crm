import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import User from './User'
import School from './School'
import Pipeline from './Pipeline'
import Client from './Client'

export default class Stage extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public userId: number

  @column()
  public pipelineId: number

  @column()
  public schoolId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => School)
  public school: BelongsTo<typeof School>

  @belongsTo(() => Pipeline)
  public pipeline: BelongsTo<typeof Pipeline>

  @hasMany(() => Client)
  public clients: HasMany<typeof Client>
}