import React from 'react'
import { FButtonPrimary, FButtonError, FButtonDisabled, FButtonSecondary, FButtonSuccess } from '../../styles/ButtonTheme'
import { FText } from '../../styles/globalTheme'

export const FButton = ({title="Continuar", action, type="primary"}) => {
  return (
    <>
    {
        type === "primary" ?
        <FButtonPrimary onPress={action}>
            <FText white >{title}</FText>
        </FButtonPrimary>
        :
        type === "secondary" ?
        <FButtonSecondary onPress={action}>
            <FText white >{title}</FText>
        </FButtonSecondary>
        :
        type === "disabled" ?
        <FButtonDisabled onPress={action}>
            <FText >{title}</FText>
        </FButtonDisabled>
        :
        type === "error" ?
        <FButtonError onPress={action}>
            <FText white>{title}</FText>
        </FButtonError>
        :
        type === "success" ?
        <FButtonSuccess onPress={action}>
            <FText white>{title}</FText>
        </FButtonSuccess>
        : 
        <FButtonPrimary onPress={action}>
            <FText white>{title}</FText>
        </FButtonPrimary>
    }
    </>
  )
}
