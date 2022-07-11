import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Join_roles__RoleCreateInput } from "../../../inputs/Join_roles__RoleCreateInput";
import { Join_roles__RoleUpdateInput } from "../../../inputs/Join_roles__RoleUpdateInput";
import { Join_roles__RoleWhereUniqueInput } from "../../../inputs/Join_roles__RoleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneJoin_roles__RoleArgs {
  @TypeGraphQL.Field(_type => Join_roles__RoleWhereUniqueInput, {
    nullable: false
  })
  where!: Join_roles__RoleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Join_roles__RoleCreateInput, {
    nullable: false
  })
  create!: Join_roles__RoleCreateInput;

  @TypeGraphQL.Field(_type => Join_roles__RoleUpdateInput, {
    nullable: false
  })
  update!: Join_roles__RoleUpdateInput;
}
