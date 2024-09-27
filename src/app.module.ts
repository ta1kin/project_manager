import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { DeveloperModule } from './developer/developer.module'
import { ProjectModule } from './project/project.module'
import { RoadmapModule } from './roadmap/roadmap.module'
import { TaskModule } from './task/task.module'
import { UserModule } from './user/user.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		ProjectModule,
		DeveloperModule,
		RoadmapModule,
		TaskModule,
		UserModule,
		AuthModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
