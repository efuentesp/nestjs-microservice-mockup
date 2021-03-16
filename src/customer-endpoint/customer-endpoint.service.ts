import { Injectable, Logger } from '@nestjs/common';
import { CustomerLowDbRepository } from '../repository/lowbd/customer.lowdb.repository';
import { Customer } from 'src/repository/entity/customer.entity';
import { PostCustomerEntityDTO } from 'src/dto/post-customer.entity.dto';
import { PutCustomerEntityDTO } from 'src/dto/put-customer.entity.dto';

@Injectable()
export class CustomerEndpointService {
  private readonly logger = new Logger(CustomerEndpointService.name);

  constructor(private customerLowDbRepository: CustomerLowDbRepository) {}

  findAll(): Customer[] {
    return this.customerLowDbRepository.findAll();
  }

  findOne(filterCriteria: any): Customer {
    return this.customerLowDbRepository.findOne(filterCriteria);
  }

  create(postCustomerEntityDTO: PostCustomerEntityDTO) {
    this.customerLowDbRepository.insert(postCustomerEntityDTO);
  }

  update(filterCriteria: any, putCustomerEntityDTO: PutCustomerEntityDTO) {
    this.customerLowDbRepository.update(filterCriteria, putCustomerEntityDTO);
  }

  delete(filterCriteria: any) {
    this.customerLowDbRepository.delete(filterCriteria);
  }
}
