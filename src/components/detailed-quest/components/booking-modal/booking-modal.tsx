import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { ErrorMessage, LoadingStatus, PHONE_LENGTH, PHONE_REG_EXP } from 'const/const';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { useForm } from 'react-hook-form';
import { sendOrderPostAction } from 'store/api-actions';
import { getPostSendingStatus } from 'store/order-data/selectors';
import { OrderPostType } from 'types/types';
import * as S from './booking-modal.styled';

type BookingModalPropsType = {
  setIsBookingModalOpened: (status: boolean) => void;
  peopleCount: number[];
}

export default function BookingModal({ setIsBookingModalOpened, peopleCount }: BookingModalPropsType): JSX.Element {
  const dispatch = useAppDispatch();
  const sendingStatus = useAppSelector(getPostSendingStatus);

  const [isFormDisabled, setFormDisabled] = useState(false);

  useEffect(() => {
    switch (sendingStatus) {
      case LoadingStatus.Fulfilled:
        setFormDisabled(false);
        setIsBookingModalOpened(false);
        break;
      case LoadingStatus.Pending:
        setFormDisabled(true);
        break;
      case LoadingStatus.Rejected:
        setFormDisabled(false);
        break;
      case LoadingStatus.Idle:
        setFormDisabled(false);
        break;
      default:
        throw new Error(`sendingStatus-${sendingStatus} dosn't exist`);
    }
  }, [sendingStatus, setIsBookingModalOpened]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<OrderPostType>({
    mode: 'all'
  });

  const onSubmit = (order: OrderPostType) => dispatch(sendOrderPostAction(order));

  return (
    <S.BlockLayer>
      <ClickAwayListener onClickAway={() => setIsBookingModalOpened(false)}>
        <S.Modal>
          <S.ModalCloseBtn onClick={() => setIsBookingModalOpened(false)}>
            <IconClose width="16" height="16" />
            <S.ModalCloseLabel>
              Закрыть окно
            </S.ModalCloseLabel>
          </S.ModalCloseBtn>
          <S.ModalTitle>Оставить заявку</S.ModalTitle>
          <S.BookingForm
            action="#"
            method="post"
            id="booking-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <S.BookingField>
              <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
              <S.BookingInput
                type="text"
                id="booking-name"
                placeholder="Имя"
                {...register('name', {
                  required: ErrorMessage.Required
                })}
              />
              <S.InputErrorContainer>
                <S.InputErrorMessage>
                  {errors?.name?.message}
                </S.InputErrorMessage>
              </S.InputErrorContainer>
            </S.BookingField>
            <S.BookingField>
              <S.BookingLabel htmlFor="booking-phone">
                Контактный телефон
              </S.BookingLabel>
              <S.BookingInput
                type="tel"
                id="booking-phone"
                placeholder="Телефон (без 8-ки)"
                {...register('phone', {
                  required: ErrorMessage.Required,
                  pattern: {
                    value: PHONE_REG_EXP,
                    message: ErrorMessage.Pattern
                  },
                  minLength: {
                    value: PHONE_LENGTH,
                    message: ErrorMessage.PhoneLength
                  },
                  maxLength: {
                    value: PHONE_LENGTH,
                    message: ErrorMessage.PhoneLength
                  }
                })}
              />
              <S.InputErrorContainer>
                <S.InputErrorMessage>
                  {errors?.phone?.message}
                </S.InputErrorMessage>
              </S.InputErrorContainer>
            </S.BookingField>
            <S.BookingField>
              <S.BookingLabel htmlFor="booking-people">
                Количество участников
              </S.BookingLabel>
              <S.BookingInput
                type="number"
                id="booking-people"
                placeholder="Количество участников"
                {...register('peopleCount', {
                  required: ErrorMessage.Required,
                  valueAsNumber: true,
                  min: {
                    value: peopleCount[0],
                    message: `${ErrorMessage.PeopleMinCount} ${peopleCount[0]}`
                  },
                  max: {
                    value: peopleCount[1],
                    message: `${ErrorMessage.PeopleMaxCount} ${peopleCount[1]}`
                  }
                })}
              />
              <S.InputErrorContainer>
                <S.InputErrorMessage>
                  {errors?.peopleCount?.message}
                </S.InputErrorMessage>
              </S.InputErrorContainer>
            </S.BookingField>
            <S.BookingSubmit type="submit" disabled={isFormDisabled || !isValid}>
              {isFormDisabled ? 'Отправляется...' : 'Отправить заявку'}
            </S.BookingSubmit>
            <S.BookingCheckboxWrapper>
              <S.BookingCheckboxInput
                type="checkbox"
                id="booking-legal"
                {...register('isLegal', {
                  required: 'Сначала Вы должны согласиться с условиями'
                })}
              />
              <S.InputErrorContainer>
                <S.InputErrorMessage>
                  {errors?.isLegal?.message}
                </S.InputErrorMessage>
              </S.InputErrorContainer>
              <S.BookingCheckboxLabel
                className="checkbox-label"
                htmlFor="booking-legal"
              >
                <S.BookingCheckboxText>
                  Я согласен с{' '}
                  <S.BookingLegalLink href="#">
                    правилами обработки персональных данных и пользовательским
                    соглашением
                  </S.BookingLegalLink>
                </S.BookingCheckboxText>
              </S.BookingCheckboxLabel>
            </S.BookingCheckboxWrapper>
          </S.BookingForm>
        </S.Modal>
      </ClickAwayListener>
    </S.BlockLayer>
  );
}
