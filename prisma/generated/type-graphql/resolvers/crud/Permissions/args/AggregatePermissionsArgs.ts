import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionsOrderByWithRelationInput } from "../../../inputs/PermissionsOrderByWithRelationInput";
import { PermissionsWhereInput } from "../../../inputs/PermissionsWhereInput";
import { PermissionsWhereUniqueInput } from "../../../inputs/PermissionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePermissionsArgs {
  @TypeGraphQL.Field(_type => PermissionsWhereInput, {
    nullable: true
  })
  where?: PermissionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PermissionsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PermissionsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PermissionsWhereUniqueInput, {
    nullable: true
  })
  cursor?: PermissionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
