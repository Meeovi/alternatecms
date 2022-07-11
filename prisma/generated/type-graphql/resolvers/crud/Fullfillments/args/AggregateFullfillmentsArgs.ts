import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FullfillmentsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/FullfillmentsOrderByWithRelationAndSearchRelevanceInput";
import { FullfillmentsWhereInput } from "../../../inputs/FullfillmentsWhereInput";
import { FullfillmentsWhereUniqueInput } from "../../../inputs/FullfillmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateFullfillmentsArgs {
  @TypeGraphQL.Field(_type => FullfillmentsWhereInput, {
    nullable: true
  })
  where?: FullfillmentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FullfillmentsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: FullfillmentsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => FullfillmentsWhereUniqueInput, {
    nullable: true
  })
  cursor?: FullfillmentsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}