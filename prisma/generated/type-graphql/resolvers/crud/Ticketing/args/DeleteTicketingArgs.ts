import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TicketingWhereUniqueInput } from "../../../inputs/TicketingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTicketingArgs {
  @TypeGraphQL.Field(_type => TicketingWhereUniqueInput, {
    nullable: false
  })
  where!: TicketingWhereUniqueInput;
}
