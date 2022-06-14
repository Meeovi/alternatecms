import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrdersCreateInput } from "../../../inputs/OrdersCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOrdersArgs {
  @TypeGraphQL.Field(_type => OrdersCreateInput, {
    nullable: false
  })
  data!: OrdersCreateInput;
}
