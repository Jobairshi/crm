import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Stage from './Stage'
import Source from './Source'
import { DateTime } from 'luxon'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public siteUrl: string

  @column()
  public siteUrlOptional: string

  @column()
  public crispChatUrl: string

  @column()
  public sourceId: number

  @column()
  public stageId: number

  @column()
  public schoolId: number

  @column()
  public userId: number

  @column()
  public status: 'Expected' | 'Won' | 'Lost'

  @column()
  public statusReason: string

  @column()
  public expectedAmount: number

  @column()
  public isReminder: boolean

  @column.dateTime()
  public reminderTime: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Stage)
  public stage: BelongsTo<typeof Stage>

  @belongsTo(() => Source)
  public source: BelongsTo<typeof Source>
  
  
}
