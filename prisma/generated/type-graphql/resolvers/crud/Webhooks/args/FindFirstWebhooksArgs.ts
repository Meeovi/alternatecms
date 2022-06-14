import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebhooksOrderByWithRelationInput } from "../../../inputs/WebhooksOrderByWithRelationInput";
import { WebhooksWhereInput } from "../../../inputs/WebhooksWhereInput";
import { WebhooksWhereUniqueInput } from "../../../inputs/WebhooksWhereUniqueInput";
import { WebhooksScalarFieldEnum } from "../../../../enums/WebhooksScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstWebhooksArgs {
  @TypeGraphQL.Field(_type => WebhooksWhereInput, {
    nullable: true
  })
  where?: WebhooksWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WebhooksOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: WebhooksOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => WebhooksWhereUniqueInput, {
    nullable: true
  })
  cursor?: WebhooksWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [WebhooksScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "url" | "headers" | "create" | "retrieve" | "update" | "delete" | "publish" | "unpublish"> | undefined;
}
