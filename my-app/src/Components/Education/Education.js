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
import AddingEdu from './AddingEdu'
import { useSelector, useDispatch } from 'react-redux'
import EditEdu from './EditEdu'
import { Button } from '@chakra-ui/react'
import { deleteEdu } from '../../Features/Res'

function Education() {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.Res.value);
  return (
    <div className='Main'>  
        <div className='lower'>
            <AddingEdu/>
            {data && data.Education && data.Education.map((val,key)=>{
              return(
                <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        {val.Institute}
                        </Box>
                        <Box flex='1' textAlign='right'>
                        {val.start}-{val.end}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <h4>Degree</h4>
                    {val.degree}
                    <br/><br/>
                    <h4>Description</h4>
                    {val.description}
                    <br/>
                    <EditEdu info={val}/>
                    <Button style={{marginLeft : '10px'}} onClick={()=>{
                      dispatch(deleteEdu({description : val.description}))
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