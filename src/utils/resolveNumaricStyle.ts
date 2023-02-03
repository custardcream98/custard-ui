const resolveNumaricStyle = (value: number | string) => {
  if (typeof value === "number") {
    return `${value}px`;
  }

  if (
    !value.match(
      /px$|rem$|em$|%$|vh$|vw$|vmin$|vmax$|pt$|pc$|in$|cm$|mm$|ex$|ch$|fr$/
    )
  ) {
    if (!isNaN(Number(value))) {
      return `${value}px`;
    }
    throw new Error(
      `값 ${value}은 유효한 CSS 단위가 아닙니다. 유효한 단위는 px, rem, em, %, vh, vw, vmin, vmax, pt, pc, in, cm, mm, ex, ch, fr 입니다.`
    );
  }

  return value;
};

export default resolveNumaricStyle;
