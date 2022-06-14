import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChecklistOrderByWithRelationInput } from "../../../inputs/ChecklistOrderByWithRelationInput";
import { ChecklistWhereInput } from "../../../inputs/ChecklistWhereInput";
import { ChecklistWhereUniqueInput } from "../../../inputs/ChecklistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateChecklistArgs {
  @TypeGraphQL.Field(_type => ChecklistWhereInput, {
    nullable: true
  })
  where?: ChecklistWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChecklistOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ChecklistOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ChecklistWhereUniqueInput, {
    nullable: true
  })
  cursor?: ChecklistWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
