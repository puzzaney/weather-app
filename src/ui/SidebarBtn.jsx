import { NavLink } from 'react-router-dom';

function SidebarBtn({ children, to, label }) {
  return (
    <NavLink
      to={`/${to}`}
      className={({ isActive, isPending, isTransitioning }) =>
        [
          isActive
            ? 'text-white text-3xl flex flex-col items-center justify-center mt-5 py-2 '
            : 'text-gray-400 text-3xl flex flex-col items-center justify-center mt-5 py-2 ',
        ].join(' ')
      }
    >
      {children}
      <p className="text-sm font-semibold text-center my-1">{label}</p>
    </NavLink>
  );
}
export default SidebarBtn;
