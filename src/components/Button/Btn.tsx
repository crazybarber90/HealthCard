import React, { SetStateAction } from 'react'
import BtnStyle from './style'

const Btn = ({
  setShowCard,
}: {
  setShowCard: React.Dispatch<SetStateAction<boolean>>
}) => {
  return <BtnStyle onClick={() => setShowCard(true)}>Nova Knjizica</BtnStyle>
}

export default Btn
