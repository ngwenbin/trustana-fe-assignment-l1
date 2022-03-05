export interface MockItem {
  prod_name: string;
  img: string;
  moq: number;
  price: number;
  unit: string;
}
  
export interface MockCatalog {
  items: MockItem[];
  prod_group: string;
}
  
export interface MockData {
  catalog_count: number;
  catalog: MockCatalog[];
}