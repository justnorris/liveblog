import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ contentState, block }) => {
  const { src } = contentState.getEntity(block.getEntityAt(0)).getData();

  const startDrag = (event) => {
    event.dataTransfer.dropEffect = 'move'; // eslint-disable-line no-param-reassign
    event.dataTransfer.setData('type', 'image');
    event.dataTransfer.setData('key', block.getKey());
  };

  return (
    <img
      src={src}
      onDragStart={startDrag}
      role="presentation"
    />
  );
};

Image.propTypes = {
  contentState: PropTypes.object,
  block: PropTypes.object,
};

export default Image;
