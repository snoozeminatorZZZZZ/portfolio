import { Box } from '@chakra-ui/react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback } from 'react';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Box position="absolute" top="0" left="0" w="100%" h="100%" zIndex={0}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: "#0d1117" }
          },
          fpsLimit: 60,
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            color: { value: "#00ffc3" },
            links: {
              enable: true,
              color: "#00ffc3",
              distance: 150,
              opacity: 0.4,
              width: 1
            }
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 }
            }
          },
        }}
      />
    </Box>
  );
}
