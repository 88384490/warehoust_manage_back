import { Module } from '@nestjs/common';
import { ProductOrderModule } from './product-order/product-order.module';
import { GoodsController } from './goods/goods.controller';
import { GoodsCategoryController } from './goods-category/goods-category.controller';
import { RoleController } from './role/role.controller';
import { WarehouseController } from './warehouse/warehouse.controller';
import { StoreController } from './store/store.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [ProductOrderModule, UserModule],
  controllers: [
    StoreController,
    GoodsController,
    GoodsCategoryController,
    RoleController,
    WarehouseController,
  ],
  providers: [],
})
export class AppModule {}
