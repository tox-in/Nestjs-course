import { Injectable } from '@nestjs/common';
import { Dog } from 'src/Interface/dog.interface';

@Injectable()
export class Husky implements Dog {
  getBreed(): string {
    return 'Husky';
  }
}
