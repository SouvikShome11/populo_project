import { test } from '@playwright/test';

export const logAnnotation = (level, message) => {
  if (test.info()) {
    test.info().annotations.push({ type: level, description: message });
  } else {
    console.log(`${level}: ${message}`);
  }
};
