import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Special_discountsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Special_discountsOrderByWithRelationAndSearchRelevanceInput";
import { Special_discountsWhereInput } from "../../../inputs/Special_discountsWhereInput";
import { Special_discountsWhereUniqueInput } from "../../../inputs/Special_discountsWhereUniqueInput";
import { Special_discountsScalarFieldEnum } from "../../../../enums/Special_discountsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSpecial_discountsArgs {
  @TypeGraphQL.Field(_type => Special_discountsWhereInput, {
    nullable: true
  })
  where?: Special_discountsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Special_discountsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Special_discountsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Special_discountsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Special_discountsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Special_discountsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "excerpt" | "discount" | "image" | "published" | "rewards" | "coupons" | "expiration" | "categories" | "articles" | "products" | "customers" | "users"> | undefined;
}