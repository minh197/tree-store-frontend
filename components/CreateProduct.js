import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
import Form from './styles/Form';
import { ALL_PRODUCTS_QUERY } from './Products';
// Note for the photo
// go ahead and create the photo but also create the item behind the scene
const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    #which variables are getting passed in? And what types are they?
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;

export default function CreateProduct() {
  // the way that hooking up state to a form input works is usually something like this
  // react is very strict on one single source of truth
  // if you have state in an input and you change that input
  // you have your state in two places
  // in react you need to listen to an on change input and when that happens
  // you need to intercept what the user had typed and put in back to state
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: 'minh nguyen',
    price: 5000,
    description: 'Need a lot of sunshine',
  });
  // this is a function that is bound to this whole mutation
  // and when we run it, it will go off to the back-end and runs it for us
  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
      // this is called refetching query
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    }
  );
  return (
    // a field set is a way for you ro group multiple fields
    <Form
      onSubmit={async (e) => {
        // stop the form from putting the info the url
        e.preventDefault();
        console.log(inputs);
        // submit the inputfields to the backend
        const res = await createProduct();
        clearForm();
        // Go to that product's page
        Router.push({
          pathname: `product/${res.data.createProduct.id}`,
        });
      }}
    >
      <DisplayError error={error} />

      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="image">
          Image
          <input
            required
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
      </fieldset>

      <button type="submit">Create New Product :)</button>
    </Form>
  );
}
