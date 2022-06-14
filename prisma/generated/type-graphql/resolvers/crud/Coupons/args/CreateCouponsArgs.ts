import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CouponsCreateInput } from "../../../inputs/CouponsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCouponsArgs {
  @TypeGraphQL.Field(_type => CouponsCreateInput, {
    nullable: false
  })
  data!: CouponsCreateInput;
}
