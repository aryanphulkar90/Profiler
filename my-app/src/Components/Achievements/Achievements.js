import React from 'react'
import './style.css'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import Adding from './Adding'
import { useSelector, useDispatch } from 'react-redux'
import { deleteAch } from '../../Features/Res'
import { Button } from '@chakra-ui/react'
import EditAch from './EditAch'

function Achievements() {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.Res.value);
  return (
    <div className='Main'>  
        <div className='lower'>
            <Adding/>
            {data && data.Achievements && data.Achievements.map((val,key)=>{
              console.log("hhh",key);
              return(
                <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        {val.title}
                        </Box>
                        <Box flex='1' textAlign='right'>
                        {val.date}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <h4>Description</h4>
                    {val.description}<br/>
                    <EditAch info={val}/>
                    <Button style={{marginLeft : '10px'}} onClick={()=>{
                      dispatch(deleteAch({description : val.description}))
                    }}> Delete </Button>
                    </AccordionPanel>
                </AccordionItem>
                </Accordion>
              );
            })}
        </div>
    </div>
  )
}

export default Achievements