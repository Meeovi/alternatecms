import * as TypeGraphQL from "type-graphql";

export enum Email_templatesScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  name = "name",
  assigned_to = "assigned_to",
  type = "type",
  active = "active",
  insert_variable = "insert_variable",
  subject = "subject",
  content = "content",
  header = "header",
  footer = "footer",
  width = "width",
  height = "height",
  media = "media"
}
TypeGraphQL.registerEnumType(Email_templatesScalarFieldEnum, {
  name: "Email_templatesScalarFieldEnum",
  description: undefined,
});