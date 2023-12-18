import { VolumeUp } from '@mui/icons-material';
import React from 'react';

type Props = {
  blob?: Blob
}

const AudioButton = React.memo(({blob}: Props)=> {
  const [ isError, setIsError ] = React.useState(false);

  const audioRef = React.useRef<HTMLAudioElement>(null);
  const playAudio = React.useCallback((blob?: Blob) => {
    if(blob){
      const url = URL.createObjectURL(blob);

      if(audioRef.current){
        audioRef.current.src = url;
        audioRef.current
        .play()
        .then(e => setIsError(false))
        .catch(e => setIsError(true))
      }
    }
  }, [audioRef]);

  return (
    <VolumeUp
      fontSize='large'
      color={isError ? 'error': 'primary'}
      onClick={()=> playAudio(blob)}
    />
  )
})

export { AudioButton }