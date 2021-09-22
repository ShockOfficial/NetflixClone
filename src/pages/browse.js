import React from 'react';
import { useContent } from '../hooks';
import { BrowseContainer } from '../containers/browse';
import selectionFilter from '../utils/selection-filter';

const Browse = () => {
  const { series } = useContent('series');
  const { films } = useContent('films');
  // we need slides

  const slides = selectionFilter({ series, films });
  // pass it to the browse container

  return <BrowseContainer slides={slides} />;
};
export default Browse;
