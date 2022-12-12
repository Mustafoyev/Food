import { forwardRef } from 'react';

export const Select = forwardRef((props, ref) => {
	return <select ref={ref} {...props}></select>;
});
