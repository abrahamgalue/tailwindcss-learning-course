import {
  HomeIcon,
  UserIcon,
  Cog8ToothIcon,
  QuestionMarkCircleIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/16/solid";

import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownLabel,
  DropdownButton,
  DropdownIcon,
} from "./Dropdown";

function App() {
  return (
    <Dropdown>
      <DropdownButton>Options</DropdownButton>
      <DropdownMenu>
        <DropdownItem href="#">
          <DropdownIcon>
            <HomeIcon />
          </DropdownIcon>
          <DropdownLabel>Dashboard</DropdownLabel>
        </DropdownItem>

        <DropdownItem href="#">
          <DropdownIcon>
            <UserIcon />
          </DropdownIcon>
          <DropdownLabel>Account</DropdownLabel>
        </DropdownItem>

        <DropdownItem href="#">
          <DropdownIcon>
            <Cog8ToothIcon />
          </DropdownIcon>
          <DropdownLabel>Settings</DropdownLabel>
        </DropdownItem>

        <DropdownItem href="#">
          <DropdownIcon>
            <QuestionMarkCircleIcon />
          </DropdownIcon>
          <DropdownLabel>Help</DropdownLabel>
        </DropdownItem>

        <DropdownItem href="#">
          <DropdownIcon>
            <ArrowRightStartOnRectangleIcon />
          </DropdownIcon>
          <DropdownLabel>Sign out</DropdownLabel>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default App;
