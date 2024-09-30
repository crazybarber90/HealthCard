import styled from 'styled-components'

interface SingleBtnProps {
  btnColor?: boolean
}

export default styled.div`
  width: 400px;
  height: 130px;
  padding: 25px 20px 15px;
  border-radius: 10px;
  position: absolute;
  top: 30%;
  right: 50%;
  transform: translate(50%, 50%);
  box-shadow: 2px 2px 15px #9b7fe9;
`

export const Title = styled.div`
  width: 100%;
  height: 80%;
  background-color: white;
  display: flex;
  font-size: 20px;
  justify-content: center;
`

export const Buttons = styled.div`
  width: 100%;
  height: 20%;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const SingleBtn = styled.div<SingleBtnProps>`
  width: 50%;
  height: 100%;
  align-items: center;
  padding: 7px 5px;
  background-color: ${(props) => (props.btnColor ? '#9b7fe9' : 'lightgray')};
  border-radius: 8px;
  cursor: pointer;
`
