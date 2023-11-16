import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AtomicItem } from '.';

describe('AtomicItem', () => {
  it('applies className prop correctly', () => {
    const testClassName = 'test-class';
    render(
      <AtomicItem className={testClassName} size="s">
        <p>Test Content</p>
      </AtomicItem>
    );
    expect(screen.getByText('Test Content').parentNode).toHaveClass(
      testClassName
    );
    expect(screen.getByText('Test Content').parentNode).toHaveClass('item');
  });

  // Test each props individually
  it.each(['xs', 's', 'm'])('handles size props: %s', (size) => {
    render(
      <AtomicItem size={size}>
        <p>Test Content</p>
      </AtomicItem>
    );
    expect(screen.getByText('Test Content').parentNode).toHaveClass(
      `item-${size}`
    );
  });
});
