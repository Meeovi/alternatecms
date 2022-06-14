import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Credit_memosOrderByWithRelationInput } from "../../../inputs/Credit_memosOrderByWithRelationInput";
import { Credit_memosWhereInput } from "../../../inputs/Credit_memosWhereInput";
import { Credit_memosWhereUniqueInput } from "../../../inputs/Credit_memosWhereUniqueInput";
import { Credit_memosScalarFieldEnum } from "../../../../enums/Credit_memosScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCredit_memosArgs {
  @TypeGraphQL.Field(_type => Credit_memosWhereInput, {
    nullable: true
  })
  where?: Credit_memosWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Credit_memosOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Credit_memosOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Credit_memosWhereUniqueInput, {
    nullable: true
  })
  cursor?: Credit_memosWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Credit_memosScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"credit_memo" | "order_number" | "created" | "bill_to_name" | "status" | "refunded" | "action" | "id" | "cust_id" | "prod_id"> | undefined;
}
