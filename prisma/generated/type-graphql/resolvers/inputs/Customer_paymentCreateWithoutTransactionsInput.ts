import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateNestedOneWithoutCustomer_paymentInput } from "../inputs/CustomersCreateNestedOneWithoutCustomer_paymentInput";

@TypeGraphQL.InputType("Customer_paymentCreateWithoutTransactionsInput", {
  isAbstract: true
})
export class Customer_paymentCreateWithoutTransactionsInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payment_info?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  provider?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  account_no?: bigint | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  expiry?: bigint | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutCustomer_paymentInput, {
    nullable: true
  })
  customers?: CustomersCreateNestedOneWithoutCustomer_paymentInput | undefined;
}