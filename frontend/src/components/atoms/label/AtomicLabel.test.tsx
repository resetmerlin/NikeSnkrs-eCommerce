import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AtomicLabel } from '.';

describe('AtomicItem', () => {
  it('applies className prop correctly', () => {
    const testClassName = 'test-class';
    render(
      <AtomicLabel className={testClassName} htmlFor="userPassword">
        <p>Test Content</p>
      </AtomicLabel>
    );
    expect(screen.getByText('Test Content').parentNode).toHaveClass(
      testClassName
    );
    expect(screen.getByText('Test Content').parentNode).toHaveClass('label');
  });

  // Test each props individually
  it.each([
    'userPassword',
    'userEmail',
    'userName',
    'userConfirmPassword',
    'postalCode',
    'address',
    'specificAddress',
    'referenceItem',
  ])('handles htmlFor props: %s', (htmlFor) => {
    render(<AtomicLabel htmlFor={htmlFor}>Test Label</AtomicLabel>);
    const label = screen.getByText('Test Label');
    expect(label).toHaveAttribute('for', htmlFor);
  });
});
