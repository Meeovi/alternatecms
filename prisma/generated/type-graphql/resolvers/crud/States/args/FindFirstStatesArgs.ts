import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatesOrderByWithRelationInput } from "../../../inputs/StatesOrderByWithRelationInput";
import { StatesWhereInput } from "../../../inputs/StatesWhereInput";
import { StatesWhereUniqueInput } from "../../../inputs/StatesWhereUniqueInput";
import { StatesScalarFieldEnum } from "../../../../enums/StatesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstStatesArgs {
  @TypeGraphQL.Field(_type => StatesWhereInput, {
    nullable: true
  })
  where?: StatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StatesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: StatesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => StatesWhereUniqueInput, {
    nullable: true
  })
  cursor?: StatesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [StatesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "description" | "country" | "image"> | undefined;
}
