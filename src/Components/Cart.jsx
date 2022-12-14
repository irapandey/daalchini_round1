import { useDisclosure } from '@chakra-ui/hooks';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  Grid,
  GridItem,
  useToast,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import { DefaultState } from '../context/DefaultContext';
import CartProduct from './CartProduct';

const Cart = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cart } = DefaultState();
  const toast = useToast();

  return (
    <div>
      <span
        onClick={() =>
          cart.length > 0
            ? onOpen()
            : toast({
                title: 'Cart is empty',
                // description: 'Please add products to cart',
                status: 'warning',
                duration: 9000,
                isClosable: true,
                position: 'top-right',
              })
        }
      >
        {children}
      </span>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay height={'calc(100vh - 60px)'} />
        <DrawerContent
          marginBottom={'60px'}
          height={'calc(70vh - 60px)'}
          bg="gray.50"
        >
          <DrawerCloseButton />
          <DrawerHeader>Cart Details</DrawerHeader>

          <DrawerBody>
            {cart.length > 0 && (
              <Grid
                templateColumns={{
                  base: '1.5fr 1fr 1fr',
                  md: 'repeat(3, 1fr)',
                }}
                gap={6}
                padding={'14px'}
                position={'sticky'}
                top={'-8px'}
                bg={'gray.50'}
                zIndex={1}
              >
                <GridItem
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'flex-start'}
                  gap={'15px'}
                >
                  <Text fontSize={'16px'} fontWeight={'bold'}>
                    Items
                  </Text>
                </GridItem>
                <GridItem
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <Text fontSize={'16px'} fontWeight={'bold'}>
                    Quantity
                  </Text>
                </GridItem>
                <GridItem
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <Text fontSize={'16px'} fontWeight={'bold'}>
                    Price
                  </Text>
                </GridItem>
              </Grid>
            )}
            {cart.length === 0 && (
              <Box
                height={'100%'}
                width={'100%'}
                display="flex"
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Text fontFamily={'heading'} fontSize={25}>
                  Cart is Empty
                </Text>
              </Box>
            )}
            {cart.map(item => (
              <CartProduct key={item.id} data={item} />
            ))}
          </DrawerBody>

          <DrawerFooter>
            {cart.length > 0 && (
              <Text fontWeight={'bold'} fontSize={20}>
                Sub Total: $ {' '}
                {cart.reduce((curr, val) => curr + val.quantity * val.price, 0)}{' '}
              </Text>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Cart;
