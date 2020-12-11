import React from 'react';
import {
  Container,
  Field,
  Base,
  Error,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Checkbox,
  CheckboxContainer,
  CheckboxText,
  Submit,
  StrengthContainer,
  StrengthBar,
  ValidationList,
  ValidationItem,
  ShowPassword,
} from './styles/form';

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Field = function FormField({ children, ...restProps }) {
  return <Field {...restProps}>{children}</Field>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};
Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};
Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.CheckboxContainer = function FormCheckboxContainer({
  children,
  ...restProps
}) {
  return <CheckboxContainer {...restProps}>{children}</CheckboxContainer>;
};

Form.Checkbox = function FormCheckbox({ checked, ...restProps }) {
  return <Checkbox checked={checked} {...restProps} />;
};

Form.CheckboxText = function FormCheckboxText({ children, ...restProps }) {
  return <CheckboxText {...restProps}>{children}</CheckboxText>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.StrengthContainer = function FormStrengthContainer({
  children,
  ...restProps
}) {
  return <StrengthContainer {...restProps}>{children}</StrengthContainer>;
};

Form.StrengthBar = function FormStrengthBar({ children, ...restProps }) {
  return <StrengthBar {...restProps}>{children}</StrengthBar>;
};

Form.ValidationList = function FormValidationList({ children, ...restProps }) {
  return <ValidationList {...restProps}>{children}</ValidationList>;
};

Form.ValidationItem = function FormValidationItem({ children, ...restProps }) {
  return <ValidationItem {...restProps}>{children}</ValidationItem>;
};

Form.ShowPassword = function FormShowPassword({ children, ...restProps }) {
  return <ShowPassword {...restProps}>{children}</ShowPassword>;
};
