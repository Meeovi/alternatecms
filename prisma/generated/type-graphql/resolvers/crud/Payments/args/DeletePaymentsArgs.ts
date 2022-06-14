import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PaymentsWhereUniqueInput } from "../../../inputs/PaymentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeletePaymentsArgs {
  @TypeGraphQL.Field(_type => PaymentsWhereUniqueInput, {
    nullable: false
  })
  where!: PaymentsWhereUniqueInput;
}
