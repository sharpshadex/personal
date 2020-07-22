import React from 'react';
import PropTypes from 'prop-types';
import { Container, Progress, SubTitle } from './styles';

function ProgressBar(props) {
  const {
    label, maxValue, minValue, value,
  } = props;
  return (
    <Container>
      <SubTitle>{label}</SubTitle>
      <Progress maxValue={maxValue} minValue={minValue} value={value} />
    </Container>
  );
}

ProgressBar.propTypes = {
  label: PropTypes.string,
  maxValue: PropTypes.number,
  minValue: PropTypes.number,
  value: PropTypes.number,
};

ProgressBar.defaultProps = {
  label: '',
  maxValue: 100,
  minValue: 0,
  value: 0,
};

export default ProgressBar;
