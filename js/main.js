function atencionPersonalizada() {
    prompt("Lo lamentamos mucho, déjanos tu número así nos contactamos contigo para una atención personalizada");
    alert("Gracias, pronto nos contactaremos contigo...");
}

let montototal;

function IngresoDatosDeTarjeta(){
    let tarjeta= prompt( "Gracias por confiar en nosotros, tu proceso de compra esta por terminar, el monto a pagar son $" + montototal + ". Ingresa los 16 números de la parte frontal de tu tarjeta.")
    if(tarjeta.length !==16){

        alert("El número de tarjeta debe tener exactamente 16 caracteres. Por favor, vuelve a intentarlo.");

    }else{
        let ventarjeta= prompt("Ingresa la fecha de vencimiento de tu tarjeta MMAA");
        if(ventarjeta.length !==4){
            alert("El número ingresado no cumple el formato de vencimiento. Por favor, vuelve a intentarlo.");
        }else{
            let codigotarjeta= prompt( "ingresa los tres digitos de la parte posterior de tu tarjeta CVV");
            if (codigotarjeta.length !==3){

                alert("El número ingresado no cumple el formato de CVV. Por favor, vuelve a intentarlo.");

            }else{
                alert("Validando tu datos. Presione Aceptar")
                alert("Compra exitosa")
                alert("El comprobante de pago y todos los detalles de tu compra te lo enviaremos a tu correo electronico: " + mail)
                comprarealizada= true;
                
            }
        }
    }     
}

alert("Bienvenido/a a la mejor Agencia de viajes de Argentina, gracias por elegirnos.");

let usuario= prompt("Ingresa tu nombre y apellido");

alert( "Hola " + usuario + "; por los momentos estamos trabajando solo con personas que quieran iniciar su viaje desde Buenos Aires, Argentina." );

let mail= prompt ("Por favor ingresa tu correo electronico")

let requisito= prompt ("¿Tu viaje inicia en Buenos Aires, Argentina?");

