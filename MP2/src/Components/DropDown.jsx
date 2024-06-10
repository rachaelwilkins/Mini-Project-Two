import React, { useEffect } from 'react';
import { TextField, Autocomplete } from '@mui/material';

 

export default function DropDown(props) {
  useEffect(() => {
    console.log('options',props.options)
    props.options.map(option => console.log(option))

  },[])

 

  const dropDownOptions = props.options.map((option, index) => ({

    label: option, // Convert the ID to a string

    value: index, // Keep the ID as a number

  }));

 

  return (

    <>

    <Autocomplete

        disablePortal

        id='Choose a Timezone'

        onChange={(e, selectedOption) => {

          props.setOption(selectedOption);

        }}

        options={props.options}

        // isOptionEqualToValue={(option, value) => option.value === value.value}

        getOptionLabel={(option) => option}

        sx={{ width: 400, margin: '0 auto', textAlign: 'center'}}

        renderInput={(params) => <TextField {...params} sx={{ textAlign: 'center' }}  label={props.name} />}

      />

    </>

  );

}