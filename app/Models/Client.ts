import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import User from './User'
import Stage from './Stage'
import Source from './Source'
import School from './School'
import Note from './Note'
import Comment from './Comment'
import ClientCustomAttribute from './ClientCustomAttribute'


export default class Client extends BaseModel {
   serializeExtras = true;
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

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Stage)
  public stage: BelongsTo<typeof Stage>

  @belongsTo(() => Source)
  public source: BelongsTo<typeof Source>

  @belongsTo(() => School)
  public school: BelongsTo<typeof School>

  @hasMany(() => Note)
  public notes: HasMany<typeof Note>

  @hasMany(() => Comment)
  public comments: HasMany<typeof Comment>

  @hasMany(() => ClientCustomAttribute)
  public clientCustomAttributes: HasMany<typeof ClientCustomAttribute>
}