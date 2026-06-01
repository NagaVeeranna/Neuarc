import React, { useRef } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  { id: '01', title: 'Learn', desc: 'Master the latest technologies with hands-on experience.' },
  { id: '02', title: 'Build', desc: 'Work on real-world projects that solve actual problems.' },
  { id: '03', title: 'Launch', desc: 'Deploy your products to real users and gather feedback.' },
  { id: '04', title: 'Scale', desc: 'Grow your user base and transition into a startup.' },
];

const StepCard = ({ step, i }) => {
  return (
    <Box 
      sx={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'sticky', 
        top: 0 
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-50% 0px -50% 0px" }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%' }}
      >
        <Box className="glass-card" sx={{ p: { xs: 4, md: 8 }, maxWidth: '600px', mx: 'auto' }}>
          <Typography variant="h2" sx={{ color: 'rgba(255,255,255,0.1)', fontSize: '5rem', fontWeight: 800, mb: -4 }}>
            {step.id}
          </Typography>
          <Typography variant="h3" sx={{ mb: 3, position: 'relative', zIndex: 1 }}>
            {step.title}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
            {step.desc}
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

const WhyNeurac = () => {
  return (
    <Box sx={{ position: 'relative', py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 10 }}>
          Why <span className="text-gradient">Neurac</span>
        </Typography>
        
        <Grid container>
          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ position: 'sticky', top: '30vh' }}>
              <Typography variant="h3" sx={{ mb: 3 }}>
                The Journey
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
                A proven pipeline to take you from a student to a founder. Follow the steps to success.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              {steps.map((step, i) => (
                <StepCard key={step.id} step={step} i={i} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyNeurac;
