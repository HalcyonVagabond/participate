import React, {useState} from "react"
import { Dropdown } from "semantic-ui-react"

const FilterContentDropdown = ({userContent, setFilteredContent}) => {

  const filterClassNames = [{ value: 'All', text: 'All Types' }, { value: 'GovernmentOfficials', text: 'Government Officials' }, { value: 'Departments', text: 'Departments' }, { value: 'Committees', text: 'Committees' }, { value: 'Legislation', text: 'Legislation' }, { value: 'Events', text: 'Events' }, { value: 'Elections', text: 'Elections' }, { value: 'Services', text: 'Services' }]

  const handleFilterDropdown = (e, data) => {
    if(data.value === 'All'){
       setFilteredContent(userContent)
    } else if (data.value === 'GovernmentOfficials'){
      setFilteredContent(userContent[0])
    } else if (data.value === 'Departments'){
      setFilteredContent(userContent[1])
    } else if (data.value === 'Committees'){
      setFilteredContent(userContent[2])
    } else if (data.value === 'Legislation'){
      setFilteredContent(userContent[3])
    } else if (data.value === 'Events'){
      setFilteredContent(userContent[4])
    } else if (data.value === 'Elections'){
      setFilteredContent(userContent[5])
    } else if (data.value === 'Services'){
      setFilteredContent(userContent[6])
    }
  } 


    return (
      <Dropdown
                className='createContent'
                labeled={true}
                placeholder='Select Info Type'
                selection
                style={{width: '20%'}}
                options={filterClassNames}
                onChange={handleFilterDropdown}
            />
    );
};

export default FilterContentDropdown;