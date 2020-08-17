import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {

  constructor(
    private readonly coffeesService: CoffeesService,
  ) {
  }


  @Get()
  findAll() {
    return this.coffeesService.findAll();
  }

  /**
   * http://localhost:3000/coffees/13/1/2
   */
  // @Get(':id/:ola/:oi')
  // findOne(@Param() params) {
  //   return `This action returns #${params.id} #${params.ola} #${params.oi} coffee`;
  // }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  /**
   * create(@Body('name) body) {}
   * Recebe apenas a variavel escrita no body, nesse caso, 'name'
   */
  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return this.coffeesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coffeesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
