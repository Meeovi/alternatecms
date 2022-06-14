import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCustomer_paymentArgs } from "./args/AggregateCustomer_paymentArgs";
import { CreateCustomer_paymentArgs } from "./args/CreateCustomer_paymentArgs";
import { CreateManyCustomer_paymentArgs } from "./args/CreateManyCustomer_paymentArgs";
import { DeleteCustomer_paymentArgs } from "./args/DeleteCustomer_paymentArgs";
import { DeleteManyCustomer_paymentArgs } from "./args/DeleteManyCustomer_paymentArgs";
import { FindFirstCustomer_paymentArgs } from "./args/FindFirstCustomer_paymentArgs";
import { FindManyCustomer_paymentArgs } from "./args/FindManyCustomer_paymentArgs";
import { FindUniqueCustomer_paymentArgs } from "./args/FindUniqueCustomer_paymentArgs";
import { GroupByCustomer_paymentArgs } from "./args/GroupByCustomer_paymentArgs";
import { UpdateCustomer_paymentArgs } from "./args/UpdateCustomer_paymentArgs";
import { UpdateManyCustomer_paymentArgs } from "./args/UpdateManyCustomer_paymentArgs";
import { UpsertCustomer_paymentArgs } from "./args/UpsertCustomer_paymentArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Customer_payment } from "../../../models/Customer_payment";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCustomer_payment } from "../../outputs/AggregateCustomer_payment";
import { Customer_paymentGroupBy } from "../../outputs/Customer_paymentGroupBy";

@TypeGraphQL.Resolver(_of => Customer_payment)
export class Customer_paymentCrudResolver {
  @TypeGraphQL.Query(_returns => Customer_payment, {
    nullable: true
  })
  async customer_payment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCustomer_paymentArgs): Promise<Customer_payment | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customer_payment.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Customer_payment, {
    nullable: true
  })
  async findFirstCustomer_payment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCustomer_paymentArgs): Promise<Customer_payment | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customer_payment.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Customer_payment], {
    nullable: false
  })
  async customer_payments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCustomer_paymentArgs): Promise<Customer_payment[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customer_payment.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Customer_payment, {
    nullable: false
  })
  async createCustomer_payment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateCustomer_paymentArgs): Promise<Customer_payment> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customer_payment.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCustomer_payment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyCustomer_paymentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customer_payment.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Customer_payment, {
    nullable: true
  })
  async deleteCustomer_payment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteCustomer_paymentArgs): Promise<Customer_payment | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customer_payment.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Customer_payment, {
    nullable: true
  })
  async updateCustomer_payment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateCustomer_paymentArgs): Promise<Customer_payment | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customer_payment.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCustomer_payment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyCustomer_paymentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customer_payment.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCustomer_payment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyCustomer_paymentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customer_payment.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Customer_payment, {
    nullable: false
  })
  async upsertCustomer_payment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertCustomer_paymentArgs): Promise<Customer_payment> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customer_payment.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateCustomer_payment, {
    nullable: false
  })
  async aggregateCustomer_payment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCustomer_paymentArgs): Promise<AggregateCustomer_payment> {
    return getPrismaFromContext(ctx).customer_payment.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [Customer_paymentGroupBy], {
    nullable: false
  })
  async groupByCustomer_payment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCustomer_paymentArgs): Promise<Customer_paymentGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customer_payment.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
