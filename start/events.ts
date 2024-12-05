import Event from "@ioc:Adonis/Core/Event";

Event.on(
  "new:send_credentials_to_users",
  "NotificationListener.onSendCredentialsToUsers"
);
