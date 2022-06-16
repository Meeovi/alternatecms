import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MeetingCreateInput } from "../../../inputs/MeetingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMeetingArgs {
  @TypeGraphQL.Field(_type => MeetingCreateInput, {
    nullable: false
  })
  data!: MeetingCreateInput;
}