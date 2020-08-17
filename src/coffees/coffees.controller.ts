import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

  @Get()
  findAll(@Query() paginationQuery, @Res() response) {
    const { limit, offset } = paginationQuery;
    response.status(200).send(`This action returns all coffees. Limit ${limit}, offset: ${offset}`);
  }

  /**
   * http://localhost:3000/coffees/13/1/2
   */
  @Get(':id/:ola/:oi')
  findOne(@Param() params) {
    return `This action returns #${params.id} #${params.ola} #${params.oi} coffee`;
  }

  /**
   * create(@Body('name) body) {}
   * Recebe apenas a variavel escrita no body, nesse caso, 'name'
   */
  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} coffee`;
  }
}
