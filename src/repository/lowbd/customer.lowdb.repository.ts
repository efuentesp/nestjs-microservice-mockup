import { Logger } from '@nestjs/common';
import * as low from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
import { Customer } from 'src/repository/entity/customer.entity';

export class CustomerLowDbRepository {
  private readonly logger = new Logger(CustomerLowDbRepository.name);

  adapter = new FileSync('src/db/customer.json');
  db = low(this.adapter);

  constructor() {
    this.db.defaults({ customer: [] }).write();
  }

  findAll(): Customer[] {
    // this.logger.log(`CustomerLowDbRepository.find(${filterCriteria})`);

    return this.db.get('customer').value();
  }

  findOne(filterCriteria: any): Customer {
    return this.db.get('customer').find(filterCriteria).value();
  }

  findAllByFilter(filterCriteria: any): Customer[] {
    return this.db.get('customer').filter(filterCriteria).value();
  }

  insert(customer: Customer) {
    this.db.get('customer').push(customer).write();
  }

  update(filterCriteria: any, customer: Customer) {
    this.db.get('customer').find(filterCriteria).assign(customer).write();
  }

  delete(filterCriteria: any) {
    this.db.get('customer').remove(filterCriteria).write();
  }
}
