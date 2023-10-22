import React, {useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import {SideBar,Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  }, [selectedCategory]);

  return (
    <Stack sx = {{
      flexDirection: {
        sx: "column", 
        md: "row"
        }
      }}
    >
      <Box sx = {{
          height: { sx: 'auto', md: '92vh'},
          borderRight: '1px solid #3d3d3d',
          px: {sx: 0, md: 2}
        }}>
          <SideBar selectedCategory = {selectedCategory} setSelectedCategory = {setSelectedCategory}/>
          <Typography
            className = "copyright"
            variant = "body2"
            sx = {{
              md: 1.5,
              color: '#fff'
            }}
          >
            Copyrights Eloi 2023
          </Typography>

        </Box>

        <Box p = {2} sx = {{ overflowY: 'auto', height: '90vh', flex: 2}}>
          <Typography variant = "h4" fontweight = "bold" mb = {2} sx = {{color:'white'}}>
            <span style = {{ color: '#F31503'}}>New Videos</span>
            <Videos videos = {[]}/>
          </Typography>
        </Box>
    </Stack>
  )
}

export default Feed