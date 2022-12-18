import { Navbar, TextInput, Code, Box } from '@mantine/core';
import { IconUser, IconCheckbox, IconSearch, IconHome } from '@tabler/icons';
// import { UserButton } from './user-button';
import { UserButton } from '@clerk/remix';
import { NavLink } from '@remix-run/react';
import cx from 'classnames';
import { REDIRECT_ROUTES } from '~/lib/constants';
import { Logo } from './logo';
import { useStyles } from './navigation.styles';
import type { TablerIcon } from '@tabler/icons';
import type { UserButtonProps } from './user-button';

type MenuLink = {
  label: React.ReactNode;
  to: string;
  icon?: TablerIcon;
};

const navLinks: MenuLink[] = [
  { icon: IconHome, label: 'Home', to: REDIRECT_ROUTES.AUTHENTICATED },
  { icon: IconCheckbox, label: 'Tasks', to: 'today' },
  { icon: IconUser, label: 'Profile', to: 'profile' },
];

// const collections = [
//   { emoji: '👍', label: 'Sales' },
//   { emoji: '🚚', label: 'Deliveries' },
//   { emoji: '💸', label: 'Discounts' },
//   { emoji: '💰', label: 'Profits' },
//   { emoji: '✨', label: 'Reports' },
//   { emoji: '🛒', label: 'Orders' },
//   { emoji: '📅', label: 'Events' },
//   { emoji: '🙈', label: 'Debts' },
//   { emoji: '💁‍♀️', label: 'Customers' },
// ];

const AuthenticatedNavigation = (props: UserButtonProps) => {
  const { classes } = useStyles();

  const mainLinks = navLinks.map((link) => {
    const Icon = link.icon ? (
      <link.icon size={20} className={classes.mainLinkIcon} />
    ) : null;

    return (
      <NavLink
        key={String(link.label)}
        className={({ isActive }) =>
          cx(classes.mainLink, isActive ? classes.mainLinkActive : null)
        }
        to={link.to}
      >
        <Box className={classes.mainLinkInner}>
          {Icon}
          <span>{link.label}</span>
        </Box>
      </NavLink>
    );
  });

  // const collectionLinks = collections.map((collection) => (
  //   <a
  //     href="/"
  //     onClick={(event) => event.preventDefault()}
  //     key={collection.label}
  //     className={classes.collectionLink}
  //   >
  //     <span style={{ marginRight: 9, fontSize: 16 }}>{collection.emoji}</span>{' '}
  //     {collection.label}
  //   </a>
  // ));

  return (
    <Navbar width={{ sm: 300 }} p="md" className="gap-6">
      <Navbar.Section className={classes.section} grow>
        <Logo to={REDIRECT_ROUTES.AUTHENTICATED} className={classes.logo} />

        <Navbar.Section className={classes.section} grow>
          <TextInput
            placeholder="Search"
            size="xs"
            icon={<IconSearch size={12} stroke={1.5} />}
            rightSectionWidth={70}
            rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
            styles={{ rightSection: { pointerEvents: 'none' } }}
            mb="sm"
          />

          <div className={classes.mainLinks}>{mainLinks}</div>
        </Navbar.Section>
      </Navbar.Section>

      {/* <Navbar.Section className={classes.section} grow>
        <Group className={classes.collectionsHeader} position="apart">
          <Text size="xs" weight={500} color="dimmed">
            Collections
          </Text>
          <Tooltip label="Create collection" withArrow position="right">
            <ActionIcon variant="default" size={18}>
              <IconPlus size={12} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        </Group>
        <div className={classes.collections}>{collectionLinks}</div>
      </Navbar.Section> */}

      <Navbar.Section className={classes.section}>
        <UserButton afterSignOutUrl="/login" />
      </Navbar.Section>
    </Navbar>
  );
};

type NavigationProps = UserButtonProps;

export function Navigation(props: NavigationProps) {
  return <AuthenticatedNavigation {...props} />;
}
