import { Product } from './product';

export class DftProduct {
    dealId: number;
    productId: number;
    dealDiscount: number;
    dealStarts: Date;
    dealEnds: Date;
    sellerEmailId: string;
    errorMessage: string;
    successMessage: string;
    productList: Product;
}