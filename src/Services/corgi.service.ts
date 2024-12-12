import { Injectable } from "@nestjs/common";

@Injectable()
export class CorgiService {
    getMessage(): string {
        return 'Exploring the World with Corgis!'
    }
}