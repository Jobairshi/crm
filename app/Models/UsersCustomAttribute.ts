import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import CustomAttribute from './CustomAtribute'

export default class UsersCustomAttribute extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public attributeId: number

  @column()
  public value: string

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => CustomAttribute)
  public attribute: BelongsTo<typeof CustomAttribute>
}
