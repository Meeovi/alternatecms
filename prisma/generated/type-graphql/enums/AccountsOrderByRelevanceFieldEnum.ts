import * as TypeGraphQL from "type-graphql";

export enum AccountsOrderByRelevanceFieldEnum {
  name = "name",
  website = "website",
  office_phone = "office_phone",
  fax = "fax",
  email = "email",
  address = "address",
  postalcode = "postalcode",
  city = "city",
  state = "state",
  country = "country",
  assigned_to = "assigned_to",
  alt_address = "alt_address",
  alt_postalcode = "alt_postalcode",
  alt_city = "alt_city",
  alt_state = "alt_state",
  alt_country = "alt_country",
  type = "type",
  industry = "industry",
  employees = "employees",
  annual_revenue = "annual_revenue",
  member_of = "member_of",
  campaign = "campaign"
}
TypeGraphQL.registerEnumType(AccountsOrderByRelevanceFieldEnum, {
  name: "AccountsOrderByRelevanceFieldEnum",
  description: undefined,
});
