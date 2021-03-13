import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
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
    return this.customerEndpointService.findOne({ number: params.number });
  }

  @Post()
  create(@Body() postCustomerEntityDTO: PostCustomerEntityDTO) {
    this.logger.log(`POST /customer`);
    this.customerEndpointService.create(postCustomerEntityDTO);
  }

  @Put(':number')
  update(@Param() params, @Body() putCustomerEntityDTO: PutCustomerEntityDTO) {
    this.logger.log(`PUT /customer/${params.number}`);
    this.customerEndpointService.update(
      { number: params.number },
      putCustomerEntityDTO,
    );
  }

  @Delete(':number')
  delete(@Param() params) {
    this.logger.log(`DELETE /customer/${params.number}`);
    this.customerEndpointService.delete({ number: params.number });
  }
}
