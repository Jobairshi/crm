/**
 * Contract source: https://git.io/JfefG
 *
 * Feel free to let us know via PR, if you find something broken in this contract
 * file.
 */

declare module "@ioc:Adonis/Core/Event" {
  /*
  |--------------------------------------------------------------------------
  | Define typed events
  |--------------------------------------------------------------------------
  |
  | You can define types for events inside the following interface and
  | AdonisJS will make sure that all listeners and emit calls adheres
  | to the defined types.
  |
  | For example:
  |
  | interface EventsList {
  |   'new:user': UserModel
  | }
  |
  | Now calling `Event.emit('new:user')` will statically ensure that passed value is
  | an instance of the the UserModel only.
  |
  */
  interface EventsList {
    send_credentials_to_users: {
      school_id: number;
      template: "NEW_ENROLLMENT_BY_SITE_OWNER";
      dashboard_url: string;
      users: {
        first_name: string;
        last_name: string;
        email: string;
        password: string;
      }[];
    };
  }
}