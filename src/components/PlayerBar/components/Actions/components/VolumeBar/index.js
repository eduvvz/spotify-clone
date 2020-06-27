import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VolumeUp } from '@material-ui/icons';
import { updateVolume } from '../../../../../../redux/actions';
import useStyles from './styles';

const BarVolume = () => {
  const dispatch = useDispatch();
  const { volume } = useSelector((state) => state.song.controls);
  const volumeBarEl = useRef(null);
  const [progressVolume, setProgressVolume] = useState('100%');
  const classes = useStyles({ indicationVolumeBarWidth: progressVolume });

  const onClickOrDragBarSong = (event) => {
    const volumeBarWidth = volumeBarEl.current.offsetWidth;
    const x =
      event.pageX -
      volumeBarEl.current.getBoundingClientRect().left +
      window.scrollX;
    const newVolumePorcentage = (x * 100) / volumeBarWidth;
    const newVolume = (newVolumePorcentage / 100) * 1;
    dispatch(updateVolume(newVolume));
  };

  useEffect(() => {
    const volumeBarWidth = volumeBarEl.current.offsetWidth;
    const volumePorcentage = ((volume * 100) / 1).toFixed(3);
    setProgressVolume((volumePorcentage / 100) * volumeBarWidth);
  }, [volume]);

  return (
    <>
      <VolumeUp className={classes.controlSongIcons} />
      <div
        className={classes.volumeBar}
        ref={volumeBarEl}
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
