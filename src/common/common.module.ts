import { Global, Module } from '@nestjs/common';
import { EnvServiceModule } from './services/env/env-service.module';

@Global()
@Module({
  imports: [EnvServiceModule],
  providers: [],
  exports: [EnvServiceModule],
})
export class CommonModule {}
