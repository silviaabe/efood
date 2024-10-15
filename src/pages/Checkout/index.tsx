import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import Button from '../../components/Button'
import Card from '../../components/Card'

import fechar from '../../assets/images/fechar.png'

import { usePurchaseMutation } from '../../services/api'
import { getTotalPrice, parseToBrl } from '../../utils'

import { RootReducer } from '../../store'
import { closeCheckout } from '../../store/reducers/checkout'
import { openCart, clearCart } from '../../store/reducers/cart'

import * as S from './styles'

const Checkout = () => {
  const { checkoutIsOpen } = useSelector((state: RootReducer) => state.checkout)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [checkoutStep, setCheckoutStep] = useState<
    'delivery' | 'payment' | 'confirmation'
  >('delivery')

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(10, 'O campo precisa ter 10 caracteres')
        .max(10, 'O campo precisa ter 10 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(1, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      complement: Yup.string(),
      cardDisplayName: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'O campo precisa ter 19 caracteres')
        .max(19, 'O campo precisa ter 19 caracteres')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'O campo precisa ter 3 caracteres')
        .min(3, 'O campo precisa ter 3 caracteres')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'O campo precisa ter no mínimo 2 caractereS')
        .max(2, 'O campo precisa ter no máximo 2 caracteres')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(2, 'O campo precisa ter 2 caracteres')
        .max(2, 'O campo precisa ter 2 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const checkoutClose = () => {
    dispatch(closeCheckout())
    navigate('/')
  }

  const cartOpen = () => {
    dispatch(openCart())
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const nextStep = () => {
    form.handleSubmit()

    if (!Object.keys(form.errors).length) {
      if (checkoutStep === 'delivery') {
        setCheckoutStep('payment')
      } else if (checkoutStep === 'payment') {
        setCheckoutStep('confirmation')
      }
    }
  }

  const previousStep = () => {
    if (checkoutStep === 'payment') {
      setCheckoutStep('delivery')
    } else if (checkoutStep === 'confirmation') {
      setCheckoutStep('payment')
    }
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearCart())
    }
  }, [isSuccess, dispatch])

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <S.CheckoutContainer className="is-open">
      <S.Overlay onClick={checkoutClose} />
      <S.Sidebar>
        <header>
          <img src={fechar} alt="Ícone de fechar" onClick={checkoutClose} />
        </header>
        {isSuccess && data ? (
          <Card title={`Pedido realizado - ${data?.orderId}`}>
            <>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p className="margin-top">
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p className="margin-top">
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p className="margin-top">
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
              <S.SetButton>
                <Button
                  title="Clique aqui para concluir"
                  type="button"
                  variant="secondary"
                  onClick={checkoutClose}
                  disabled={isLoading}
                >
                  {isLoading ? 'Concluindo' : 'Concluir'}
                </Button>
              </S.SetButton>
            </>
          </Card>
        ) : (
          <>
            <form onSubmit={form.handleSubmit}>
              <Card title="Entrega">
                <>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="receiver">Quem irá receber</label>
                      <input
                        id="receiver"
                        type="text"
                        name="receiver"
                        value={form.values.receiver}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('receiver') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row marginTop="8px">
                    <S.InputGroup>
                      <label htmlFor="address">Endereço</label>
                      <input
                        id="address"
                        type="text"
                        name="address"
                        value={form.values.address}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('address') ? 'error' : ''}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row marginTop="8px">
                    <S.InputGroup>
                      <label htmlFor="city">Cidade</label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        value={form.values.city}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('city') ? 'error' : ''}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row marginTop="8px">
                    <S.InputGroup>
                      <label htmlFor="zipCode">CEP</label>
                      <InputMask
                        id="zipCode"
                        type="text"
                        name="zipCode"
                        value={form.values.zipCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('zipCode') ? 'error' : ''}
                        mask="99.999-999"
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="number">Número</label>
                      <input
                        id="number"
                        type="text"
                        name="number"
                        value={form.values.number}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('number') ? 'error' : ''}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row marginTop="8px">
                    <S.InputGroup>
                      <label htmlFor="complement">Complemento (opcional)</label>
                      <input
                        id="complement"
                        type="text"
                        name="complement"
                        value={form.values.complement}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('complement') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.SetButton>
                    <Button
                      title="Clique aqui para continuar com o pagamento"
                      type="submit"
                      variant="secondary"
                      onClick={nextStep}
                      disabled={isLoading}
                    >
                      {isLoading
                        ? 'Continuando com o pagamento'
                        : 'Continuar com o pagamento'}
                    </Button>
                    <Button
                      title="Clique aqui para voltar para o carrinho"
                      type="button"
                      variant="secondary"
                      onClick={cartOpen}
                    >
                      Voltar para o carrinho
                    </Button>
                  </S.SetButton>
                </>
              </Card>

              <Card
                title={`Pagamento - Valor a pagar ${parseToBrl(
                  getTotalPrice(items)
                )}`}
              >
                <>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cardDisplayName">Nome no cartão</label>
                      <input
                        type="text"
                        id="cardDisplayName"
                        name="cardDisplayName"
                        value={form.values.cardDisplayName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardDisplayName') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row marginTop="8px">
                    <S.InputGroup maxWidth="288px">
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <InputMask
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        mask="9999 9999 9999 9999"
                        className={
                          checkInputHasError('cardNumber') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="87px">
                      <label htmlFor="cardCode">CVV</label>
                      <InputMask
                        type="text"
                        id="cardCode"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        mask="999"
                        className={
                          checkInputHasError('cardCode') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row marginTop="8px">
                    <S.InputGroup>
                      <label htmlFor="expiresMonth">Mês do expiração</label>
                      <InputMask
                        type="text"
                        id="expiresMonth"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        mask="99"
                        className={
                          checkInputHasError('expiresMonth') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="expiresYear">Ano de expiração</label>
                      <InputMask
                        type="text"
                        id="expiresYear"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        mask="99"
                        className={
                          checkInputHasError('expiresYear') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.SetButton>
                    <Button
                      title="Clique aqui para finalizar o pagamento"
                      type="submit"
                      variant="secondary"
                      onClick={() => {
                        form.handleSubmit()
                        if (!Object.keys(form.errors).length && form.isValid) {
                          nextStep()
                        }
                      }}
                      disabled={isLoading}
                    >
                      {isLoading
                        ? 'Finalizando pagamento'
                        : 'Finalizar pagamento'}
                    </Button>
                    <Button
                      title="Clique aqui para voltar para a edição de endereço"
                      type="button"
                      variant="secondary"
                      onClick={previousStep}
                    >
                      Voltar para a edição de endereço
                    </Button>
                  </S.SetButton>
                </>
              </Card>
            </form>
          </>
        )}
      </S.Sidebar>
    </S.CheckoutContainer>
  )
}

export default Checkout
