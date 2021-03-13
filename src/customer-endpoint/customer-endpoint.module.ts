import { Module } from '@nestjs/common';

import { CustomerEndpointController } from './customer-endpoint.controller';
import { CustomerEndpointService } from './customer-endpoint.service';
import { CustomerLowDbRepository } from '../repository/lowbd/customer.lowdb.repository';

@Module({
  controllers: [CustomerEndpointController],
  providers: [CustomerEndpointService, CustomerLowDbRepository],
})
export class CustomerEndpointModule {}
