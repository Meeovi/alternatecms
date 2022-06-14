import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesCreateInput } from "../../../inputs/RolesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateRolesArgs {
  @TypeGraphQL.Field(_type => RolesCreateInput, {
    nullable: false
  })
  data!: RolesCreateInput;
}
