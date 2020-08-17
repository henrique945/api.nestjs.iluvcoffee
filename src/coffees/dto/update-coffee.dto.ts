import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

/**
 * Utiliza todos os campos e lógica do CreateCoffeeDto + opcional
 */
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {

}
