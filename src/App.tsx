
import MainPage from './pages/mainPage.tsx'
import EducationExperience from './pages/experience.tsx'
import DownloadsPage from './pages/downloadsPage.tsx'
import CompetencesPage from './pages/competencesPage.tsx'
import CentreInteret from './pages/loisirs.tsx'
import { HashRouter as Router,Routes,Route} from 'react-router-dom'


function App() {

  return (
    <Router basename='/home'>
      <Routes>
        <Route path='/educationExperience' element={<EducationExperience/>}/>
        <Route path="/home" element={<MainPage/>} />
        <Route path='/downloadsPage' element={<DownloadsPage/>}/>
        <Route path='/competencesPage' element={<CompetencesPage/>}/>
        <Route path='/loisirs' element={<CentreInteret/>}/>
      </Routes>
    </Router>
  )
}

export default App
