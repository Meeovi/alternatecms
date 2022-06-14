import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ZonesWhereUniqueInput } from "../../../inputs/ZonesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteZonesArgs {
  @TypeGraphQL.Field(_type => ZonesWhereUniqueInput, {
    nullable: false
  })
  where!: ZonesWhereUniqueInput;
}
