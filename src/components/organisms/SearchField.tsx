import React, {FC} from 'react'
import styles from 'styles/utility/flex.module.scss';
import {TextInput, SearchButton} from 'components/atoms';

const SearchField: FC = () => {
  return (
    <div className={styles.flex__row_center}>
      <TextInput 
        onChange={() => null}
        type={"text"}
        value={"FooBar"}
      />
      <SearchButton
        label={"submit"}
        onClick={() => null}
      />
    </div>
  )
}

export default SearchField