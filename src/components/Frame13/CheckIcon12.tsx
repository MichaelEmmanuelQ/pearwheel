import { memo, SVGProps } from 'react';

const CheckIcon12 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20.734 6.83 9.757 17.805l-4.99-4.99'
      stroke='#000'
      strokeWidth={2.661}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(CheckIcon12);
export { Memo as CheckIcon12 };
