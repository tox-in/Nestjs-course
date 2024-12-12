import { Controller, Get, Render } from "@nestjs/common";

@Controller('corgi')
export class CorgiController {
    @Get()
    @Render("index")
    showCorgis() {
    return { message: 'Corgis are the best!'};
    }
}


