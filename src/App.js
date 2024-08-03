import { Box } from "@mui/material";
import * as Icons from "@mui/icons-material";

export const IconComponent = ({ iconName }) => {
  const Icon = Icons[iconName];
  return <Icon />;
};

function App() {
  return (
    <Box>
      test
      <IconComponent iconName="AccessTime" />
    </Box>
  );
}

export default App;
