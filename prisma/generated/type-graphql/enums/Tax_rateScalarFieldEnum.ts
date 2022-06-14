import * as TypeGraphQL from "type-graphql";

export enum Tax_rateScalarFieldEnum {
  id = "id",
  tax_identifier = "tax_identifier",
  zip_post_is_range = "zip_post_is_range",
  postcode = "postcode",
  state = "state",
  country = "country",
  rate_percent = "rate_percent",
  default_store_view = "default_store_view",
  prod_id = "prod_id"
}
TypeGraphQL.registerEnumType(Tax_rateScalarFieldEnum, {
  name: "Tax_rateScalarFieldEnum",
  description: undefined,
});
