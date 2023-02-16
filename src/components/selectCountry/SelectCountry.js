import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'


function SelectCountry() {
    const customStyles = {

        // singleVlue to change color on select field from default color
        singleValue: provided=>({
            ...provided,
            color:'white'
        }),

         //   change color of select field and remove default properties
        control: (base, state) => ({
          ...base,
       
          background: "transparent",
          borderRadius: '5px',
          borderColor: 'white',
          boxShadow: state.isFocused ? null : null,
          color:'white',


          "&:hover": {
            borderColor: state.isFocused ? null : null,
          }
         
        }),
        menu: base => ({
          ...base,
    
          borderRadius: '5px',
          marginTop: 0,
          
        }),
        menuList: base => ({
          ...base,
          color:"black",
          padding: 0,
        })
      };


  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  return <Select
   options={options} 
   value={value} 
   onChange={changeHandler} 
   defaultValue={options[2]}
   styles={customStyles}
   placeholder={'Select Country...'}

   theme={(theme) => ({
     ...theme,
     borderRadius: 5,
     
     colors: {
       ...theme.colors,
    //    primary25 for hovering color on options
    //      primary for the previously selected option
       primary25: ' #5404FF',
       primary: '#1D2939',
    //    for placeholder color
       neutral50: '#fff', 
       
     },
   
   })} />
}
export default SelectCountry


// function SelectCountry() {
//   const [value, setValue] = useState('')
//   const options = useMemo(() => countryList().getData(), [])

//   const changeHandler = value => {
//     setValue(value)
//   }

//   return <Select
//    options={options} 
//    value={value} 
//    onChange={changeHandler} 
//    defaultValue={options[2]}
   
//    placeholder={'Select Country...'}
//    theme={(theme) => ({
//      ...theme,
//      borderRadius: 5,
     
//      colors: {
//        ...theme.colors,
//        primary25: 'purple',
//        primary: 'black',
       
//      },
//      backgroundColor:{
//         ...theme.colors,
//         primary25: 'transparent'
//      }
//    })} />
// }

// export default SelectCountry

