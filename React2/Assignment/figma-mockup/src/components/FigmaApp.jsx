import React, { useContext } from 'react'
import { ThemeContext } from '../contexxt/ThemeContext'
// import { Switch } from 'antd'
import { Switch,Box,Flex,Button,Image,Slider,SliderThumb,SliderTrack,SliderFilledTrack} from '@chakra-ui/react'
import './Figma.css'

const FigmaApp = () => {
    const {toogletheme,isLight}=useContext(ThemeContext)
  return (
      <>
      <div className={isLight? 'dark':'light'}>
      <Box
      className={isLight? 'sided':'sidel'}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      width="80px"
      pos="fixed"
      h="full">
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        
          
        <div className='icons'>
        <img src="https://i.pinimg.com/736x/b8/69/5f/b8695f007aea9a08a0419479217ca6aa.jpg" alt="" />
        <Button colorScheme='gray' backgroundColor='transparent' _hover={{backgroundColor:'cyan'}} width='60px'><i class="fa-solid fa-chart-simple"></i></Button>
        <Button colorScheme='gray' backgroundColor='transparent' _hover={{backgroundColor:'cyan'}} width='60px'><i class="fa-solid fa-signs-post"></i></Button>
        <Button colorScheme='gray' backgroundColor='transparent' _hover={{backgroundColor:'cyan'}} width='60px'><i class="fa-solid fa-gift"></i></Button>
        <Button colorScheme='gray' backgroundColor='transparent' _hover={{backgroundColor:'cyan'}} width='60px'><i class="fa-solid fa-comments"></i></Button>
        <Button colorScheme='gray' backgroundColor='transparent' _hover={{backgroundColor:'cyan'}} width='60px'><i class="fa-solid fa-copy"></i></Button>
        <Button colorScheme='gray' backgroundColor='transparent' _hover={{backgroundColor:'cyan'}} width='60px'><i class="fa-solid fa-gear"></i></Button>
        <Button colorScheme='gray' backgroundColor='transparent' width='60px' style={{marginTop:"80px"}}><i class="fa-solid fa-circle-plus"></i></Button>
        </div>
       
      </Flex>
    </Box>

    <div className='dashboard'> DASHBOARD 
      <p style={{fontSize:'10px'}} >{isLight ? 'Dark Mode':'Light Mode'}</p>
      <Switch onChange={toogletheme}/>
      </div>
      <div>

      </div>
      <div className={isLight? 'darkb':'lightb'}>
        <div style={{display:'flex' , justifyContent:'space-between'}}><p style={{fontSize:'12px',marginBottom:"20px"}}>Active Users</p><p style={{fontSize:'10px'}}> For August 2022</p></div>
        <div className='profile'>
        <Image borderRadius='full' boxSize='150px' src='https://bit.ly/dan-abramov' width='40px' height='40px' alt='Dan Abramov'/>
        <div>
          <p style={{fontSize:'13px'}}>Nrupal Dev</p>
          <p style={{fontSize:'11px',color:'grey'}}>Copenhangen,Denmark</p>
        </div>
        <i class="fa-solid fa-ellipsis" style={{float:'right'}}></i>
        </div>
        <Slider aria-label='slider-ex-1' defaultValue={60}><SliderTrack><SliderFilledTrack /></SliderTrack><SliderThumb /></Slider>
        <div className='bottom'><p>Professional 15</p>
        <p>4723 Points</p></div>

         {/* 1st profile */}
 <hr />
        <div className='profile'>
        <Image borderRadius='full' boxSize='150px' src='https://bit.ly/dan-abramov' width='40px' height='40px' alt='Dan Abramov'/>
        <div>
          <p style={{fontSize:'13px'}}>Sandya</p>
          <p style={{fontSize:'11px',color:'grey'}}>Copenhangen,Denmark</p>
        </div>
        <i class="fa-solid fa-ellipsis" style={{marginLeft:'30px'}}></i>
        </div>
        <Slider aria-label='slider-ex-1' defaultValue={60}><SliderTrack><SliderFilledTrack /></SliderTrack><SliderThumb /></Slider>
        <div className='bottom'><p>Professional 11</p>
        <p>2339 Points</p></div>

 {/* 1st profile */}
<hr />
        <div className='profile'>
        <Image borderRadius='full' boxSize='150px' src='https://bit.ly/dan-abramov' width='40px' height='40px' alt='Dan Abramov'/>
        <div>
          <p style={{fontSize:'13px'}}>Elon Tusk</p>
          <p style={{fontSize:'11px',color:'grey'}}>California,USA</p>
        </div>
        <i class="fa-solid fa-ellipsis" style={{marginLeft:'30px'}}></i>
        </div>
        <Slider aria-label='slider-ex-1' defaultValue={60}><SliderTrack><SliderFilledTrack /></SliderTrack><SliderThumb /></Slider>
        <div className='bottom'><p>Professional 6</p>
        <p>1884 Points</p></div>
        
      </div>
      
      </div>
      
       
       
      </>
   
  )
}

export default FigmaApp