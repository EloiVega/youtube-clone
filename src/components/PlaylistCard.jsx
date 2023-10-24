import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle, PlayArrow } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'


const PlaylistCard = ({playlist : {id: {playlistId}, snippet}}) => {
  return (
    <Card sx = {{width: {md: '320px', sm: '90vw'}, backgroundColor: '#1e1e1e', position: 'relative'}}>
        <Link to = {`playlist/${playlistId}`}>
            <CardMedia image = {snippet?.thumbnails?.high?.url} alt = {snippet?.title} sx = {{width: '100%', height:180}}/>
            <Typography sx = {{color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '150px', opacity: 0.8, height: 30, width: '320px', backgroundColor: '#1a1a1a'}}>
              <PlayArrow sx = {{fontSize: 16, mr: '5px'}}/>
              Playlist
            </Typography>
        </Link>
        <Link to = {`playlist/${playlistId}`}>
            <CardContent sx = {{height: 160}}>
              <Typography variant = "subtitle1" sx = {{fontWeight: 'bold', color: '#FFF'}}>
                {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0,60)}
              </Typography>
              
              <Typography variant = "subtitle1" sx = {{fontWeight: 'bold', color: 'gray'}}>
                {snippet?.channelTitle.slice(0, 60) || demoVideoTitle.slice(0,60)}
                <CheckCircle sx = {{fontSize: 12, ml: '5px'}}/>
              </Typography>
            </CardContent>
        </Link>
        
    </Card>
  )
}

export default PlaylistCard