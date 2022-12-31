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
import { Button } from '@chakra-ui/react'
import { deleteWork } from '../../Features/Res'
import EditWork from './EditWork'

function Education() {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.Res.value);
  return (
    <div className='Main'>  
        <div className='lower'>
            <Adding/>
            {data && data.WorkExperience && data.WorkExperience.map((val,key)=>{
              console.log("hhh",key);
              return(
                <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        {val.company}
                        </Box>
                        <Box flex='1' textAlign='right'>
                        {val.start}-{val.end}
                        </Box>
                        <br/>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <h4>Role</h4>
                    {val.role}
                    <br/><br/>
                    <h4>Description</h4>
                    {val.description}
                    <br/>
                    <EditWork info={val}/>
                    <Button style={{marginLeft : '10px'}} onClick={()=>{
                      dispatch(deleteWork({description : val.description}))
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

export default Education