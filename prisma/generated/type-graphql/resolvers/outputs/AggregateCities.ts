import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CitiesAvgAggregate } from "../outputs/CitiesAvgAggregate";
import { CitiesCountAggregate } from "../outputs/CitiesCountAggregate";
import { CitiesMaxAggregate } from "../outputs/CitiesMaxAggregate";
import { CitiesMinAggregate } from "../outputs/CitiesMinAggregate";
import { CitiesSumAggregate } from "../outputs/CitiesSumAggregate";

@TypeGraphQL.ObjectType("AggregateCities", {
  isAbstract: true
})
export class AggregateCities {
  @TypeGraphQL.Field(_type => CitiesCountAggregate, {
    nullable: true
  })
  _count!: CitiesCountAggregate | null;

  @TypeGraphQL.Field(_type => CitiesAvgAggregate, {
    nullable: true
  })
  _avg!: CitiesAvgAggregate | null;

  @TypeGraphQL.Field(_type => CitiesSumAggregate, {
    nullable: true
  })
  _sum!: CitiesSumAggregate | null;

  @TypeGraphQL.Field(_type => CitiesMinAggregate, {
    nullable: true
  })
  _min!: CitiesMinAggregate | null;

  @TypeGraphQL.Field(_type => CitiesMaxAggregate, {
    nullable: true
  })
  _max!: CitiesMaxAggregate | null;
}