import React from 'react';
import 'styled-components/macro';

const styles = `
  color: red;
`;

const Table = ({ text }: { text: string }) => <div css={styles}>{text}</div>;

export default Table;
