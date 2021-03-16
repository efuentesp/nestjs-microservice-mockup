import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { Customer } from 'src/repository/entity/customer.entity';
import { CustomerEndpointService } from './customer-endpoint.service';
import { PostCustomerEntityDTO } from '../dto/post-customer.entity.dto';
import { PutCustomerEntityDTO } from 'src/dto/put-customer.entity.dto';

@Controller('customer')
export class CustomerEndpointController {
  private readonly logger = new Logger(CustomerEndpointController.name);

  constructor(private customerEndpointService: CustomerEndpointService) {}

  @Get()
  findAll(): Customer[] {
    this.logger.log(`GET /customer`);
    return this.customerEndpointService.findAll();
  }

  @Get(':number')
  findOne(@Param() params): Customer {
    this.logger.log(`GET /customer/${params.number}`);
    const result = this.customerEndpointService.findOne({
      number: params.number,
    });
    if (result == undefined) {
      throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() postCustomerEntityDTO: PostCustomerEntityDTO) {
    this.logger.log(`POST /customer`);
    this.customerEndpointService.create(postCustomerEntityDTO);
  }

  @Put(':number')
  update(@Param() params, @Body() putCustomerEntityDTO: PutCustomerEntityDTO) {
    this.logger.log(`PUT /customer/${params.number}`);
    const result = this.customerEndpointService.update(
      { number: params.number },
      putCustomerEntityDTO,
    );
    if (result == undefined) {
      throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':number')
  delete(@Param() params) {
    this.logger.log(`DELETE /customer/${params.number}`);
    const result = this.customerEndpointService.delete({
      number: params.number,
    });
    if (result == undefined) {
      throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
    }
  }
}
