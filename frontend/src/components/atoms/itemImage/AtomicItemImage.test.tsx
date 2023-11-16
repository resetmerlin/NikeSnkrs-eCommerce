import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AtomicItemImage } from '.';

describe('AtomicItem', () => {
  it('applies className prop correctly', () => {
    const testClassName = 'test-class';
    render(<AtomicItemImage className={testClassName} size="s" />);
    expect(screen.getByRole('img')).toHaveClass(testClassName);
    expect(screen.getByRole('img')).toHaveClass('itemImage');
  });

  // Test each props individually
  it.each(['s', 'm', 'l', 'xl'])('handles size props: %s', (size) => {
    render(<AtomicItemImage size={size} />);
    expect(screen.getByRole('img')).toHaveClass(`itemImage-${size}`);
  });

  // Test each props individually
  it.each(['short', 'long'])('handles path props: %s', (path) => {
    const productId = '64057e49aafc2434e58a9482';
    render(<AtomicItemImage path={path} productId={productId} />);
    const imageSrc = screen.getByRole('img').getAttribute('src');
    expect(imageSrc).toBe(
      path === 'short'
        ? `./products/${productId}.png`
        : `../products/${productId}.png`
    );
  });
});
