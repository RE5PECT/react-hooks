import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [state, setState] = useState(initialState);
};
