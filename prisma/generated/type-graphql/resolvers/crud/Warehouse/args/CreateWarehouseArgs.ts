import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WarehouseCreateInput } from "../../../inputs/WarehouseCreateInput";

@TypeGraphQL.ArgsType()
export class CreateWarehouseArgs {
  @TypeGraphQL.Field(_type => WarehouseCreateInput, {
    nullable: false
  })
  data!: WarehouseCreateInput;
}