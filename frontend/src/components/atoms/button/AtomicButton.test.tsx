import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AtomicButton } from '.';

describe('AtomicButton', () => {
  it('Renders Atom Button', () => {
    render(<AtomicButton>Click me</AtomicButton>);
    expect(
      screen.getByRole('button', { name: /Click me/ })
    ).toBeInTheDocument();
  });

  it('apples default props correctly', () => {
    render(<AtomicButton>Default</AtomicButton>);
    const button = screen.getByRole('button', { name: /Default/ });
    expect(button).toHaveClass('button-primary');
    expect(button).toHaveClass('button-normal');
    expect(button).toHaveAttribute('type', 'button');
  });

  // Test each props individually
  describe('Individual Props', () => {
    it.each(['submit', 'button'])('handles type props: %s', (type) => {
      render(<AtomicButton type={type}>Button</AtomicButton>);
      expect(screen.getByRole('button')).toHaveAttribute('type', type);
    });

    it.each(['primary', 'secondary'])('handles color props: %s', (color) => {
      render(<AtomicButton color={color}>Button</AtomicButton>);
      expect(screen.getByRole('button')).toHaveClass(`button-${color}`);
    });

    it.each(['normal', 'round', 'rect', 'none'])(
      'handles shape props: %s',
      (shape) => {
        render(<AtomicButton shape={shape}>Button</AtomicButton>);
        expect(screen.getByRole('button')).toHaveClass(`button-${shape}`);
      }
    );

    it.each(['xs', 's', 'm', 'l', 'xl', 'xxl'])(
      'handles size props: %s',
      (size) => {
        render(<AtomicButton size={size}>Button</AtomicButton>);
        expect(screen.getByRole('button')).toHaveClass(`button-${size}`);
      }
    );
  });
});
