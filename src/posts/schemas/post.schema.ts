import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

@Schema()
export class Post {
  @Prop()
  title: string

  @Prop()
  body: string
}

export type PostDocument = Post & Document

export const PostSchema = SchemaFactory.createForClass(Post)
