import { Module } from '@nestjs/common';
import { CustomerEndpointModule } from './customer-endpoint/customer-endpoint.module';
import { PurchaseOrderEndpointModule } from './purchase-order-endpoint/purchase-order-endpoint.module';

@Module({
  imports: [CustomerEndpointModule, PurchaseOrderEndpointModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
