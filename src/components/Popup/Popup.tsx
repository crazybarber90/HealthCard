import React, { SetStateAction } from 'react'
import PopupStyle, { Title, Buttons, SingleBtn } from './style'

const Popup = ({
  setShowCard,
  setShowPopup,
}: {
  setShowCard: React.Dispatch<SetStateAction<boolean>>
  setShowPopup: React.Dispatch<SetStateAction<boolean>>
}) => {
  const handleHideCard = () => {
    setShowCard(false)
    setShowPopup(false)
  }
  return (
    <PopupStyle>
      <Title>
        Imate nesačuvane promene. Da li ste sigurni da želite da napustite ovu
        stranicu?
      </Title>
      <Buttons>
        <SingleBtn btnColor={true} onClick={handleHideCard}>
          da
        </SingleBtn>
        <SingleBtn btnColor={false} onClick={() => setShowPopup(false)}>
          ne
        </SingleBtn>
      </Buttons>
    </PopupStyle>
  )
}

export default Popup
