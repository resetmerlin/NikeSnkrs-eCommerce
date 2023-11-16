import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AtomicForm } from '.';

describe('AtomicCard', () => {
  it('renders children correctly', () => {
    render(
      <AtomicForm>
        <p>Test Content</p>
      </AtomicForm>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies className prop correctly', () => {
    const testClassName = 'test-class';
    render(
      <AtomicForm className={testClassName}>
        <p>Test Content</p>
      </AtomicForm>
    );
    expect(screen.getByText('Test Content').parentNode).toHaveClass(
      testClassName
    );
    expect(screen.getByText('Test Content').parentNode).toHaveClass('form');
  });
});
