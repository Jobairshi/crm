import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Client from './Client'

export default class Note extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public text: string

  @column()
  public userId: number

  @column()
  public clientId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Client)
  public client: BelongsTo<typeof Client>
}
