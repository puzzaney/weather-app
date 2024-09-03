import Main from './Main';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <div className="h-screen grid grid-cols-[8rem_1fr] bg-[#0B131E]">
      <Sidebar />
      <Main />
    </div>
  );
}
export default AppLayout;
