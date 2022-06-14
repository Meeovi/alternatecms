import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("WebhooksCreateManyInput", {
  isAbstract: true
})
export class WebhooksCreateManyInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  headers?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  create?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  retrieve?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  update?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  delete?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  publish?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  unpublish?: string | undefined;
}
