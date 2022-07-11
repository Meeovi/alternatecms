import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_rateCreateInput } from "../../../inputs/Tax_rateCreateInput";
import { Tax_rateUpdateInput } from "../../../inputs/Tax_rateUpdateInput";
import { Tax_rateWhereUniqueInput } from "../../../inputs/Tax_rateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTax_rateArgs {
  @TypeGraphQL.Field(_type => Tax_rateWhereUniqueInput, {
    nullable: false
  })
  where!: Tax_rateWhereUniqueInput;

  @TypeGraphQL.Field(_type => Tax_rateCreateInput, {
    nullable: false
  })
  create!: Tax_rateCreateInput;

  @TypeGraphQL.Field(_type => Tax_rateUpdateInput, {
    nullable: false
  })
  update!: Tax_rateUpdateInput;
}
