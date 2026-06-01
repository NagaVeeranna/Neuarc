import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GroupIcon from '@mui/icons-material/Group';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const cards = [
  {
    title: 'Agency',
    icon: <CodeIcon fontSize="large" color="primary" />,
    items: ['Web Development', 'Mobile Apps', 'Branding', 'Automation'],
    colSpan: { xs: 12, md: 8 },
    rowSpan: 1,
    gradient: 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(37,99,235,0.0))'
  },
  {
    title: 'Startup',
    icon: <RocketLaunchIcon fontSize="large" color="secondary" />,
    items: ['Product Building', 'Research', 'Innovation'],
    colSpan: { xs: 12, md: 4 },
    rowSpan: 2,
    gradient: 'linear-gradient(135deg, rgba(56,189,248,0.1), rgba(56,189,248,0.0))'
  },
  {
    title: 'Club',
    icon: <GroupIcon fontSize="large" sx={{ color: '#818CF8' }} />,
    items: ['Hackathons', 'Events', 'Workshops'],
    colSpan: { xs: 12, md: 4 },
    rowSpan: 1,
    gradient: 'linear-gradient(135deg, rgba(129,140,248,0.1), rgba(129,140,248,0.0))'
  },
  {
    title: 'Community',
    icon: <LightbulbIcon fontSize="large" sx={{ color: '#0EA5E9' }} />,
    items: ['Networking', 'Collaboration', 'Learning'],
    colSpan: { xs: 12, md: 4 },
    rowSpan: 1,
    gradient: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(14,165,233,0.0))'
  }
];

const BentoGrid = () => {
  return (
    <Box sx={{ py: 15, position: 'relative' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
          What Is <span className="text-gradient">Neurac</span>
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 8, textAlign: 'center', fontWeight: 400 }}>
          An ecosystem designed to accelerate your growth.
        </Typography>

        <Grid container spacing={3}>
          {cards.map((card, index) => (
            <Grid item xs={card.colSpan.xs} md={card.colSpan.md} key={index} sx={{ display: 'flex' }}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ width: '100%', display: 'flex' }}
              >
                <Paper
                  elevation={0}
                  className="glass-card"
                  sx={{
                    p: 4,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    background: card.gradient,
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    transition: '0.3s',
                    '&:hover': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 0 30px rgba(255, 255, 255, 0.05)'
                    }
                  }}
                >
                  <Box sx={{ mb: 3 }}>
                    {card.icon}
                  </Box>
                  <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
                    {card.title}
                  </Typography>
                  <Box sx={{ mt: 'auto' }}>
                    {card.items.map((item, idx) => (
                      <Typography key={idx} variant="body1" color="text.secondary" sx={{ mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ marginRight: '8px', opacity: 0.5 }}>•</span> {item}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BentoGrid;
