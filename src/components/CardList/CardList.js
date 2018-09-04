import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'react-emotion';
import moment from 'moment';
import 'moment/locale/it';

import Card from '../Card/Card.js'
import withEvents from '../../hoc/withEvents';

class CardList extends Component {
  
  render() {

      const Container = styled('div')`
        width: 100%;
        display: flex;
        flex-direction:column;
        margin-bottom: 11vh;
      `

      const cardList = this.props.events.map(e =>  {
        const date = moment(e.start).locale('it').format("LLL");
        const image = `https://api.dancel.li/${e.image.url}`
        return (
          <Link 
            to={`/eventi/${e.id}`}
            key={e.id}>
            <Card
              title={e.name}
              date={date}
              backgroundImage={image}
              location={e.place}
            />
          </Link>
        )});
         
      return (
        <Container>
          { cardList }
        </Container>
      ); 
    }
    
}

export default withEvents(CardList);
