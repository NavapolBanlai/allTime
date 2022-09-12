import React, { LegacyRef } from "react";

const Button = React.forwardRef((props: any, ref: LegacyRef<HTMLInputElement>) => {

      const {
            formDescription,
            visibilityController,
            visibilityId,
            visibilityDescription,
            visibilityType,
            iconStart,
            iconEnd,
            className,
            iconStartClass,
            iconEndClass,
            children,
            disabled
      } = props


      return (
            <>
                  <button
                        {...props}
                        ref={ref}
                        className={`btn ${className ? className : ""}`}
                        // disabled={disabled || (visibilityController ? visibilityController.getDisable(visibilityId) : false)}
                  >
                        {/* {iconStart && <Icon className={`icon-start ${iconStartClass ? iconStartClass : ""}`}>{iconStart}</Icon>}
                        {children}
                        {iconEnd && <Icon className={`icon-end ${iconEndClass ? iconEndClass : ""}`}>{iconEnd}</Icon>} */}
                  </button>
            </>
      );
});
export default Button;