import React, { useState, useEffect } from 'react';
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
        background: scrolled ? 'rgba(2, 6, 23, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
        transition: 'all 0.3s ease-in-out',
        padding: { xs: '10px 0', md: '10px 40px' }
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: 1 }}>
          NEUR<span className="text-gradient">AC</span>
        </Typography>
        
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
          {['About', 'Services', 'Projects', 'Team', 'Join'].map((item) => (
            <Typography
              key={item}
              sx={{
                cursor: 'pointer',
                fontWeight: 500,
                color: 'text.secondary',
                '&:hover': { color: 'text.primary' },
                transition: '0.2s'
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Button variant="contained" color="primary" sx={{ borderRadius: '20px', padding: '8px 24px' }}>
            Get Started
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
