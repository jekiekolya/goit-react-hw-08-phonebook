import { Box } from 'components/Box';
import StepperInstruction from './StepperInstruction/StepperInstruction';

import { MainTitle } from './Home.Styled';

export default function Home() {
  return (
    <Box padding="30px" mt="60px" mr="auto" ml="auto" width={1200}>
      <MainTitle>How It Works?</MainTitle>
      <StepperInstruction />
    </Box>
  );
}
