import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TransactionsOrderByWithRelationInput } from "../../../inputs/TransactionsOrderByWithRelationInput";
import { TransactionsWhereInput } from "../../../inputs/TransactionsWhereInput";
import { TransactionsWhereUniqueInput } from "../../../inputs/TransactionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTransactionsArgs {
  @TypeGraphQL.Field(_type => TransactionsWhereInput, {
    nullable: true
  })
  where?: TransactionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TransactionsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TransactionsOrderByWithRelationInput[] | undefined;

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
}
