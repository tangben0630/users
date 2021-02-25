import React, { useState } from 'react';
interface Iprops {
  is: Boolean;
}
const List: React.FC<Iprops> = (props: Iprops): JSX.Element => {
  console.log(props, 'props');
  return <>list 123456</>;
};

export default List;
