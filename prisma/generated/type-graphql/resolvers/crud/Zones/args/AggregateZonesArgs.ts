import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ZonesOrderByWithRelationInput } from "../../../inputs/ZonesOrderByWithRelationInput";
import { ZonesWhereInput } from "../../../inputs/ZonesWhereInput";
import { ZonesWhereUniqueInput } from "../../../inputs/ZonesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateZonesArgs {
  @TypeGraphQL.Field(_type => ZonesWhereInput, {
    nullable: true
  })
  where?: ZonesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ZonesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ZonesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ZonesWhereUniqueInput, {
    nullable: true
  })
  cursor?: ZonesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
