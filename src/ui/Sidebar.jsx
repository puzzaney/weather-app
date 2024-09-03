import { FaCloudSun, FaMap } from 'react-icons/fa';
import { IoUmbrella } from 'react-icons/io5';
import SidebarBtn from './SidebarBtn';
import { IoMdSettings } from 'react-icons/io';

function Sidebar() {
  return (
    <div className="bg-[#202B3B] mx-5 my-3 rounded-lg flex flex-col items-center py-6">
      <div className="text-white text-4xl">
        <IoUmbrella />
      </div>
      <div className="mt-8">
        <SidebarBtn to="weather" label="Weather">
          <FaCloudSun />
        </SidebarBtn>
        <SidebarBtn to="cities" label="Cities">
          <FaMap />
        </SidebarBtn>
        <SidebarBtn to="settings" label="Settings">
          <IoMdSettings />
        </SidebarBtn>
      </div>
    </div>
  );
}
export default Sidebar;
