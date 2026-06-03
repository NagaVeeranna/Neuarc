import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      component={motion.nav}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        background: scrolled ? 'rgba(13, 17, 23, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: 'none',
        borderBottom: scrolled ? '1px solid #30363d' : '1px solid transparent',
        transition: 'all 0.3s ease-in-out',
        padding: { xs: '5px 0', md: '5px 20px' }
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 600, letterSpacing: -0.5, display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box component="span" sx={{ color: 'text.primary' }}>NEUR</Box>
          <Box component="span" sx={{ color: 'primary.main' }}>AC</Box>
        </Typography>
        
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          {['Product', 'Solutions', 'Open Source', 'Pricing'].map((item) => (
            <Typography
              key={item}
              variant="body2"
              sx={{
                cursor: 'pointer',
                fontWeight: 500,
                color: 'text.primary',
                '&:hover': { color: 'text.secondary' },
                transition: '0.2s'
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
          <Typography variant="body2" sx={{ cursor: 'pointer', fontWeight: 500 }}>Sign in</Typography>
          <Button 
            variant="outlined" 
            sx={{ 
              borderColor: '#30363d', 
              color: 'white',
              px: 2,
              py: 0.5,
              '&:hover': { borderColor: '#8b949e', background: 'transparent' }
            }}
          >
            Sign up
          </Button>
        </Box>
        
        <IconButton sx={{ display: { xs: 'block', md: 'none' }, color: 'white' }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
