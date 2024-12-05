import { BaseModel, column, hasMany, HasMany } from "@ioc:Adonis/Lucid/Orm";

import { DateTime } from "luxon";
import Source from "./Source";
import Pipeline from "./Pipeline";
import Stage from "./Stage";
import Client from "./Client";
import Note from "./Note";
import Comment from "./Comment";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public username: string;

  @column()
  public schoolId: number;

  @column()
  public email: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Source)
  public sources: HasMany<typeof Source>;

  @hasMany(() => Pipeline)
  public pipelines: HasMany<typeof Pipeline>;

  @hasMany(() => Stage)
  public stages: HasMany<typeof Stage>;

  @hasMany(() => Client)
  public clients: HasMany<typeof Client>;

  @hasMany(() => Note)
  public notes: HasMany<typeof Note>;

  @hasMany(() => Comment)
  public comments: HasMany<typeof Comment>;
}
