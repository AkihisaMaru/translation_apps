import { VolumeUp } from '@mui/icons-material';
import { Box, CardContent, Divider, Card as MuiCard, Typography } from '@mui/material';
import React from 'react';
import { AudioButton } from '../button';
import { Select } from '../select';
import { LanguageListUnion } from '../../const/language';


type Props = {
  title: string;
  children: React.ReactNode;
  blob?: Blob
  callback: React.Dispatch<React.SetStateAction<LanguageListUnion | null>>;
}


const Card = React.memo(({title, children, blob, callback}: Props) => {

  return (
    <MuiCard sx={{width: '100%', height: '100%', boxShadow: 4, display: 'flex'}}>
      <CardContent sx={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
        <Box display="flex" flexDirection="column" gap="8px" height="100%">
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Typography variant="h5" component="div">
                {title}
            </Typography>
            <Box width={160} bgcolor='red'>
              <Select callback={callback}/>
            </Box>
          </Box>

          <Divider />

          <Box
            display="flex"
            flex={1}
            flexDirection="row"
            justifyContent="space-between"
            gap="8px"
            bgcolor='pink'
            margin='8px'
          >
            <Typography variant='body1'>{children}</Typography>
          
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              width="40px"
            >
              {
                blob ? (<AudioButton blob={blob}/>): (<div />)
              }
            </Box>
          </Box>
        </Box>
      </CardContent>
    </MuiCard>
  )
})

export { Card }