import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuotesWhereUniqueInput } from "../../../inputs/QuotesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueQuotesArgs {
  @TypeGraphQL.Field(_type => QuotesWhereUniqueInput, {
    nullable: false
  })
  where!: QuotesWhereUniqueInput;
}
