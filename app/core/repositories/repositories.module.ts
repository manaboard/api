import { Module } from '@nestjs/common';
// Import repositórios quando você os criar
// import { UserRepository } from './user.repository';

@Module({
  providers: [
    // Liste seus repositórios aqui
    // UserRepository,
  ],
  exports: [
    // Exporte seus repositórios aqui
    // UserRepository,
  ],
})
export class RepositoriesModule {}