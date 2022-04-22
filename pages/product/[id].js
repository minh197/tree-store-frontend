import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import SingleProduct from '../../components/SingleProduct';

export default function SingleProdutPage({ query }) {
  return <SingleProduct id={query.id} />;
}