//Variable para verificar que la compra se realizo 
let comprarealizada= false;
//Requisito para que todo tipo de si sea aceptado
if (requisito.toLowerCase() === "si" ) {
    
    alert("Buenisimo, ya puedes cotizar tu viaje con nosotros");
    let numerodepasajeros= prompt("¿Cuantas personas van a viajar?");
    //Numero de pasajero mayor o igual a 1
    if (isNaN(numerodepasajeros) || numerodepasajeros <= 0) {
     alert("Por favor, ingresa un número válido de pasajeros.");
        requisito= true;
    }else if(requisito){
    
      let mes;
            
        while(true){
                    
            mes= prompt("Coloque el número del mes de inicio de tu viaje: \n1- Febrero. \n2-Marzo. \n3-Presione para salir "); 
        
            if (mes === null || mes === "") {
                
                atencionPersonalizada();
                break;
                
            } else if (mes === "3") {
        
                atencionPersonalizada();
                break;
                
            }else if(mes === "1" ){
                   
                let destino= prompt("*Febrero* Coloque el numero de su destino favorito: \n1- Bariloche. \n2-Cataratas de Iguazu. \n3-Presione para salir ");
                    
                while(true){
                       
                    if(destino=== null || destino=== "" ){
                            
                        atencionPersonalizada();
                        break;
                            
                        
                    }else if(destino=== "3"){
        
                        atencionPersonalizada();
                        break;
                            
                    }else if( destino==="1"){
                           
                        alert( "Para Bariloche tenemos dos opciones una aerea y una terrestre, las dos tienen inicio el 18/02 y retorno el 27/02. Todos nuestros paquetes incluyen Hotel con desayuno y cena")
                            
                        let paquete= prompt("Precio de paquetes disponibles: \n1- Terrestre 500$. \n2-Aerea 700$. \n3-Presione para salir ");
        
                        while(true){
                                
                            if(paquete=== null || paquete=== "" ){
                            
                                atencionPersonalizada();
                                break;
                                
                            }else if(paquete=== "3"){
                
                                atencionPersonalizada();
                                break;
                               
                            }else if(paquete=== "1"){
                                
                                montototal= (numerodepasajeros * 500);
                                IngresoDatosDeTarjeta();
                                break;
                   
                            } 
                        }break;
                    }else if(destino==="2"){
        
                        alert( "Para las Cataratas de iguazu tenemos dos opciones una aerea y una terrestre, las dos tienen inicio el 11/02 y retorno el 20/02. Todos nuestros paquetes incluyen Hotel con desayuno y cena")
                           
                        let paquete=prompt("Precio de paquetes disponibles: \n1- Terrestre 400$. \n2-Aerea 600$. \n3-Presione para salir ");
        
                        while(true){
                                
                            if(paquete=== null || paquete=== "" ){
                        
                                atencionPersonalizada();
                                break;
                            
                            }else if(paquete=== "3"){
            
                                atencionPersonalizada();
                                break;
                           
                            }else if(paquete=== "1"){
                                    
                                montototal= (numerodepasajeros * 400);
                                IngresoDatosDeTarjeta();
                                break;
                            
                            }else if(paquete=== "2"){
        
                                montototal= (numerodepasajeros * 600);
                                IngresoDatosDeTarjeta();
                                break;

                                      
                            }
                        }break; 
                    }     
                }break;
            }else if (mes=== "2"){
                    
                let destino= prompt("*Marzo* Coloque el numero de su destino favorito: \n1- Merlo, San Luis \n2-Mendoza \n3-Presione para salir ");
                    
                while(true){
                        
                    if(destino=== null || destino=== "" ){
                            
                        atencionPersonalizada();
                        break;
                        
                    }else if(destino=== "3"){
        
                        atencionPersonalizada();
                        break;
                        
                    }else if(destino=== "1" ){
                            
                     alert( "Para Merlo, San Luis tenemos dos opciones una aerea y una terrestre, las dos tienen inicio el 5/03 y retorno el 12/02. Todos nuestros paquetes incluyen Hotel con desayuno y cena")
                            
                     let paquete= prompt("Precio de paquetes disponibles: \n1- Terrestre 300$. \n2-Aerea 450$. \n3-Presione para salir ");
        
                        while(true){
                                
                            if(paquete=== null || paquete=== "" ){
                        
                                atencionPersonalizada();
                                break;
                                
                            
                            }else if(paquete=== "3"){
                               
                                atencionPersonalizada();
                                break;
                           
                            }else if(paquete=== "1"){
        
                                montototal= (numerodepasajeros * 300);
                                IngresoDatosDeTarjeta();
                                break;
                                    
                            }else if(paquete=== "2"){
        
                                montototal= (numerodepasajeros * 450);
                                IngresoDatosDeTarjeta();
                                break;
                                           
                            }
                        }break;
                
                    }else if(destino=== "2"){
                            
                       alert( "Para Mendoza tenemos dos opciones una aerea y una terrestre, las dos tienen inicio el 09/02 y retorno el 16/02. Todos nuestros paquetes incluyen Hotel con desayuno y cena")
                            
                       let paquete= prompt("Precio de paquetes disponibles: \n1- Terrestre 470$. \n2-Aerea 650$. \n3-Presione para salir ");
        
                        while(true){
                                
                            if(paquete=== null || paquete=== "" ){
                            
                                atencionPersonalizada();
                                break;
                                    
                                
                            }else if(paquete=== "3"){
                
                                atencionPersonalizada();
                                break;
                               
                            }else if(paquete=== "1"){
        
                                montototal= (numerodepasajeros * 470); 
                                IngresoDatosDeTarjeta();
                                break;
                                         
                                
                            }else if(paquete=== "2"){
        
                                montototal= (numerodepasajeros * 650); 
                                IngresoDatosDeTarjeta();
                                break;

                            }     
                        }break;
                    }   
                }break;               
            }     
        }       
    }    
    //Si el cliente no inicia el viaje en Buenos Aires Argentina, el codigo sale por este else
}else{
    
    atencionPersonalizada();
}