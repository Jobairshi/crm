import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import { DateTime } from 'luxon'

export default class Pipeline extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public stagesCount: number

  @column()
  public clientsCount: number

  @column()
  public schoolId: number

  @column()
  public userId: number
  
  @column()
  public createdAt: DateTime


  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
