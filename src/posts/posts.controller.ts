import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from "@nestjs/common"
import { UpdatePostDTO, CreatePostDTO } from "./dto"
import { PostsService } from "./posts.service"

@Controller("posts")
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll()
  }

  @Post()
  create(@Body() body: CreatePostDTO) {
    return this.postsService.create(body)
  }

  @Get(":id")
  findOneByID(@Param("id") id: string) {
    return this.postsService.findOneByID(id)
  }

  @Patch(":id")
  async updateOneByID(
    @Param("id") id: string,
    @Body() { title, body }: UpdatePostDTO
  ) {
    const changedPost = await this.postsService.findOneByID(id)
    if (title) changedPost.title = title
    if (body) changedPost.body = body
    return this.postsService.updateOneByID(id, changedPost)
  }

  @Delete(":id")
  deleteOneByID(@Param("id") id: string) {
    return this.postsService.deleteOneByID(id)
  }
}
