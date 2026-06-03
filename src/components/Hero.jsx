import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box sx={{ 
      minHeight: { xs: 'auto', md: '100vh' }, 
      display: 'flex', 
      alignItems: 'center', 
      pt: { xs: 15, md: 12 }, 
      pb: { xs: 10, md: 0 },
      position: 'relative', 
      overflow: 'hidden' 
    }}>
      {/* GitHub Star Background */}
      <Box className="star-container">
        {[...Array(60)].map((_, i) => (
          <Box
            key={i}
            className="star"
            sx={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              '--duration': `${2 + Math.random() * 5}s`,
            }}
          />
        ))}
      </Box>

      {/* Background elements */}
      <Box sx={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        backgroundImage: 'radial-gradient(#30363d 1px, transparent 1px)', 
        backgroundSize: '40px 40px', 
        opacity: 0.15,
        zIndex: -1 
      }} />
      
      {/* Star Glows */}
      <Box className="hero-glow" sx={{ top: '20%', left: '50%', transform: 'translateX(-50%)', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(137, 87, 229, 0.12) 0%, transparent 60%)' }} />
      <Box className="hero-glow" sx={{ top: '10%', left: '10%', background: 'radial-gradient(circle, rgba(47, 129, 247, 0.1) 0%, transparent 70%)' }} />
      <Box className="hero-glow" sx={{ bottom: '10%', right: '10%', background: 'radial-gradient(circle, rgba(240, 136, 62, 0.05) 0%, transparent 70%)' }} />

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
                [ ] NEURAC_OS v1.2_STABLE
              </Typography>
              <Typography variant="caption" color="text.secondary" className="mono-text" sx={{ opacity: 0.7 }}>
                {'// The_Future_of_Software'}
              </Typography>
            </Box>

            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2.75rem', md: '4rem', lg: '4.75rem' }, 
                lineHeight: 1.1, 
                mb: 3,
                color: 'text.primary',
                fontWeight: 800,
                textShadow: '0 0 40px rgba(47, 129, 247, 0.15)'
              }}
            >
              Build the future <br />
              of <span className="text-gradient">innovation.</span>
            </Typography>
            
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ mb: 6, mx: 'auto', maxWidth: '650px', fontWeight: 400, lineHeight: 1.6, fontSize: { xs: '1rem', md: '1.2rem' }, opacity: 0.9 }}
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
                transition: 'all 0.3s',
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

            <Box className="floating-delayed" sx={{ mt: 8, opacity: 0.4 }}>
              <Typography variant="caption" className="mono-text" sx={{ display: 'block', letterSpacing: '0.2em' }}>
                SCROLL_TO_DISCOVER
              </Typography>
              <Box sx={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #8b949e, transparent)', mx: 'auto', mt: 2 }} />
            </Box>
          </motion.div>
        </Box>

        {/* Floating Code Snippet 1 (Top Left) */}
        <motion.div 
          className="floating" 
          style={{ position: 'absolute', top: '20%', left: '5%', display: 'block' }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Box className="glow-border" sx={{ background: '#161b22', p: 2, borderRadius: 2, border: '1px solid #30363d', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.8rem', color: '#8b949e', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <span style={{color: '#ff7b72'}}>import</span> { '{' } <span style={{color: '#d2a8ff'}}>Collective</span> { '}' } <span style={{color: '#ff7b72'}}>from</span> <span style={{color: '#a5d6ff'}}>&apos;@neurac/core&apos;</span>;
            </Box>
          </Box>
        </motion.div>

        {/* Floating Code Snippet 2 (Bottom Right) */}
        <motion.div 
          className="floating-delayed" 
          style={{ position: 'absolute', bottom: '25%', right: '5%', display: 'block' }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Box className="glow-border" sx={{ background: '#161b22', p: 2.5, borderRadius: 2, border: '1px solid #30363d', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.8rem', color: '#c9d1d9', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <span style={{color: '#8b949e'}}>~ neurac build --target production</span>
              <br />
              <span style={{color: '#3fb950'}}>✓ Build successful in 1.2s</span>
            </Box>
          </Box>
        </motion.div>

      </Container>
    </Box>
  );
};

export default Hero;
