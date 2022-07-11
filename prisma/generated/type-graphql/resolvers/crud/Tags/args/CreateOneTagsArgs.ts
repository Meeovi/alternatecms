import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsCreateInput } from "../../../inputs/TagsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTagsArgs {
  @TypeGraphQL.Field(_type => TagsCreateInput, {
    nullable: false
  })
  data!: TagsCreateInput;
}
