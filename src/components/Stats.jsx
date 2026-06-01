import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const stats = [
  { value: '20+', label: 'Projects' },
  { value: '100+', label: 'Members' },
  { value: '15+', label: 'Events' },
  { value: '500+', label: 'Hours Built' },
];

const Stats = () => {
  return (
    <Box sx={{ py: 10, background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ textAlign: 'center', mb: 8 }}>
          Numbers That <span className="text-gradient">Matter</span>
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index} sx={{ textAlign: 'center' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Typography variant="h2" sx={{ fontWeight: 800, mb: 1, color: 'white', textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
                  {stat.value}
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>
                  {stat.label}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;
