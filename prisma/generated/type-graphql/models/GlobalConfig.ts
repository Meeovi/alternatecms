import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("GlobalConfig", {
  isAbstract: true
})
export class GlobalConfig {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  objectId!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  params?: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  masterKeyOnly?: Prisma.JsonValue | null;
}