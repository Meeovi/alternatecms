import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccassionsCreateWithoutWishlists_occassionsTowishlistsInput } from "../inputs/OccassionsCreateWithoutWishlists_occassionsTowishlistsInput";
import { OccassionsUpdateWithoutWishlists_occassionsTowishlistsInput } from "../inputs/OccassionsUpdateWithoutWishlists_occassionsTowishlistsInput";
import { OccassionsWhereUniqueInput } from "../inputs/OccassionsWhereUniqueInput";

@TypeGraphQL.InputType("OccassionsUpsertWithWhereUniqueWithoutWishlists_occassionsTowishlistsInput", {
  isAbstract: true
})
export class OccassionsUpsertWithWhereUniqueWithoutWishlists_occassionsTowishlistsInput {
  @TypeGraphQL.Field(_type => OccassionsWhereUniqueInput, {
    nullable: false
  })
  where!: OccassionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => OccassionsUpdateWithoutWishlists_occassionsTowishlistsInput, {
    nullable: false
  })
  update!: OccassionsUpdateWithoutWishlists_occassionsTowishlistsInput;

  @TypeGraphQL.Field(_type => OccassionsCreateWithoutWishlists_occassionsTowishlistsInput, {
    nullable: false
  })
  create!: OccassionsCreateWithoutWishlists_occassionsTowishlistsInput;
}
