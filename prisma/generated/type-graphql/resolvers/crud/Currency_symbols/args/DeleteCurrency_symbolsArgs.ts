import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_symbolsWhereUniqueInput } from "../../../inputs/Currency_symbolsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCurrency_symbolsArgs {
  @TypeGraphQL.Field(_type => Currency_symbolsWhereUniqueInput, {
    nullable: false
  })
  where!: Currency_symbolsWhereUniqueInput;
}
