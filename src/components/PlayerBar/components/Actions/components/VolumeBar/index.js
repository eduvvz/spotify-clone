import React, { useState, useRef } from 'react';
import { VolumeUp } from '@material-ui/icons';
import useStyles from './styles';

const BarVolume = () => {
  const barVolumeEl = useRef(null);
  const [progressVolume, setProgressVolume] = useState('100%');
  const classes = useStyles({ indicationVolumeBarWidth: progressVolume });

  const onClickOrDragBarSong = (event) => {
    const x =
      event.pageX -
      barVolumeEl.current.getBoundingClientRect().left +
      window.scrollX;
    setProgressVolume(x);
  };

  return (
    <>
      <VolumeUp className={classes.controlSongIcons} />
      <div
        className={classes.volumeBar}
        ref={barVolumeEl}
        onClick={onClickOrDragBarSong}
        onDragLeave={onClickOrDragBarSong}
      >
        <div className={classes.indicationVolumeBar}>
          <div className={classes.indicator} id="indicator" />
        </div>
      </div>
    </>
  );
};

export default BarVolume;
