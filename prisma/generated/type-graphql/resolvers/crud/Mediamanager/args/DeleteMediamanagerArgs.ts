import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MediamanagerWhereUniqueInput } from "../../../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteMediamanagerArgs {
  @TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput, {
    nullable: false
  })
  where!: MediamanagerWhereUniqueInput;
}