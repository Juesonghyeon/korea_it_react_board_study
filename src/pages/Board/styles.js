import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 200px;
  box-sizing: border-box;
  gap: 15px;
`;

export const listContainer = css`
  width: 100%;
  height: 750px;
  box-sizing: border-box;
  border-top: 2px solid #333;
  border-bottom: 2px solid #333;
  box-sizing: border-box;

  & > ul > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #dbdbdb;
    padding: 0 20px;
    box-sizing: border-box;
    color: #333;

    & > div {
      display: flex;
      gap: 20px; //문자열 2개 사이에 거리 두는거
    }
  }
`;

export const paginateContainer = css`
  width: 100%;
  padding: 30px 10px;
  box-sizing: border-box;

  & > ul {
    padding: 0px;
    display: flex;
    justify-content: center;
    font-size: 20px;
    gap: 20px;

    & > li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      width: 30px;
      cursor: pointer;
      color: #333;
      transition: all 0.2s ease;
      border: 1px solid lightgrey;
    }

    & > li:hover {
      transform: translate(-2px);
    }

    & > li:first-child {
      width: 70px;
    }

    & > li:last-child {
      width: 70px;
    }
  }
`;
