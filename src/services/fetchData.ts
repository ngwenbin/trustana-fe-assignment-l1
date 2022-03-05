import { spaceXGQL, spaceXGQLtemplate } from '../common/types';

let queryString = ``;
const endpoint = 'https://api.spacex.land/graphql/';
const headers = {
  'content-type': 'application/json',
  Authorization: '<token>'
};

const createQuery = (props: spaceXGQLtemplate) => {
  return `${props.alias}: launchesPastResult(find: {site_name: "${props.site_name}"}, limit: ${props.qty}) {
        data {
          launch_date_unix
          mission_name
          rocket {
            rocket_name
          }
          launch_site {
            site_name
          }
          links {
            flickr_images
          }
        }
      }`;
};

const fetchData = async (props: spaceXGQLtemplate[]) => {
  props.map((item) => {
    queryString += createQuery(item);
  });

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ query: `query {${queryString}}`, variables: {} })
  });
  const data: spaceXGQL | undefined = await response.json();
  if (!response.ok || !data) {
    throw new Error('Request error');
  }
  return data;
};

export default fetchData;
