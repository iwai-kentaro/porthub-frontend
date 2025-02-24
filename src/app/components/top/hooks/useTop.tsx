const useTop = () => {
  const token = localStorage.getItem("JWT");

  return { token };
};

export default useTop;
