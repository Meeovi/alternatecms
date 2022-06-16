import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSettingsgeneralArgs } from "./args/AggregateSettingsgeneralArgs";
import { CreateManySettingsgeneralArgs } from "./args/CreateManySettingsgeneralArgs";
import { CreateSettingsgeneralArgs } from "./args/CreateSettingsgeneralArgs";
import { DeleteManySettingsgeneralArgs } from "./args/DeleteManySettingsgeneralArgs";
import { DeleteSettingsgeneralArgs } from "./args/DeleteSettingsgeneralArgs";
import { FindFirstSettingsgeneralArgs } from "./args/FindFirstSettingsgeneralArgs";
import { FindManySettingsgeneralArgs } from "./args/FindManySettingsgeneralArgs";
import { FindUniqueSettingsgeneralArgs } from "./args/FindUniqueSettingsgeneralArgs";
import { GroupBySettingsgeneralArgs } from "./args/GroupBySettingsgeneralArgs";
import { UpdateManySettingsgeneralArgs } from "./args/UpdateManySettingsgeneralArgs";
import { UpdateSettingsgeneralArgs } from "./args/UpdateSettingsgeneralArgs";
import { UpsertSettingsgeneralArgs } from "./args/UpsertSettingsgeneralArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Settingsgeneral } from "../../../models/Settingsgeneral";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSettingsgeneral } from "../../outputs/AggregateSettingsgeneral";
import { SettingsgeneralGroupBy } from "../../outputs/SettingsgeneralGroupBy";

@TypeGraphQL.Resolver(_of => Settingsgeneral)
export class SettingsgeneralCrudResolver {
  @TypeGraphQL.Query(_returns => Settingsgeneral, {
    nullable: true
  })
  async settingsgeneral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSettingsgeneralArgs): Promise<Settingsgeneral | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsgeneral.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Settingsgeneral, {
    nullable: true
  })
  async findFirstSettingsgeneral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSettingsgeneralArgs): Promise<Settingsgeneral | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsgeneral.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Settingsgeneral], {
    nullable: false
  })
  async settingsgenerals(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySettingsgeneralArgs): Promise<Settingsgeneral[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsgeneral.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Settingsgeneral, {
    nullable: false
  })
  async createSettingsgeneral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateSettingsgeneralArgs): Promise<Settingsgeneral> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsgeneral.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManySettingsgeneral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManySettingsgeneralArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsgeneral.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Settingsgeneral, {
    nullable: true
  })
  async deleteSettingsgeneral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteSettingsgeneralArgs): Promise<Settingsgeneral | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsgeneral.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Settingsgeneral, {
    nullable: true
  })
  async updateSettingsgeneral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateSettingsgeneralArgs): Promise<Settingsgeneral | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsgeneral.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySettingsgeneral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManySettingsgeneralArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsgeneral.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySettingsgeneral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManySettingsgeneralArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsgeneral.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Settingsgeneral, {
    nullable: false
  })
  async upsertSettingsgeneral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertSettingsgeneralArgs): Promise<Settingsgeneral> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsgeneral.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateSettingsgeneral, {
    nullable: false
  })
  async aggregateSettingsgeneral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSettingsgeneralArgs): Promise<AggregateSettingsgeneral> {
    return getPrismaFromContext(ctx).settingsgeneral.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [SettingsgeneralGroupBy], {
    nullable: false
  })
  async groupBySettingsgeneral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySettingsgeneralArgs): Promise<SettingsgeneralGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingsgeneral.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}