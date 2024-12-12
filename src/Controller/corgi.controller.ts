import { Controller, Get, Render } from "@nestjs/common";
import { CorgiService } from "src/Services/corgi.service";

@Controller('corgi')
export class CorgiController {
    constructor(private readonly corgiService: CorgiService) {}

    @Get()
    @Render("index")
    showCorgis() {
    const message = this.corgiService.getMessage();
    return { message };
    }
}


