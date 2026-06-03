import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const timeline = [
  { year: '2026', title: 'Foundation', desc: 'Establishing the core team and values.' },
  { year: '2027', title: 'Community', desc: 'Expanding network and hosting hackathons.' },
  { year: '2028', title: 'Products', desc: 'Releasing student-built software to the public.' },
  { year: '2029', title: 'Startup Launch', desc: 'Incubating internal projects into real startups.' },
  { year: '2030', title: 'Global Presence', desc: 'Scaling operations and influence globally.' },
];

const Vision = () => {
  return (
    <Box sx={{ py: 15 }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 2 }}>
          Vision <span className="text-gradient">2030</span>
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 10, fontWeight: 400 }}>
          Our roadmap to shaping the future.
        </Typography>

        <Box sx={{ position: 'relative', pl: { xs: 4, md: 0 } }}>
          {/* Vertical Line */}
          <Box sx={{ position: 'absolute', left: { xs: '20px', md: '50%' }, top: 0, bottom: 0, width: '2px', background: 'rgba(255,255,255,0.1)', transform: { md: 'translateX(-50%)' } }} />
          
          {timeline.map((item, index) => (
            <Box key={index} sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row-reverse' : 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 8,
              position: 'relative'
            }}>
              <Box sx={{ width: { xs: '100%', md: '45%' }, pl: { xs: 4, md: 0 }, pr: { md: index % 2 === 0 ? 0 : 4 }, textAlign: { md: index % 2 === 0 ? 'left' : 'right' } }}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'white' }}>
                    {item.year}
                  </Typography>
                  <Typography variant="h5" color="primary" sx={{ mb: 1, fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.desc}
                  </Typography>
                </motion.div>
              </Box>

              {/* Node */}
              <Box sx={{ 
                position: 'absolute', 
                left: { xs: '20px', md: '50%' }, 
                transform: 'translate(-50%, -50%)', 
                top: { xs: '15px', md: '50%' },
                width: 20, 
                height: 20, 
                borderRadius: '50%', 
                background: '#2563EB',
                boxShadow: '0 0 15px #2563EB'
              }} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Vision;
