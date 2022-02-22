import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { theme } from '../../../../../styles/theme';
import { deleteSearchKeywordHistoryAction, setSearchKeywordAction, setAutoCompleteKeywordAction, setSearchKeywordHistoryAction } from '../../../../stores/modules/searchKeyword';

const SearchHistory = (props) => {
  const dispatch = useDispatch();
  const { searchKeywordHistory } = useSelector(state => state.searchKeyword);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('keywords')) || JSON.parse(localStorage.getItem('keywords')).length === 0) {
      localStorage.setItem('keywords', JSON.stringify(searchKeywordHistory))
    }
  }, [searchKeywordHistory])

  const deleteSearchKeyword = (e) => {
    dispatch(deleteSearchKeywordHistoryAction(e.target.dataset.index))
  }
  const clickHistoryItem = (e) => {
    dispatch(setAutoCompleteKeywordAction(searchKeywordHistory[e.target.dataset.index]))
    dispatch(setSearchKeywordAction(searchKeywordHistory[e.target.dataset.index]))
  }

  return (
    <div>
      {searchKeywordHistory && (
        <SearchKeywordHistoryList>
          {searchKeywordHistory.map((keyword, idx) => (
            <SearchKeywordHistoryItem key={idx} >
              <SearchKeywordHistoryItemTitle onClick={clickHistoryItem} data-index={idx}>{keyword}</SearchKeywordHistoryItemTitle>
              <KeywordDeleteButton onClick={deleteSearchKeyword} data-index={idx}>x</KeywordDeleteButton>
            </SearchKeywordHistoryItem>
          ))}
        </SearchKeywordHistoryList>
      )}
    </div>
  )
};
const SearchKeywordHistoryList = styled.ul`
  width: 100%;
`
const SearchKeywordHistoryItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  &:hover{
    background-color:${theme.color.lightGray3};
  }
`
const SearchKeywordHistoryItemTitle = styled.span`
  width: 100%;
  &:hover{
    cursor:pointer;
  }
`
const KeywordDeleteButton = styled.button`
  padding:2px;
`
export default SearchHistory;
