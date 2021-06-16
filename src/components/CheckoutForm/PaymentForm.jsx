import React,{useState} from 'react'
import {Typography,Button,Divider} from "@material-ui/core"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from "./Review";

const PaymentForm = ({checkoutToken,backStep,nextStep}) => {
    const [value, setValue] = React.useState('cash');
    const handleChange = (event) => {
        setValue(event.target.value);
      };
    
    return (
       <>
       <Review checkoutToken={checkoutToken}/>
       <Divider/>
       <Typography variant="h6" gutterBottom style={{margin:'20px 0'}}>Payment Method</Typography>
       <FormControl component="fieldset">
       
        <RadioGroup aria-label="method" name="method" value={value} onChange={handleChange}>
        <FormControlLabel value="cash" control={<Radio />} label="Cash on Delivery" />
        
        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
        </RadioGroup>
       </FormControl>
       
       
       <br/><br/>
       <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined" onClick={backStep}>
              Back 
            </Button>
            <Button type="submit" variant="contained" color="primary" onClick={nextStep}>
              Pay {checkoutToken.live.subtotal.formatted_with_symbol}
            </Button>
          </div>
        
       </>
    )
}

export default PaymentForm
