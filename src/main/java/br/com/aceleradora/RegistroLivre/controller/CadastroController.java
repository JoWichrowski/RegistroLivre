package br.com.aceleradora.RegistroLivre.controller;

import br.com.aceleradora.RegistroLivre.model.Empresa;
import br.com.aceleradora.RegistroLivre.model.EntidadeDAO;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Resource;

@Resource
public class CadastroController {
	
	//private EmpresaDAO dao;

//	public CadastroController(EmpresaDAO dao){
//		this.dao = dao;
//	}
	
	@Get("/cadastro")
	public void cadastro() {
		
	}
	
//	public void cadastrar(Empresa empresa){
//		EmpresaDAO.adiciona(empresa);
//	}
	
}
