import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Ooto", {
  isAbstract: true
})
export class Ooto {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  login?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  start_date?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  end_date?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  note?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  using_time?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  location?: string | null;
}