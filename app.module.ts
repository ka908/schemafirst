import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'], // Load your schema files
      playground: false, // Disable the deprecated Apollo Playground
      plugins: [ApolloServerPluginLandingPageLocalDefault()], // Enable Apollo Sandbox
    }),
    BookModule,
  ],
})
export class AppModule {}
