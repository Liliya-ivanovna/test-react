import { Button, Text, Wrapper } from './Home.styled';

export default function Home() {
  return (
    <Wrapper>
      <Text>Discover the world with our car rental service</Text>
      <Button to={'/catalog'}>Go to catalog</Button>
    </Wrapper>
  );
}