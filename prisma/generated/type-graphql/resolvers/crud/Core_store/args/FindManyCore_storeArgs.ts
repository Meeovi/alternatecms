import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Core_storeOrderByWithRelationInput } from "../../../inputs/Core_storeOrderByWithRelationInput";
import { Core_storeWhereInput } from "../../../inputs/Core_storeWhereInput";
import { Core_storeWhereUniqueInput } from "../../../inputs/Core_storeWhereUniqueInput";
import { Core_storeScalarFieldEnum } from "../../../../enums/Core_storeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCore_storeArgs {
  @TypeGraphQL.Field(_type => Core_storeWhereInput, {
    nullable: true
  })
  where?: Core_storeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Core_storeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Core_storeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Core_storeWhereUniqueInput, {
    nullable: true
  })
  cursor?: Core_storeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Core_storeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "key" | "value" | "type" | "environment" | "tag"> | undefined;
}