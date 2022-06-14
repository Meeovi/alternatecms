import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteSettingshopArgs } from "./args/DeleteSettingshopArgs";
import { Settingshop } from "../../../models/Settingshop";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settingshop)
export class DeleteSettingshopResolver {
  @TypeGraphQL.Mutation(_returns => Settingshop, {
    nullable: true
  })
  async deleteSettingshop(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteSettingshopArgs): Promise<Settingshop | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).settingshop.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
