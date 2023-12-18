import { Box } from '@mui/material'
import React from 'react'
import { Title } from '../../components/title'
import SyncIcon from "@mui/icons-material/Sync";

export function Translation(){
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
        minHeight='800px'
        position='relative'
        bgcolor='red'
      >
        <Box
          position='absolute'
          bottom='30px'
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
          bgcolor='blue'
          margin='16px'
          gap='24px'
          flex={1}
        >
          <Title>Translation Apps</Title>
          <Box bgcolor='green' width='100%' height='35%'>
a
          </Box>
          <Box display="flex" flex="row" justifyContent="center">
            <SyncIcon fontSize='large'/>
          </Box>
          <Box bgcolor='green' width='100%' height='35%'>
a
          </Box>
        </Box>
      </Box>
    </Box>
  )
}