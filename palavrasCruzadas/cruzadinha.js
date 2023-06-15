var resposta_correta = 1

function resposta() {
    resultado.innerHTML = ``

    if (resposta_correta == 1)
        resultado.innerHTML = `QUAD CORE`
    else if (resposta_correta == 2) {
        resultado.innerHTML = `ULA`
    } else if (resposta_correta == 3) {
        resultado.innerHTML = `MEMORIA DE MASSA`
    } else if (resposta_correta == 4) {
        resultado.innerHTML = `I7`
    } else if (resposta_correta == 5) {
        resultado.innerHTML = `DUAL CORE`
    } else if (resposta_correta == 6) {
        resultado.innerHTML = `DMA`
    } else if (resposta_correta == 7) {
        resultado.innerHTML = `THREADS`
    } else if (resposta_correta == 8) {
        resultado.innerHTML = `CACHE`
    } else if (resposta_correta == 9) {
        resultado.innerHTML = `CPU`
    } else if (resposta_correta == 10) {
        resultado.innerHTML = `EPROM`
    } else if (resposta_correta == 11) {
        resultado.innerHTML = `CS`
    } else if (resposta_correta == 12) {
        resultado.innerHTML = `DATA BUS`
    } else if (resposta_correta == 13) {
        resultado.innerHTML = `REGISTRADORES`
    } else if (resposta_correta == 14) {
        resultado.innerHTML = `I5`
    } else if (resposta_correta == 15) {
        resultado.innerHTML = `ROM`
    } else if (resposta_correta == 16) {
        resultado.innerHTML = `ADDRESS BUS`
    } else if (resposta_correta == 17) {
        resultado.innerHTML = `RAM`
    } else {
        resultado.innerHTML = `FLASH`
    }
}

