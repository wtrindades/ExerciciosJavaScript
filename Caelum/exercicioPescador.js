			var imprime= function(texto){
				document.write(texto);
				document.write("<br>");
			};
			var calculaValorPagar= function(kilos,limite,multa){
				var excesso= (kilos-limite)*multa;
				return excesso;
			};
			var verificaSePassou= function(kilos,limite,multa){
				if(kilos>limite){
					var excesso= calculaValorPagar(kilos,limite,multa);
					var kilosExcedentes= kilos-limite;
					imprime("Você ultrapassou: " + kilosExcedentes + " kilos.Por isso terá que pagar: R$ " + excesso.toFixed(2));
				}else{
					imprime("Você não ultrapassou o limitede pesca, portanto não precisa pagar nada.");
				}
			};
			var verificaQuantoPagar= function(event){
				var kilosPescados= parseFloat(document.getElementById("kilos").value);
				var limite= parseFloat(document.getElementById("limite").value);
				var multa= parseFloat(document.getElementById("multa").value);
				verificaSePassou(kilosPescados,limite,multa);
				event.preventDefault();
			};
			var botao= document.getElementById("ok");
			botao.onclick= verificaQuantoPagar;
