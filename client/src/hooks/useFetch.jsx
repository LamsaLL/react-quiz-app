import { useEffect, useReducer } from 'react';

const initialState = {
  data: [],
  loading: '',
  error: '',
};

const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'DATA_FETCH_START':
      return { ...state, loading: 'yes' };
    case 'DATA_FETCH_FAILURE':
      return { ...state, loading: '', error: action.payload };
    case 'DATA_FETCH_SUCCESS':
      return { ...state, loading: '', data: action.payload };
    default:
      return state;
  }
};

const useFetch = (endpoint, version, options = {}) => {
  const [data, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'DATA_FETCH_START' });

    fetch(endpoint, options)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((json) => {
        dispatch({ type: 'DATA_FETCH_SUCCESS', payload: json });
      })
      .catch((error) => {
        dispatch({ type: 'DATA_FETCH_FAILURE', payload: error.message });
      });
  }, [version]);

  return data;
};

export default useFetch;
