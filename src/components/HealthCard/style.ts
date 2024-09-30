import styled from 'styled-components'

interface HealthCardProps {
  show: boolean
}

const HealthCardStyle = styled.div<HealthCardProps>`
  width: 400px;
  height: 100vh;
  padding: 20px;
  /* border: 1px solid #9b7fe9; */
  box-shadow: 3px 3px 8px #9b7fe9;
  position: absolute;
  top: 0;
  right: ${({ show }) => (show ? '0' : '-450px')};
  transition: right 1s ease;
  background-color: white;
  overflow-y: auto;
  margin: 3px 0;
`

export const TitleAndCloseBtn = styled.div`
  width: 100%;

  p {
    font-size: 20px;
    text-align: left;
    margin: 0px 0px 25px;
  }

  .closeIcon {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 10px 0; */
`

export const Select = styled.select`
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  background-color: #f9f9f9;
  outline: none;
  color: #777;
`

export const InputField = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  background-color: #f9f9f9;
  outline: none;
`

export const DoubleInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 10px;

  & > input {
    width: 48%;
  }
`

export const Button = styled.button`
  background-color: #9b7fe9;
  color: white;
  padding: 15px 5px;
  margin-top: 15px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  outline: none;

  &:hover {
    background-color: #7a5dc7;
  }
`

export const Text = styled.p`
  font-size: 12px;
  margin-top: 10px;
  color: #777;
`

export const ErrorSpan = styled.span`
  font-size: 12px;
  color: red;
  text-align: left;
  margin-bottom: 20px;
`

export const Devider = styled.div`
  width: 100%;
  height: 33px;
`

export default HealthCardStyle
