import { Moon, Sun } from 'lucide-react';
import { Theme, useTheme } from 'remix-themes';
import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { Switch } from '~/components/ui/switch';

export function ModeToggle() {
  const [theme, setTheme] = useTheme();

  const Icon = theme === Theme.LIGHT ? Sun : Moon;

  return (
    <>
      <Switch
        checked={theme === Theme.DARK}
        onCheckedChange={() => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)}
      />
    </>
  );
}
