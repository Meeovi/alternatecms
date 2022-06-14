import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cart_price_rulesOrderByWithRelationInput } from "../../../inputs/Cart_price_rulesOrderByWithRelationInput";
import { Cart_price_rulesWhereInput } from "../../../inputs/Cart_price_rulesWhereInput";
import { Cart_price_rulesWhereUniqueInput } from "../../../inputs/Cart_price_rulesWhereUniqueInput";
import { Cart_price_rulesScalarFieldEnum } from "../../../../enums/Cart_price_rulesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCart_price_rulesArgs {
  @TypeGraphQL.Field(_type => Cart_price_rulesWhereInput, {
    nullable: true
  })
  where?: Cart_price_rulesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Cart_price_rulesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Cart_price_rulesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Cart_price_rulesWhereUniqueInput, {
    nullable: true
  })
  cursor?: Cart_price_rulesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Cart_price_rulesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "rule" | "description" | "active" | "coupon" | "uses_per_customer" | "priority" | "start_date" | "end_date" | "status" | "website" | "actions_apply" | "actions_discount_amount" | "actions_discard_subsequent_rules" | "actions_max_qty_discount_is_applied_to" | "actions_discount_qty_step" | "actions_apply_shipping_amount"> | undefined;
}
