import test from 'node:test';
import assert from 'node:assert/strict';
import { getTodayMinDate, isPastDate, formatDateBR } from './dateValidation';

test('getTodayMinDate formats date correctly as YYYY-MM-DD', () => {
  const mockDate = new Date(2026, 10, 11); // Month is 0-indexed: 10 = November
  const formatted = getTodayMinDate(mockDate);
  assert.equal(formatted, '2026-11-11');
});

test('getTodayMinDate pads single digit months and days with leading zeros', () => {
  const mockDate = new Date(2026, 4, 3); // May 3rd, 2026
  const formatted = getTodayMinDate(mockDate);
  assert.equal(formatted, '2026-05-03');
});

test('isPastDate detects past dates accurately', () => {
  const referenceToday = '2026-11-11';
  assert.equal(isPastDate('2026-11-10', referenceToday), true);
  assert.equal(isPastDate('2026-10-31', referenceToday), true);
  assert.equal(isPastDate('2025-12-25', referenceToday), true);
});

test('isPastDate permits today and future dates', () => {
  const referenceToday = '2026-11-11';
  assert.equal(isPastDate('2026-11-11', referenceToday), false);
  assert.equal(isPastDate('2026-11-12', referenceToday), false);
  assert.equal(isPastDate('2027-01-01', referenceToday), false);
  assert.equal(isPastDate('', referenceToday), false);
});

test('formatDateBR converts YYYY-MM-DD to DD/MM/YYYY', () => {
  assert.equal(formatDateBR('2026-11-15'), '15/11/2026');
  assert.equal(formatDateBR(''), '');
});
