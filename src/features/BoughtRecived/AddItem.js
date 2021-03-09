import { v4 as uuidv4 } from "uuid";
import {
  Button,
  Input,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { Form, Field, Formik } from "formik";
import {
  validateDeliveryDate,
  validateName,
  validatePrice,
  validateStore,
} from "./addItemValidators";

const AddItem = ({ onSubmit, selectItems }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        price: 0,
        onlineStore: "",
        deliveryDate: new Date(),
      }}
      onSubmit={(values, actions) => {
        const price = +values.price;
        onSubmit({ ...values, price: price, id: uuidv4() });
      }}
    >
      {(props) => (
        <Form>
          <Field name="name" validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="name">First name</FormLabel>
                <Input {...field} id="name" placeholder="name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="price" validate={validatePrice}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.price && form.touched.price}>
                <FormLabel htmlFor="price">Enter price</FormLabel>
                <Input {...field} id="price" placeholder="11" />
                <FormErrorMessage>{form.errors.price}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="onlineStore" validate={validateStore}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.onlineStore && form.touched.onlineStore}
              >
                <FormLabel htmlFor="onlineStore">Select a store</FormLabel>
                <Select placeholder="Select option" {...field}>
                  {selectItems.map((item, i) => (
                    <option value={item} key={i}>
                      {item}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>{form.errors.onlineStore}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="deliveryDate" validate={validateDeliveryDate}>
            {({ field, form }) => (
              <FormControl
                isInvalid={
                  form.errors.deliveryDate && form.touched.deliveryDate
                }
              >
                <FormLabel htmlFor="deliveryDate">Delivery date</FormLabel>
                <Input
                  type="date"
                  id="deliveryDate"
                  placeholder=""
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                />
                <FormErrorMessage>{form.errors.deliveryDate}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="teal"
            type="submit"
            isDisabled={props.errors.length}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddItem;
