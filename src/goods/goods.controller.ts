import { Body, Controller, Get } from '@nestjs/common';
import { Goods } from '../dto/goods.dto';

@Controller('goods')
export class GoodsController {
  @Get('queryGoodsList')
  public queryGoodsList(@Body() body: Goods) {
    return body;
  }
}
