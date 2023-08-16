import { Header, HeroContainer, Input, Label } from './Hero.styled';

export const Hero = () => {
  return (
    <HeroContainer>
      <div>
        <Header>Welcome to Delicious world</Header>
        <Label>
          <span>Find your recipe</span>
          <Input type="text" name="recipe" />
        </Label>
        <a href="https://platform.fatsecret.com">Powered by FatSecret</a>
      </div>
    </HeroContainer>
  );
};
