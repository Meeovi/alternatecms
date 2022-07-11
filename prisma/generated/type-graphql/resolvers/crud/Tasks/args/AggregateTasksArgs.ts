import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TasksOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TasksOrderByWithRelationAndSearchRelevanceInput";
import { TasksWhereInput } from "../../../inputs/TasksWhereInput";
import { TasksWhereUniqueInput } from "../../../inputs/TasksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTasksArgs {
  @TypeGraphQL.Field(_type => TasksWhereInput, {
    nullable: true
  })
  where?: TasksWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TasksOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: TasksOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => TasksWhereUniqueInput, {
    nullable: true
  })
  cursor?: TasksWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
