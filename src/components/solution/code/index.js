import React, { useEffect } from "react";
import Prism from "prismjs";
import styled from 'styled-components';

import { CodeWrapper } from './style';

const PreWrapper = styled.pre`
    border-radius: 8px;
`

export default function Code({ code, language }) {

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <PreWrapper>
        <CodeWrapper className={`language-${language}`}>{code}</CodeWrapper>
      </PreWrapper>
    </div>
  );
}
