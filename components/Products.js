import { useQuery } from '@apollo/client';
// turn text into a graphql query
import gql from 'graphql-tag';

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Products() {
  // usequery is a hook
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  console.log(data, error, loading);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>error!! {error.message}</p>;
  return (
    <div>
      <div>
        {data.allProducts.map((product) => (
          <p key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