function verificar() {
    resposta_errada.innerHTML = ''

    if (resposta_correta == 1) {
        var resposta1 = palavra1[0].value
        resposta1 += palavra1[1].value
        resposta1 += palavra1[2].value
        resposta1 += palavra1[3].value
        resposta1 += palavra1[4].value
        resposta1 += palavra1[5].value
        resposta1 += palavra1[6].value
        resposta1 += palavra1[7].value

        if (resposta1 == 'quadcore' || resposta1 == 'QUADCORE') {
            palavra1[0].style = "border-color: green;";
            palavra1[1].style = "border-color: green;";
            palavra1[2].style = "border-color: green;";
            palavra1[3].style = "border-color: green;";
            palavra1[4].style = "border-color: green;";
            palavra1[5].style = "border-color: green;";
            palavra1[6].style = "border-color: green;";
            palavra1[7].style = "border-color: green;";

            proxima()
        } else {
            palavra1[0].style = "border-color: red;";
            palavra1[1].style = "border-color: red;";
            palavra1[2].style = "border-color: red;";
            palavra1[3].style = "border-color: red;";
            palavra1[4].style = "border-color: red;";
            palavra1[5].style = "border-color: red;";
            palavra1[6].style = "border-color: red;";
            palavra1[7].style = "border-color: red;";
            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }
    } else if (resposta_correta == 2) {
        var resposta2 = palavra2[0].value
        resposta2 += palavra2[1].value
        resposta2 += palavra2[2].value

        if (resposta2 == 'ula' || resposta2 == 'ULA') {
            palavra2[0].style = "border-color: green;";
            palavra2[1].style = "border-color: green;";
            palavra2[2].style = "border-color: green;";

            proxima()
        } else {
            palavra2[0].style = "border-color: red;";
            palavra16[1].style = "border-color: red;";
            palavra2[2].style = "border-color: red;";
            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }

    } else if (resposta_correta == 3) {
        var resposta3 = palavra3[0].value
        resposta3 += palavra3[1].value
        resposta3 += palavra3[2].value
        resposta3 += palavra3[3].value
        resposta3 += palavra3[4].value
        resposta3 += palavra3[5].value
        resposta3 += palavra3[6].value
        resposta3 += palavra5[0].value
        resposta3 += palavra3[7].value
        resposta3 += palavra3[8].value
        resposta3 += palavra3[9].value
        resposta3 += palavra3[10].value
        resposta3 += palavra3[11].value
        resposta3 += palavra3[12].value

        if (resposta3 == 'memoriademassa' || resposta3 == 'MEMORIADEMASSA') {
            palavra3[0].style = "border-color: green;";
            palavra3[1].style = "border-color: green;";
            palavra3[2].style = "border-color: green;";
            palavra3[3].style = "border-color: green;";
            palavra3[4].style = "border-color: green;";
            palavra3[5].style = "border-color: green;";
            palavra3[6].style = "border-color: green;";
            palavra5[0].style = "border-color: green;";
            palavra3[7].style = "border-color: green;";
            palavra3[8].style = "border-color: green;";
            palavra3[9].style = "border-color: green;";
            palavra3[10].style = "border-color: green;";
            palavra3[11].style = "border-color: green;";
            palavra3[12].style = "border-color: green;";

            proxima()
        } else {
            palavra3[0].style = "border-color: red;";
            palavra3[1].style = "border-color: red;";
            palavra3[2].style = "border-color: red;";
            palavra3[3].style = "border-color: red;";
            palavra3[4].style = "border-color: red;";
            palavra3[5].style = "border-color: red;";
            palavra3[6].style = "border-color: red;";
            palavra5[0].style = "border-color: red;";
            palavra3[7].style = "border-color: red;";
            palavra3[8].style = "border-color: red;";
            palavra3[9].style = "border-color: red;";
            palavra3[10].style = "border-color: red;";
            palavra3[11].style = "border-color: red;";
            palavra3[12].style = "border-color: red;";

            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }
    } else if (resposta_correta == 4) {
        var resposta4 = palavra3[5].value
        resposta4 += palavra4.value
        

        if (resposta4 == "i7" || resposta4 == 'I7') {
            palavra3[5].style = "border-color: green;";
            palavra4.style = "border-color: green;";

            proxima()
        } else {
            palavra3[5].style = "border-color: red;";
            palavra4.style = "border-color: red;";
            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }

    } else if (resposta_correta == 5) {
        var resposta5 = palavra5[0].value
        resposta5 += palavra5[1].value
        resposta5 += palavra5[2].value
        resposta5 += palavra5[3].value
        resposta5 += palavra5[4].value
        resposta5 += palavra13[8].value
        resposta5 += palavra5[5].value
        resposta5 += palavra5[6].value

        if (resposta5 == 'dualcore' || resposta5 == 'DUALCORE') {
            palavra5[0].style = "border-color: green;";
            palavra5[1].style = "border-color: green;";
            palavra5[2].style = "border-color: green;";
            palavra5[3].style = "border-color: green;";
            palavra5[4].style = "border-color: green;";
            palavra13[8].style = "border-color: green;";
            palavra5[5].style = "border-color: green;";
            palavra5[6].style = "border-color: green;";

            proxima()
        } else {
            palavra5[0].style = "border-color: red;";
            palavra5[1].style = "border-color: red;";
            palavra5[2].style = "border-color: red;";
            palavra5[3].style = "border-color: red;";
            palavra5[4].style = "border-color: red;";
            palavra13[8].style = "border-color: red;";
            palavra5[5].style = "border-color: red;";
            palavra5[6].style = "border-color: red;";
            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }

    } else if (resposta_correta == 6) {
        var resposta6 = palavra1[3].value
        resposta6 += palavra6.value
        resposta6 += palavra2[2].value


        if (resposta6 == 'dma' || resposta6 == 'DMA') {
            palavra1[3].style = "border-color: green;";
            palavra6.style = "border-color: green;";
            palavra2[2].style = "border-color: green;";

            proxima()
        } else {
            palavra1[3].style = "border-color: red;";
            palavra6.style = "border-color: red;";
            palavra2[2].style = "border-color: red;";

            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }

    } else if (resposta_correta == 7) {
        var resposta7 = palavra7[0].value
        resposta7 += palavra7[1].value
        resposta7 += palavra7[2].value
        resposta7 += palavra13[10].value
        resposta7 += palavra7[3].value
        resposta7 += palavra7[4].value
        resposta7 += palavra7[5].value



        if (resposta7 == 'threads' || resposta7 == 'THREADS') {
            palavra7[0].style = "border-color: green;";
            palavra7[1].style = "border-color: green;";
            palavra7[2].style = "border-color: green;";
            palavra13[10].style = "border-color: green;";
            palavra7[3].style = "border-color: green;";
            palavra7[4].style = "border-color: green;";
            palavra7[5].style = "border-color: green;";
            


            proxima()
        } else {
            palavra7[0].style = "border-color: red;";
            palavra7[1].style = "border-color: red;";
            palavra7[2].style = "border-color: red;";
            palavra13[10].style = "border-color: red;";
            palavra7[3].style = "border-color: red;";
            palavra7[4].style = "border-color: red;";
            palavra7[5].style = "border-color: red;";


            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }
    } else if (resposta_correta == 8) {
        var resposta8 = palavra1[4].value
        resposta8 += palavra8[0].value
        resposta8 += palavra8[1].value
        resposta8 += palavra8[2].value
        resposta8 += palavra8[3].value


        if (resposta8 == 'cache') {
            palavra1[4].style = "border-color: green;";
            palavra8[0].style = "border-color: green;";
            palavra8[1].style = "border-color: green;";
            palavra8[2].style = "border-color: green;";
            palavra8[3].style = "border-color: green;";

            proxima()
        } else {
            palavra1[4].style = "border-color: red;";
            palavra8[0].style = "border-color: red;";
            palavra8[1].style = "border-color: red;";
            palavra8[2].style = "border-color: red;";
            palavra8[3].style = "border-color: red;";

            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }
    } else if (resposta_correta == 9) {
        var resposta9 = palavra8[1].value
        resposta9 += palavra9[0].value
        resposta9 += palavra9[1].value


        if (resposta9 == 'cpu' || resposta9 == 'CPU') {
            palavra8[1].style = "border-color: green;";
            palavra9[0].style = "border-color: green;";
            palavra9[1].style = "border-color: green;";

            proxima()
        } else {
            palavra8[1].style = "border-color: red;";
            palavra9[0].style = "border-color: red;";
            palavra9[1].style = "border-color: red;";

            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }
    } else if (resposta_correta == 10) {
        var resposta10 = palavra8[3].value
        resposta10 += palavra10[0].value
        resposta10 += palavra10[1].value
        resposta10 += palavra10[2].value
        resposta10 += palavra10[3].value


        if (resposta10 == 'eprom') {
            palavra8[3].style = "border-color: green;";
            palavra10[0].style = "border-color: green;";
            palavra10[1].style = "border-color: green;";
            palavra10[2].style = "border-color: green;";
            palavra10[3].style = "border-color: green;";

            proxima()
        } else {
            palavra8[3].style = "border-color: red;";
            palavra10[0].style = "border-color: red;";
            palavra10[1].style = "border-color: red;";
            palavra10[2].style = "border-color: red;";
            palavra10[3].style = "border-color: red;";

            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }

    } else if (resposta_correta == 11) {
        var resposta11 = palavra11.value
        resposta11 += palavra13[3].value
       
        if (resposta11 == 'cs') {
            palavra11.style = "border-color: green;";
            palavra13[3].style = "border-color: green;";
   

            proxima()
        } else {
            palavra11.style = "border-color: red;";
            palavra13[3].style = "border-color: red;";
       

            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }
        
    } else if (resposta_correta == 12) {
        var resposta12 = palavra12[0].value
        resposta12 += palavra13[6].value
        resposta12 += palavra12[1].value
        resposta12 += palavra12[2].value
        resposta12 += palavra12[3].value
        resposta12 += palavra12[4].value
        resposta12 += palavra12[5].value
  
       
        if (resposta12 == 'databus') {
            palavra3[8].style = "border-color: green;";
            palavra12[0].style = "border-color: green;";
            palavra12[1].style = "border-color: green;";
            palavra12[2].style = "border-color: green;";
            palavra12[3].style = "border-color: green;";
            palavra12[5].style = "border-color: green;";
            palavra12[4].style = "border-color: green;";
           
            proxima()
        } else {
            palavra3[8].style = "border-color: red;";
            palavra12[0].style = "border-color: red;";
            palavra12[1].style = "border-color: red;";
            palavra12[2].style = "border-color: red;";
            palavra12[3].style = "border-color: red;";
            palavra12[5].style = "border-color: red;";
            palavra12[4].style = "border-color: red;";

            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }
    } else if (resposta_correta == 13) {
        var resposta13 = palavra10[1].value
        resposta13 += palavra13[0].value
        resposta13 += palavra13[1].value
        resposta13 += palavra13[2].value
        resposta13 += palavra13[3].value
        resposta13 += palavra13[4].value
        resposta13 += palavra13[5].value
        resposta13 += palavra13[6].value
        resposta13 += palavra13[7].value
        resposta13 += palavra13[8].value
        resposta13 += palavra13[9].value
        resposta13 += palavra13[10].value
        resposta13 += palavra13[11].value
  
       
        if (resposta13 == 'registradores') {
            palavra10[1].style = "border-color: green;";
            palavra13[0].style = "border-color: green;";
            palavra13[1].style = "border-color: green;";
            palavra13[2].style = "border-color: green;";
            palavra13[3].style = "border-color: green;";
            palavra13[4].style = "border-color: green;";
            palavra13[5].style = "border-color: green;";
            palavra13[6].style = "border-color: green;";
            palavra13[7].style = "border-color: green;";
            palavra13[8].style = "border-color: green;";
            palavra13[9].style = "border-color: green;";
            palavra13[10].style = "border-color: green;";
            palavra13[11].style = "border-color: green;";
           
            proxima()
        } else {
            palavra10[1].style = "border-color: red;";
            palavra13[0].style = "border-color: red;";
            palavra13[1].style = "border-color: red;";
            palavra13[2].style = "border-color: red;";
            palavra13[3].style = "border-color: red;";
            palavra13[4].style = "border-color: red;";
            palavra13[5].style = "border-color: red;";
            palavra13[6].style = "border-color: red;";
            palavra13[7].style = "border-color: red;";
            palavra13[8].style = "border-color: red;";
            palavra13[9].style = "border-color: red;";
            palavra13[10].style = "border-color: red;";
            palavra13[11].style = "border-color: red;";
           

            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }
    } else if (resposta_correta == 14) {
        var resposta14 = palavra13[2].value
        resposta14 += palavra14.value
       
        if (resposta14 == 'i5') {
            palavra13[2].style = "border-color: green;";
            palavra14.style = "border-color: green;";
   

            proxima()
        } else {
            palavra13[2].style = "border-color: red;";
            palavra14.style = "border-color: red;";
       
            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }
    } else if (resposta_correta == 15) {
        var resposta15 = palavra15[0].value
        resposta15 += palavra15[1].value
        resposta15 += palavra10[3].value

        if (resposta15 == 'rom') {
            palavra15[0].style = "border-color: green;";
            palavra15[1].style = "border-color: green;";
            palavra10[3].style = "border-color: green;";

            proxima()
        } else {
            palavra15[0].style = "border-color: red;";
            palavra15[1].style = "border-color: red;";
            palavra10[3].style = "border-color: red;";

            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }
    } else if (resposta_correta == 16) {
        var resposta16 = palavra16[0].value
        resposta16 += palavra16[1].value
        resposta16 += palavra16[2].value
        resposta16 += palavra16[3].value
        resposta16 += palavra16[4].value
        resposta16 += palavra16[5].value
        resposta16 += palavra16[6].value
        resposta16 += palavra12[3].value
        resposta16 += palavra16[7].value
        resposta16 += palavra16[8].value
       
        if (resposta16 == 'addressbus') {
            palavra16[0].style = "border-color: green;";
            palavra16[1].style = "border-color: green;";
            palavra16[2].style = "border-color: green;";
            palavra16[3].style = "border-color: green;";
            palavra16[4].style = "border-color: green;";
            palavra16[5].style = "border-color: green;";
            palavra16[6].style = "border-color: green;";
            palavra12[3].style = "border-color: green;";
            palavra16[7].style = "border-color: green;";
            palavra16[8].style = "border-color: green;";
           

            proxima()
        } else {
            palavra16[0].style = "border-color: red;";
            palavra16[1].style = "border-color: red;";
            palavra16[2].style = "border-color: red;";
            palavra16[3].style = "border-color: red;";
            palavra16[4].style = "border-color: red;";
            palavra16[5].style = "border-color: red;";
            palavra16[6].style = "border-color: red;";
            palavra12[3].style = "border-color: red;";
            palavra16[7].style = "border-color: red;";
            palavra16[8].style = "border-color: red;";
           

            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }

    }
    else if (resposta_correta == 17) {
        var resposta17 = palavra16[3].value
        resposta17 += palavra17[0].value
        resposta17 += palavra17[1].value


        if (resposta17 == 'ram' || resposta17 == 'RAM') {
            palavra16[3].style = "border-color: green;";
            palavra17[0].style = "border-color: green;";
            palavra17[1].style = "border-color: green;";

            proxima()
        } else {
            palavra16[3].style = "border-color: red;";
            palavra17[0].style = "border-color: red;";
            palavra17[1].style = "border-color: red;";

            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }
    }
    else if (resposta_correta == 18) {
        var resposta18 = palavra18[0].value
        resposta18 += palavra18[1].value
        resposta18 += palavra18[2].value
        resposta18 += palavra12[5].value
        resposta18 += palavra18[3].value

        


        if (resposta18 == 'flash' || resposta18 == 'FLASH') {
            palavra18[0].style = "border-color: green;";
            palavra18[1].style = "border-color: green;";
            palavra18[2].style = "border-color: green;";
            palavra12[5].style = "border-color: green;";
            palavra18[3].style = "border-color: green;";

            proxima()
        } else {
            palavra18[0].style = "border-color: red;";
            palavra18[1].style = "border-color: red;";
            palavra18[2].style = "border-color: red;";
            palavra12[5].style = "border-color: red;";
            palavra18[3].style = "border-color: red;";

            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }
    }
    
}

