// src/Greeting.js

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchGreeting } from './redux/actions';

const Greeting = ({ greeting, fetchGreeting }) => {
  useEffect(() => {
    fetchGreeting();
  }, [fetchGreeting]);

  return (
    <div>
      <h1>{greeting || 'Loading...'}</h1>
    </div>
  );
};

Greeting.propTypes = {
  greeting: PropTypes.string,
  fetchGreeting: PropTypes.func.isRequired,
};

// Add defaultProps for the non-required prop
Greeting.defaultProps = {
  greeting: '', // You can set the default value as per your requirement
};

const mapStateToProps = (state) => ({
  greeting: state.greeting,
});

export default connect(mapStateToProps, { fetchGreeting })(Greeting);
