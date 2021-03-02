import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { Post, PostDocument } from "./schemas/post.schema"

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<PostDocument>
  ) {}

  async findAll() {
    return await this.postModel.find()
  }

  async findOneByID(id: string) {
    return await this.postModel.findById(id)
  }

  async create(post: Post) {
    return await this.postModel.create(post)
  }

  async updateOneByID(id: string, changedPost: Post) {
    return await this.postModel.findByIdAndUpdate(id, changedPost, {
      new: true
    })
  }

  async deleteOneByID(id: string) {
    return await this.postModel.findByIdAndRemove(id)
  }
}
