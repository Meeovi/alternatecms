import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Credit_memosCreateInput } from "../../../inputs/Credit_memosCreateInput";
import { Credit_memosUpdateInput } from "../../../inputs/Credit_memosUpdateInput";
import { Credit_memosWhereUniqueInput } from "../../../inputs/Credit_memosWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCredit_memosArgs {
  @TypeGraphQL.Field(_type => Credit_memosWhereUniqueInput, {
    nullable: false
  })
  where!: Credit_memosWhereUniqueInput;

  @TypeGraphQL.Field(_type => Credit_memosCreateInput, {
    nullable: false
  })
  create!: Credit_memosCreateInput;

  @TypeGraphQL.Field(_type => Credit_memosUpdateInput, {
    nullable: false
  })
  update!: Credit_memosUpdateInput;
}
