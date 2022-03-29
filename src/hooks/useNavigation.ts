import { useState } from 'react';

const useNavigation = () => {
  const [toggleCart, setToggleCart] = useState(false);

  return { toggleCart, setToggleCart };
};

export default useNavigation;
