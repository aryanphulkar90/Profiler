import React from 'react'
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
import { useSelector, useDispatch } from 'react-redux'
import {updateWork} from '../../Features/Res'
import { useState } from 'react'

function Adding({info}) {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [company, setcompany] = useState(info.company);
  const [role, setrole] = useState(info.role);
  const [startDate, setStartDate]=useState(info.start);
  const [endDate, setendDate]=useState(info.end);
  const [description, setDescription]=useState(info.description);
  return (
    <>
    <Button onClick={onOpen}>Edit</Button>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit work experience</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <h5>Company</h5>
          <Input value={company} onChange={(e)=>{setcompany(e.target.value)}}/>
          <h5>Role</h5>
          <Input value={role} onChange={(e)=>{setrole(e.target.value)}}/>
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
            dispatch(updateWork(
              {
                "company" : company,
                "role" : role,
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

export default Adding