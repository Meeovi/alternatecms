import * as TypeGraphQL from "type-graphql";

export enum PaymentsOrderByRelevanceFieldEnum {
  client_id = "client_id",
  client_secret = "client_secret",
  host_uri = "host_uri",
  redirect_url = "redirect_url",
  redirect_url_app = "redirect_url_app",
  icon = "icon",
  name = "name",
  active = "active",
  country = "country"
}
TypeGraphQL.registerEnumType(PaymentsOrderByRelevanceFieldEnum, {
  name: "PaymentsOrderByRelevanceFieldEnum",
  description: undefined,
});
