import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CouponsWhereUniqueInput } from "../../../inputs/CouponsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCouponsArgs {
  @TypeGraphQL.Field(_type => CouponsWhereUniqueInput, {
    nullable: false
  })
  where!: CouponsWhereUniqueInput;
}
