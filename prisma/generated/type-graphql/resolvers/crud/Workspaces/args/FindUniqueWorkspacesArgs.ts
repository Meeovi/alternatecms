import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkspacesWhereUniqueInput } from "../../../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueWorkspacesArgs {
  @TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspacesWhereUniqueInput;
}