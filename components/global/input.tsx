import React, { LegacyRef } from 'react';


const Input = React.forwardRef((props: any, ref: any) => {
      const { className } = props;
      return (
            <>
                  <input
                        {...props}
                        ref={ref}
                        className={`form-control ${className ? className : ""}`}
                  />

            </>
      );
})
export default Input;

