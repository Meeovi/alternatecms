import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchedulerUpdateManyMutationInput } from "../../../inputs/SchedulerUpdateManyMutationInput";
import { SchedulerWhereInput } from "../../../inputs/SchedulerWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySchedulerArgs {
  @TypeGraphQL.Field(_type => SchedulerUpdateManyMutationInput, {
    nullable: false
  })
  data!: SchedulerUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SchedulerWhereInput, {
    nullable: true
  })
  where?: SchedulerWhereInput | undefined;
}
