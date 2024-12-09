import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import User from './User'
import School from './School'

export default class CustomAttribute extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public fieldType: 'text' | 'number' | 'single_select' | 'multi_select' | 'radio' | 'checkbox' | 'textarea'

  @column()
  public options: string

  @column()
  public description: string
  @column()
  public default_value: string
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
}