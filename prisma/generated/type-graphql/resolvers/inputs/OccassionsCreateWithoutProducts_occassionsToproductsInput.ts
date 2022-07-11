import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WishlistsCreateNestedOneWithoutOccassionsInput } from "../inputs/WishlistsCreateNestedOneWithoutOccassionsInput";

@TypeGraphQL.InputType("OccassionsCreateWithoutProducts_occassionsToproductsInput", {
  isAbstract: true
})
export class OccassionsCreateWithoutProducts_occassionsToproductsInput {
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
  code?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  category?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tags?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => WishlistsCreateNestedOneWithoutOccassionsInput, {
    nullable: true
  })
  wishlists_occassionsTowishlists?: WishlistsCreateNestedOneWithoutOccassionsInput | undefined;
}
