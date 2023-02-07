import { css } from "@emotion/react";
import type { SerializedStyles } from "@emotion/utils";

const combineInterpolatedCss =
  (
    ...cssInterpolateFunctions: ((
      props: object
    ) => 0 | SerializedStyles | undefined | string)[]
  ) =>
  (props: object) =>
    css`
      ${cssInterpolateFunctions.map(
        (cssInterpolateFunction) =>
          cssInterpolateFunction(props)
      )}
    `;

export default combineInterpolatedCss;
