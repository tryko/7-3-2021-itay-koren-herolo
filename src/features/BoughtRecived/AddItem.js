import { Input, FormControl, FormLabel } from "@chakra-ui/react";
const AddItem = ({ setFormData }) => {
  const handleFormData = (e) => {
    const inputData = e.target.value;
    const inputId = e.target.id;
    console.log(inputId)
    setFormData(prevData => {
        prevData[inputId] = inputData;
        return {...prevData}
    })
  };

  return (
    <>
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input type="text" onChange={handleFormData}/>
      </FormControl>
      <FormControl id="price">
        <FormLabel>Price</FormLabel>
        <Input type="number" onChange={handleFormData}/>
      </FormControl>
      <FormControl id="onlineStore">
        <FormLabel>Purchased from</FormLabel>
        <Input type="text" onChange={handleFormData}/>
      </FormControl>
      <FormControl id="deliveryDate">
        <FormLabel>Date of delivery </FormLabel>
        <Input type="date" onChange={handleFormData}/>
      </FormControl>
    </>
  );
};

export default AddItem;
