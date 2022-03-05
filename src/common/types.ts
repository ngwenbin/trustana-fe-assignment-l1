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

export interface spaceXSitesData {
  launch_date: number;
  mission_name: string;
  rocket: { rocket_name: string };
  launch_site: { site_name: string };
  links: { images: [string] };
}

export interface spaceXSite {
  data: spaceXSitesData[];
}

export interface spaceXGQL {
  data: {
    site1: spaceXSite;
    site2: spaceXSite;
    site3: spaceXSite;
  };
}

export interface spaceXGQLtemplate {
  alias: string;
  site_name: string;
  qty: number;
}
