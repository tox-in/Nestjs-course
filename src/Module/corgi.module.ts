import { Module } from "@nestjs/common";
import { CorgiController } from "src/Controller/corgi.controller";
import { CorgiService } from "src/Services/corgi.service";

@Module({
    controllers: [CorgiController],
    providers: [CorgiService],
})
export class CorgiModule {}