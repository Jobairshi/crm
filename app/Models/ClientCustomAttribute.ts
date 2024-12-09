import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import User from './User'
import Client from './Client'

import School from './School'
import CustomAttribute from './CustomAtribute'

export default class ClientCustomAttribute extends BaseModel {
 serializeExtras = true;
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public value: string

  @column()
  public userId: number

  @column()
  public attributeId: number

  @column()
  public clientId: number

  @column()
  public schoolId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Client)
  public client: BelongsTo<typeof Client>

  @belongsTo(() => CustomAttribute)
  public customAttribute: BelongsTo<typeof CustomAttribute>

  @belongsTo(() => School)
  public school: BelongsTo<typeof School>
}