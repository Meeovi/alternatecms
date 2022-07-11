import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Trainings } from "../models/Trainings";
import { StatesCount } from "../resolvers/outputs/StatesCount";

@TypeGraphQL.ObjectType("States", {
  isAbstract: true
})
export class States {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | null;

  trainings?: Trainings[];

  @TypeGraphQL.Field(_type => StatesCount, {
    nullable: true
  })
  _count?: StatesCount | null;
}