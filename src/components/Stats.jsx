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
    <Box sx={{ py: 12, background: '#0d1117', borderTop: '1px solid #30363d', borderBottom: '1px solid #30363d' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index} sx={{ textAlign: 'center' }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Typography className="mono-text" variant="h2" sx={{ fontWeight: 700, mb: 1, color: 'primary.main' }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, letterSpacing: 1, textTransform: 'uppercase' }}>
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
