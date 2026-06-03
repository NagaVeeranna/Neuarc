import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', pt: { xs: 15, md: 0 }, position: 'relative', overflow: 'hidden' }}>
      {/* Background elements */}
      <Box sx={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        backgroundImage: 'radial-gradient(#30363d 1px, transparent 1px)', 
        backgroundSize: '40px 40px', 
        opacity: 0.2,
        zIndex: -1 
      }} />
      <Box className="hero-glow" sx={{ top: '10%', left: '10%' }} />
      <Box className="hero-glow" sx={{ bottom: '10%', right: '10%', background: 'radial-gradient(circle, rgba(47, 129, 247, 0.08) 0%, transparent 70%)' }} />

      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxWidth: '900px', position: 'relative', zIndex: 1 }}
          >
            <Box className="floating" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 4 }}>
              <Typography 
                className="mono-text"
                variant="caption" 
                sx={{ 
                  color: 'secondary.main', 
                  border: '1px solid', 
                  borderColor: 'rgba(137, 87, 229, 0.3)', 
                  background: 'rgba(137, 87, 229, 0.05)',
                  px: 2, 
                  py: 0.6, 
                  borderRadius: '20px',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  letterSpacing: '0.05em'
                }}
              >
                [ ] NEURAC_OS v1.1_STABLE
              </Typography>
              <Typography variant="caption" color="text.secondary" className="mono-text" sx={{ opacity: 0.7 }}>
                {'// The_Future_of_Software'}
              </Typography>
            </Box>

            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '3rem', md: '4rem', lg: '4.75rem' }, 
                lineHeight: 1, 
                mb: 3,
                color: 'text.primary',
                fontWeight: 800,
                textShadow: '0 0 40px rgba(47, 129, 247, 0.1)'
              }}
            >
              Build the future <br />
              of <span className="text-gradient">innovation.</span>
            </Typography>
            
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ mb: 6, mx: 'auto', maxWidth: '650px', fontWeight: 400, lineHeight: 1.6, fontSize: { xs: '1rem', md: '1.25rem' }, opacity: 0.9 }}
            >
              Neurac is the premier innovation hub where engineering meets creativity. 
              We ship intelligent solutions, conduct deep research, and scale student-led ventures.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} justifyContent="center" alignItems="center">
              <Box sx={{ 
                display: 'flex', 
                background: '#161b22', 
                border: '1px solid #30363d',
                borderRadius: 2, 
                overflow: 'hidden', 
                width: { xs: '100%', sm: 'auto' },
                transition: 'border-color 0.3s',
                '&:focus-within': { borderColor: 'primary.main', boxShadow: '0 0 0 3px rgba(47, 129, 247, 0.15)' }
              }}>
                <Box 
                  component="input" 
                  placeholder="name@company.com" 
                  sx={{ 
                    background: 'transparent',
                    border: 'none', 
                    color: 'white',
                    px: 3, 
                    py: 1.8, 
                    flexGrow: 1, 
                    outline: 'none', 
                    width: { sm: '300px' },
                    fontSize: '1rem',
                    fontFamily: 'inherit'
                  }} 
                />
                <Button 
                  variant="contained" 
                  color="primary"
                  sx={{ 
                    borderRadius: 0, 
                    px: 4, 
                    fontSize: '1rem',
                    fontWeight: 700,
                    background: '#2f81f7',
                    '&:hover': { background: '#4791f8' } 
                  }}
                >
                  Join Neurac
                </Button>
              </Box>
              
              <Button 
                variant="outlined" 
                size="large" 
                sx={{ 
                  borderRadius: 2, 
                  px: 5, 
                  py: 1.8,
                  borderColor: '#30363d',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1rem',
                  background: 'rgba(255,255,255,0.02)',
                  '&:hover': { 
                    borderColor: 'secondary.main', 
                    background: 'rgba(137, 87, 229, 0.05)',
                    color: 'secondary.main'
                  }
                }}
              >
                Explore Workspace
              </Button>
            </Stack>

            <Box className="floating-delayed" sx={{ mt: 10, opacity: 0.4 }}>
              <Typography variant="caption" className="mono-text" sx={{ display: 'block', letterSpacing: '0.2em' }}>
                SCROLL_TO_DISCOVER
              </Typography>
              <Box sx={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #8b949e, transparent)', mx: 'auto', mt: 2 }} />
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
