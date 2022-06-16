import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyShop_settingsArgs } from "./args/FindManyShop_settingsArgs";
import { Shop_settings } from "../../../models/Shop_settings";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Shop_settings)
export class FindManyShop_settingsResolver {
  @TypeGraphQL.Query(_returns => [Shop_settings], {
    nullable: false
  })
  async findManyShop_settings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyShop_settingsArgs): Promise<Shop_settings[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shop_settings.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}