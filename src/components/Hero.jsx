import React, { Suspense } from 'react';
import { Box, Typography, Button, Container, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', pt: { xs: 12, md: 0 }, position: 'relative' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '3.5rem', md: '5rem', lg: '6rem' }, 
                  lineHeight: 1.1, 
                  mb: 2 
                }}
              >
                Think.<br />
                Build.<br />
                <span className="text-gradient">Transform.</span>
              </Typography>
              
              <Typography 
                variant="h6" 
                color="text.secondary" 
                sx={{ mb: 4, maxWidth: '500px', fontWeight: 400, lineHeight: 1.6 }}
              >
                Building Intelligent Products For The Future.
                <br /><br />
                Neurac is a student-led innovation collective creating AI, Software, Research and Startup Solutions.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button 
                  variant="contained" 
                  size="large" 
                  endIcon={<ArrowForwardIcon />}
                  sx={{ 
                    borderRadius: '30px', 
                    px: 4, 
                    py: 1.5, 
                    background: 'linear-gradient(45deg, #2563EB, #38BDF8)',
                    boxShadow: '0 10px 20px rgba(37, 99, 235, 0.3)'
                  }}
                >
                  Explore Work
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  startIcon={<AutoAwesomeIcon />}
                  sx={{ 
                    borderRadius: '30px', 
                    px: 4, 
                    py: 1.5,
                    borderColor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    '&:hover': { borderColor: 'white', background: 'rgba(255,255,255,0.05)' }
                  }}
                >
                  Join Community
                </Button>
              </Stack>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ height: { xs: '300px', md: '600px' }, position: 'relative' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ width: '100%', height: '100%' }}
            >
              <Suspense fallback={<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>Loading 3D...</Box>}>
                <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
              </Suspense>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
