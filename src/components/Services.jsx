import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const services = [
  {
    title: 'AI Solutions',
    description: 'Custom machine learning models and intelligent automation.',
    icon: <SmartToyIcon sx={{ fontSize: 40, color: '#2563EB' }} />,
  },
  {
    title: 'Web Development',
    description: 'Scalable, responsive, and modern web applications.',
    icon: <LaptopMacIcon sx={{ fontSize: 40, color: '#38BDF8' }} />,
  },
  {
    title: 'UI UX Design',
    description: 'User-centric designs with modern aesthetics.',
    icon: <DesignServicesIcon sx={{ fontSize: 40, color: '#818CF8' }} />,
  },
  {
    title: 'Research',
    description: 'Deep tech research and algorithm optimization.',
    icon: <AnalyticsIcon sx={{ fontSize: 40, color: '#0EA5E9' }} />,
  },
  {
    title: 'Startup Consulting',
    description: 'From idea to MVP and scaling strategies.',
    icon: <AutoGraphIcon sx={{ fontSize: 40, color: '#60A5FA' }} />,
  }
];

const Services = () => {
  return (
    <Box sx={{ py: 15, position: 'relative' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 8, textAlign: 'center' }}>
          Interactive <span className="text-gradient">Services</span>
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Paper
                  elevation={0}
                  className="glass-card"
                  sx={{
                    p: 5,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s',
                    '&:hover': {
                      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                      background: 'rgba(255,255,255,0.05)'
                    }
                  }}
                >
                  <Box sx={{ 
                    mb: 4, 
                    p: 3, 
                    borderRadius: '50%', 
                    background: 'rgba(255,255,255,0.03)',
                    boxShadow: 'inset 0 0 20px rgba(255,255,255,0.05)'
                  }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {service.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
