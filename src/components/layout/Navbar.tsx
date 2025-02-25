import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, LogoutIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const handleSignOut = () => {
    // Your sign-out logic here
  };

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo or Brand Name */}
      <div className="text-xl font-bold">Alumni Network</div>

      {/* User Menu */}
      <Menu as="div" className="relative">
        <Menu.Button className="flex items-center space-x-2 focus:outline-none">
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <ChevronDownIcon className="w-4 h-4 text-gray-500" />
        </Menu.Button>

        {/* Dropdown Menu */}
        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {/* Profile Link */}
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/profile"
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } block px-4 py-2 text-sm text-gray-700`}
                  >
                    Profile
                  </a>
                )}
              </Menu.Item>

              {/* Settings Link */}
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/settings"
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } block px-4 py-2 text-sm text-gray-700`}
                  >
                    Settings
                  </a>
                )}
              </Menu.Item>

              {/* Sign Out Button */}
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleSignOut}
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } w-full text-left px-4 py-2 text-sm text-red-600 flex items-center`}
                  >
                    <LogoutIcon className="w-4 h-4 mr-2" />
                    Sign Out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Navbar; 