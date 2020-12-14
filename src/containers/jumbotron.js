import React, { useState, useEffect } from 'react';
import { useThemeModeValue } from '../context';
import jumboData from '../fixtures/jumbo';
import { Jumbotron } from '../components';

export const JumbotronContainer = () => {
  const [device, setDevice] = useState('');
  const { theme } = useThemeModeValue();

  useEffect(() => {
    const width = window.innerWidth;
    width > 800 ? setDevice('desktop') : setDevice('phone');
  }, [window.innerWidth]);

  return (
    <Jumbotron.Container>
      {jumboData.map((item) => {
        if (item.id === 1 && device.length > 0) {
          return (
            <Jumbotron.CenterPane key={item.id}>
              <Jumbotron.CenterImage
                id="device"
                src={
                  theme === 'light'
                    ? device === 'desktop'
                      ? item.light.desktop
                      : item.light.phone
                    : item.light.phone
                    ? device === 'desktop'
                      ? item.light.desktop
                      : item.dark.phone
                    : item.dark.phone
                }
                alt={item.alt}
                loading="lazy"
              />
            </Jumbotron.CenterPane>
          );
        } else {
          return (
            <Jumbotron Jumbotron key={item.id} direction={item.direction}>
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
          );
        }
      })}
    </Jumbotron.Container>
  );
};
