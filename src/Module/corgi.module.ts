import { Module } from "@nestjs/common";
import { CorgiController } from "src/Controller/corgi.controller";
import { Corgi } from "src/Providers/corgi.provider";
import { Husky } from "src/Providers/husky.provider";
import { CorgiService } from "src/Services/corgi.service";

@Module({
    controllers: [CorgiController],
    providers: [CorgiService, Corgi, Husky],
})
export class CorgiModule {}