import * as TypeGraphQL from "type-graphql";
import { Comments } from "../../../models/Comments";
import { Customers } from "../../../models/Customers";
import { Mediamanager } from "../../../models/Mediamanager";
import { CommentsMediamanagerArgs } from "./args/CommentsMediamanagerArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Comments)
export class CommentsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Customers, {
    nullable: false
  })
  async customers(@TypeGraphQL.Root() comments: Comments, @TypeGraphQL.Ctx() ctx: any): Promise<Customers> {
    return getPrismaFromContext(ctx).comments.findUnique({
      where: {
        id: comments.id,
      },
    }).customers({});
  }

  @TypeGraphQL.FieldResolver(_type => [Mediamanager], {
    nullable: false
  })
  async mediamanager(@TypeGraphQL.Root() comments: Comments, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CommentsMediamanagerArgs): Promise<Mediamanager[]> {
    return getPrismaFromContext(ctx).comments.findUnique({
      where: {
        id: comments.id,
      },
    }).mediamanager(args);
  }
}
