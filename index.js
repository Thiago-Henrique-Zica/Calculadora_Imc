CALCULADORA  DE IMC 

var nome = prompt ('Qual o seu nome?')
var altura = prompt ('Qual o sua altura em cm?')
var peso = prompt ('Qual o seu peso? ')

 peso = parseFloat(peso);
 altura = parseFloat(altura);

 altura = altura/100;

 var imc = peso/(altura*altura)

 var classificação = "";

if ( imc < 16){
  classificação = 'Baixo peso muito grave';
  document.write(nome + ' possui indice de massa coporal igual a '+ imc +',sendo classificado como:'+ classificação);
}
  else if  ( imc >= 16 && imc <= 16.99 ){
  classificação = 'Baixo peso grave';
  document.write(nome + ' possui indice de massa coporal igual a '+ imc +',sendo classificado como:'+ classificação);
}
 else if ( imc >= 17 && imc <= 18.49){
  classificação = ' Baixo peso';
  document.write(nome + ' possui indice de massa coporal igual a '+ imc +',sendo classificado como:'+ classificação);
}
 else if  ( imc >= 18.50 && imc <= 24.99){
  classificação = ' Peso normal ';
  document.write(nome + ' possui indice de massa coporal igual a '+ imc +',sendo classificado como:'+ classificação);
}
 else if  (imc >= 25 && imc <= 29.99){
  classificação = 'Sobrepeso';
  document.write(nome + ' possui indice de massa coporal igual a '+ imc +',sendo classificado como:'+ classificação);
}
 else if  (imc >= 30 && imc <= 34.99){
  classificação = 'Obesidade Grau I';
  document.write(nome + ' possui indice de massa coporal igual a '+ imc +',sendo classificado como:'+ classificação);
}
 else if  ( imc >= 35 && imc <= 39.99){
  classificação = 'Obesidade Grau II';
  document.write(nome + ' possui indice de massa coporal igual a '+ imc +',sendo classificado como:'+ classificação);
}
 else {
  classificação = 'Obesidade Grau III';
  document.write(nome + ' possui indice de massa coporal igual a '+ imc +',sendo classificado como:'+ classificação);
}