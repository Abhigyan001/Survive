export default (name) => {
  if (name.length < 20 && name.length > 2) {
    return true;
  }
  return false;
};