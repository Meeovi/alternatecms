import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneProduct_attribute_setArgs } from "./args/UpdateOneProduct_attribute_setArgs";
import { Product_attribute_set } from "../../../models/Product_attribute_set";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product_attribute_set)
export class UpdateOneProduct_attribute_setResolver {
  @TypeGraphQL.Mutation(_returns => Product_attribute_set, {
    nullable: true
  })
  async updateOneProduct_attribute_set(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneProduct_attribute_setArgs): Promise<Product_attribute_set | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).product_attribute_set.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}