import React from 'react'
// import { ReactComponent as BellIcon } from './icons/bell.svg'
// import { ReactComponent as MessengerIcon } from './icons/messenger.svg'
// import { ReactComponent as CaretIcon } from './icons/caret.svg'
// import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg'
// import { ReactComponent as CogIcon } from './icons/cog.svg'
// import { ReactComponent as ChevronIcon } from './icons/chevron.svg'
import { ReactComponent as ArrowIcon } from '../../logo.svg'
// import { ReactComponent as BoltIcon } from './icons/bolt.svg'

import {
  NavBarHeader,
  NavbarWrapper,
  NavUlWrapper,
  NavUlWrapperUl,
  // BurgerWrapper,
  DropwDownMenuWrapper
} from './styles'

const Navbar = (props) => {
  return (
    <>
      <NavBarHeader>
        <NavbarWrapper>
          {/* <Brand /> */}
          <NavUlWrapper>
            <NavUlWrapperUl>
              <a href='/'>WORK</a>
            </NavUlWrapperUl>
            <NavUlWrapperUl>
              <a href='/'>ABOUT</a>
            </NavUlWrapperUl>
          </NavUlWrapper>

          {/* <DropwDownMenuWrapper> */}
            {/* <NavItem icon={<ArrowIcon />}> */}
              {/* <DropwDownMenu /> */}
            {/* </NavItem> */}
          {/* </DropwDownMenuWrapper> */}
          {/* <BurgerWrapper /> */}
        </NavbarWrapper>
      </NavBarHeader>
    </>
  )
}

export default Navbar