import React, { memo } from 'react';
import styled from 'styled-components';

const ListWrapper = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0;
  padding: 0;
  > li {
    display: flex;
    list-style: none;
  }
`;

const List = memo(({ items, ItemComponent, ...props }) => (
  <ListWrapper>
    {items.map(item => (
      <ItemComponent
        key={item.description}
        {...item}
        {...props}
      />
    ))}
  </ListWrapper>
));

export default List;
