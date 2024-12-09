import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import User from './User'
import School from './School'
import Stage from './Stage'

export default class Pipeline extends BaseModel {
  serializeExtras = true;
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public client_count: number

  @column()
  public userId: number

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

  @hasMany(() => Stage)
  public stages: HasMany<typeof Stage>
}