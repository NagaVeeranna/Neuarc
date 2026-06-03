import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <Box sx={{ py: 20, position: 'relative', overflow: 'hidden', borderTop: '1px solid #30363d', background: '#0d1117' }}>
      {/* Background technical lines */}
      <Box sx={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        height: '1px', 
        background: 'linear-gradient(to right, transparent, #2f81f7, transparent)',
        opacity: 0.5
      }} />

      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography className="mono-text" variant="body1" color="primary" sx={{ mb: 3, fontWeight: 600 }}>
            {'// READY_TO_COLLABORATE'}
          </Typography>
          <Typography variant="h2" sx={{ mb: 4, fontWeight: 800, letterSpacing: -1 }}>
            The world&apos;s largest student <br /> innovation <span style={{ color: '#8b949e' }}>collective.</span>
          </Typography>
          
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center">
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: 1,
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                background: '#238636', // GitHub Green
                color: 'white',
                fontWeight: 600,
                '&:hover': {
                  background: '#2ea043'
                }
              }}
            >
              Sign up for Neurac
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderRadius: 1,
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                borderColor: '#30363d',
                color: 'white',
                fontWeight: 600,
                '&:hover': { borderColor: '#8b949e', background: 'rgba(255,255,255,0.05)' }
              }}
            >
              Contact Sales
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CTA;
