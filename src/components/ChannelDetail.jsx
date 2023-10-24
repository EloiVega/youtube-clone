import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'

import {videos, ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const {id} = useParams();
  
  console.log(channelDetail, videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data.items));
  }, [id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style = {{background: 'radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(12,0,0,0) 10%, rgba(188,0,0,1) 63%, rgba(68,0,0,1) 100%)', zIndex: 10, height: '300px'}}></div>
      </Box>
    </Box>
  )
}

export default ChannelDetail