function proxima() {
    resultado.innerHTML = ``
    resposta_errada.innerHTML = ''

    if (resposta_correta == 1) {
        universitarios_1.style.display = 'none'
        universitarios_2.style.display = 'block'

        resposta_correta++
    } else if (resposta_correta == 2) {
        universitarios_2.style.display = 'none'
        universitarios_3.style.display = 'block'

        resposta_correta++
    } else if (resposta_correta == 3) {
        universitarios_3.style.display = 'none'
        universitarios_4.style.display = 'block'

        resposta_correta++
    } else if (resposta_correta == 4) {
        universitarios_4.style.display = 'none'
        universitarios_5.style.display = 'block'

        resposta_correta++
    } else if (resposta_correta == 5) {
        universitarios_5.style.display = 'none'
        universitarios_6.style.display = 'block'

        resposta_correta++
    } else if (resposta_correta == 6) {
        universitarios_6.style.display = 'none'
        universitarios_7.style.display = 'block'

        resposta_correta++
    } else if (resposta_correta == 7) {
        universitarios_7.style.display = 'none'
        universitarios_8.style.display = 'block'

        resposta_correta++
    } else if (resposta_correta == 8) {
        universitarios_8.style.display = 'none'
        universitarios_9.style.display = 'block'

        resposta_correta++
    } else if (resposta_correta == 9) {
        universitarios_9.style.display = 'none'
        universitarios_10.style.display = 'block'

        resposta_correta++
    } else if (resposta_correta == 10) {
        universitarios_10.style.display = 'none'
        universitarios_11.style.display = 'block'

        resposta_correta++
    } else if (resposta_correta == 11) {
        universitarios_11.style.display = 'none'
        universitarios_12.style.display = 'block'

        resposta_correta++
    } else if (resposta_correta == 12) {
        universitarios_12.style.display = 'none'
        universitarios_13.style.display = 'block'

        resposta_correta++
    } else if (resposta_correta == 13) {
        universitarios_13.style.display = 'none'
        universitarios_14.style.display = 'block'

        resposta_correta++
    } else if (resposta_correta == 14) {
        universitarios_14.style.display = 'none'
        universitarios_15.style.display = 'block'

        resposta_correta++
    } else if (resposta_correta == 15) {
        universitarios_15.style.display = 'none'
        universitarios_16.style.display = 'block'

        resposta_correta++
    } else if (resposta_correta == 16) {
        universitarios_16.style.display = 'none'
        universitarios_17.style.display = 'block'

        resposta_correta++
    }
    else if (resposta_correta == 17) {
        universitarios_17.style.display = 'none'
        universitarios_18.style.display = 'block'

        resposta_correta++
    }
    else {
        universitarios_18.style.display = 'none'
        universitarios_1.style.display = 'block'

        resposta_correta = 1;
    } 
}
