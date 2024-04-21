// eslint-disable-next-line react-refresh/only-export-components
export default (
  callBack: (arg0: unknown, ...rest: unknown[]) => Promise<unknown>
) => {
  return (...rest: unknown[]) =>
    callBack(undefined, ...rest).catch((error) => {
      console.log('error:', error);
      throw error;
    });
};
