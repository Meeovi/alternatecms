import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Url_rewritesCreateInput", {
  isAbstract: true
})
export class Url_rewritesCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  request_path?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  redirect_type?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  target_path?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store?: string | undefined;
}