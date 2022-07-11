import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsgeneralWhereUniqueInput } from "../../../inputs/SettingsgeneralWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSettingsgeneralArgs {
  @TypeGraphQL.Field(_type => SettingsgeneralWhereUniqueInput, {
    nullable: false
  })
  where!: SettingsgeneralWhereUniqueInput;
}