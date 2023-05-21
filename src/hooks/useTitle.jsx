import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - super hero universe`;
  }, [title]);
};

export default useTitle;