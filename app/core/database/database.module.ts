import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DrizzleProvider } from '@/core/providers/drizzle.provider';
import { RepositoriesModule } from '@/core/repositories/repositories.module';

@Global()
@Module({
  imports: [ConfigModule, RepositoriesModule],
  providers: [DrizzleProvider],
  exports: [DrizzleProvider, RepositoriesModule],
})
export class DatabaseModule {}
