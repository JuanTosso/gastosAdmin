export const generarId = () => {
  const id = Math.random().toString(36).substring(2) + Date.now().toString(36);
  return id;
};
