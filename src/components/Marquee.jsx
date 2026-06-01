import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const tags = ['AI', 'Web', 'Research', 'Innovation', 'Hackathons', 'Open Source', 'Startups'];

const Marquee = () => {
  return (
    <Box sx={{ py: 6, overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
      <Typography variant="overline" sx={{ display: 'block', textAlign: 'center', mb: 4, color: 'text.secondary', letterSpacing: 2 }}>
        Trusted By Future Innovators
      </Typography>
      
      <Box sx={{ display: 'flex', whiteSpace: 'nowrap' }}>
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{ ease: 'linear', duration: 20, repeat: Infinity }}
          style={{ display: 'flex' }}
        >
          {[...tags, ...tags, ...tags, ...tags].map((tag, index) => (
            <Typography
              key={index}
              variant="h3"
              sx={{
                mx: 4,
                fontWeight: 800,
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.2)',
                textTransform: 'uppercase',
                transition: '0.3s',
                '&:hover': {
                  color: 'white',
                  WebkitTextStroke: '0px',
                  textShadow: '0 0 20px rgba(255,255,255,0.5)'
                }
              }}
            >
              {tag}
            </Typography>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

export default Marquee;
