import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApitokenWhereUniqueInput } from "../../../inputs/ApitokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteApitokenArgs {
  @TypeGraphQL.Field(_type => ApitokenWhereUniqueInput, {
    nullable: false
  })
  where!: ApitokenWhereUniqueInput;
}