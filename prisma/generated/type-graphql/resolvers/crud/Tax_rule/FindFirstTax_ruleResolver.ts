import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstTax_ruleArgs } from "./args/FindFirstTax_ruleArgs";
import { Tax_rule } from "../../../models/Tax_rule";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tax_rule)
export class FindFirstTax_ruleResolver {
  @TypeGraphQL.Query(_returns => Tax_rule, {
    nullable: true
  })
  async findFirstTax_rule(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTax_ruleArgs): Promise<Tax_rule | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tax_rule.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
