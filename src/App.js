import style from "./Components/app/global.module.css";
import PageWrapper from "./Components/pages/PageWrapper/PageWrapper.jsx";


// TODO: разобраться с лишним div  - слишком много divов
function App() {
  return (
    <div className={style}>
      <PageWrapper />
      
    </div>
  );
}

export default App;
