import { BaseModel } from './_base.model';
import { ProductSpecificationModel } from './product-specification.model';
import { ProductRemarkModel } from './product-remark.model';

export class ProductModel extends BaseModel {
	id: number;
	categcode: string;
	barcode: string;
	name: string;
	speci: string;
	band: string;
	origin: string;
	unit_pack: string;
	unit_stand: string;
	unitrate: number;
	isenable: number;

	_specs: ProductSpecificationModel[];
	_remarks: ProductRemarkModel[];

	clear() {
		this.categcode = '';
		this.barcode = '';
		this.name = '';
		this.speci = '';
		this.origin = '';
		this.unit_pack = '';
		this.unit_stand = '';
		this.unitrate = 1;
		this.isenable = 0;
		this.band = '';
	}
}
