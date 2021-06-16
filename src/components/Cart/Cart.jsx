import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import CardItem from "./CartItem/CartItem";
const Cart = ({
  cart,
  handleUpdateCardQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();

  const emptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in Shopping Cart
      <Link to="/" className={classes.link}>
        Start adding some!
      </Link>
    </Typography>
  );
  if (!cart.line_items) return "Loading...";
  const filledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CardItem
              item={item}
              onUpdateCartQty={handleUpdateCardQty}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal:{cart.subtotal.formatted_with_symbol}
        </Typography>
        <Button
          className={classes.emptyButton}
          size="large"
          type="button"
          variant="contained"
          color="secondary"
          onClick={handleEmptyCart}
        >
          Empty Cart
        </Button>
        <Button
          component={Link} to='/checkout'
          className={classes.checkout}
          size="large"
          type="button"
          variant="contained"
          color="primary"
        >
          Checkout
        </Button>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? emptyCart() : filledCart()}
    </Container>
  );
};

export default Cart;
