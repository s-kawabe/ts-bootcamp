import React, {FC, useState} from 'react';
import styles from 'styles/utility/flex.module.scss';
import {TextInput, SearchButton} from 'components/atoms';
import { useStringChangeEvent } from 'lib/customeHooks';
import { searchHotels } from 'lib/hotels'

const SearchField: FC = () => {

  const [keyword, setKeyword] = useState<string>("");

  const handleKeyword = useStringChangeEvent(setKeyword)

  return (
    <div className={styles.flex__row_center}>
      <TextInput 
        onChange={handleKeyword}
        type={"text"}
        value={keyword}
      />
      <SearchButton
        label={"search"}
        onClick={() => searchHotels(keyword)}
      />
    </div>
  )
}

export default SearchField