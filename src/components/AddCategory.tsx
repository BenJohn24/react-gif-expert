import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react"

interface Properties {
  onNewCategory(inputValue:string): void
}
export const AddCategory: FunctionComponent<Properties> = ({onNewCategory}: Properties) => {

   const [inputValue, setInputValue] = useState('');

   const onInputChange = ({target}:ChangeEvent<HTMLInputElement>) => {
    setInputValue( target.value );
   }

   const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const inputCleanValue = inputValue.trim();
    if(inputCleanValue.length <= 1) return;

    // props.setCategories((category) => [...category, inputValue]);
    onNewCategory( inputCleanValue );
    setInputValue('');
   }

  return (
    <form onSubmit={ onSubmit }>
            <input
            type="text"
            placeholder="Buscar gifs" 
            value={ inputValue }
            onChange={ onInputChange }
            />
    </form>
  
  )
}

