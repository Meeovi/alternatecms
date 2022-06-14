import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShopsCreateInput } from "../../../inputs/ShopsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateShopsArgs {
  @TypeGraphQL.Field(_type => ShopsCreateInput, {
    nullable: false
  })
  data!: ShopsCreateInput;
}
