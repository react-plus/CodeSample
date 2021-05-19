import styled from 'styled-components';

export default styled.div`
  display: flex;
  min-height: 100vh;
  -webkit-box-align: center;
  align-items: center;
  backdrop-filter: blur(6px);

  .main {
    width: 460px;
    padding: 10px 30px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    transition: padding-top 0.2s ease 0s;
    background-color: #ffffff;
    height: 100%;

    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px,
      rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
    border-radius: 10px;

    @media screen and (max-width: @screen-sm) {
      width: 95%;
      max-width: 328px;
    }

    .form {
      padding: 60px 40px;

      .mb-6 {
        margin-bottom: 60px;
      }
    }

    .icon {
      margin-left: 16px;
      color: rgba(0, 0, 0, 0.2);
      font-size: 24px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: @primary-color;
      }
    }

    .prefix-icon {
      color: @primary-color;
      font-size: @font-size-base;
    }
  }
`;
