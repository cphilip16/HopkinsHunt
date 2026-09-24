import test from 'node:test';
import assert from 'node:assert/strict';
import { getPlaceStampConfig } from './placeStampConfig.js';

test('passport stamp config is unique to each place and keeps the location identity visible', () => {
  const brody = getPlaceStampConfig({
    id: 'brody',
    name: 'Brody Learning Commons',
    neighborhood: 'Charles Village',
  });

  assert.equal(brody.title, 'BRODY');
  assert.equal(brody.label, 'CHARLES VILLAGE');
  assert.equal(brody.color, 'sapphire');

  const harbor = getPlaceStampConfig({
    id: 'inner-harbor',
    name: 'National Aquarium',
    neighborhood: 'Inner Harbor',
  });

  assert.equal(harbor.title, 'AQUARIUM');
  assert.equal(harbor.label, 'INNER HARBOR');
  assert.equal(harbor.color, 'emerald');
});
