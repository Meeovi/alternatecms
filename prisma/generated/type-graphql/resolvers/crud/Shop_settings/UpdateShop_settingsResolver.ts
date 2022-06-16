import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateShop_settingsArgs } from "./args/UpdateShop_settingsArgs";
import { Shop_settings } from "../../../models/Shop_settings";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Shop_settings)
export class UpdateShop_settingsResolver {
  @TypeGraphQL.Mutation(_returns => Shop_settings, {
    nullable: true
  })
  async updateShop_settings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateShop_settingsArgs): Promise<Shop_settings | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shop_settings.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}