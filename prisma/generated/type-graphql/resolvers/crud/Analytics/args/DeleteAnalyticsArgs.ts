import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnalyticsWhereUniqueInput } from "../../../inputs/AnalyticsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteAnalyticsArgs {
  @TypeGraphQL.Field(_type => AnalyticsWhereUniqueInput, {
    nullable: false
  })
  where!: AnalyticsWhereUniqueInput;
}