

import Menu from "./components/menu";
import TodayPage from "./pages/today-page";


function App() {
    
  return (
    <div className="app">
      <Menu></Menu>
      <div className="pages">
        <TodayPage></TodayPage>
      </div>
    </div>
  );
}

export default App;
