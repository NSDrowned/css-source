// Packages
import React from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";
import styled from 'styled-components';

import theme from "prism-react-renderer/themes/nightOwl";

const SolutionWrapper = styled.div`
	padding: 28px;
	background-color: #F1F1F1;
	border-right: 1px dashed #CCC;
`;

const SolutionTitle = styled.h1`
	font-size: 24px;
	line-height: 8px;
	letter-spacing: -1px;
	color: #031627;
	margin: 0;
	padding: 0;
`;

const SolutionDesc = styled.h2`
	font-size: 14px;
	font-weight: normal;
	color: #555;
`;

const SolutionExample = styled.div`
	background-color: #D4D6D8;
	padding: 14px;
	// border-radius: 8px;
	box-shadow: inset 1px 1px 2px 0px rgba(0,0,0,0.15);
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
	min-height: 200px;
	margin-top: 24px;

	& > div {
		background: #3EBA9C;
		width: 50px;
		height: 50px;
	}
`

const HighlightWrapper = styled.div`
	padding: 1px 14px;
	background-color: #031627;
	// border-radius: 8px;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
`;

let code =
`margin-left: auto;
margin-right: auto;`

let Example = styled.div
`${code}`

// Components

export default function Solution(props) {

	return (
		<SolutionWrapper>

			<SolutionTitle>Center a div horizontally</SolutionTitle>
			<SolutionDesc>Center a div element horizontally inside a page or another div a div element horizontally inside a page or another div a div element horizontally inside a page or another div</SolutionDesc>

			<SolutionExample>
				<Example></Example>
			</SolutionExample>

			<HighlightWrapper>
				<Highlight {...defaultProps} theme={theme} code={code} language="scss">
					{({ className, style, tokens, getLineProps, getTokenProps }) => (
					<pre className={className} style={style}>
						{tokens.map((line, i) => (
						<div {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
							<span {...getTokenProps({ token, key })} />
							))}
						</div>
						))}
					</pre>
					)}
				</Highlight>
			</HighlightWrapper>
		</SolutionWrapper>
	);
};