import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CustomAttribute extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public type: string

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public defaultValue: string
}
