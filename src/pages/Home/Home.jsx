import { Box } from 'components/Box';
import StepperInstruction from './StepperInstruction/StepperInstruction';

export default function Home() {
  return (
    <Box padding="30px" mt="60px" mr="auto" ml="auto" width={1200}>
      <StepperInstruction />
    </Box>
  );
}
