import { Box } from '@mui/material'
import React from 'react'
import { Title } from '../../components/title'
import SyncIcon from "@mui/icons-material/Sync";
import { Card } from '../../components/card';
import { LanguageListUnion } from '../../const/language';

export function Translation(){
  const [srcLang, setSrcLang] = React.useState<LanguageListUnion | null>(null);
  const [dstLang, setDstLang] = React.useState<LanguageListUnion | null>(null);

  const [blob, setblob] = React.useState<Blob | null>(null);

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      flex='1'
    >
      <Box
        display='flex'
        width='100%'
        height='100%'
        maxHeight='1300px'
        minHeight='700px'
        position='relative'
      >
        <Box
          position='absolute'
          bottom='80px'
          left='50%'
          sx={{
            transform: 'translateX(-50%)'
          }}
        >
          button
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          margin='16px'
          gap='24px'
          flex={1}
        >
          <Title>Translation Apps</Title>
          <Box width='100%' height='30%'>
            <Card title='src' blob={undefined} callback={setSrcLang}>
              card1
            </Card>
          </Box>
          <Box display="flex" flex="row" justifyContent="center">
            <SyncIcon fontSize='large'/>
          </Box>
          <Box width='100%' height='30%'>
            <Card title='dst' blob={undefined} callback={setDstLang}>
              card2
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}