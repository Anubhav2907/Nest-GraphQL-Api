/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from '@nestjs/graphql';

/* eslint-disable prettier/prettier */
@ObjectType()
export class Pet {
  @Field((type) => Int)
  id: number;
  @Field()
  name: string;
  @Field({ nullable: true })
  type?: string;
}
