import * as TypeGraphQL from "type-graphql";

export enum LeadsOrderByRelevanceFieldEnum {
  Prefix = "Prefix",
  first_name = "first_name",
  last_name = "last_name",
  department = "department",
  account_name = "account_name",
  address = "address",
  postalcode = "postalcode",
  city = "city",
  state = "state",
  country = "country",
  email = "email",
  description = "description",
  fax = "fax",
  website = "website",
  mobile = "mobile",
  job_title = "job_title",
  alt_address = "alt_address",
  alt_postalcode = "alt_postalcode",
  alt_city = "alt_city",
  alt_state = "alt_state",
  alt_country = "alt_country",
  office_phone = "office_phone",
  status = "status",
  status_description = "status_description",
  opportunity_amount = "opportunity_amount",
  campaign = "campaign",
  lead_source = "lead_source",
  lead_source_description = "lead_source_description",
  referred_by = "referred_by",
  customer_name = "customer_name"
}
TypeGraphQL.registerEnumType(LeadsOrderByRelevanceFieldEnum, {
  name: "LeadsOrderByRelevanceFieldEnum",
  description: undefined,
});
