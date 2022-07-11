import * as TypeGraphQL from "type-graphql";

export enum MeetingOrderByRelevanceFieldEnum {
  subject = "subject",
  start_date = "start_date",
  end_date = "end_date",
  duration = "duration",
  status = "status",
  related_to = "related_to",
  reminders = "reminders",
  content = "content",
  assigned_to = "assigned_to",
  invitees = "invitees",
  scheduling = "scheduling"
}
TypeGraphQL.registerEnumType(MeetingOrderByRelevanceFieldEnum, {
  name: "MeetingOrderByRelevanceFieldEnum",
  description: undefined,
});
