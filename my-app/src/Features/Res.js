import { createSlice } from "@reduxjs/toolkit";

export const ResSlice = createSlice({
    name:"Edu",
    initialState: {value : {
            "name" : "",
            "email" : "",
            "shortbio" : "",
            "Education" : [
            ],
            "Achievements" : [
            ],
            "WorkExperience" : [   
            ],
            "img" : null
        }
    },
    reducers: {
        namer : (state,action) => {
            state.value.name=action.payload.name
            state.value.email=action.payload.email
            state.value.shortbio=action.payload.shortbio
        },
        emailset : (state,action) => {
            state.value.email=action.payload.email
        },
        shortbioset : (state,action) => {
            state.value.shortbio=action.payload.shortbio
        },
        importhelp : (state,action) => {
           state.value = action.payload
        },
        addEdu : (state,action) => {
           state.value.Education.push(action.payload)
        },
        addWork : (state,action) => {
            state.value.WorkExperience.push(action.payload)
         },
        addAch : (state,action) => {
            state.value.Achievements.push(action.payload)
         },
        deleteEdu : (state,action) =>{
            //state.value = state.value.Education.filter((edu)=>edu.description!==action.payload.description)
            const index = state.value.Education.findIndex(
                (edu) => edu.description === action.payload.description
              );
              const newedu = [...state.value.Education];
              if (index >= 0) {
                newedu.splice(index, 1);
              }
              state.value.Education = newedu;
        },
        deleteWork : (state,action) =>{
            //state.value = state.value.WorkExperience.filter((edu)=>edu.description!==action.payload.description)
            const index = state.value.WorkExperience.findIndex(
                (edu) => edu.description === action.payload.description
              );
              const newedu = [...state.value.WorkExperience];
              if (index >= 0) {
                newedu.splice(index, 1);
              }
              state.value.WorkExperience = newedu;
        },
        deleteAch : (state,action) =>{
            //state.value = state.value.Achievements.filter((edu)=>edu.description!==action.payload.description)
            const index = state.value.Achievements.findIndex(
                (edu) => edu.description === action.payload.description
              );
              const newedu = [...state.value.Achievements];
              if (index >= 0) {
                newedu.splice(index, 1);
              }
              state.value.Achievements = newedu;
        },
        updateEdu : (state,action) => {
            state.value.Education.map((edu)=>{
                if(edu.description===action.payload.description){
                    edu=action.payload
                }
            })
        },
        updateWork : (state,action) => {
            state.value.WorkExperience.map((edu)=>{
                if(edu.description===action.payload.description){
                    edu=action.payload
                }
            })
        },
        updateAch : (state,action) => {
            state.value.Achievements.map((edu)=>{
                if(edu.description===action.payload.description){
                    edu=action.payload
                }
            })
        }
    }
});

export const {namer, emailset, shortbioset, addEdu, addWork, addAch, importhelp, deleteEdu, deleteAch, deleteWork, updateEdu, updateAch, updateWork} = ResSlice.actions;
export default ResSlice.reducer;