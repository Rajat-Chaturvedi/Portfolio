export const isMobileSSR = (context:any) =>
  Boolean(
    context?.req?.headers["user-agent"]?.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
