import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_rateOrderByWithRelationInput } from "../../../inputs/Tax_rateOrderByWithRelationInput";
import { Tax_rateWhereInput } from "../../../inputs/Tax_rateWhereInput";
import { Tax_rateWhereUniqueInput } from "../../../inputs/Tax_rateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTax_rateArgs {
  @TypeGraphQL.Field(_type => Tax_rateWhereInput, {
    nullable: true
  })
  where?: Tax_rateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Tax_rateOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Tax_rateOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Tax_rateWhereUniqueInput, {
    nullable: true
  })
  cursor?: Tax_rateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
