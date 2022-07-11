import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShipmentsWhereUniqueInput } from "../../../inputs/ShipmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneShipmentsArgs {
  @TypeGraphQL.Field(_type => ShipmentsWhereUniqueInput, {
    nullable: false
  })
  where!: ShipmentsWhereUniqueInput;
}