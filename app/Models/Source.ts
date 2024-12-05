import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Source extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public schoolId: number

  @column()
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
