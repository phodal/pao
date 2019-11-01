// Generated from ../ts/Pao.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `PaoParser`.
 */
export interface PaoListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `PaoParser.modifier`.
	 * @param ctx the parse tree
	 */
	enterModifier?: (ctx: ModifierContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.modifier`.
	 * @param ctx the parse tree
	 */
	exitModifier?: (ctx: ModifierContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.nameDeclaration`.
	 * @param ctx the parse tree
	 */
	enterNameDeclaration?: (ctx: NameDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.nameDeclaration`.
	 * @param ctx the parse tree
	 */
	exitNameDeclaration?: (ctx: NameDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.typeRuleDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeRuleDeclaration?: (ctx: TypeRuleDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.typeRuleDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeRuleDeclaration?: (ctx: TypeRuleDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterList?: (ctx: FormalParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterList?: (ctx: FormalParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.fieldParameters`.
	 * @param ctx the parse tree
	 */
	enterFieldParameters?: (ctx: FieldParametersContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.fieldParameters`.
	 * @param ctx the parse tree
	 */
	exitFieldParameters?: (ctx: FieldParametersContext) => void;

	/**
	 * Enter a parse tree produced by `PaoParser.fieldList`.
	 * @param ctx the parse tree
	 */
	enterFieldList?: (ctx: FieldListContext) => void;
	/**
	 * Exit a parse tree produced by `PaoParser.fieldList`.
	 * @param ctx the parse tree
	 */
	exitFieldList?: (ctx: FieldListContext) => void;
}

