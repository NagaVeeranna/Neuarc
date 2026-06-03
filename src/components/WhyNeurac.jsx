/* eslint-disable react/prop-types */
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const steps = [
  { id: '01', title: 'Learn', desc: 'Master the latest technologies with hands-on experience.' },
  { id: '02', title: 'Build', desc: 'Work on real-world projects that solve actual problems.' },
  { id: '03', title: 'Launch', desc: 'Deploy your products to real users and gather feedback.' },
  { id: '04', title: 'Scale', desc: 'Grow your user base and transition into a startup.' },
];

const StepCard = ({ step }) => {
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
        <Box 
          sx={{ 
            p: { xs: 4, md: 6 }, 
            maxWidth: '600px', 
            mx: 'auto',
            background: '#161b22',
            border: '1px solid #30363d',
            borderRadius: 2,
            position: 'relative'
          }}
        >
          <Typography className="mono-text" variant="h1" sx={{ color: 'rgba(47, 129, 247, 0.1)', fontSize: '6rem', fontWeight: 800, mb: -6, position: 'absolute', top: -20, left: 20 }}>
            {step.id}
          </Typography>
          <Typography variant="h3" sx={{ mb: 2, position: 'relative', zIndex: 1, fontWeight: 700 }}>
            {step.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 400, fontSize: '1.1rem', lineHeight: 1.6 }}>
            {step.desc}
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

const WhyNeurac = () => {
  return (
    <Box sx={{ position: 'relative', py: 15, borderTop: '1px solid #30363d' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <Typography variant="body1" color="primary" className="mono-text" sx={{ mb: 2, fontWeight: 600 }}>
            {/* 03. THE_PROCESS */}
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            Why <span style={{ color: '#8b949e' }}>Neurac?</span>
          </Typography>
        </Box>
        
        <Grid container>
          <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ position: 'sticky', top: '35vh' }}>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
                The Pipeline.
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, lineHeight: 1.5 }}>
                A proven roadmap to transform students into builders and founders. From learning the basics to scaling global solutions.
              </Typography>
              <Box sx={{ mt: 4, display: 'flex', gap: 1 }}>
                <Box sx={{ width: 2, height: 100, background: 'linear-gradient(to bottom, #2f81f7, transparent)' }} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
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
