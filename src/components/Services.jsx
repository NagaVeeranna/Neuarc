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
    <Box sx={{ py: 15, position: 'relative', borderTop: '1px solid #30363d' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 10 }}>
          <Typography variant="body1" color="primary" className="mono-text" sx={{ mb: 2, fontWeight: 600 }}>
            {/* 02. CORE_CAPABILITIES */}
          </Typography>
          <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
            The power to build <span style={{ color: '#8b949e' }}>anything you imagine.</span>
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  className="glow-border"
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                    background: 'transparent',
                    border: '1px solid #30363d',
                    borderRadius: 2,
                    transition: 'all 0.2s',
                    '&:hover': {
                      background: '#161b22',
                      borderColor: '#8b949e'
                    }
                  }}
                >
                  <Box sx={{ 
                    mb: 3, 
                    color: 'primary.main',
                  }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
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
