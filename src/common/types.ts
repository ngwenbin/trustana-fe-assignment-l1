export interface MockItem {
  /** Product name   */ prod_name: string;
  /** Path of image   */ img: string;
  /** MOQ number   */ moq: number;
  /** Product price   */ price: number;
  /** Product unit   */ unit: string;
}

export interface MockCatalog {
  /** Array of MockItem objects   */ items: MockItem[];
  /** Name of catalog group   */ prod_group: string;
}

export interface MockData {
  /** Total catalog count   */ catalog_count: number;
  /** Array of MockCatalog objects   */ catalog: MockCatalog[];
}

export interface spaceXSitesData {
  /** UNIX timestamp of launch   */ launch_date_unix: string;
  /** Launch mission name   */ mission_name: string;
  /** Rocket name   */ rocket: { rocket_name: string };
  /** Launch site   */ launch_site: { site_name: string };
  /** Object containing array of image urls */
  links: {
    flickr_images: [string | undefined];
  };
}

export interface spaceXSite {
  /** Array of spaceXSitesData   */
  data: spaceXSitesData[];
}

export interface spaceXGQL {
  /** Dynamic keys of spaceXSite objects   */
  [data: string]: spaceXSite[];
}

export interface spaceXGQLtemplate {
  /** Alias for Graphql identical requests   */
  alias: string;
  /** Launch site name query*/
  site_name: string;
  /** Limit of requests   */
  qty: number;
}
