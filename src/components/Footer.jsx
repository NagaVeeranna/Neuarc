import { Box, Container, Typography, Grid, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box sx={{ pt: 10, pb: 4, borderTop: '1px solid #30363d', background: '#0d1117' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: -1, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box component="span" sx={{ color: 'text.primary' }}>NEUR</Box>
              <Box component="span" sx={{ color: 'primary.main' }}>AC</Box>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 300, lineHeight: 1.6 }}>
              Think. Build. Transform. <br />
              The student-led innovation collective shaping the future of technology.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'white' } }}><GitHubIcon fontSize="small" /></IconButton>
              <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'white' } }}><LinkedInIcon fontSize="small" /></IconButton>
              <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'white' } }}><TwitterIcon fontSize="small" /></IconButton>
              <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'white' } }}><InstagramIcon fontSize="small" /></IconButton>
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography className="mono-text" variant="caption" sx={{ fontWeight: 600, mb: 3, color: 'text.primary', display: 'block' }}>Product</Typography>
            <Stack spacing={1.5}>
              {['Features', 'Security', 'Enterprise', 'Customer Stories'].map((link) => (
                <Typography key={link} variant="body2" sx={{ cursor: 'pointer', color: 'text.secondary', '&:hover': { color: 'primary.main', textDecoration: 'underline' } }}>{link}</Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography className="mono-text" variant="caption" sx={{ fontWeight: 600, mb: 3, color: 'text.primary', display: 'block' }}>Support</Typography>
            <Stack spacing={1.5}>
              {['Docs', 'Community Forum', 'Contact Support', 'Status'].map((link) => (
                <Typography key={link} variant="body2" sx={{ cursor: 'pointer', color: 'text.secondary', '&:hover': { color: 'primary.main', textDecoration: 'underline' } }}>{link}</Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography className="mono-text" variant="caption" sx={{ fontWeight: 600, mb: 3, color: 'text.primary', display: 'block' }}>Company</Typography>
            <Stack spacing={1.5}>
              {['About', 'Blog', 'Careers', 'Press'].map((link) => (
                <Typography key={link} variant="body2" sx={{ cursor: 'pointer', color: 'text.secondary', '&:hover': { color: 'primary.main', textDecoration: 'underline' } }}>{link}</Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography className="mono-text" variant="caption" sx={{ fontWeight: 600, mb: 3, color: 'text.primary', display: 'block' }}>Legal</Typography>
            <Stack spacing={1.5}>
              {['Terms', 'Privacy', 'Cookie Policy'].map((link) => (
                <Typography key={link} variant="body2" sx={{ cursor: 'pointer', color: 'text.secondary', '&:hover': { color: 'primary.main', textDecoration: 'underline' } }}>{link}</Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: '1px solid #30363d', pt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Typography variant="caption" color="text.secondary">
              © {new Date().getFullYear()} NEURAC, Inc.
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
              Terms
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
              Privacy
            </Typography>
          </Box>
          <Typography variant="caption" color="text.secondary">
            Made with <span style={{ color: '#f85149' }}>❤</span> by Neurac Collective.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
