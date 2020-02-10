import { Options } from '@glitz/core';
import transformers from '@glitz/transformers';


export const glitzCoreOptions: Options = {
  transformer: transformers({
    numberToLengthOptions: {
      animationDelay: 'ms',
      animationDuration: 'ms',
      transitionDelay: 'ms',
      transitionDuration: 'ms',
    },
  }),
};
