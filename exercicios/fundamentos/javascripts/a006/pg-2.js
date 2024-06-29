/*2. Suponha que temos duas variáveis `cao` e `gato`, cada uma com um valor inicial
    
    ```jsx
    let cao = "Mingau"
    let gato = "Bidu"
    ```
    
    Agora, queremos trocar os valores delas, de forma que `cao` passe a ter o valor de `gato` e `gato` passe a ter o valor de `cao.` 
    
    Ou seja, no caso desse exemplo acima, `cao` passaria a ser `“Bidu”` e `gato` passaria a ser `Mingau.`
    
    ```jsx
    let cao = "Mingau"
    let gato = "Bidu"
    
    // Aqui faremos uma lógica para trocar os valores
    
    // Depois de trocados, teremos o seguinte resultado:
    console.log("O novo valor de cao é", cao) // O novo valor de cao é Bidu
    console.log("O novo valor de gato é", gato) // O novo valor de gato é Mingau
    ```
    
    Crie a lógica que deve ser inserida no código para que os valores de `cao` e `gato` sejam trocados, independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que `cao = "Bidu"` e `gato = "Mingau"` porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também).*/

let gato="Miau"
let dog = "AUAU"

console.log(changeRoles(gato, dog))
