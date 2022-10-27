import PropTypes from 'prop-types';

function ChildPropType({ firstName, lastName }) {
  return (
    <>
      <h1>
        {firstName}, {lastName}
      </h1>
    </>
  );
}

ChildPropType.prototype = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default ChildPropType;
