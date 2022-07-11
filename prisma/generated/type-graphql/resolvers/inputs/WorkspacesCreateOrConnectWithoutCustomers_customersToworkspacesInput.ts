import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateWithoutCustomers_customersToworkspacesInput } from "../inputs/WorkspacesCreateWithoutCustomers_customersToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesCreateOrConnectWithoutCustomers_customersToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesCreateOrConnectWithoutCustomers_customersToworkspacesInput {
  @TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspacesWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspacesCreateWithoutCustomers_customersToworkspacesInput, {
    nullable: false
  })
  create!: WorkspacesCreateWithoutCustomers_customersToworkspacesInput;
}
