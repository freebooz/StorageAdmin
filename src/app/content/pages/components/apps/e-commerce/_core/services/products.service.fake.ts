import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, BehaviorSubject, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HttpUtilsService } from '../utils/http-utils.service';
import { ProductModel } from '../models/product.model';
import { QueryParamsModel } from '../models/query-models/query-params.model';
import { QueryResultsModel } from '../models/query-models/query-results.model';

const API_PRODUCTS_URL = 'http://119.28.180.72:3000/product/list';

@Injectable()
export class ProductsService {
	lastFilter$: BehaviorSubject<QueryParamsModel> = new BehaviorSubject(new QueryParamsModel({}, 'asc', '', 0, 10));

	constructor(private http: HttpClient,
		private httpUtils: HttpUtilsService) { }

	// CREATE =>  POST: add a new product to the server
	createProduct(product): any {
		const httpHeaders = this.httpUtils.getHTTPHeaders();

		this.http.get(API_PRODUCTS_URL).subscribe(
			res => {
				alert(res['data']);
				console.log(res);
			},
			err => {
				alert("error!");
				console.log(err);
			});

		console.log("------------------------------------------");
		// return this.http.post<ProductModel>(API_PRODUCTS_URL, product, { headers: httpHeaders });
		// return product;
	}

	// READ
	getAllProducts(): Observable<ProductModel[]> {
		return this.http.get<ProductModel[]>(API_PRODUCTS_URL);
	}

	getProductById(productId: number): Observable<ProductModel> {
		return this.http.get<ProductModel>(API_PRODUCTS_URL + `/${productId}`);
	}

	findProducts(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
		return this.getAllProducts().pipe(
			mergeMap(res => {
				const result = this.httpUtils.baseFilter(res, queryParams, ['status', 'condition']);
				return of(result);
			})
		);
	}

	// UPDATE => PUT: update the product on the server
	updateProduct(product: ProductModel): Observable<any> {
		// Note: Add headers if needed (tokens/bearer)
		const httpHeaders = this.httpUtils.getHTTPHeaders();
		return this.http.put(API_PRODUCTS_URL, product, { headers: httpHeaders });
	}

	// UPDATE Status
	// Comment this when you start work with real server
	// This code imitates server calls
	updateStatusForProduct(products: ProductModel[], status: number): Observable<any> {
		const tasks$ = [];
		for (let i = 0; i < products.length; i++) {
			const _product = products[i];
			_product.status = status;
			tasks$.push(this.updateProduct(_product));
		}
		return forkJoin(tasks$);
	}

	// DELETE => delete the product from the server
	deleteProduct(productId: number): Observable<ProductModel> {
		const url = `${API_PRODUCTS_URL}/${productId}`;
		return this.http.delete<ProductModel>(url);
	}

	deleteProducts(ids: number[] = []): Observable<any> {
		const tasks$ = [];
		const length = ids.length;
		for (let i = 0; i < length; i++) {
			tasks$.push(this.deleteProduct(ids[i]));
		}
		return forkJoin(tasks$);
	}
}
