import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SchedulerMaxAggregate", {
  isAbstract: true
})
export class SchedulerMaxAggregate {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id!: bigint | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  end_date!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  level!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  login!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  start_date!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  whid!: string | null;
}
