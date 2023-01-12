import { Img } from '@chakra-ui/react';
import { Link } from '@remix-run/react';
import { Card, CardTitle } from '@saas-ui/react';

interface BankListItemProps {
  logoSrc: string;
  name: string;
  to: string;
}

export const BankListItem = ({ logoSrc, name, to }: BankListItemProps) => {
  return (
    <Card
      as={Link}
      to={to}
      display="flex"
      alignItems="center"
      width="100%"
      p={4}
      gap={1}
      isHoverable
      borderRadius="xl"
    >
      <Img src={logoSrc} width="12" me="2" loading="lazy" borderRadius="md" />
      <CardTitle>{name}</CardTitle>
    </Card>
  );
};
