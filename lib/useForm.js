import { useEffect, useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for our inputs
  // state gonna be object with mutiple fields
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join('');

  useEffect(() => {
    // this function runs when the things when we watching change
    setInputs(initial);
  }, [initialValues]);

  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      // give me the first thing out of the e.target.files array and stick that thing to our value
      [value] = e.target.files;
    }
    // set the first item of the array to be the file

    setInputs({
      // copy the existing state
      ...inputs,
      [name]: value,
    });
  }
  function resetForm() {
    setInputs(initial);
  }
  // how do you take an object and loop over all the properties
  // and set them to be nothing
  // use Object.fromEntries to turn the array to object
  // essentailly, we turn it into an array, map over it set the value to null on each
  // and we turn it back to an object

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }
  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
