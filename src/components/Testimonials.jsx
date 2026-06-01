import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  { name: 'Sarah L.', role: 'Student Developer', text: 'Neurac gave me the platform to build real products instead of just learning theory.', color: '#2563EB' },
  { name: 'David M.', role: 'Startup Founder', text: 'The talent at Neurac is unmatched. They built our MVP in record time.', color: '#38BDF8' },
  { name: 'Dr. Emily R.', role: 'Professor', text: 'A brilliant initiative bridging the gap between academia and industry.', color: '#818CF8' }
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 15, position: 'relative' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 2 }}>
          Trusted By <span className="text-gradient">Many</span>
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 10, fontWeight: 400 }}>
          Hear from the people who have experienced the Neurac difference.
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((test, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ height: '100%' }}
              >
                <Paper
                  elevation={0}
                  className="glass-card"
                  sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}
                >
                  <FormatQuoteIcon sx={{ fontSize: 60, color: 'rgba(255,255,255,0.05)', position: 'absolute', top: 20, right: 20 }} />
                  <Typography variant="body1" sx={{ mb: 4, flexGrow: 1, fontStyle: 'italic', color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.6 }}>
                    "{test.text}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: test.color }}>{test.name[0]}</Avatar>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{test.name}</Typography>
                      <Typography variant="caption" color="text.secondary">{test.role}</Typography>
                    </Box>
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

export default Testimonials;
