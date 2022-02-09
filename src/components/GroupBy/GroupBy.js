import { Box } from '@mui/system';
import React from 'react';
import Select from '../Data Processing/Select';

const GroupBy = () => {
    return <Box color='#E7E7E7;'>
        <h4 className='model-heading-text'>
            Group By
        </h4>
        <Box mt='2.1rem'>
            <p className='model-subheading-text'>
                Select Column to group by
            </p>
        </Box>
        <Box mt='1.2rem' className='merge-2'>
            <Select />

        </Box>
        <Box mt='2rem'>
            <p className='model-subheading-text'>

                Select Aggregate Method
            </p>
        </Box>
        <Box mt='1.2rem' className='merge-2'>
            <Select />
        </Box>
        <Box mt='2.4rem'>

            <button variant="contained"

                className='save-btn'
            >
                Save
            </button>
        </Box>
    </Box>;
};

export default GroupBy;
