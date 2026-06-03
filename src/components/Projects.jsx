import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const projects = [
  {
    repo: 'neurac/classmate',
    title: 'Classmate',
    description: 'AI-powered resume builder and career assistant for students.',
    tech: ['React', 'Node.js', 'OpenAI'],
    image: '#161b22',
    color: '#2f81f7'
  },
  {
    repo: 'neurac/future-labs',
    title: 'Future Labs',
    description: 'A centralized campus network for student innovators and startups.',
    tech: ['Next.js', 'Firebase', 'Tailwind'],
    image: '#161b22',
    color: '#238636'
  }
];

const Projects = () => {
  return (
    <Box sx={{ py: 15, position: 'relative', borderTop: '1px solid #30363d' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 10 }}>
          <Typography variant="body1" color="primary" className="mono-text" sx={{ mb: 2, fontWeight: 600 }}>
            {/* 04. FEATURED_REPOS */}
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            Shipped <span style={{ color: '#8b949e' }}>solutions.</span>
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#161b22',
                    border: '1px solid #30363d',
                    borderRadius: 2,
                    transition: '0.2s',
                    '&:hover': {
                      borderColor: '#8b949e'
                    }
                  }}
                >
                  <Box sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: project.color }} />
                      <Typography className="mono-text" variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                        {project.repo}
                      </Typography>
                    </Box>
                    <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6, fontSize: '1rem' }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                        {project.tech.map((tech, idx) => (
                          <Typography key={idx} className="mono-text" variant="caption" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <span style={{ opacity: 0.5 }}>#</span>{tech}
                          </Typography>
                        ))}
                      </Box>
                      <Button 
                        variant="outlined" 
                        size="small" 
                        endIcon={<OpenInNewIcon sx={{ fontSize: '1rem !important' }} />} 
                        sx={{ 
                          borderColor: '#30363d', 
                          color: 'white',
                          borderRadius: 1,
                          fontSize: '0.75rem',
                          '&:hover': { borderColor: '#8b949e', background: 'transparent' }
                        }}
                      >
                        View Case Study
                      </Button>
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
