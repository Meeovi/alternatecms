import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerUpdateWithoutCommentsInput } from "../inputs/MediamanagerUpdateWithoutCommentsInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerUpdateWithWhereUniqueWithoutCommentsInput", {
  isAbstract: true
})
export class MediamanagerUpdateWithWhereUniqueWithoutCommentsInput {
  @TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput, {
    nullable: false
  })
  where!: MediamanagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediamanagerUpdateWithoutCommentsInput, {
    nullable: false
  })
  data!: MediamanagerUpdateWithoutCommentsInput;
}
