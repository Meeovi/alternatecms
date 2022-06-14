import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrdersWhereUniqueInput } from "../../../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOrdersArgs {
  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: false
  })
  where!: OrdersWhereUniqueInput;
}
