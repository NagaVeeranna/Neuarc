import React from 'react';
import { Box, Container, Typography, Avatar, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const team = [
  { role: 'Founder', name: 'Alex', angle: 0, color: '#2563EB' },
  { role: 'Tech Lead', name: 'Sam', angle: 90, color: '#38BDF8' },
  { role: 'Design Lead', name: 'Jordan', angle: 180, color: '#818CF8' },
  { role: 'Operations Lead', name: 'Taylor', angle: 270, color: '#0EA5E9' },
];

const Team = () => {
  return (
    <Box sx={{ py: 15, position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 2 }}>
          Team <span className="text-gradient">Showcase</span>
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 10, fontWeight: 400 }}>
          The minds behind the innovation.
        </Typography>

        <Box sx={{ position: 'relative', height: 600, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* Center Logo */}
          <Box sx={{ position: 'absolute', zIndex: 10, textAlign: 'center' }}>
            <Typography variant="h3" sx={{ fontWeight: 800, letterSpacing: 2 }}>
              NEUR<span className="text-gradient">AC</span>
            </Typography>
          </Box>

          {/* Orbiting Members */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', border: '1px dashed rgba(255,255,255,0.1)' }}
          >
            {team.map((member, index) => {
              const radius = 200;
              const x = radius * Math.cos((member.angle * Math.PI) / 180);
              const y = radius * Math.sin((member.angle * Math.PI) / 180);

              return (
                <Box
                  key={index}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                  >
                    <Box sx={{ position: 'relative', '&:hover .socials': { opacity: 1, y: 0 } }}>
                      <Avatar
                        sx={{
                          width: 80,
                          height: 80,
                          bgcolor: member.color,
                          boxShadow: `0 0 20px ${member.color}80`,
                          cursor: 'pointer',
                          transition: '0.3s',
                          '&:hover': { transform: 'scale(1.1)' }
                        }}
                      >
                        {member.name[0]}
                      </Avatar>
                      <Box className="socials" sx={{ position: 'absolute', top: -40, left: '50%', transform: 'translateX(-50%)', opacity: 0, transition: '0.3s', display: 'flex', gap: 1 }}>
                        <IconButton size="small" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }}><GitHubIcon fontSize="small" /></IconButton>
                        <IconButton size="small" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }}><LinkedInIcon fontSize="small" /></IconButton>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'center', mt: 1, fontWeight: 600, color: 'white' }}>{member.name}</Typography>
                      <Typography variant="caption" sx={{ textAlign: 'center', display: 'block', color: 'text.secondary' }}>{member.role}</Typography>
                    </Box>
                  </motion.div>
                </Box>
              );
            })}
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Team;
