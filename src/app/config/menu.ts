// tslint:disable-next-line:no-shadowed-variable
import { ConfigModel } from '../core/interfaces/config';

// tslint:disable-next-line:no-shadowed-variable
export class MenuConfig implements ConfigModel {
	public config: any = {};

	constructor() {
		this.config = {
			header: {
				self: {},
				items: [
					{
						title: 'Actions',
						root: true,
						icon: 'flaticon-add',
						toggle: 'click',
						translate: 'MENU.ACTIONS',
						submenu: {
							type: 'classic',
							alignment: 'left',
							items: [
								{
									title: 'Create New Post',
									page: '/header/actions',
									icon: 'flaticon-file',
									translate: 'MENU.CREATE_POST',
									aside: {
										self: {
											bullet: 'dot'
										},
										items: [
											{
												section: 'Departments'
											},
											{
												title: 'Resources',
												desc: '',
												icon: 'flaticon-layers',
												bullet: 'dot',
												root: true,
												submenu: [
													{
														title: 'Create New Post',
														page: '/header/actions',
													},
													{
														title: 'Timesheet',
														tooltip: 'Non functional dummy link',
													},
													{
														title: 'Payroll',
														tooltip: 'Non functional dummy link',
													},
													{
														title: 'Contacts',
														tooltip: 'Non functional dummy link',
													}
												]
											}
										]
									}
								},
								{
									title: 'Generate Reports',
									tooltip: 'Non functional dummy link',
									icon: 'flaticon-diagram',
									badge: {
										type: 'm-badge--success',
										value: '2'
									},
								},
								{
									title: 'Manage Orders',
									icon: 'flaticon-business',
									submenu: {
										type: 'classic',
										alignment: 'right',
										bullet: 'line',
										items: [
											{
												title: 'Latest Orders',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Pending Orders',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Processed Orders',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Delivery Reports',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Payments',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Customers',
												tooltip: 'Non functional dummy link',
												icon: '',
											}
										]
									}
								},
								{
									title: 'Customer Feedbacks',
									page: '/#',
									icon: 'flaticon-chat-1',
									submenu: {
										type: 'classic',
										alignment: 'right',
										bullet: 'dot',
										items: [
											{
												title: 'Customer Feedbacks',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Supplier Feedbacks',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Reviewed Feedbacks',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Resolved Feedbacks',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Feedback Reports',
												tooltip: 'Non functional dummy link',
												icon: '',
											}
										]
									}
								},
								{
									title: 'Register Member',
									tooltip: 'Non functional dummy link',
									icon: 'flaticon-users',
								}
							]
						}
					},
					{
						title: 'Reports',
						root: true,
						icon: 'flaticon-line-graph',
						toggle: 'click',
						translate: 'MENU.REPORTS',
						submenu: {
							type: 'mega',
							width: '1000px',
							alignment: 'left',
							columns: [
								{
									heading: {
										heading: true,
										title: 'Finance Reports',
									},
									items: [
										{
											title: 'Annual Reports',
											tooltip: 'Non functional dummy link',
											icon: 'flaticon-map',
										},
										{
											title: 'HR Reports',
											tooltip: 'Non functional dummy link',
											icon: 'flaticon-user',
										},
										{
											title: 'IPO Reports',
											tooltip: 'Non functional dummy link',
											icon: 'flaticon-clipboard',
										},
										{
											title: 'Finance Margins',
											tooltip: 'Non functional dummy link',
											icon: 'flaticon-graphic-1',
										},
										{
											title: 'Revenue Reports',
											tooltip: 'Non functional dummy link',
											icon: 'flaticon-graphic-2',
										}
									]
								},
								{
									bullet: 'line',
									heading: {
										heading: true,
										title: 'Project Reports',
									},
									items: [
										{
											title: 'Coca Cola CRM',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title:
												'Delta Airlines Booking Site',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Malibu Accounting',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Vineseed Website Rewamp',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Zircon Mobile App',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Mercury CMS',
											tooltip: 'Non functional dummy link',
											icon: '',
										}
									]
								},
								{
									bullet: 'dot',
									heading: {
										heading: true,
										title: 'HR Reports',
									},
									items: [
										{
											title: 'Staff Directory',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Client Directory',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Salary Reports',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Staff Payslips',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Corporate Expenses',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Project Expenses',
											tooltip: 'Non functional dummy link',
											icon: '',
										}
									]
								},
								{
									heading: {
										heading: true,
										title: 'Reporting Apps',
										icon: '',
									},
									items: [
										{
											title: 'Report Adjusments',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Sources & Mediums',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Reporting Settings',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Conversions',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Report Flows',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Audit & Logs',
											tooltip: 'Non functional dummy link',
											icon: '',
										}
									]
								}
							]
						}
					},
					{
						title: 'Apps',
						root: true,
						icon: 'flaticon-paper-plane',
						toggle: 'click',
						translate: 'MENU.APPS',
						badge: {
							type: 'm-badge--brand m-badge--wide',
							value: 'new',
							translate: 'MENU.NEW',
						},
						submenu: {
							type: 'classic',
							alignment: 'left',
							items: [
								{
									title: 'eCommerce',
									tooltip: 'Non functional dummy link',
									icon: 'flaticon-business',
									submenu: {
										type: 'classic',
										alignment: 'right',
										items: [
											{
												title: 'Customers',
												page: '/ecommerce/customers',
												icon: 'flaticon-users',
											},
											{
												title: 'Orders',
												page: '/ecommerce/orders',
												icon: 'flaticon-interface-1',
											},
											{
												title: 'Products',
												page: '/ecommerce/products',
												icon: 'flaticon-list-1',
											}
										]
									}
								},
								{
									title: 'Audience',
									page: '/crud/datatable_v1',
									icon: 'flaticon-computer',
									submenu: {
										type: 'classic',
										alignment: 'right',
										items: [
											{
												title: 'Active Users',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-users',
											},
											{
												title: 'User Explorer',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-interface-1',
											},
											{
												title: 'Users Flows',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-lifebuoy',
											},
											{
												title: 'Market Segments',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-graphic-1',
											},
											{
												title: 'User Reports',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-graphic',
											}
										]
									}
								},
								{
									title: 'Marketing',
									tooltip: 'Non functional dummy link',
									icon: 'flaticon-map',
								},
								{
									title: 'Campaigns',
									tooltip: 'Non functional dummy link',
									icon: 'flaticon-graphic-2',
									badge: {
										type: 'm-badge--success',
										value: '3'
									}
								},
								{
									title: 'Cloud Manager',
									tooltip: 'Non functional dummy link',
									icon: 'flaticon-infinity',
									submenu: {
										type: 'classic',
										alignment: 'left',
										items: [
											{
												title: 'File Upload',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-add',
												badge: {
													type: 'm-badge--danger',
													value: '3'
												}
											},
											{
												title: 'File Attributes',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-signs-1',
											},
											{
												title: 'Folders',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-folder',
											},
											{
												title: 'System Settings',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-cogwheel-2',
											}
										]
									}
								}
							]
						}
					}
				]
			},
			aside: {
				self: {},
				items: [
					{ section: '业务数据统计分析' },
					{
						title: '业务数据概要',
						desc: '信息摘要信息',
						root: true,
						icon: 'flaticon-line-graph',
						page: '/',
						badge: { type: 'm-badge--danger', value: '2' },
						translate: 'MENU.DASHBOARD'
					},
					{ section: '商品业务经营管理' },
					{
						title: '商品信息管理',
						bullet: 'dot',
						icon: 'flaticon-business',
						root: true,
						submenu: [
							{
								title: '商品类目信息',
								page: '/ecommerce/products'
							},
							{
								title: '商品档案信息',
								page: '/ecommerce/products'
							},
							{
								title: '商品销售定价',
								page: '/ecommerce/products'
							},							
						]
					},
					{
						title: '商品业务经营',
						bullet: 'dot',
						icon: 'flaticon-business',
						root: true,
						submenu: [
							{
								title: '供应商信息',
								page: '/ecommerce/orders'
							},
							{
								title: '商品采购单',
								page: '/ecommerce/products'
							},
							{
								title: '商品采购退货单',
								page: '/ecommerce/products'
							},
							{
								title: '商务客户信息',
								page: '/ecommerce/customers'
							},
							{
								title: '商品订购单',
								page: '/ecommerce/products'
							},
							{
								title: '商品销售单',
								page: '/ecommerce/products'
							},
							{
								title: '商品销售退货单',
								page: '/ecommerce/products'
							},
						]
					},
					{
						title: '商品库房管理',
						bullet: 'dot',
						icon: 'flaticon-business',
						root: true,
						submenu: [
							{
								title: '存货仓库信息',
								page: '/ecommerce/customers'
							},
							{
								title: '商品入库单',
								page: '/ecommerce/orders'
							},
							{
								title: '商品调拨单',
								page: '/ecommerce/products'
							},
							{
								title: '商品出库单',
								page: '/ecommerce/products'
							},
							{
								title: '商品账面库存',
								page: '/ecommerce/products'
							},
							{
								title: '商品盘点单',
								page: '/ecommerce/products'
							},
						]
					},
					{
						title: '经营账务管理',
						bullet: 'dot',
						icon: 'flaticon-business',
						root: true,
						submenu: [
							{
								title: '经营账期管理',
								page: '/ecommerce/products'
							},							
							{
								title: '盘点损溢调账单',
								page: '/ecommerce/products'
							},
							{
								title: '进销存报表',
								page: '/ecommerce/products'
							},
							{
								title: '进销差价报表',
								page: '/ecommerce/products'
							},
							{
								title: '经营成本核算表',
								page: '/ecommerce/products'
							},
							{
								title: '经营利润报表',
								page: '/ecommerce/products'
							},							
							{
								title: '账期库存结转',
								page: '/ecommerce/products'
							},
						]
					},
					{ section: '系统运行支撑基础' },
					{
						title: '应用基础配置',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-interface-1',
						submenu: [
							{
								title: '业务数据定义',
								page: '/ecommerce/products'
							},
							{
								title: '运行参数设置',
								page: '/profile'
							},
							{
								title: '页面布局设置',
								page: '/builder'
							},
						]
					},
					{
						title: '账号权限授权',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-interface-1',
						submenu: [
							{
								title: '用户账号管理',
								page: '/profile'
							},
							{
								title: '用户角色管理',
								page: '/profile'
							},
							{
								title: '角色权限管理',
								page: '/profile'
							},
						]
					},
					{ section: '开发组件参考' },
					{
						title: 'Google Material',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-interface-7',
						submenu: [
							{
								title: 'Form Controls',
								bullet: 'dot',
								submenu: [
									{
										title: 'Auto Complete',
										page: '/material/form-controls/autocomplete'
									},
									{
										title: 'Checkbox',
										page: '/material/form-controls/checkbox'
									},
									{
										title: 'Radio Button',
										page: '/material/form-controls/radiobutton'
									},
									{
										title: 'Datepicker',
										page: '/material/form-controls/datepicker'
									},
									{
										title: 'Form Field',
										page: '/material/form-controls/formfield'
									},
									{
										title: 'Input',
										page: '/material/form-controls/input'
									},
									{
										title: 'Select',
										page: '/material/form-controls/select'
									},
									{
										title: 'Slider',
										page: '/material/form-controls/slider'
									},
									{
										title: 'Slider Toggle',
										page:
											'/material/form-controls/slidertoggle'
									}
								]
							},
							{
								title: 'Navigation',
								bullet: 'dot',
								submenu: [
									{
										title: 'Menu',
										page: '/material/navigation/menu'
									},
									{
										title: 'Sidenav',
										page: '/material/navigation/sidenav'
									},
									{
										title: 'Toolbar',
										page: '/material/navigation/toolbar'
									}
								]
							},
							{
								title: 'Layout',
								bullet: 'dot',
								submenu: [
									{
										title: 'Card',
										page: '/material/layout/card'
									},
									{
										title: 'Divider',
										page: '/material/layout/divider'
									},
									{
										title: 'Expansion panel',
										page: '/material/layout/expansion-panel'
									},
									{
										title: 'Grid list',
										page: '/material/layout/grid-list'
									},
									{
										title: 'List',
										page: '/material/layout/list'
									},
									{
										title: 'Tabs',
										page: '/material/layout/tabs'
									},
									{
										title: 'Stepper',
										page: '/material/layout/stepper'
									},
									{
										title: 'Default Forms',
										page: '/material/layout/default-forms'
									},
									{
										title: 'Tree',
										page: '/material/layout/tree'
									}
								]
							},
							{
								title: 'Buttons & Indicators',
								bullet: 'dot',
								submenu: [
									{
										title: 'Button',
										page:
											'/material/buttons-and-indicators/button'
									},
									{
										title: 'Button toggle',
										page:
											'/material/buttons-and-indicators/button-toggle'
									},
									{
										title: 'Chips',
										page:
											'/material/buttons-and-indicators/chips'
									},
									{
										title: 'Icon',
										page:
											'/material/buttons-and-indicators/icon'
									},
									{
										title: 'Progress bar',
										page:
											'/material/buttons-and-indicators/progress-bar'
									},
									{
										title: 'Progress spinner',
										page:
											'/material/buttons-and-indicators/progress-spinner'
									}
								]
							},
							{
								title: 'Popups & Modals',
								bullet: 'dot',
								submenu: [
									{
										title: 'Bottom sheet',
										page:
											'/material/popups-and-modals/bottom-sheet'
									},
									{
										title: 'Dialog',
										page:
											'/material/popups-and-modals/dialog'
									},
									{
										title: 'Snackbar',
										page:
											'/material/popups-and-modals/snackbar'
									},
									{
										title: 'Tooltip',
										page:
											'/material/popups-and-modals/tooltip'
									}
								]
							},
							{
								title: 'Data table',
								bullet: 'dot',
								submenu: [
									{
										title: 'Paginator',
										page: '/material/data-table/paginator'
									},
									{
										title: 'Sort header',
										page: '/material/data-table/sort-header'
									},
									{
										title: 'Table',
										page: '/material/data-table/table'
									}
								]
							}
						]
					},
					{
						title: 'Ng-Bootstrap',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-web',
						submenu: [
							{
								title: 'Accordion',
								page: '/ngbootstrap/accordion'
							},
							{
								title: 'Alert',
								page: '/ngbootstrap/alert'
							},
							{
								title: 'Buttons',
								page: '/ngbootstrap/buttons'
							},
							{
								title: 'Carousel',
								page: '/ngbootstrap/carousel'
							},
							{
								title: 'Collapse',
								page: '/ngbootstrap/collapse'
							},
							{
								title: 'Datepicker',
								page: '/ngbootstrap/datepicker'
							},
							{
								title: 'Dropdown',
								page: '/ngbootstrap/dropdown'
							},
							{
								title: 'Modal',
								page: '/ngbootstrap/modal'
							},
							{
								title: 'Pagination',
								page: '/ngbootstrap/pagination'
							},
							{
								title: 'Popover',
								page: '/ngbootstrap/popover'
							},
							{
								title: 'Progressbar',
								page: '/ngbootstrap/progressbar'
							},
							{
								title: 'Rating',
								page: '/ngbootstrap/rating'
							},
							{
								title: 'Tabs',
								page: '/ngbootstrap/tabs'
							},
							{
								title: 'Timepicker',
								page: '/ngbootstrap/timepicker'
							},
							{
								title: 'Tooltips',
								page: '/ngbootstrap/tooltip'
							},
							{
								title: 'Typehead',
								page: '/ngbootstrap/typehead'
							}
						]
					},
					{
						title: 'Metronic',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-interface-8',
						submenu: [
							{
								title: 'Accordion',
								page: '/metronic/accordion'
							},
							{
								title: 'Sticky Form Actions',
								page: '/metronic/sticky-form-actions'
							},
							{
								title: 'Forms',
								page: '/metronic/forms'
							}
						]
					}
				]
			}
		};
	}
}