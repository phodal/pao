// Generated from ../ts/Pao.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ModifierContext } from "./PaoParser";
import { CompilationUnitContext } from "./PaoParser";
import { NameDeclarationContext } from "./PaoParser";
import { TypeDeclarationContext } from "./PaoParser";
import { TypeRuleDeclarationContext } from "./PaoParser";
import { QualifiedNameContext } from "./PaoParser";
import { FormalParameterListContext } from "./PaoParser";
import { FieldParametersContext } from "./PaoParser";
import { FieldListContext } from "./PaoParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PaoParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface PaoVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `PaoParser.modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifier?: (ctx: ModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `PaoParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `PaoParser.nameDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameDeclaration?: (ctx: NameDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PaoParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PaoParser.typeRuleDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeRuleDeclaration?: (ctx: TypeRuleDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PaoParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `PaoParser.formalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `PaoParser.fieldParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldParameters?: (ctx: FieldParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `PaoParser.fieldList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldList?: (ctx: FieldListContext) => Result;
}

