import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import User from './User'
import Pipeline from './Pipeline'
import Stage from './Stage'
import Client from './Client'
import Note from './Note'
import Comment from './Comment'
import Source from './Source'
import CustomAttribute from './CustomAtribute'
import ClientCustomAttribute from './ClientCustomAttribute'


export default class School extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => User)
  public users: HasMany<typeof User>

  @hasMany(() => Pipeline)
  public pipelines: HasMany<typeof Pipeline>

  @hasMany(() => Stage)
  public stages: HasMany<typeof Stage>

  @hasMany(() => Client)
  public clients: HasMany<typeof Client>

  @hasMany(() => Note)
  public notes: HasMany<typeof Note>

  @hasMany(() => Comment)
  public comments: HasMany<typeof Comment>

  @hasMany(() => Source)
  public sources: HasMany<typeof Source>

  @hasMany(() => CustomAttribute)
  public customAttributes: HasMany<typeof CustomAttribute>

  @hasMany(() => ClientCustomAttribute)
  public clientCustomAttributes: HasMany<typeof ClientCustomAttribute>
}