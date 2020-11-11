import React from 'react';
import jumboData from '../fixtures/jumbo';
import { Jumbotron } from '../components';

export const JumbotronContainer = () => {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image
              float={item.direction === 'row' ? 'right' : 'left'}
              src={item.image}
              alt={item.alt}
              loading="lazy"
            />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
};
