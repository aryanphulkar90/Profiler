import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react'
import {Button} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import {updateEdu} from '../../Features/Res'

function EditEdu({info}) {
  
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Institute, setInstitute] = useState(info.Institute);
  const [degree, setdegree] = useState(info.degree);
  const [startDate, setStartDate]=useState(info.start);
  const [endDate, setendDate]=useState(info.end);
  const [description, setDescription]=useState(info.description);
  return ( 
    <>
    <Button onClick={onOpen}>Edit</Button>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit education</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <h5>Institute</h5>
          <Input value={Institute} onChange={(e)=>{setInstitute(e.target.value)}}/>
          <h5>Degree</h5>
          <Input value={degree} onChange={(e)=>{setdegree(e.target.value)}}/>
          <div style={{display:'flex'}}>
            <div>
             <h5> start date </h5>
             <Input value={startDate} onChange={(e)=>{setStartDate(e.target.value)}}/>
            </div>
            <div>
             <h5> end date </h5>
             <Input value={endDate} onChange={(e)=>{setendDate(e.target.value)}}/>
            </div>
          </div>
          <h5>Description</h5>
          <Textarea style={{resize:'none'}} value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' onClick={()=>{
            dispatch(updateEdu(
              {
                "Institute" : Institute,
                "degree" : degree,
                "start" : startDate,
                "end" : endDate,
                "description" : description
              }
            ))
            onClose()
          }}>
            Save
          </Button>
          <Button variant='ghost' onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  )
}

export default EditEdu