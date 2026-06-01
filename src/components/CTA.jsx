import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const CTA = () => {
  return (
    <Box sx={{ py: 15, position: 'relative', overflow: 'hidden' }}>
      {/* Background Gradient Orb */}
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(2,6,23,0) 70%)',
        zIndex: -1,
        pointerEvents: 'none'
      }} />

      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" sx={{ mb: 3, fontWeight: 800 }}>
            Ready To Build<br />The <span className="text-gradient">Future</span> With Us?
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 6, fontWeight: 400 }}>
            Join the collective of student innovators, developers, and designers. Let's create something extraordinary.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" alignItems="center">
            <Button
              variant="contained"
              size="large"
              endIcon={<RocketLaunchIcon />}
              sx={{
                borderRadius: '30px',
                px: 5,
                py: 2,
                fontSize: '1.1rem',
                background: 'linear-gradient(45deg, #2563EB, #38BDF8)',
                boxShadow: '0 10px 30px rgba(37, 99, 235, 0.4)',
                '&:hover': {
                  boxShadow: '0 15px 40px rgba(37, 99, 235, 0.6)'
                }
              }}
            >
              Join Club
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderRadius: '30px',
                px: 5,
                py: 2,
                fontSize: '1.1rem',
                borderColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                '&:hover': { borderColor: 'white', background: 'rgba(255,255,255,0.05)' }
              }}
            >
              Start A Project
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CTA;
