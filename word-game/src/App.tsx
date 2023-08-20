import { Box, MainLayout } from "./App.style"
import Grid from "./modules/Grid/Grid"
import Header from "./modules/Header/Header"

export const App: React.FC = () => {

  return (
    <>
      <MainLayout>
        <Header />
        <Box>
          <Grid />
        </Box>
      </MainLayout>
    </>
  )
}

export default App
