var RegistroLivre = RegistroLivre || {};

RegistroLivre.DataTable = function DataTable(){ 
	function cria(dados){
		var dataEmissaoOrdenada = 4;
		var dataRegistro = 5;
		var id = 6;
		
		var tabela = $('#tabelaListagem').dataTable({
			data : dados,
			stateSave: true,
			columns : [ {},
			            { data : 'nomeFantasia'	}, 
			            { data : 'endereco.logradouro' },
			            { data : 'dataEmissaoDocumento' },
	 		            { data : 'dataEmissaoOrdenada' },
			            { data : 'dataRegistro'},
			            { data : 'id'}
			          ],
	        "aoColumnDefs" : [ {
				"iDataSort" : 3,
				"aTargets" : [2]			
				
			},{
				"render" : function(data, type, row){
					return '<input type="checkbox" class="datatableSelecao">'; 
				},
				"targets" : 0 
			},{
				"aTargets" : [dataEmissaoOrdenada],
				"visible" : false,
			} ,{
				"aTargets" : [dataRegistro],
				"visible" : false,
			} ,{
				"aTargets" : [id],
				"visible" : false,
			} ],
			"order": [[ dataRegistro, "desc" ]],
			"rowCallback": function(row, data){
				$("td:gt(0)", row).on('click', function(){
					window.location.href = '/visualizacao/' + data.id;
				});
			},
			"language": {
	            "lengthMenu": "Mostrar _MENU_ resultados por página",
	            "zeroRecords": "Nenhum registro de empresa encontrado.",
	            "search": "Filtrar resultados:",
	            "info": "Mostrando página _PAGE_ de _PAGES_",
	            "infoEmpty": "Sem registros disponíveis",
	            "paginate": {
	                "first":      "Primeiro",
	                "last":       "Último",
	                "next":       "Próximo",
	                "previous":   "Anterior"
	            }
	        }
		});
		
		criaMultiselecao();
	};

	var criaMultiselecao = function criaMultiselecao(){
		$('.datatableSelecao').click(function(){			
			$(this).parents('tr').toggleClass('selected');		
			
			if($("#btn-download").length === 0){
				var $botaoDownload = $('<button id="btn-download" style="margin-left:60px" class="btn btn-success">Download</button>');
				$("#tabelaListagem_length").append($botaoDownload);
			}
			
		});
	};
	
	return {
		cria : cria
	}
}

var datatable = new RegistroLivre.DataTable();