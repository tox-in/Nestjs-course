import { Controller, Get, Render } from "@nestjs/common";
import { CorgiService } from "src/Services/corgi.service";

@Controller('corgi')
export class CorgiController {
    constructor(private readonly corgiService: CorgiService) {}

    @Get('compare')
    @Render("index")
    compareDogs() {
    const comparison = this.corgiService.compareDogs();
    return { message: comparison };
    }
}


