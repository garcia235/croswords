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
        resultado.innerHTML = `TREADS`
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
        resposta4 += palavra4[0].value
        

        if (resposta4 == "i7" || resposta4 == 'I7') {
            palavra3[5].style = "border-color: green;";
            palavra4[0].style = "border-color: green;";

            proxima()
        } else {
            palavra3[5].style = "border-color: red;";
            palavra4[0].style = "border-color: red;";
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
        resposta6 += palavra6[0].value
        resposta6 += palavra2[2].value


        if (resposta6 == 'dma' || resposta6 == 'DMA') {
            palavra1[3].style = "border-color: green;";
            palavra6[0].style = "border-color: green;";
            palavra2[2].style = "border-color: green;";

            proxima()
        } else {
            palavra1[3].style = "border-color: red;";
            palavra6[0].style = "border-color: red;";
            palavra2[2].style = "border-color: red;";

            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }

    } else if (resposta_correta == 7) {
        var resposta7 = palavra7[0].value
        resposta7 += palavra7[1].value
        resposta7 += palavra7[2].value
        resposta7 += palavra7[3].value
        resposta7 += palavra7[4].value


        if (resposta7 == 'threads' || resposta7 == 'THREADS') {
            palavra7[0].style = "border-color: green;";
            palavra7[1].style = "border-color: green;";
            palavra7[2].style = "border-color: green;";
            palavra7[3].style = "border-color: green;";
            palavra7[4].style = "border-color: green;";

            proxima()
        } else {
            palavra7[0].style = "border-color: red;";
            palavra7[1].style = "border-color: red;";
            palavra7[2].style = "border-color: red;";
            palavra7[3].style = "border-color: red;";
            palavra7[4].style = "border-color: red;";

            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }
    } else if (resposta_correta == 8) {
        var resposta8 = palavra8[0].value
        resposta8 += palavra8[1].value
        resposta8 += palavra8[2].value
        resposta8 += palavra8[3].value
        resposta8 += palavra8[4].value
        resposta8 += palavra8[5].value
        resposta8 += palavra8[6].value
        resposta8 += palavra8[7].value
        resposta8 += palavra8[8].value
        resposta8 += palavra8[9].value
        resposta8 += palavra8[10].value
        resposta8 += palavra8[11].value
        resposta8 += palavra8[12].value
        resposta8 += palavra8[13].value

        if (resposta8 == 'memoriademassa') {
            palavra8[0].style = "border-color: green;";
            palavra8[1].style = "border-color: green;";
            palavra8[2].style = "border-color: green;";
            palavra8[3].style = "border-color: green;";
            palavra8[4].style = "border-color: green;";
            palavra8[5].style = "border-color: green;";
            palavra8[6].style = "border-color: green;";
            palavra8[7].style = "border-color: green;";
            palavra8[8].style = "border-color: green;";
            palavra8[9].style = "border-color: green;";
            palavra8[10].style = "border-color: green;";
            palavra8[11].style = "border-color: green;";
            palavra8[12].style = "border-color: green;";
            palavra8[13].style = "border-color: green;";

            proxima()
        } else {
            palavra8[0].style = "border-color: red;";
            palavra8[1].style = "border-color: red;";
            palavra8[2].style = "border-color: red;";
            palavra8[3].style = "border-color: red;";
            palavra8[4].style = "border-color: red;";
            palavra8[5].style = "border-color: red;";
            palavra8[6].style = "border-color: red;";
            palavra8[7].style = "border-color: red;";
            palavra8[8].style = "border-color: red;";
            palavra8[9].style = "border-color: red;";
            palavra8[10].style = "border-color: red;";
            palavra8[11].style = "border-color: red;";
            palavra8[12].style = "border-color: red;";
            palavra8[13].style = "border-color: red;";

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
        var resposta9 = palavra1[0].value
        resposta9 += palavra10.value
       
        if (resposta9 == 'cs') {
            palavra1[0].style = "border-color: green;";
            palavra10.style = "border-color: green;";
   

            proxima()
        } else {
            palavra1[0].style = "border-color: red;";
            palavra10.style = "border-color: red;";
       

            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }

    } else if (resposta_correta == 11) {
        var resposta11 = palavra8[13].value
        resposta11 += palavra11[0].value
        resposta11 += palavra6[0].value
        resposta11 += palavra11[1].value
        resposta11 += palavra11[2].value
        resposta11 += palavra3[4].value
        resposta11 += palavra11[3].value
        resposta11 += palavra11[4].value
        resposta11 += palavra11[5].value
       
        if (resposta11 == 'adressbus') {
            palavra8[13].style = "border-color: green;";
            palavra11[0].style = "border-color: green;";
            palavra6[0].style = "border-color: green;";
            palavra11[1].style = "border-color: green;";
            palavra11[2].style = "border-color: green;";
            palavra3[4].style = "border-color: green;";
            palavra11[3].style = "border-color: green;";
            palavra11[4].style = "border-color: green;";
            palavra11[5].style = "border-color: green;";
           

            proxima()
        } else {
            palavra8[13].style = "border-color: red;";
            palavra11[0].style = "border-color: red;";
            palavra6[0].style = "border-color: red;";
            palavra11[1].style = "border-color: red;";
            palavra11[2].style = "border-color: red;";
            palavra3[4].style = "border-color: red;";
            palavra11[3].style = "border-color: red;";
            palavra11[4].style = "border-color: red;";
            palavra11[5].style = "border-color: red;";

            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }
    } else if (resposta_correta == 12) {
        var resposta12 = palavra3[8].value
        resposta12 += palavra12[0].value
        resposta12 += palavra12[1].value
        resposta12 += palavra12[2].value
        resposta12 += palavra12[3].value
        resposta12 += palavra1[2].value
        resposta12 += palavra12[4].value
  
       
        if (resposta12 == 'databus') {
            palavra3[8].style = "border-color: green;";
            palavra12[0].style = "border-color: green;";
            palavra12[1].style = "border-color: green;";
            palavra12[2].style = "border-color: green;";
            palavra12[3].style = "border-color: green;";
            palavra1[2].style = "border-color: green;";
            palavra12[4].style = "border-color: green;";
           
            proxima()
        } else {
            palavra3[8].style = "border-color: red;";
            palavra12[0].style = "border-color: red;";
            palavra12[1].style = "border-color: red;";
            palavra12[2].style = "border-color: red;";
            palavra12[3].style = "border-color: red;";
            palavra1[2].style = "border-color: red;";
            palavra12[4].style = "border-color: red;";

            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }
    } else if (resposta_correta == 13) {
        var resposta9 = palavra8[5].value
        resposta9 += palavra13.value
       
        if (resposta9 == 'i7') {
            palavra8[5].style = "border-color: green;";
            palavra13.style = "border-color: green;";
   

            proxima()
        } else {
            palavra8[5].style = "border-color: red;";
            palavra13.style = "border-color: red;";
       
            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }
    } else if (resposta_correta == 14) {
        var resposta9 = palavra3[3].value
        resposta9 += palavra14.value
       
        if (resposta9 == 'i5') {
            palavra3[3].style = "border-color: green;";
            palavra14.style = "border-color: green;";
   

            proxima()
        } else {
            palavra3[3].style = "border-color: red;";
            palavra14.style = "border-color: red;";
       
            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }
    } else if (resposta_correta == 15) {
        var resposta15 = palavra15[0].value
        resposta15 += palavra15[1].value
        resposta15 += palavra15[2].value
        resposta15 += palavra15[3].value
        resposta15 += palavra15[4].value
        resposta15 += palavra15[5].value
        resposta15 += palavra15[6].value
        resposta15 += palavra15[7].value

        if (resposta15 == 'quadcore') {
            palavra15[0].style = "border-color: green;";
            palavra15[1].style = "border-color: green;";
            palavra15[2].style = "border-color: green;";
            palavra15[3].style = "border-color: green;";
            palavra15[4].style = "border-color: green;";
            palavra15[5].style = "border-color: green;";
            palavra15[6].style = "border-color: green;";
            palavra15[7].style = "border-color: green;";

            proxima()
        } else {
            palavra15[0].style = "border-color: red;";
            palavra15[1].style = "border-color: red;";
            palavra15[2].style = "border-color: red;";
            palavra15[3].style = "border-color: red;";
            palavra15[4].style = "border-color: red;";
            palavra15[5].style = "border-color: red;";
            palavra15[6].style = "border-color: red;";
            palavra15[7].style = "border-color: red;";

            resposta_errada.innerHTML = `<img src="erro.jpg" alt="robo" width="250px" height="250px">`
        }
    } else if (resposta_correta == 16) {
        var resposta16 = palavra8[7].value
        resposta16 += palavra16[0].value
        resposta16 += palavra16[1].value
        resposta16 += palavra16[2].value
        resposta16 += palavra16[3].value
        resposta16 += palavra16[4].value
        resposta16 += palavra16[5].value
        resposta16 += palavra15[7].value

        if (resposta16 == 'dualcore') {
            palavra8[7].style = "border-color: green;";
            palavra16[0].style = "border-color: green;"
            palavra16[1].style = "border-color: green;";
            palavra16[2].style = "border-color: green;";
            palavra16[3].style = "border-color: green;";
            palavra16[4].style = "border-color: green;";
            palavra16[5].style = "border-color: green;";
            palavra15[7].style = "border-color: green;";

            proxima()
        } else {
            palavra8[7].style = "border-color: red;";
            palavra16[0].style = "border-color: red;"
            palavra16[1].style = "border-color: red;";
            palavra16[2].style = "border-color: red;";
            palavra16[3].style = "border-color: red;";
            palavra16[4].style = "border-color: red;";
            palavra16[5].style = "border-color: red;";
            palavra15[7].style = "border-color: red;";

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
        universitarios_1.style.display = 'block'

        resposta_correta = 1
    }
}
