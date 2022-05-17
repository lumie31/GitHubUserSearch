import React from 'react';
import { Flex } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex
      className="nav"
      justify="space-between"
      align="center"
      style={styles.nav}
    >
      <span style={{ cursor: 'pointer' }}>
        <svg
          className="octicon octicon-mark-github v-align-middle"
          height="32"
          viewBox="0 0 16 16"
          version="1.1"
          width="32"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            fill="#fff"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
      </span>
      <ul style={styles.ul}>
        <li style={styles.li}>Sign in</li>
        <li style={styles.borderedListItem}>Sign up</li>
      </ul>
    </Flex>
  );
};

const styles = {
  nav: {
    background: '#24292E',
    padding: '15px 30px',
  },
  ul: {
    listStyleType: 'none',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
  },
  li: {
    paddingRight: '20px',
    cursor: 'pointer',
  },
  borderedListItem: {
    border: '1px solid #fff',
    borderRadius: '5px',
    padding: '5px',
    cursor: 'pointer',
  },
};

export default Header;
