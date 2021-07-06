import Head from 'next/head';
import styled from 'styled-components';

const Text = styled.p`
  font-size: 30px;
  color: white;
  text-align: center;
`;

export default function Home() {
  return <Text>Oi, esse é o index</Text>;
}
