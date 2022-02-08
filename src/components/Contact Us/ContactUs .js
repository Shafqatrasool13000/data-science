import React from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import './ContactUs.css';


const ContactUs = () => {

    return <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mt: 3 }}>
        <h4 className='contact-us-heading'  >Contact Us</h4>
        <Box mt='7.3rem'>


            <Stack my={2} spacing={2} direction={{ xs: 'column', sm: 'column' }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} gap={3} >
                    <input
                        placeholder='First Name'
                        type='text'
                    />
                    <input
                        placeholder='Last Name'
                        type='text'

                    />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'column' }} spacing={3}>
                    <input
                        placeholder='Email'
                        type='text'

                    />
                    <textarea placeholder='Message' id="w3review" className="text-area" rows="8" cols="60" />


                </Stack>

            </Stack>

        </Box>
        <button variant="contained"

            className='save-btn'
        >
            Save
        </button>
    </Box>;
};

export default ContactUs;
