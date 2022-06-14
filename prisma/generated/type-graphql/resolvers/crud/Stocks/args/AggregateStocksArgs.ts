import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StocksOrderByWithRelationInput } from "../../../inputs/StocksOrderByWithRelationInput";
import { StocksWhereInput } from "../../../inputs/StocksWhereInput";
import { StocksWhereUniqueInput } from "../../../inputs/StocksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateStocksArgs {
  @TypeGraphQL.Field(_type => StocksWhereInput, {
    nullable: true
  })
  where?: StocksWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StocksOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: StocksOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => StocksWhereUniqueInput, {
    nullable: true
  })
  cursor?: StocksWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
