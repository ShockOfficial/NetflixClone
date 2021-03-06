/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Overlay, Inner, Close } from './styles/player';

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ myOwn = false, src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay
          {...restProps}
          onClick={() => setShowPlayer(false)}
          data-testid="player"
        >
          {myOwn ? (
            <Inner>
              <iframe
                width="944"
                height="540"
                src="https://www.youtube.com/embed/TLlpo0r2ld4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Inner>
          ) : (
            <Inner>
              <video id="netflix-player" controls>
                <source src={src} type="video/mp4" />
              </video>
              <Close />
            </Inner>
          )}
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button
      onClick={() => setShowPlayer((prevState) => !prevState)}
      {...restProps}
    >
      Play
    </Button>
  );
};
