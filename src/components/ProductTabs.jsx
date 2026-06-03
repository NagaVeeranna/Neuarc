import { useState } from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import SearchIcon from '@mui/icons-material/Search';

const tabs = [
  { 
    id: 'build', 
    label: 'Build', 
    icon: <CodeIcon />, 
    title: 'The future of development is here.', 
    desc: 'Automate your workflow with AI-powered code generation and collaborative workspaces.',
    color: '#2f81f7' 
  },
  { 
    id: 'test', 
    label: 'Test', 
    icon: <TerminalIcon />, 
    title: 'Robust testing at scale.', 
    desc: 'Deploy with confidence using our automated testing pipelines and research validation tools.',
    color: '#8957e5' 
  },
  { 
    id: 'scale', 
    label: 'Scale', 
    icon: <StorageIcon />, 
    title: 'From MVP to Global Infrastructure.', 
    desc: 'Scale your products effortlessly with our distributed innovation network.',
    color: '#38bdf8' 
  }
];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeData = tabs.find(t => t.id === activeTab);

  return (
    <Box sx={{ py: 15, borderTop: '1px solid #30363d', background: '#0d1117' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography className="mono-text" variant="caption" sx={{ color: 'secondary.main', mb: 2, display: 'block' }}>
            [ HUB_FEATURES ]
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
            A technical platform <span style={{ color: '#8b949e' }}>built for builders.</span>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', borderBottom: '1px solid #30363d', mb: 5, justifyContent: 'center', gap: 3 }}>
          {tabs.map((tab) => (
            <Box
              key={tab.id}
              className={`github-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              sx={{ px: 3, py: 1.5, fontSize: '1rem' }}
            >
              {tab.icon}
              {tab.label}
            </Box>
          ))}
        </Box>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Paper
              elevation={0}
              className="glow-border"
              sx={{
                p: { xs: 4, md: 8 },
                background: '#161b22',
                border: '1px solid #30363d',
                borderRadius: 3,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Box sx={{ 
                position: 'absolute', 
                top: 0, 
                right: 0, 
                width: '30%', 
                height: '100%', 
                background: `radial-gradient(circle at center, ${activeData.color}15 0%, transparent 70%)`,
                zIndex: 0
              }} />

              <Grid container spacing={4} alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
                    {activeData.title}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" sx={{ mb: 4, fontWeight: 400, lineHeight: 1.6 }}>
                    {activeData.desc}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box sx={{ color: activeData.color, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <SearchIcon fontSize="small" />
                      <Typography variant="body2" className="mono-text">DISCOVER_TECH</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box 
                    sx={{ 
                      background: '#0d1117', 
                      borderRadius: 2, 
                      p: 3, 
                      border: '1px solid #30363d',
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.9rem',
                      color: '#c9d1d9',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
                      <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
                      <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
                    </Box>
                    <Typography component="div" sx={{ color: '#8b949e' }}>{`// Initializing ${activeTab} module...`}</Typography>
                    <Typography component="div" sx={{ mt: 1 }}>
                      <span style={{ color: '#79c0ff' }}>neurac</span>
                      <span style={{ color: '#d2a8ff' }}> init</span>
                      <span style={{ color: '#a5d6ff' }}> --template</span>
                      <span style={{ color: '#ffa657' }}> innovation-lab</span>
                    </Typography>
                    <Typography component="div" sx={{ mt: 1, color: '#aff5b4' }}>✔ Module successfully deployed.</Typography>
                    <Typography component="div" sx={{ mt: 1, opacity: 0.5 }}>{`Running ${activeTab}_optimizer.v1.0...`}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default ProductTabs;
