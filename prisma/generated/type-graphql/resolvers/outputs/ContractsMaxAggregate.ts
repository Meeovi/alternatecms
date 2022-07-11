import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ContractsMaxAggregate", {
  isAbstract: true
})
export class ContractsMaxAggregate {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contract_title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contract_value!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  start_date!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  end_date!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  renewal_reminder!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_signed_date!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  company_signed_date!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contract_manager!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  account!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contact!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  opportunity!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contract_type!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  currency!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  line_items!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  total!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  discount!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subtotal!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_tax!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tax!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  grand_total!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;
}
