import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccassionsCreateNestedManyWithoutWishlists_occassionsTowishlistsInput } from "../inputs/OccassionsCreateNestedManyWithoutWishlists_occassionsTowishlistsInput";

@TypeGraphQL.InputType("WishlistsCreateInput", {
  isAbstract: true
})
export class WishlistsCreateInput {
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
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customers?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  visibility?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  products?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  quantity?: string | undefined;

  @TypeGraphQL.Field(_type => OccassionsCreateNestedManyWithoutWishlists_occassionsTowishlistsInput, {
    nullable: true
  })
  occassions?: OccassionsCreateNestedManyWithoutWishlists_occassionsTowishlistsInput | undefined;
}