import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatesOrderByWithRelationInput } from "../../../inputs/StatesOrderByWithRelationInput";
import { StatesWhereInput } from "../../../inputs/StatesWhereInput";
import { StatesWhereUniqueInput } from "../../../inputs/StatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateStatesArgs {
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
}