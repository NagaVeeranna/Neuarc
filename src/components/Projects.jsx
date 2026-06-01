import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const projects = [
  {
    title: 'Classmate',
    description: 'AI-powered resume builder and career assistant for students.',
    tech: ['React', 'Node.js', 'OpenAI'],
    image: 'linear-gradient(45deg, #2563EB, #38BDF8)'
  },
  {
    title: 'Future Labs',
    description: 'A centralized campus network for student innovators and startups.',
    tech: ['Next.js', 'Firebase', 'Tailwind'],
    image: 'linear-gradient(45deg, #38BDF8, #818CF8)'
  }
];

const Projects = () => {
  return (
    <Box sx={{ py: 15, position: 'relative' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 2 }}>
          Featured <span className="text-gradient">Projects</span>
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 10, fontWeight: 400 }}>
          Some of the incredible products built by our members.
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ perspective: 1000 }}
              >
                <Paper
                  elevation={0}
                  className="glass-card"
                  sx={{
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s',
                    '&:hover': {
                      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                      borderColor: 'rgba(255,255,255,0.2)'
                    }
                  }}
                >
                  <Box sx={{ height: 250, background: project.image, position: 'relative' }}>
                    <Box sx={{ position: 'absolute', bottom: 16, right: 16 }}>
                      <Button variant="contained" size="small" endIcon={<OpenInNewIcon />} sx={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)' }}>
                        View
                      </Button>
                    </Box>
                  </Box>
                  <Box sx={{ p: 4, textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                      {project.tech.map((tech, idx) => (
                        <Chip key={idx} label={tech} variant="outlined" sx={{ color: 'text.secondary', borderColor: 'rgba(255,255,255,0.1)' }} />
                      ))}
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

export default Projects;
