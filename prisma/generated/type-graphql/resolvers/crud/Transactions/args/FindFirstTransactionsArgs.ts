import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TransactionsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TransactionsOrderByWithRelationAndSearchRelevanceInput";
import { TransactionsWhereInput } from "../../../inputs/TransactionsWhereInput";
import { TransactionsWhereUniqueInput } from "../../../inputs/TransactionsWhereUniqueInput";
import { TransactionsScalarFieldEnum } from "../../../../enums/TransactionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTransactionsArgs {
  @TypeGraphQL.Field(_type => TransactionsWhereInput, {
    nullable: true
  })
  where?: TransactionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TransactionsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: TransactionsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => TransactionsWhereUniqueInput, {
    nullable: true
  })
  cursor?: TransactionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TransactionsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "order_id" | "transaction_id" | "parent_transaction_id" | "created" | "payment_method" | "closed"> | undefined;
}