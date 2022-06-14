import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePdf_templatesArgs } from "./args/AggregatePdf_templatesArgs";
import { CreateManyPdf_templatesArgs } from "./args/CreateManyPdf_templatesArgs";
import { CreatePdf_templatesArgs } from "./args/CreatePdf_templatesArgs";
import { DeleteManyPdf_templatesArgs } from "./args/DeleteManyPdf_templatesArgs";
import { DeletePdf_templatesArgs } from "./args/DeletePdf_templatesArgs";
import { FindFirstPdf_templatesArgs } from "./args/FindFirstPdf_templatesArgs";
import { FindManyPdf_templatesArgs } from "./args/FindManyPdf_templatesArgs";
import { FindUniquePdf_templatesArgs } from "./args/FindUniquePdf_templatesArgs";
import { GroupByPdf_templatesArgs } from "./args/GroupByPdf_templatesArgs";
import { UpdateManyPdf_templatesArgs } from "./args/UpdateManyPdf_templatesArgs";
import { UpdatePdf_templatesArgs } from "./args/UpdatePdf_templatesArgs";
import { UpsertPdf_templatesArgs } from "./args/UpsertPdf_templatesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Pdf_templates } from "../../../models/Pdf_templates";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePdf_templates } from "../../outputs/AggregatePdf_templates";
import { Pdf_templatesGroupBy } from "../../outputs/Pdf_templatesGroupBy";

@TypeGraphQL.Resolver(_of => Pdf_templates)
export class Pdf_templatesCrudResolver {
  @TypeGraphQL.Query(_returns => Pdf_templates, {
    nullable: true
  })
  async findUniquePdf_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePdf_templatesArgs): Promise<Pdf_templates | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).pdf_templates.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Pdf_templates, {
    nullable: true
  })
  async findFirstPdf_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPdf_templatesArgs): Promise<Pdf_templates | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).pdf_templates.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Pdf_templates], {
    nullable: false
  })
  async findManyPdf_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPdf_templatesArgs): Promise<Pdf_templates[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).pdf_templates.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Pdf_templates, {
    nullable: false
  })
  async createPdf_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreatePdf_templatesArgs): Promise<Pdf_templates> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).pdf_templates.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPdf_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyPdf_templatesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).pdf_templates.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Pdf_templates, {
    nullable: true
  })
  async deletePdf_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeletePdf_templatesArgs): Promise<Pdf_templates | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).pdf_templates.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Pdf_templates, {
    nullable: true
  })
  async updatePdf_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdatePdf_templatesArgs): Promise<Pdf_templates | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).pdf_templates.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPdf_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyPdf_templatesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).pdf_templates.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPdf_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyPdf_templatesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).pdf_templates.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Pdf_templates, {
    nullable: false
  })
  async upsertPdf_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertPdf_templatesArgs): Promise<Pdf_templates> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).pdf_templates.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregatePdf_templates, {
    nullable: false
  })
  async aggregatePdf_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePdf_templatesArgs): Promise<AggregatePdf_templates> {
    return getPrismaFromContext(ctx).pdf_templates.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [Pdf_templatesGroupBy], {
    nullable: false
  })
  async groupByPdf_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPdf_templatesArgs): Promise<Pdf_templatesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).pdf_templates.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
