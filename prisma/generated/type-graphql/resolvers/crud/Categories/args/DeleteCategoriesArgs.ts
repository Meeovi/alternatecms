import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriesWhereUniqueInput } from "../../../inputs/CategoriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCategoriesArgs {
  @TypeGraphQL.Field(_type => CategoriesWhereUniqueInput, {
    nullable: false
  })
  where!: CategoriesWhereUniqueInput;
}
