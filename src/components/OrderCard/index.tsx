import React from 'react'

import {
  Button,
  CardContent,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material'
import { CancelOutlined, CheckCircleOutlined } from '@mui/icons-material'
import { OrderCardProps } from '@/components/OrderCard/types'

import * as S from './styles'
// import { OrderCardInfo } from './OrderCardInfo'

const OrderCard = (order: OrderCardProps) => {
  const { id, status, products, user } = order
  let total = 0
  const address = JSON.parse(user.address)
  console.log(address.street, '------------------')

  // const [open, setOpen] = React.useState(false)
  // const handleOpen = () => setOpen(true)
  // const handleClose = () => setOpen(false)

  return (
    <S.CardContainer>
      <S.OrderCard>
        {/* <OrderCardInfo {...{ open, handleClose, order }} /> */}
        <CardContent sx={{ width: 'inherit' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: 'inherit',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '1rem',
                alignItems: 'baseline',
              }}
            >
              <Typography
                sx={{ textAlign: 'left' }}
                gutterBottom
                variant="h6"
                component="div"
                lineHeight="0.8"
                color="#ff7878"
                fontWeight="600"
              >
                Nº. pedido:
              </Typography>
              <Typography
                sx={{ textAlign: 'left' }}
                gutterBottom
                variant="h6"
                component="div"
                lineHeight="0.8"
                color="#696969"
                fontWeight="600"
              >
                {id}
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  alignContent: 'flex-start',
                  flexWrap: 'wrap',
                }}
                gutterBottom
                variant="body1"
                height="2rem"
                alignContent="start"
                color="#ff7878"
                fontWeight="600"
              >
                Cliente:
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  alignContent: 'flex-start',
                  flexWrap: 'wrap',
                }}
                gutterBottom
                variant="body1"
                height="2rem"
                alignContent="start"
                color="#b1b1b1"
                fontWeight="600"
              >
                {user.name}
              </Typography>
            </div>
            <div
              style={{
                marginTop: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '2rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  sx={{
                    display: 'flex',
                    alignContent: 'flex-start',
                    flexWrap: 'wrap',
                  }}
                  gutterBottom
                  variant="h6"
                  height="2rem"
                  alignContent="start"
                  color="#ff7878"
                  fontWeight="600"
                >
                  Produtos:
                </Typography>
                <Table>
                  <TableHead>
                    <TableCell>
                      <S.DescriptionText variant="body2" color="#696969">
                        Nome
                      </S.DescriptionText>
                    </TableCell>
                    <TableCell>
                      <S.DescriptionText variant="body2" color="#696969">
                        Preço (R$)
                      </S.DescriptionText>
                    </TableCell>
                    <TableCell>
                      <S.DescriptionText variant="body2" color="#696969">
                        Qtd.
                      </S.DescriptionText>
                    </TableCell>
                  </TableHead>
                  {products?.map((product) => {
                    total += product.price * product.qtd
                    return (
                      <TableRow>
                        <TableCell>
                          <S.DescriptionText color="#696969" variant="body2" fontWeight="600">
                            {product.name}
                          </S.DescriptionText>
                        </TableCell>
                        <TableCell>
                          <S.DescriptionText variant="body2" color="#696969">
                            {product.price}
                          </S.DescriptionText>
                        </TableCell>
                        <TableCell>
                          <S.DescriptionText variant="body2" color="#696969">
                            {product.qtd}
                          </S.DescriptionText>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                  <TableRow>
                    <TableCell>
                      <S.DescriptionText variant="body2" color="#696969">
                        Total (R$)
                      </S.DescriptionText>
                    </TableCell>
                    <TableCell>
                      <S.DescriptionText variant="body2" color="#696969">
                        {total}
                      </S.DescriptionText>
                    </TableCell>
                    <TableCell>
                      <S.DescriptionText variant="body2" color="#696969" />
                    </TableCell>
                  </TableRow>
                </Table>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '3rem',
                }}
              >
                {/* <S.Row> */}
                <S.Column>
                  <Typography
                    sx={{
                      display: 'flex',
                      alignContent: 'flex-start',
                      flexWrap: 'wrap',
                    }}
                    gutterBottom
                    variant="h6"
                    height="2rem"
                    alignContent="start"
                    color="#ff7878"
                    fontWeight="600"
                  >
                    Endereço:
                  </Typography>
                  <S.Row>
                    <S.DescriptionText
                      color="#696969"
                      variant="body2"
                      alignContent="start"
                      fontWeight="600"
                    >
                      Rua:
                    </S.DescriptionText>
                    <S.DescriptionText variant="body2" color="#696969">
                      {address.street}
                    </S.DescriptionText>
                  </S.Row>
                  <S.Row>
                    <S.DescriptionText
                      color="#696969"
                      variant="body2"
                      alignContent="start"
                      fontWeight="600"
                    >
                      Número:
                    </S.DescriptionText>
                    <S.DescriptionText variant="body2" color="#696969">
                      {address.number}
                    </S.DescriptionText>
                  </S.Row>
                  <S.Row>
                    <S.DescriptionText
                      color="#696969"
                      variant="body2"
                      alignContent="start"
                      fontWeight="600"
                    >
                      Bairro:
                    </S.DescriptionText>
                    <S.DescriptionText variant="body2" color="#696969">
                      {address.neighborhood}
                    </S.DescriptionText>
                  </S.Row>
                  <S.Row>
                    <S.DescriptionText
                      color="#696969"
                      variant="body2"
                      alignContent="start"
                      fontWeight="600"
                    >
                      CEP:
                    </S.DescriptionText>
                    <S.DescriptionText variant="body2" color="#696969">
                      {address.postcode}
                    </S.DescriptionText>
                  </S.Row>

                  <S.Row>
                    <S.DescriptionText
                      color="#696969"
                      variant="body2"
                      alignContent="start"
                      fontWeight="600"
                    >
                      Complemento:
                    </S.DescriptionText>
                    <S.DescriptionText variant="body2" color="#696969">
                      {address.complement}
                    </S.DescriptionText>
                  </S.Row>
                </S.Column>
                <S.Column>
                  {/* <S.Row> */}
                  <Typography
                    sx={{
                      display: 'flex',
                      alignContent: 'flex-start',
                      flexWrap: 'wrap',
                    }}
                    gutterBottom
                    variant="h6"
                    height="2rem"
                    alignContent="start"
                    color="#ff7878"
                    fontWeight="600"
                  >
                    Status:
                  </Typography>
                  <S.DescriptionText
                    color="#696969"
                    variant="body2"
                    alignContent="start"
                    fontWeight="600"
                  >
                    {status.toUpperCase()}
                  </S.DescriptionText>
                  {/* </S.Row> */}
                </S.Column>
                <S.Column style={{ gap: '1rem', alignSelf: 'center', flexWrap: 'wrap' }}>
                  <Tooltip placement="right" title="Aceitar Pedido">
                    <Button
                      sx={{
                        borderRadius: '50px',
                        minWidth: '47px',
                        maxWidth: '47px',
                      }}
                    >
                      <CheckCircleOutlined fontSize="large" color="success" />
                    </Button>
                  </Tooltip>
                  <Tooltip placement="right" title="Recusar Pedido">
                    <Button
                      sx={{
                        borderRadius: '50px',
                        minWidth: '47px',
                        maxWidth: '47px',
                      }}
                    >
                      <CancelOutlined fontSize="large" color="error" />
                    </Button>
                  </Tooltip>
                </S.Column>
                {/* </S.Row> */}
              </div>
            </div>
          </div>
        </CardContent>
      </S.OrderCard>
    </S.CardContainer>
  )
}

export default OrderCard
