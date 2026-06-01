import React from 'react';
import { Box, Container, Typography, Grid, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box sx={{ pt: 10, pb: 4, borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(2, 6, 23, 0.8)', backdropFilter: 'blur(20px)' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: 1, mb: 2 }}>
              NEUR<span className="text-gradient">AC</span>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 300 }}>
              Think. Build. Transform. We are a collective of student innovators shaping the future of technology.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton sx={{ color: 'text.secondary', '&:hover': { color: 'white' } }}><GitHubIcon /></IconButton>
              <IconButton sx={{ color: 'text.secondary', '&:hover': { color: '#0077b5' } }}><LinkedInIcon /></IconButton>
              <IconButton sx={{ color: 'text.secondary', '&:hover': { color: '#1DA1F2' } }}><TwitterIcon /></IconButton>
              <IconButton sx={{ color: 'text.secondary', '&:hover': { color: '#E1306C' } }}><InstagramIcon /></IconButton>
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 3, color: 'white' }}>Quick Links</Typography>
            <Stack spacing={2}>
              {['Home', 'About', 'Team', 'Join Us'].map((link) => (
                <Typography key={link} variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: 'white' } }}>{link}</Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 3, color: 'white' }}>Services</Typography>
            <Stack spacing={2}>
              {['AI Solutions', 'Web Dev', 'Research', 'Consulting'].map((link) => (
                <Typography key={link} variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: 'white' } }}>{link}</Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 3, color: 'white' }}>Contact</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>hello@neurac.io</Typography>
            <Typography variant="body2" color="text.secondary">123 Innovation Drive, Tech Campus</Typography>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.05)', pt: 4, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} NEURAC. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Designed with passion.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
