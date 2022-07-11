import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingshopWhereUniqueInput } from "../../../inputs/SettingshopWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSettingshopArgs {
  @TypeGraphQL.Field(_type => SettingshopWhereUniqueInput, {
    nullable: false
  })
  where!: SettingshopWhereUniqueInput;
}