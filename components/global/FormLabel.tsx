import React, { Fragment } from "react";
// import InfoTooltip from "./InfoTooltip";

const FormLabel = React.forwardRef((props: any, ref: any) => {
      const {
            children,
            className,
            required,
            optional,
            tooltip,
            preview,
            formatSeparator
      } = props

      return (
            <Fragment>
                  {required && <span className={!preview ? "text-danger" : ""}>*</span>}
                  <span
                        ref={ref}
                        className={`form-label ${className ? className : ""}`}
                  >
                        {children}
                  </span>
                  {optional && <span className="label-optional"> (Optional) </span>}
                  {/* {tooltip && <InfoTooltip className="ms-2" message={tooltip} />} */}
                  <span>{formatSeparator ? formatSeparator : !preview ? ":" : ""}</span>

            </Fragment>
      );
});
export default FormLabel;