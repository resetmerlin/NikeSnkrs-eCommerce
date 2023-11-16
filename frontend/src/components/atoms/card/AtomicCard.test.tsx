import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AtomicCard } from '.';

describe('AtomicCard', () => {
  it('renders children correctly', () => {
    render(
      <AtomicCard>
        <p>Test Content</p>
      </AtomicCard>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies className prop correctly', () => {
    const testClassName = 'test-class';
    render(
      <AtomicCard className={testClassName}>
        <p>Test Content</p>
      </AtomicCard>
    );
    expect(screen.getByText('Test Content').parentNode).toHaveClass(
      testClassName
    );
    expect(screen.getByText('Test Content').parentNode).toHaveClass('card');
  });
});
