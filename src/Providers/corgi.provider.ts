import { Injectable } from '@nestjs/common';
import { Dog } from 'src/Interface/dog.interface';

@Injectable()
export class Corgi implements Dog {
  getBreed(): string {
    return 'Corgi';
  }
}
