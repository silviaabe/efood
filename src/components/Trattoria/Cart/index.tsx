import InputMask from 'react-input-mask'
import * as Yup from 'yup'
import { useState } from 'react'
import { useFormik } from 'formik'
import { RootReducer } from '../../../store'
import { close, remove, resetCart } from '../../../store/reducers/cart'
import { usePurchaseMutation } from '../../../services/api'
import { useSelector, useDispatch } from 'react-redux'

import * as S from './styles'

import { Button } from '../Product/styles'

const Cart = () => {
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const checkInputError = (fieldName: string) => {
    const isTouched = fieldName in formDelivery.touched
    const isInvalid = fieldName in formDelivery.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const checkInputErrorPayment = (fieldName: string) => {
    const isTouched = fieldName in formPayment.touched
    const isInvalid = fieldName in formPayment.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const [isCheckout, setIsCheckout] = useState(false)
  const [isPayment, setIsPayment] = useState(false)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const deliveryData = {
    receiver: '',
    address: {
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    }
  }

  const paymentData = {
    name: '',
    number: '',
    code: '',
    expires: {
      month: '',
      year: ''
    }
  }

  const formDelivery = useFormik({
    initialValues: {
      receiver: deliveryData.receiver,
      description: deliveryData.address.description,
      city: deliveryData.address.city,
      zipCode: deliveryData.address.zipCode,
      number: deliveryData.address.number,
      complement: deliveryData.address.complement
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'Nome inválido')
        .required('O campo é obrigatório'),
      description: Yup.string()
        .min(5, 'Endereço inválido')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'Campo inválido')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .required('O campo é obrigatório')
        .test('zip-valid', 'CEP inválido', (value) => {
          const zipNumber = value.replace(/[\s-]/g, '')
          return /^\d{8}$/.test(zipNumber)
        }),
      number: Yup.number()
        .min(1, 'Campo obrigatório')
        .required('O campo é obrigatório'),
      complement: Yup.string()
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        payment: {
          card: {
            name: '',
            number: '',
            code: '',
            expires: {
              month: '',
              year: ''
            }
          }
        }
      })
    }
  })

  const formPayment = useFormik({
    initialValues: {
      name: paymentData.name,
      number: paymentData.number,
      code: paymentData.code,
      month: paymentData.expires.month,
      year: paymentData.expires.year
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'Nome inválido')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .required('O campo é obrigatório')
        .test('is-card-number-valid', 'Número de cartão inválido', (value) => {
          // Remove todos os espaços em branco e hífens, se houver
          const cardNumber = value.replace(/[\s-]/g, '')
          // Verifica se o número de cartão tem exatamente 16 dígitos
          return /\d{16}/.test(cardNumber)
        }),
      code: Yup.string()
        .required('O campo é obrigatório')
        .test('cvv-valid', 'cvv inválido', (value) => {
          const cvvNumber = value.replace(/[\s-]/g, '')
          return /^\d{3}$/.test(cvvNumber)
        }),
      month: Yup.string()
        .required('O campo é obrigatório')
        .test('valid-month', 'Mês inválido', (value) => {
          if (!/^(0[1-9]|1[0-2])$/.test(value)) {
            return false
          }
          return true
        }),
      year: Yup.string()
        .required('O campo é obrigatório')
        .test('year-number-valid', 'Número do ano inválido', (value) => {
          const yearNumber = value.replace(/[\s-]/g, '')
          return /^\d{2}$/.test(yearNumber)
        })
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: '',
          address: {
            description: '',
            city: '',
            zipCode: '',
            number: 0,
            complement: ''
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        payment: {
          card: {
            name: values.name,
            number: values.number,
            code: values.code,
            expires: {
              month: values.month,
              year: values.year
            }
          }
        }
      })
    }
  })

  const handleContinueCheckout = () => {
    if (items.length > 0) {
      setIsCheckout(true)
    } else {
      closeCart()
    }
  }

  const handleReset = () => {
    dispatch(resetCart())

    formDelivery.resetForm()
    formPayment.resetForm()

    setIsCheckout(false)
    setIsPayment(false)
  }

  const handleContinueToPayment = () => {
    setIsPayment(true)
  }

  const handleBackToDelivery = () => {
    setIsPayment(false)
  }

  const handleBackToCart = () => {
    setIsCheckout(false)
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {isSuccess && data ? (
          <S.Form>
            <h4>Pedido realizado - {data.orderId}</h4>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <br />
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <br />
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <br />
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>

            <Button
              type="submit"
              style={{ marginTop: '24px' }}
              onClick={handleReset}
            >
              Concluir
            </Button>
          </S.Form>
        ) : isCheckout && !isPayment ? (
          <S.Form>
            <form onSubmit={formDelivery.handleSubmit}>
              <h4>Entrega</h4>
              <S.InputGroup>
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  type="text"
                  id="receiver"
                  name="receiver"
                  onChange={formDelivery.handleChange}
                  onBlur={formDelivery.handleBlur}
                  value={formDelivery.values.receiver}
                  className={checkInputError('receiver') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="description">Endereço</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  onChange={formDelivery.handleChange}
                  onBlur={formDelivery.handleBlur}
                  value={formDelivery.values.description}
                  className={checkInputError('description') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  onChange={formDelivery.handleChange}
                  onBlur={formDelivery.handleBlur}
                  value={formDelivery.values.city}
                  className={checkInputError('city') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup className="input-group">
                <div className="input-css">
                  <label htmlFor="zipCode">CEP</label>
                  <InputMask
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    onChange={formDelivery.handleChange}
                    onBlur={formDelivery.handleBlur}
                    value={formDelivery.values.zipCode}
                    mask="99999-999"
                    className={
                      checkInputError('zipCode')
                        ? 'input-mask-error'
                        : 'input-mask'
                    }
                  />
                </div>
                <div>
                  <label htmlFor="number">Número</label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    onChange={formDelivery.handleChange}
                    onBlur={formDelivery.handleBlur}
                    value={formDelivery.values.number}
                    className={checkInputError('number') ? 'error' : ''}
                  />
                </div>
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="complement">Complemento</label>
                <input
                  type="text"
                  id="complement"
                  name="complement"
                  onChange={formDelivery.handleChange}
                  onBlur={formDelivery.handleBlur}
                  value={formDelivery.values.complement}
                />
              </S.InputGroup>
              <Button
                type="button"
                style={{ marginTop: '24px' }}
                onClick={() => {
                  if (formDelivery.touched.receiver && formDelivery.isValid) {
                    handleContinueToPayment()
                  }
                }}
              >
                Continuar para o pagamento
              </Button>
              <Button type="button" onClick={handleBackToCart}>
                Voltar para o carrinho
              </Button>
            </form>
          </S.Form>
        ) : isPayment ? (
          <S.Form>
            <form onSubmit={formPayment.handleSubmit}>
              <h4>
                Pagamento - Valor a pagar: {formataPreco(getTotalPrice())}
              </h4>
              <S.InputGroup>
                <label htmlFor="name">Nome no cartão</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={formPayment.handleChange}
                  onBlur={formPayment.handleBlur}
                  value={formPayment.values.name}
                  className={checkInputErrorPayment('name') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup className="input-group">
                <div className="input-card">
                  <label htmlFor="number">Número do cartão</label>
                  <InputMask
                    type="text"
                    id="number"
                    name="number"
                    onChange={formPayment.handleChange}
                    onBlur={formPayment.handleBlur}
                    value={formPayment.values.number}
                    mask="9999 9999 9999 9999"
                    className={
                      checkInputErrorPayment('number')
                        ? 'input-mask-error'
                        : 'input-mask'
                    }
                  />
                </div>

                <div className="input-cvv">
                  <label htmlFor="code">CVV</label>
                  <InputMask
                    type="text"
                    id="code"
                    name="code"
                    onChange={formPayment.handleChange}
                    onBlur={formPayment.handleBlur}
                    value={formPayment.values.code}
                    mask="999"
                    className={
                      checkInputErrorPayment('code')
                        ? 'input-mask-error'
                        : 'input-mask'
                    }
                  />
                </div>
              </S.InputGroup>
              <S.InputGroup className="input-group">
                <div className="input-css">
                  <label htmlFor="month">Mês de vencimento</label>
                  <InputMask
                    type="text"
                    id="month"
                    name="month"
                    onChange={formPayment.handleChange}
                    onBlur={formPayment.handleBlur}
                    value={formPayment.values.month}
                    mask="99"
                    className={
                      checkInputErrorPayment('month')
                        ? 'input-mask-error'
                        : 'input-mask'
                    }
                  />
                </div>

                <div>
                  <label htmlFor="year">Ano de vencimento</label>
                  <InputMask
                    type="text"
                    id="year"
                    name="year"
                    onChange={formPayment.handleChange}
                    onBlur={formPayment.handleBlur}
                    value={formPayment.values.year}
                    mask="99"
                    className={
                      checkInputErrorPayment('year')
                        ? 'input-mask-error'
                        : 'input-mask'
                    }
                  />
                </div>
              </S.InputGroup>
              <Button
                type="submit"
                style={{ marginTop: '24px' }}
                onClick={handleContinueToPayment}
              >
                Finalizar pagamento
              </Button>
              <Button type="button" onClick={handleBackToDelivery}>
                Voltar para a edição de endereço
              </Button>
            </form>
          </S.Form>
        ) : (
          <>
            <ul>
              {items.map(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (item: { id: number; foto: any; nome: any; preco: number }) => (
                  <S.CartItem key={item.id}>
                    <img src={item.foto} alt={item.nome} />
                    <S.TextCart>
                      <p>{item.nome}</p>
                      <span>{formataPreco(item.preco)}</span>
                    </S.TextCart>
                    <button onClick={() => removeItem(item.id)} type="button" />
                  </S.CartItem>
                )
              )}
            </ul>
            <S.Prices>
              Valor Total <p>{formataPreco(getTotalPrice())}</p>
            </S.Prices>
            <Button
              title="Clique aqui para continuar com a compra"
              type="button"
              onClick={handleContinueCheckout}
            >
              Continuar com a entrega
            </Button>
          </>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
