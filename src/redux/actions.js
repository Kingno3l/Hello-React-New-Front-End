// src/redux/actions.js

import axios from 'axios';

export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';

export const fetchGreeting = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/random_greeting');
    dispatch({
      type: FETCH_GREETING_SUCCESS,
      payload: response.data.greeting,
    });
  } catch (error) {
    console.error('Error fetching greeting:', error);
  }
};
