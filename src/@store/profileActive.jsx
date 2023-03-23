import { atom } from 'recoil';

export const profileActive = atom({
  key: 'profileActiveKey',
  default: {
    profile01: false,
    profile02: false,
    profile03: false,
    profile04: false,
    profile05: false,
  },
});
