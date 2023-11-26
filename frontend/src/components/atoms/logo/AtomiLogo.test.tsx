import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AtomicLogo } from '.';

describe('AtomicLogo', () => {
  it('applies className prop correctly', () => {
    const testClassName = 'test-class';
    render(<AtomicLogo className={testClassName} />);
    expect(screen.getByRole('img')).toHaveClass(testClassName);
    expect(screen.getByRole('img')).toHaveClass('nike');
  });
});
