import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const tags = ['AI', 'Web', 'Research', 'Innovation', 'Hackathons', 'Open Source', 'Startups'];

const Marquee = () => {
  return (
    <Box sx={{ py: 4, overflow: 'hidden', borderTop: '1px solid #30363d', borderBottom: '1px solid #30363d', background: '#0d1117' }}>
      <Typography variant="caption" className="mono-text" sx={{ display: 'block', textAlign: 'center', mb: 3, color: 'text.secondary', letterSpacing: 1, fontWeight: 500 }}>
        {/* TRUSTED_BY_INNOVATORS */}
      </Typography>
      
      <Box sx={{ display: 'flex', whiteSpace: 'nowrap', opacity: 0.6 }}>
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
          style={{ display: 'flex' }}
        >
          {[...tags, ...tags, ...tags, ...tags].map((tag, index) => (
            <Typography
              key={index}
              variant="h4"
              sx={{
                mx: 5,
                fontWeight: 600,
                color: 'text.primary',
                textTransform: 'uppercase',
                letterSpacing: -1,
                transition: '0.3s',
                '&:hover': {
                  color: 'primary.main',
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
