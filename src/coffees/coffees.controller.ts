import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

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
  findOne(@Param('id') id: number) {
    console.log(typeof id);
    return this.coffeesService.findOne('' + id);
  }

  /**
   * create(@Body('name) body) {}
   * Recebe apenas a variavel escrita no body, nesse caso, 'name'
   */
  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    console.log(createCoffeeDto instanceof CreateCoffeeDto);
    return this.coffeesService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
