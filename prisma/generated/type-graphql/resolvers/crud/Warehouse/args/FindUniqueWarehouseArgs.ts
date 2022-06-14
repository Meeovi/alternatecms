import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WarehouseWhereUniqueInput } from "../../../inputs/WarehouseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueWarehouseArgs {
  @TypeGraphQL.Field(_type => WarehouseWhereUniqueInput, {
    nullable: false
  })
  where!: WarehouseWhereUniqueInput;
}
