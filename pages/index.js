import Head from 'next/head'
import styled from 'styled-components';

import DefaultLayout from '@layout/default';

import Solution from '@comp/solution';
import Items from '@comp/items';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 384px 600px 1fr;
  width: 100%;
  height: 100vh;
`;

export default function Home() {
  return (
      <DefaultLayout>
        <Grid>
          <Items />
          <Solution />
          <div>3</div>
        </Grid>
      </DefaultLayout>
  )
}
