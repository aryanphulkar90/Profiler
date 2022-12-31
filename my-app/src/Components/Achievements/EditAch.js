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
import {updateAch} from '../../Features/Res'

function EditAch({info}) {
  
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ach, setach] = useState(info.title);
  const [Date, setDate]=useState(info.date);
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
          <h5>Achievement</h5>
          <Input value={ach} onChange={(e)=>{setach(e.target.value)}}/>
          <h5>Date</h5>
          <Input value={Date} onChange={(e)=>{setDate(e.target.value)}} />
          <h5>Description</h5>
          <Textarea style={{resize:'none'}} value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' onClick={()=>{
            dispatch(updateAch(
              {
                "title" : ach,
                "date" : Date,
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

export default EditAch