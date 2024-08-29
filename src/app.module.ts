import { Module } from '@nestjs/common';
import { ProductOrderModule } from './product-order/product-order.module';
import { GoodsController } from './goods/goods.controller';
import { GoodsCategoryController } from './goods-category/goods-category.controller';
import { UserController } from './user/user.controller';
import { RoleController } from './role/role.controller';
import { WarehouseController } from './warehouse/warehouse.controller';
import { StoreController } from './store/store.controller';

@Module({
  imports: [ProductOrderModule],
  controllers: [
    StoreController,
    GoodsController,
    GoodsCategoryController,
    UserController,
    RoleController,
    WarehouseController,
  ],
  providers: [],
})
export class AppModule {}
