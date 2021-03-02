import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { PostsModule } from "./posts/posts.module"
import { MongooseModule } from "@nestjs/mongoose"
import { ConfigModule } from "@nestjs/config"

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }),
    PostsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
