import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';

type UnknownProps = Record<string, unknown>;

interface PasswordInputProps extends UnknownProps {
  name?: string;
  defaultHidden?: boolean;
}

export const PasswordInput = ({
  name,
  defaultHidden = true,
  ...rest
}: PasswordInputProps) => {
  const [show, setShow] = useState(!defaultHidden);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        name={name}
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        placeholder="Enter password"
        required
        {...rest}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
