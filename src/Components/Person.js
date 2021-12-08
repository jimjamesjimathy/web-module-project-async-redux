import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPerson } from '../Actions';

const Person = (props) => {
  const { person, isFetching, error } = props;

  useEffect(() => {
    props.getPerson()
  }, [])
  
  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching person for ya!</h2>;
  }

  const handleClick = () => {
    props.getPerson();
  }

  return (
    <div className='person-display'>
      <div>
        <div className='img-wrap'>
        <img src={person.picture.large}/>
        </div>
        <br />
        <h2>Say Hi to: {person.name.first} {person.name.last}</h2>
      </div>
      <button onClick={handleClick}>Get new person</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    person: state.person,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getPerson })(Person);