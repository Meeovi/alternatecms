import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupCreateManyCustomersInputEnvelope } from "../inputs/Customer_groupCreateManyCustomersInputEnvelope";
import { Customer_groupCreateOrConnectWithoutCustomersInput } from "../inputs/Customer_groupCreateOrConnectWithoutCustomersInput";
import { Customer_groupCreateWithoutCustomersInput } from "../inputs/Customer_groupCreateWithoutCustomersInput";
import { Customer_groupScalarWhereInput } from "../inputs/Customer_groupScalarWhereInput";
import { Customer_groupUpdateManyWithWhereWithoutCustomersInput } from "../inputs/Customer_groupUpdateManyWithWhereWithoutCustomersInput";
import { Customer_groupUpdateWithWhereUniqueWithoutCustomersInput } from "../inputs/Customer_groupUpdateWithWhereUniqueWithoutCustomersInput";
import { Customer_groupUpsertWithWhereUniqueWithoutCustomersInput } from "../inputs/Customer_groupUpsertWithWhereUniqueWithoutCustomersInput";
import { Customer_groupWhereUniqueInput } from "../inputs/Customer_groupWhereUniqueInput";

@TypeGraphQL.InputType("Customer_groupUpdateManyWithoutCustomersInput", {
  isAbstract: true
})
export class Customer_groupUpdateManyWithoutCustomersInput {
  @TypeGraphQL.Field(_type => [Customer_groupCreateWithoutCustomersInput], {
    nullable: true
  })
  create?: Customer_groupCreateWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_groupCreateOrConnectWithoutCustomersInput], {
    nullable: true
  })
  connectOrCreate?: Customer_groupCreateOrConnectWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_groupUpsertWithWhereUniqueWithoutCustomersInput], {
    nullable: true
  })
  upsert?: Customer_groupUpsertWithWhereUniqueWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_groupCreateManyCustomersInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_groupCreateManyCustomersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_groupWhereUniqueInput], {
    nullable: true
  })
  set?: Customer_groupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_groupWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Customer_groupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_groupWhereUniqueInput], {
    nullable: true
  })
  delete?: Customer_groupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_groupWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_groupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_groupUpdateWithWhereUniqueWithoutCustomersInput], {
    nullable: true
  })
  update?: Customer_groupUpdateWithWhereUniqueWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_groupUpdateManyWithWhereWithoutCustomersInput], {
    nullable: true
  })
  updateMany?: Customer_groupUpdateManyWithWhereWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_groupScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Customer_groupScalarWhereInput[] | undefined;
}
