import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Knowledgebase", {
  isAbstract: true
})
export class Knowledgebase {
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
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  revision?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  resolution?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  author?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  approver?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date_modified?: Date | null;
}
