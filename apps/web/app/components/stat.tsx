import {
  Stat as ChakraStat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from '@chakra-ui/react';
import type { StatProps as ChakraStatProps } from '@chakra-ui/react';

interface StatProps extends ChakraStatProps {
  label: React.ReactNode;
  value: React.ReactNode;
  type?: 'increase' | 'decrease';
  difference?: React.ReactNode;
}

export const Stat = ({
  label,
  value,
  type,
  difference,
  color,
  ...rest
}: StatProps) => {
  return (
    <ChakraStat {...rest}>
      <StatLabel>{label}</StatLabel>
      <StatNumber color={color}>{value}</StatNumber>
      {difference && (
        <StatHelpText>
          {type && <StatArrow type={type} />}
          {difference}
        </StatHelpText>
      )}
    </ChakraStat>
  );
};
