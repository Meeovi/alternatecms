import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgreementsUpdateOneWithoutMediamanagerInput } from "../inputs/AgreementsUpdateOneWithoutMediamanagerInput";
import { BrandsUpdateOneWithoutMediamanagerInput } from "../inputs/BrandsUpdateOneWithoutMediamanagerInput";
import { CommentsUpdateOneWithoutMediamanagerInput } from "../inputs/CommentsUpdateOneWithoutMediamanagerInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductsUpdateOneWithoutMediamanagerInput } from "../inputs/ProductsUpdateOneWithoutMediamanagerInput";
import { TasksUpdateOneWithoutMediamanagerInput } from "../inputs/TasksUpdateOneWithoutMediamanagerInput";
import { UsersUpdateOneWithoutMediamanagerInput } from "../inputs/UsersUpdateOneWithoutMediamanagerInput";

@TypeGraphQL.InputType("MediamanagerUpdateWithoutCustomersInput", {
  isAbstract: true
})
export class MediamanagerUpdateWithoutCustomersInput {
  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  media?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  keywords?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  tags?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  expiration_date?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  copyright?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  dimensions?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  content_type?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  versions?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  watermark_name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  watermark_description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  watermark_media?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  albums?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  workspace?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  task_description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  task_type?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AgreementsUpdateOneWithoutMediamanagerInput, {
    nullable: true
  })
  agreements_agreementsTomediamanager?: AgreementsUpdateOneWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => BrandsUpdateOneWithoutMediamanagerInput, {
    nullable: true
  })
  brands_brandsTomediamanager?: BrandsUpdateOneWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => CommentsUpdateOneWithoutMediamanagerInput, {
    nullable: true
  })
  comments?: CommentsUpdateOneWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpdateOneWithoutMediamanagerInput, {
    nullable: true
  })
  users?: UsersUpdateOneWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateOneWithoutMediamanagerInput, {
    nullable: true
  })
  products_mediamanagerToproducts?: ProductsUpdateOneWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => TasksUpdateOneWithoutMediamanagerInput, {
    nullable: true
  })
  tasks?: TasksUpdateOneWithoutMediamanagerInput | undefined;
}